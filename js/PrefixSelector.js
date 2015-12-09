import React from 'react';
import SelectField from 'material-ui/lib/select-field';

export default class PrefixSelector extends React.Component {

    render() {

        return (
            <SelectField
                menuItems={ this.props.menuItems }
                onChange={ this.props.onChange }
                style={ { fontFamily: 'Siddhanta' } }
                labelStyle={ { fontSize: 20 } }
                menuItemStyle={ { fontFamily: 'Siddhanta' } }
            />
        );
    }
}
