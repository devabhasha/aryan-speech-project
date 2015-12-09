import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {

    render() {

        const About = (
            <FlatButton
                containerElement={<Link to="/about" />}
                linkButton={true}
                label="About"
            />
        )

        return (
            <div>
                <AppBar
                    title={ "The Aryan Speech Project" }
                    iconElementRight={ About }
                />
                <div className="container custom">
                    { this.props.children }
                </div>
            </div>
        );
    }
}
