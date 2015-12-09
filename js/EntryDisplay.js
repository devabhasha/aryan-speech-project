import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import React from 'react';

import '../scripts/sanscript';

export default class EntryDisplay extends React.Component {

    translit(text) {

        if (!text) {
            return;
        }

        return Sanscript.t(text, 'itrans', 'devanagari');
    }

    render() {

        return (
            <div>
                <h3 style={ { fontFamily: 'Siddhanta' } }>{ this.translit(this.props.entry.word) }</h3>
                <h4>Meanings</h4>
                <ol>{ this.props.entry.meanings ? this.props.entry.meanings.map(meaning => <li>{ meaning }</li>) : undefined }</ol>
            </div>
        );
    }
}
