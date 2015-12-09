// require('../scripts/sanscript');

var roots = [
    {
        sound: 'k',
        type: 0,
        contact: 1,
        strain: 1
    },
    {
        sound: 'kh',
        type: 0,
        contact: 1,
        strain: 1,
        aspirate: 1
    },
    {
        sound: 'g',
        type: 0,
        contact: 1
    },
    {
        sound: 'gh',
        type: 0,
        contact: 1,
        aspirate: 1
    },
    {
        sound: 'N^',
        type: 0,
        contact: 2,
        nasal: 1
    },
    {
        type: 0
    },
    {
        sound: 'aH',
        type: 0,
        contact: 3,
        strain: 1,
        aspirate: 1
    },
    {
        sound: 'h',
        type: 0,
        contact: 3,
        aspirate: 1
    },
    {
        sound: 'a',
        type: 0
    },
    {
        sound: 'aa',
        type: 0,
        quantity: 1
    },
    {
        sound: 'e',
        type: 0,
        subtype: 1
    },
    {
        sound: 'ai',
        type: 0,
        subtype: 1,
        quantity: 1
    },
    {
        type: 0
    },
    {
        sound: 'c',
        type: 1,
        strain: 1
    },
    {
        sound: 'ch',
        type: 1
    },
    {
        sound: 't',
        type: 2,
        strain: 1
    }
];

var positions = [
    {
        s: 'k',
        p: {
            x: 0,
            y: 0
        }
    },
    {
        s: 'kh',
        p: {
            x: 1,
            y: 0,
        }
    }
];

var SoundType = function (type) {

    this.type = type;
}

SoundType.prototype.sounds = function () {

    var self = this;

    return roots.filter(function (sound) {

        return sound.type === self.type;
    }).map(function (soundProps) {

        return (
            <Sound properties={ soundProps } key={ soundProps.sound } />
        );
    });
}

var Sound = React.createClass({
    sound: function () {

        return { __html: this.props.properties.sound != undefined ? Sanscript.t(this.props.properties.sound, 'itrans', 'devanagari') : '&nbsp;' };
    },
    render: function () {

        return (
            <li className={ classNames('col-xs-1 custom-col sound', { disabled: this.props.properties.disabled } ) } onMouseEnter={ this.handleClick }>
                <span className='name' dangerouslySetInnerHTML={ this.sound() } />
            </li>
        );
    },
    handleClick: function (e) {

        if (!this.props.properties.sound) {
            e.stopPropagation();
            return false;
        }

        console.log(this.props.properties);
    }
});

var SoundsMap = React.createClass({
    getInitialState: function () {

        return {
            sounds: {
                gutturals: new SoundType(0).sounds(),
                dentals: new SoundType(1).sounds(),
                labials: new SoundType(2).sounds()
            }
        };
    },
    render: function () {

        var self = this;
        return (
            <div className="container">
                {
                    Object.keys(this.state.sounds).map(function (soundType) {

                        return (
                            <div className="row">
                                <ul className={ classNames(soundType, 'list-unstyled') }>{ self.state.sounds[soundType] }</ul>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
});

React.render(<SoundsMap />, document.getElementById('content'));
