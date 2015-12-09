import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import Classnames from 'classnames';
import MaterialColors from 'material-ui/lib/styles/colors';
import Paper from 'material-ui/lib/paper';
import Popover from 'material-ui/lib/popover/popover';
import React from 'react';

import soundMappings from '../data/sound-mappings';
import '../scripts/sanscript';

export default class Sound extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            anchorOrigin: { vertical: 'middle', horizontal: 'center' },
            targetOrigin: { vertical: 'middle', horizontal: 'left' }
        }
    }

    // transliterate itrans to devanagari

    transliterate(text) {
        
        return Sanscript.t(text, 'itrans', 'devanagari');
    }

    // get html-safe representation of the sound

    sound() {

        // return { __html: this.props.properties.sound != undefined ? `<span class='name'>${this.getDisplaySound()}</span><span class='small'>(${this.props.properties.count})</span>` : `<span class='name'>&nbsp;</span>` };
        return { __html: this.props.properties.sound != undefined ? `<span class='name'>${this.getDisplaySound()}</span>` + (this.props.properties.count ? ` <sup style='font-size: 80%'>(${this.props.properties.count})</sup>` : '') : `<span class='name'>&nbsp;</span>` };
    }

    // display the alternative sound name if it exists

    getDisplaySound() {

        return (this.props.properties.display ? this.transliterate(this.props.properties.display) : this.transliterate(this.props.properties.sound));
    }

    handleClick(key) {

        this.hoverOut(key);
        // debugger;
        this.props.handleClick();
    }

    hoverIn(key, e) {

        if (!this.props.properties.disabled) {
            this.setState({
              z: 1,
              bgColor: MaterialColors.yellow100,
              activePopover: key,
              anchorEl: e.currentTarget
            });
        }
    }

    hoverOut(key) {

        if (!this.props.properties.disabled) {
            let state = {
                z: 2,
                bgColor: MaterialColors.yellow50
            };

            if (this.state.activePopover === key) {
                state.activePopover = 'none';
            }

            this.setState(state);
        }
    }

    handleMouseDown() {

        if (this.props.properties.sound) {
            this.setState({ z: 0, bgColor: MaterialColors.yellow200 });
        }
    }

    handleMouseUp() {

        if (this.props.properties.sound) {
            this.setState({ z: 1, bgColor: MaterialColors.yellow100 });
        }
    }

    closePopover(key) {

        if (this.state.activePopover === key) {
            this.setState({ activePopover: 'none' });
        }
    }

    setAnchor(positionElement, position, e) {

      let { anchorOrigin } = this.state;
      // var anchorOrigin = this.state.anchorOrigin
      anchorOrigin[positionElement] = position;

      this.setState({
          anchorOrigin: anchorOrigin,
      });
    }

    render() {

        // const self = this;

        // let a = <Paper
        //             zDepth={ this.props.properties.disabled == true ? 0 : 2 }
        //             className={ Classnames(this.props.properties.disabled == true ? 'disabled' : '', this.props.properties.sound, 'col-xs-1 sound') }
        //             onClick={ this.props.properties.disabled == true ? undefined : this.handleClick.bind(this, 'pop') }
        //             onMouseEnter={ this.hoverIn.bind(this, 'pop') }
        //             onMouseLeave={ this.hoverOut.bind(this, 'pop') }
        //             onMouseDown={ this.handleMouseDown.bind(this) }
        //             onMouseUp={ this.handleMouseUp.bind(this) }
        //             // ref={ this.props.properties.sound }
        //             style={ { backgroundColor: (this.props.properties.disabled == true ? MaterialColors.blueGrey50 : MaterialColors.yellow50) } }>
        //             <div dangerouslySetInnerHTML={ this.sound() } />
        //         </Paper>
        // let b = <Card
        //             className={ Classnames(this.props.properties.disabled == true ? 'disabled' : '', this.props.properties.sound, 'col-xs-1 sound') }
        //         ><CardTitle>{this.props.properties.sound}</CardTitle><CardText>{this.props.properties.count}</CardText></Card>
        
        // delete this.props.properties.disabled;

        let soundProperties = Object.keys(soundMappings).map(function (prop) {

            if (prop === 'disabled' || prop === 'subtype' && this.props.properties[prop] == undefined) {
                return;
            }

            // if (!prop.sound) {
            //     return;
            // }

            return(
                <p className='property'>
                    <span className='type'>{ prop }</span>: <strong>{ soundMappings[prop][this.props.properties[prop]] }</strong>
                </p>
            );
        }, this);

        // console.log(this.props.properties)

        if (this.props.properties.sense) {
            soundProperties.push(
                <p className='property'>
                    <span className='type'>Sense</span>: <strong>{ this.props.properties.sense }</strong>
                </p>
            );
        }


        return (
            <div>
                <Paper
                    zDepth={ this.props.properties.disabled == true ? 0 : 2 }
                    className={ Classnames(this.props.properties.disabled == true ? 'disabled' : '', this.props.properties.sound, 'col-xs-1 sound') }
                    onClick={ this.props.properties.disabled == true ? undefined : this.handleClick.bind(this, 'pop') }
                    onMouseEnter={ this.hoverIn.bind(this, 'pop') }
                    onMouseLeave={ this.hoverOut.bind(this, 'pop') }
                    onMouseDown={ this.handleMouseDown.bind(this) }
                    onMouseUp={ this.handleMouseUp.bind(this) }
                    // ref={ this.props.properties.sound }
                    style={ { backgroundColor: (this.props.properties.disabled == true ? MaterialColors.blueGrey50 : MaterialColors.yellow50) } }>
                    <div dangerouslySetInnerHTML={ this.sound() } />
                </Paper>
                <Popover open={ this.state.activePopover === 'pop' }
                    zDepth={ 3 }
                    anchorEl={ this.state.anchorEl }
                    // anchorOrigin={ this.state.anchorOrigin }
                    // targetOrigin={ this.state.targetOrigin }
                    canAutoPosition={ true }
                    autoCloseWhenOffScreen = { false }
                    style={ { backgroundColor: MaterialColors.amber100 } }
                    // animated={ false }
                    onRequestClose={ this.closePopover.bind(this, 'pop') }>
                    <div className='popover'>
                        <p className='title'>
                            { this.props.properties.sound != undefined ? this.getDisplaySound() : '' }
                        </p>
                        { soundProperties }
                    </div>
                </Popover>
            </div>
        );
    }
}

Sound.propTypes = {
    properties: React.PropTypes.object.isRequired
}
