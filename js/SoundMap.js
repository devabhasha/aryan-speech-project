import Classnames from 'classnames';
import React from 'react';

import sounds from '../data/sounds';
import Sound from './Sound';
import '../scripts/sanscript';

export default class SoundMap extends React.Component {
    // return Sounds for a given sound type, beginning with a filtered list of possible roots
    getSoundsForType(type, list) {

        return sounds.data
            // get sounds of the passed-in type
            .filter(sound => sound.type === type)
            // compose Sound components with the filtered sounds
            .map(soundProps => {

            // console.log(soundProps)

            let soundInList = list.find(entry => entry.sound === soundProps.sound);

            // console.log(soundInList);

            if (!soundInList) {
                soundProps.disabled = true;
                soundProps.count = 0
            }
            else {
                soundProps.disabled = false;
                soundProps.count = soundInList.n;
            }

            return (
                <Sound properties={ soundProps } key={ soundProps.sound } handleClick={ this.handleClick.bind(this, soundProps) } />
            );
        });
    }

    getBestSoundMatch(substring) {

        let best = sounds.data
            .filter(sound => substring.match('^' + sound.sound))
            .sort((s1, s2) => s1.sound.length > s2.sound.length ? 0 : 1);

        if (best.length) {
            return best[0].sound;
        }

        return false;
    }

    handleClick(soundProps) {

        this.props.handleClick(soundProps);
    }

    getSoundsToMap() {

        // get the filtered list of sounds to display

        let sounds = []; // list of sound objects of the form {sound: '', n: ''}, where n is the count

        this.props.data
            // get the first letter of the next set of of possible roots beginning with current sequence
            .map(entry => this.getBestSoundMatch(entry.root.substring(this.props.sequence.join('').length)))
            .forEach(sound => {

                // count the number of occurrences of each starting sound

                let soundObj = sounds.find(entry => entry.sound === sound);

                if (soundObj) {
                    soundObj['n']++; // increment count if sound is already present in sounds
                }
                else {
                    sounds.push({sound: sound, n: 1}); // else create a new sound object and push to sounds
                }
            });

        // create and return an object of sounds by type
        return {
            gutturals: this.getSoundsForType(0, sounds),
            palatals: this.getSoundsForType(1, sounds),
            cerebrals: this.getSoundsForType(2, sounds),
            dentals: this.getSoundsForType(3, sounds),
            labials: this.getSoundsForType(4, sounds)
        };
    }

    render() {

        let sounds = this.getSoundsToMap();

        return (
            <div className="container">
                {
                    Object.keys(sounds).map(soundType => {

                        return (
                            <div className="row" key={ soundType.type }>
                                <ul className={ Classnames(soundType, 'list-unstyled') }>{ sounds[soundType] }</ul>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
