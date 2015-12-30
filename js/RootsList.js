import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/lists/list-divider';
import ListItem from 'material-ui/lib/lists/list-item';
import MaterialColors from 'material-ui/lib/styles/colors';
import Paper from 'material-ui/lib/paper';
import React from 'react';
import Tab from 'material-ui/lib/tabs/tab';
import Tabs from 'material-ui/lib/tabs/tabs';
import TextField from 'material-ui/lib/text-field';
import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance';
import startsWith from 'lodash/string/startsWith';

import Sanscript from '../scripts/sanscript';

const SelectableList = SelectableContainerEnhance(List);

export default class RootsList extends React.Component {

    constructor(props) {

        super(props);
    
        this.state = {
            selectedIndex: -1,
            selectedCompletedRootIndex: -1,
            filteredRoots: props.filteredRoots,
            completedRoots: props.completedRoots
        };
    }

    translit(text) {

        return Sanscript.t(text, 'itrans', 'devanagari');
    }

    handleChange(type) {

        const textField = type === 'possibleRoots' ? this.refs.searchPossibleRoots : this.refs.searchCompletedRoots;

        let roman, text;

        if (textField.getValue().length === 1) {
            roman = textField.getValue();
        }

        text = roman ? roman : Sanscript.t(textField.getValue(), 'devanagari', 'itrans');

        textField.setValue(this.translit(text));
        
        let matchingRoots;

        if (textField.getValue() !== '') {
            matchingRoots = this.props.filteredRoots.filter(entry => startsWith(entry.root, text));
        }
        else {
            matchingRoots = this.props.filteredRoots;
        }

        this.setState({
            filteredRoots: matchingRoots
        });
    }

    componentWillUpdate(nextProps, nextState) {

        this.state.filteredRoots = nextProps.filteredRoots;
        this.state.completedRoots = nextProps.completedRoots;
    }

    getRootsListItems(rootsList, key) {

        let roots = rootsList.map((sound, i) => {

            let listDivider = i > 0 ? <ListDivider /> : undefined;

            return (
                React.Children.toArray([
                    (i > 0 ? <ListDivider /> : undefined),
                    <ListItem
                        primaryText={ this.translit(sound.root) }
                        style={ { fontFamily: 'Siddhanta' } }
                        value={ i + 1 }
                        key={ sound._id }
                    />
                ])
            );
        });

        return roots;
    }

    handleRootsChange(e, index) {

        this.setState({
            selectedIndex: index,
            selectedCompletedRootIndex: -1
        });

        this.props.handleClick(this.state.filteredRoots[index - 1]);
    }

    handleCompletedRootsChange(e, index) {

        this.setState({
            selectedCompletedRootIndex: index,
            selectedIndex: -1
        });

        this.props.handleClick(this.state.completedRoots[index - 1]);
    }

    render() {

        let rootsList = this.getRootsListItems(this.state.filteredRoots);

        let completedRootsList = this.getRootsListItems(this.state.completedRoots);

        return (
            <div className="col-xs-6" style={{ paddingLeft: 25, paddingBottom: 60 }}>
                <Paper className="list-style">
                    <Tabs inkBarStyle={{ backgroundColor: MaterialColors.grey50}} style={{padding: 16}}>
                        <Tab label={ `Roots List (${rootsList.length})` }>
                            <div style={{ paddingTop: 10 }}>
                                <TextField hintText="Search" onChange={ this.handleChange.bind(this, 'possibleRoots') } ref="searchPossibleRoots" fullWidth={ true } />
                                <SelectableList
                                    valueLink={{
                                        requestChange: this.handleRootsChange.bind(this),
                                        value: this.state.selectedIndex
                                    }}
                                >
                                    { rootsList }
                                </SelectableList>
                            </div>
                        </Tab>
                        <Tab label={ `Completed Roots (${completedRootsList.length})` }>
                            <div style={{ paddingTop: 10 }}>
                                <TextField hintText="Search" onChange={ this.handleChange.bind(this, 'completedRoots') } ref="searchCompletedRoots" fullWidth={ true } />
                                <SelectableList
                                    valueLink={{
                                        requestChange: this.handleCompletedRootsChange.bind(this),
                                        value: this.state.selectedCompletedRootIndex
                                    }}
                                >
                                    { completedRootsList }
                                </SelectableList>
                            </div>
                        </Tab>
                    </Tabs>
                </Paper>
            </div>
        );
    }
}
