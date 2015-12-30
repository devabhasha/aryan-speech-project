import Paper from 'material-ui/lib/paper';
import React from 'react';
import request from 'superagent';

import EntryDisplay from './EntryDisplay';
import PrefixSelector from './PrefixSelector';
import Sanscript from '../scripts/sanscript';
import prefixes from '../data/prefixes';

const endpoint = 'http://localhost:4000/api/entrySearch?q=';

export default class About extends React.Component {

    constructor(props) {

        super(props);
        this.state = { menuItems: [], roots: [], selectedEntry: [], selectedPrefix: '' };
    }

    componentDidMount() {

        request.get(endpoint + this.props.params.root)
            .end((err, res) => {

            if (err) {
                console.error(err);
                return false;
            }

            let roots = res.body.data;
            let rootPrefixes = [];
            let menuItems = [];

            roots.forEach(root =>

                root.sandhi.filter(form => form.type === 'prefix')
                    .forEach(pre => rootPrefixes.push({form: pre.form, id: root._id}))
            );

            if (rootPrefixes.length) {
                menuItems = prefixes.map(prefix => {

                    let isRootPrefix = rootPrefixes.find(rootPrefix => rootPrefix.form === prefix.form);

                    return {
                        payload: isRootPrefix ? isRootPrefix.id + '-' + prefix.form : '0',
                        text: this.translit(prefix.form),
                        disabled: !isRootPrefix
                    };
                });
            }

            this.setState({
                menuItems: menuItems,
                roots: roots
            });
        });
    }

    translit(text) {

        return Sanscript.t(text, 'itrans', 'devanagari');
    }

    handleChange(e, i, item) {

        let [id, value] = item.payload.split('-');

        this.setState({
            selectedEntry: this.state.roots.find(root => root._id === id),
            selectedPrefix: prefixes.find(prefix => prefix.form === value)
        });
    }

    render() {

        return (
            
            <Paper className="row">
                <div className="col-xs-4">
                    <div style={{padding: 10}}>
                        <PrefixSelector menuItems={ this.state.menuItems } onChange={ this.handleChange.bind(this) } />
                        <h4>Senses</h4>
                        <ol>{ this.state.selectedPrefix ? this.state.selectedPrefix.senses.map(sense => <li>{sense}</li>) : '' }</ol>
                    </div>
                </div>
                    <div className="col-xs-4 text-center">
                        <div style={{marginTop: '8%'}}><span style={{ fontSize: 48, fontFamily: 'Siddhanta'}}> + { this.translit(this.props.params.root) } = </span></div>
                    </div>
                <div className="col-xs-4">
                    <EntryDisplay entry={ this.state.selectedEntry } />
                </div>
            </Paper>
        );
    }
}
