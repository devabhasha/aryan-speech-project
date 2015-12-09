import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import React from 'react';
import { Link } from 'react-router';

import '../scripts/sanscript';

export default class Root extends React.Component {

    translit(text) {

        return Sanscript.t(text, 'itrans', 'devanagari');
    }

    render() {

        if (!this.props.selectedRoot.root) {
            return false;
        }

        const numSenses = this.props.selectedRoot.senses.length;

        let senses = this.props.selectedRoot.senses.map(sense => <li>{ sense }</li>)

        let derivativesList;

        if (this.props.selectedRoot.derivatives) {
            let derivatives = this.props.selectedRoot.derivatives.map(derivative => {

                let link = '/root/' + derivative.form;
                let meanings = '';
                if (derivative.meanings) {
                    meanings = derivative.meanings.map((meaning, index) => (index > 0 ? ', ' : '') + meaning);
                }

                return (
                    <li><Link to={link}>{ this.translit(derivative.form) }</Link>{meanings ? ': ' + meanings : ''}</li>
                );
            });

            derivativesList = (
                <div>
                    <h4>{ derivatives.length > 1 ? 'Derivatives' : 'Derivative' }</h4>
                    <ol>{ derivatives }</ol>
                </div>
            );
        }
        

        return (
            <div className="col-xs-6" style={{paddingRight: 25, paddingBottom: 60}}>
                <Card>
                    <CardTitle
                        title={ this.translit(this.props.selectedRoot.root) }
                        style={ { fontFamily: 'Siddhanta' } }
                    />
                    <CardText>
                        <h4>{ numSenses > 1 ? 'Senses' : 'Sense' }</h4>
                        <ol>{ senses }</ol>
                        { derivativesList }
                    </CardText>
                </Card>
            </div>
        );
    }
};
