import React from 'react';

import RootsList from './RootsList';
import Root from './Root';

export default class Roots extends React.Component {

    constructor(props) {

        super(props);
        this.state = { selectedRoot: '' };
    }

    handleClick(sound) {

        this.setState({
            selectedRoot: sound
        });
    }

    render() {

        return (
            <div className="row">
                <RootsList filteredRoots={ this.props.filteredRoots } completedRoots={ this.props.completedRoots } handleClick={ this.handleClick.bind(this) } />
                <Root selectedRoot={ this.state.selectedRoot } />
            </div>
        );
    }
}
