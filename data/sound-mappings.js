const mapping = {
  type: {
    0: 'Guttural',
    1: 'Palatal',
    2: 'Cerebral',
    3: 'Dental',
    4: 'Labial',
    5: 'Palato-guttural'
  },
  subtype: {
    0: 'Palato-guttural',
    1: 'Labio-dental',
    2: 'Labio-guttural'
  },
  contact: {
    undefined: 'None (open)',
    1: 'Full',
    2: 'Slight',
    3: 'Slightly open'
  },
  strain: {
    undefined: 'Soft',
    1: 'Hard'
  },
  aspirate: {
    undefined: 'No',
    1: 'Yes'
  },
  nasal: {
    undefined: 'No',
    1: 'Yes'
  },
  quantity: {
    undefined: 'Short',
    1: 'Long'
  },
  disabled: {
    true: 1
  }
}

export default mapping;
