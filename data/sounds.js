const data = [
    {
        sound: 'k',
        type: 0,
        contact: 1,
        strain: 1,
        sense: 'possession, mastery, creation, action',
        groupSense: 'Substance'
    },
    {
        sound: 'kh',
        type: 0,
        contact: 1,
        strain: 1,
        aspirate: 1,
        sense: 'attack, invasion, insistence, attrition or detrition',
        groupSense: 'Substance'
    },
    {
        sound: 'g',
        type: 0,
        contact: 1,
        sense: 'contact, motion, action upon',
        groupSense: 'Substance'
    },
    {
        sound: 'gh',
        type: 0,
        contact: 1,
        aspirate: 1,
        sense: 'violent contact, hostile action, strong motion',
        groupSense: 'Substance'
    },
    {
        sound: '~N',
        type: 0,
        contact: 1,
        nasal: 1,
        alt: ['N^']
    },
    {
        type: 0,
        empty: true
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
        aspirate: 1,
        sense: 'force',
        groupSense: 'Contact'
    },
    {
        sound: 'a',
        type: 0,
        groupSense: 'Substance'
    },
    {
        sound: 'A',
        type: 0,
        quantity: 1,
        alt: ['aa']
    },
    {
        sound: 'e',
        type: 0,
        subtype: 0
        // type: 4
    },
    {
        sound: 'ai',
        type: 0,
        subtype: 0,
        // type: 4,
        quantity: 1
    },
    {
        type: 0,
        empty: true
    },
    {
        sound: 'ch',
        type: 1,
        contact: 1,
        strain: 1,
        alt: ['c'],
        sense: 'swift and brilliant action, existence, contact',
        groupSense: 'Light'
    },
    {
        sound: 'Ch',
        type: 1,
        contact: 1,
        strain: 1,
        aspirate: 1,
        alt: 'chh',
        sense: 'swift and brilliant action, existence, contact — with a greater lightness',
        groupSense: 'Light'
    },
    {
        sound: 'j',
        type: 1,
        contact: 1,
        sense: 'restless, brilliant, decisive action, existence or contact',
        groupSense: 'Light'
    },
    {
        sound: 'jh',
        type: 1,
        contact: 1,
        aspirate: 1,
        sense: 'restless, brilliant, decisive action, existence or contact — with a greater lightness',
        groupSense: 'Light'
    },
    {
        sound: '~n',
        type: 1,
        contact: 1,
        nasal: 1,
        alt: ['JN']
    },
    {
        sound: 'y',
        type: 1,
        contact: 2,
        sense: 'relation'
    },
    {
        sound: 'sh',
        type: 1,
        contact: 3,
        strain: 1,
        aspirate: 1,
        sense: 'vehemence in union'
    },
    {
        type: 1,
        empty: true
    },
    {
        sound: 'i',
        type: 1,
        groupSense: 'Substance'
    },
    {
        sound: 'I',
        type: 1,
        quantity: 1,
        alt: ['ii']
    },
    {
        type: 1,
        empty: true
    },
    {
        type: 1,
        empty: true
    },
    {
        type: 1,
        empty: true
    },
    {
        sound: 'T',
        type: 2,
        contact: 1,
        strain: 1,
        sense: 'hardness, force, crudity',
        groupSense: 'Sound'
    },
    {
        sound: 'Th',
        type: 2,
        contact: 1,
        strain: 1,
        aspirate: 1,
        sense: 'hardness, force, crudity — with a greater impetuosity',
        groupSense: 'Sound'
    },
    {
        sound: 'D',
        type: 2,
        contact: 1,
        sense: 'dulness, persistence, obstinacy',
        groupSense: 'Sound'
    },
    {
        sound: 'Dh',
        type: 2,
        contact: 1,
        aspirate: 1,
        sense: 'obstinacy, tenacity',
        groupSense: 'Sound'
    },
    {
        sound: 'N',
        type: 2,
        contact: 1,
        nasal: 1
    },
    {
        sound: 'r',
        type: 2,
        contact: 2,
        sense: 'vibration, play',
        groupSense: 'Motion'
    },
    {
        sound: 'Sh',
        type: 2,
        contact: 3,
        strain: 1,
        aspirate: 1,
        alt: ['shh', 'S'],
        sense: 'strong action in rest'
    },
    {
        type: 2,
        empty: true
    },
    {
        sound: 'RRi',
        type: 2,
        alt: ['R^i'],
        groupSense: 'Pervasion'
    },
    {
        sound: 'RRI',
        type: 2,
        quantity: 1,
        alt: ['R^I']
    },
    {
        type: 2,
        empty: true
    },
    {
        type: 2,
        empty: true
    },
    {
        type: 2,
        empty: true
    },
    {
        sound: 't',
        type: 3,
        contact: 1,
        strain: 1,
        sense: 'touch, impact, — lighter than ch',
        groupSense: 'Contact'
    },
    {
        sound: 'th',
        type: 3,
        contact: 1,
        strain: 1,
        aspirate: 1,
        sense: 'touch, impact — with greater force',
        groupSense: 'Contact'
    },
    {
        sound: 'd',
        type: 3,
        contact: 1,
        sense: 'hard forcible impact or action',
        groupSense: 'Contact'
    },
    {
        sound: 'dh',
        type: 3,
        contact: 1,
        aspirate: 1,
        sense: 'softer but strong impact or action',
        groupSense: 'Contact'
    },
    {
        sound: 'n',
        type: 3,
        contact: 1,
        nasal: 1,
        sense: 'gentle but effective relation',
        groupSense: 'Motion'
    },
    {
        sound: 'l',
        type: 3,
        contact: 2,
        sense: 'love, sweetness etc in relation',
        groupSense: 'Contact'
    },
    {
        sound: 's',
        type: 3,
        contact: 3,
        strain: 1,
        aspirate: 1,
        sense: 'repose, union',
        groupSense: 'Contact'
    },
    {
        type: 3,
        empty: true
    },
    {
        sound: 'LLi',
        type: 3,
        alt: ['L^i']
    },
    {
        sound: 'LLI',
        type: 3,
        quantity: 1,
        alt: ['L^I']
    },
    {
        type: 3,
        empty: true
    },
    {
        type: 3,
        empty: true
    },
    {
        type: 3,
        empty: true
    },
    {
        sound: 'p',
        type: 4,
        contact: 1,
        strain: 1,
        sense: 'soft touch or impact, kindly relation, possessive action',
        groupSense: 'Motion'
    },
    {
        sound: 'ph',
        type: 4,
        contact: 1,
        strain: 1,
        aspirate: 1,
        sense: 'soft touch or impact, kindly relation, possessive action — with greater force',
        groupSense: 'Motion'
    },
    {
        sound: 'b',
        type: 4,
        contact: 1,
        sense: 'soft, strong embracing contact, possession, action',
        groupSense: 'Motion'
    },
    {
        sound: 'bh',
        type: 4,
        contact: 1,
        aspirate: 1,
        sense: 'soft, strong embracing contact, possession, action — with a sense of containing',
        groupSense: 'Motion'
    },
    {
        sound: 'm',
        type: 4,
        contact: 1,
        nasal: 1,
        sense: 'limitation, finality, completion',
        groupSense: 'Substance'
    },
    {
        sound: 'v',
        type: 4,
        subtype: 1,
        contact: 2,
        alt: ['w'],
        sense: 'manifest existence',
        groupSense: 'Pervasion'
    },
    {
        type: 4,
        empty: true
    },
    {
        type: 4,
        empty: true
    },
    {
        sound: 'u',
        type: 4,
        groupSense: 'Substance'
    },
    {
        sound: 'U',
        type: 4,
        quantity: 1,
        alt: ['uu']
    },
    {
        sound: 'o',
        type: 4,
        subtype: 2
    },
    {
        sound: 'au',
        type: 4,
        quantity: 1
    },
    {
        sound: 'M',
        display: 'a.m',
        type: 4,
        alt: ['.m', '.n']
    }
];

module.exports.data = data;
