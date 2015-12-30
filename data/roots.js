const roots = [
    {
        'root': 'ak',
        'senses': ['to move tortuously']
    },
    {
        'root': 'akSh',
        'senses': ['to pervade', 'to reach', 'to accumulate']
    },
    {
        'root': 'ag',
        'senses': ['to wind', 'to go']
    },
    {
        'root': 'a~Nk',
        'senses': ['to mark']
    },
    {
        'root': 'a~Ng',
        'senses': ['to go']
    },
    {
        'root': 'a~Ngh',
        'senses': ['to go', 'to hasten', 'to begin', 'to blame', 'to gamble']
    },
    {
        'root': 'ach',
        'senses': ['to go', 'to request']
    },
    {
        'root': 'aj',
        'senses': ['to go', 'to drive', 'to throw']
    },
    {
        'root': 'ach',
        'senses': ['to speak indistinctly', 'to go', 'to request', 'to bend']
    },
    {
        'root': 'ach',
        'senses': ['to worship', 'to honour or to revere']
    },
    {
        'root': 'aT',
        'senses': ['to transgress', 'to kill']
    },
    {
        'root': 'aTh',
        'senses': ['to go']
    },
    {
        'root': 'aNTh',
        'senses': ['to go']
    },
    {
        'root': 'aD',
        'senses': ['to exert', 'to try']
    },
    {
        'root': 'ard',
        'senses': ['to go', 'to beg or request'],
        'derivatives': [
            {
                'form': 'ardita',
                'meanings': ['solicited']
            }
        ]
    },
    {
        'root': 'abhyarNa',
        'senses': ['near', 'proximate', 'close', 'drawing near (of time)']
    },
    {
        'root': 'av',
        'senses': ['to protect', 'to move', 'to be lovely', 'to please', 'to satisfy', 'to know', 'to enter', 'to hear', 'to own', 'to beg', 'to act', 'to desire', 'to shine', 'to obtain', 'to embrace', 'to kill', 'to take', 'to be', 'to grow']
    },
    {
        'root': 'edh',
        'senses': ['to grow', 'to increase', 'to prosper', 'to extend', 'to swell', 'to rise']
    },
    {
        'root': 'okh',
        'senses': ['to be dry', 'to be able or sufficient', 'to adorn', 'to refuse', 'to prevent']
    },
    {
        'root': 'oN',
        'senses': ['to remove', 'to drag along']
    },
    {
        'root': 'kak',
        'senses': ['to wish', 'to be proud', 'to be unsteady', 'to be thirsty']
    },
    {
        'root': 'kakh',
        'senses': ['to deride or laugh at']
    },
    {
        'root': 'kaT',
        'senses': ['to go or approach']
    },
    {
        'root': 'kaTh',
        'senses': ['to drag on the days of life, to live in distress']
    },
    {
        'root': 'kaD',
        'senses': ['to be confused', 'to be proud']
    },
    {
        'root': 'kaDD',
        'senses': ['to be harsh or rough']
    },
    {
        'root': 'katth',
        'senses': ['to praise', 'to boast', 'to flatter']
    },
    {
        'root': 'kan',
        'senses': ['to shine', 'to love', 'to wish', 'to go', 'Vedic (to be contented)']
    },
    {
        'root': 'kA~NkSh',
        'senses': ['to desire or long for']
    },
    {
        'root': 'kAs',
        'senses': ['to cough']
    },
    {
        'root': 'kiT',
        'senses': ['to fear', 'to frighten', 'to go or approach']
    }, {
        'root': 'kit',
        'senses': ['to live', 'to heal or cure', 'to doubt'],
        'derivatives': [
            {
                'form': 'cikitsita'
            }
        ]
    },
    {
        'root': 'kuND',
        'senses': ['to maim or mutilate']
    },
    {
        'root': 'kul',
        'senses': ['to collect', 'to be related or to behave as a kinsman', 'to proceed uninterruptedly', 'to reckon']
    },
    {
        'root': 'khaND',
        'senses': ['to break, to cut, to tear to pieces']
    },
    {
        'root': 'khaSh',
        'senses': ['to injure, hurt or kill']
    },
    {
        'root': 'gesh',
        'senses': ['to search', 'to investigate']
    },
    {
        'root': 'chaND',
        'senses': ['to be angry']
    },
    {
        'root': 'chuDD',
        'senses': ['to sport, to hint one\'s meaning']
    },
    {
        'root': 'chulump',
        'senses': ['to swing, to rock', 'to agitate']
    },
    {
        'root': 'chRRip',
        'senses': ['to excite', 'to light']
    },
    {
        'root': 'jRRi',
        'senses': ['to grow old, to waste away', 'to decay'],
        'derivatives': [
            {
                'form': 'jIrNa'
            }
        ]
    },
    {
        'root': 'jeh',
        'senses': ['to try, to go']
    },
    {
        'root': 'jvar',
        'senses': ['to be hot with fever or passion', 'to be ill'],
        'derivatives': [
            {
                'form': 'jUrNa'
            }
        ]
    },
    {
        'root': 'jharjh',
        'senses': ['to speak', 'to hurt, injure or kill', 'to menace']
    },
    {
        'root': 'taMs',
        'senses': ['to decorate', 'to shake, to pour out, to request']
    },
    {
        'root': 'tuDD',
        'senses': ['to disregard, to condemn']
    },
    {
        'root': 'thurv',
        'senses': ['to injure, hurt or kill']
    },
    {
        'root': 'tup',
        'senses': ['to injure, hurt or kill']
    },
    {
        'root': 'Ta~Nk',
        'senses': ['to bind']
    },
    {
        'root': 'Tval',
        'senses': ['to be confused']
    },
    {
        'root': 'DI',
        'senses': ['to fly', 'to pass through the air']
    },
    {
        'root': 'dadh',
        'senses': ['to hold: to possess']
    },
    {
        'root': 'daMsh',
        'senses': ['to bite', 'to sting'],
        'derivatives': [
            {
                'form': 'daShTa'
            }
        ]
    },
    {
        'root': 'dhrAMkSh',
        'senses': ['to desire', 'to caw', 'to crow']
    },
    {
        'root': 'dhRRiSh',
        'senses': ['to come together, to hurt or injure, to offend']
    },
    {
        'root': 'niSh',
        'senses': ['to sprinkle, to moisten']
    },
    {
        'root': 'pIv',
        'senses': ['to be fat or thick']
    },
    {
        'root': 'proth',
        'senses': ['to be equal to, to be a match for, to be complete']
    },
    {
        'root': 'bhikSh',
        'senses': ['to ask', 'to beg for without obtaining, to be weary or distressed, to obtain']
    },
    {
        'root': 'bhRRij',
        'senses': ['to parch, to fry']
    },
    {
        'root': 'maNTh',
        'senses': ['to remember with regret', 'to grieve for']
    },
    {
        'root': 'manth',
        'senses': ['to kill', 'to injure', 'to be afflicted', 'to suffer pain']
    },
    {
        'root': 'mUSh',
        'senses': ['to steal', 'to rob']
    },
    {
        'root': 'yuSh',
        'senses': ['to injure, hurt or kill']
    },
    {
        'root': 'yu~Ng',
        'senses': ['to abandon', 'to desert']
    },
    {
        'root': 'rakSh',
        'senses': ['to protect', 'to watch', 'to take care of']
    },
    {
        'root': 'raj',
        'senses': ['to be coloured', 'to redden', 'to dye', 'to be attached to', 'to be excited', 'to be pleased with'],
        'derivatives': [
            {
                'form': 'rakta'
            },
            {
                'form': 'ra~Nktum'
            },
            {
                'form': 'ra~NktvA'
            },
            {
                'form': 'raktvA'
            },
            {
                'form': 'uparajya'
            }
        ]
    },
    {
        'root': 'lakh',
        'senses': ['to go', 'to move']
    },
    {
        'root': 'lap',
        'senses': ['to speak', 'to prate', 'to whisper']
    },
    {
        'root': 'va~Nk',
        'senses': ['to be crooked', 'to go']
    },
    {
        'root': 'vad',
        'senses': ['to speak', 'to tell', 'to describe', 'to utter'],
        'derivatives': [
            {
                'form': 'udita'
            },
            {
                'form': 'vAdya'
            },
            {
                'form': 'avadya',
                'meanings': ['despicable']
            },
            {
                'form': 'anudya',
                'meanings': ['unutterable']
            }
        ]
    },
    {
        'root': 'sha~Nk',
        'senses': ['to fear', 'to doubt', 'to suspect']
    },
    {
        'root': 'shaSh',
        'senses': ['to kill']
    },
    {
        'root': 'ShThiv',
        'senses': ['to spit, to sputter'],
        'derivatives': [
            {
                'form': 'ShTyUta'
            },
            {
                'form': 'ShvaShk',
                'meanings': ['to go']
            }
        ]
    },
    {
        'root': 'sasj',
        'senses': ['to go', 'to become ready']
    },
    {
        'root': 'sUrkShya',
        'senses': ['to envy', 'to despise']
    },
    {
        'root': 'haTh',
        'senses': ['to leap', 'to be wicked', 'to treat with violence']
    },
    {
        'root': 'hIch',
        'senses': ['to be ashamed or modest', 'to blush']
    }
];

export default roots;
