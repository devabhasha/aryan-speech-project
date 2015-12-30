import FlatButton from 'material-ui/lib/flat-button';
// import FontIcon from 'material-ui/lib/font-icon';
import React from 'react';
import TextField from 'material-ui/lib/text-field';

import Sanscript from '../scripts/sanscript';

export default class SequenceTracker extends React.Component {

    render() {

        return (
            <div className="text-center" style={ { paddingTop: 40, paddingBottom: 100 } }>
                <FlatButton style={{marginRight: 40}} onClick={ this.props.handleChange }>« Back</FlatButton>
                <TextField
                    value={ Sanscript.t(this.props.sequence.join(''), 'itrans', 'devanagari') }
                    onChange={ this.props.handleChange }
                    inputStyle={{ fontFamily: 'Siddhanta', fontSize: 24 }}
                    underlineStyle={{ bottom: -5 }}
                />
            </div>
        );
    }
}
