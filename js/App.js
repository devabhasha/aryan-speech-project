import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import Paper from 'material-ui/lib/paper';
import React from 'react';
import includes from 'lodash/collection/includes';
import request from 'superagent';
import startsWith from 'lodash/string/startsWith';
import { Router, Route, Link } from 'react-router'

import About from './About';
import Roots from './Roots';
import SequenceTracker from './SequenceTracker';
import SoundMap from './SoundMap';

const aspirateBases = ['k', 'g', 'c', 'j', 'T', 'D', 't', 'd', 'p', 'b', 's'];
const aspirateSuffix = 'h';
const diphthongBase = 'a';
const diphthongSuffixes = ['i', 'u'];
const endpoint = 'http://localhost:4000/api/roots';

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
