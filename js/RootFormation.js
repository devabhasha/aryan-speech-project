import Paper from 'material-ui/lib/paper';
import React from 'react';
import includes from 'lodash/collection/includes';
import request from 'superagent';
import startsWith from 'lodash/string/startsWith';

import Roots from './Roots';
import SequenceTracker from './SequenceTracker';
import SoundMap from './SoundMap';

const aspirateBases = ['k', 'g', 'c', 'j', 'T', 'D', 't', 'd', 'p', 'b', 's'];
const aspirateSuffix = 'h';
const diphthongBase = 'a';
const diphthongSuffixes = ['i', 'u'];
const endpoint = 'http://localhost:4000/api/roots';

export default class RootFormation extends React.Component {

    constructor(props) {

        super(props);
        this.state = { sequence: [], lastSequenceLength: 0, rootsData: [], completedRoots: [] };
    }

    componentDidMount() {

        request.get(endpoint)
            .end((err, res) => {

            if (err) {
                console.error(err);
                return false;
            }

            this.setState({
                rootsData: res.body.data
            });
        });
    }

    getFilteredRoots() {

        // get all roots starting with updated sequence

        let filteredRoots = [];

        if (this.state.sequence.length) {
            if (this.state.lastSequenceLength > this.state.sequence.length) {
                this.state.completedRoots = this.state.completedRoots.filter(completedRoot => {

                    this.state.sequence.join('').match('^' + completedRoot);
                });
            }

            filteredRoots = this.state.rootsData.filter(root => {

                let substring = root.root.substring(this.state.sequence.join('').length);

                if (this.state.sequence.length) {
                    let lastSequence = this.state.sequence[this.state.sequence.length - 1];

                    if (includes(aspirateBases, lastSequence) && substring[0] === aspirateSuffix) {
                        return;
                    }
                    else if (includes(diphthongBase, lastSequence) && includes(diphthongSuffixes, substring[0])) {
                        return;
                    }
                }

                if (root.root === this.state.sequence.join('')) {
                    let existing = this.state.completedRoots.find(completed => completed._id === root._id);

                    if (!existing) {
                        this.state.completedRoots.push(root);
                    }

                    return false;
                }

                return startsWith(root.root, this.state.sequence.join(''));
            });
        }
        else {
            filteredRoots = this.state.rootsData;
        }

        return filteredRoots;
    }

    handleClick(sound) {

        // update sequence with clicked sound
        let { sequence } = this.state;

        sequence.push(sound.sound);

        this.setState({
            sequence: sequence
        });
    }

    handleChange() {

        let { sequence } = this.state;

        sequence.pop();

        this.setState({
            sequence: sequence
        });
    }

    render() {

        let filteredRoots = this.getFilteredRoots();

        this.state.lastSequenceLength = this.state.sequence.length;

        return (
            <Paper className="row" style={ { paddingTop: 50 } }>
                <SoundMap data={ filteredRoots } sequence={ this.state.sequence } handleClick={ this.handleClick.bind(this) } />
                <SequenceTracker sequence={ this.state.sequence } handleChange={ this.handleChange.bind(this) } />
                <Roots filteredRoots={ filteredRoots } completedRoots={ this.state.completedRoots } />
            </Paper>
        );
    }
}
