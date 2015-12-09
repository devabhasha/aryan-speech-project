import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance';
import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ListDivider from 'material-ui/lib/lists/list-divider';
import ReactTap from 'react-tap-event-plugin';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import Avatar from 'material-ui/lib/avatar';

var SelectableList = SelectableContainerEnhance(List);

export default class Test extends React.Component {

    constructor(props) {

        super(props);
        this.state = { selectedIndex: 1 }
    }

    _handleTabsChange() {

        console.log('change');
    }

    handlClick() {

        console.log('click');
    }

    handleUpdateSelectedIndex(e, i) {

        this.setState({
            selectedIndex: i
        })
    }

    render() {

        ReactTap();

        return (
            <SelectableList
              valueLink={{value: this.state.selectedIndex, requestChange: this.handleUpdateSelectedIndex.bind(this)}}
              subheader="Contacts">
              <div>
                  <ListItem
                    value={1}
                    primaryText="Brendan Lim"
                    leftAvatar={<Avatar />}/>
                  <ListDivider inset={ true } />
                </div>
              <ListItem
                value={2}
                primaryText="Grace Ng"
                leftAvatar={<Avatar />} />
              <ListDivider inset={ true } />
              <ListItem
                value={3}
                primaryText="Kerem Suer"
                leftAvatar={<Avatar />} />
            </SelectableList>
        );
    }
};
