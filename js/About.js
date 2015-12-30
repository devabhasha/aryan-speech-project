import React from 'react';
const react = require('react');

export default class About extends React.Component {

    render() {

        console.log(react.toString());

        return (
            <div>
                <h1>The Aryan Speech Project</h1>
                <p className="lead">Click on sounds to explore how roots and words are formed.</p>
                <p className="lead"><a href="http://github.com/devabhasha/aryan-speech-project">github.com/devabhasha/aryan-speech-project</a></p>
            </div>
        );
    }
}
