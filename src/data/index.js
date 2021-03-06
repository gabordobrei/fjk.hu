'use strict';

module.exports = {
  landing: {
    hu: require('./landing/hu'),
    en: require('./landing/en')
  },
  conferences: {
    '2016': {
      hu: require('./conferences/2016/hu'),
      en: require('./conferences/2016/en')
    },
    '2017': {
      hu: require('./conferences/2017/hu'),
      en: require('./conferences/2017/en')
    },
    '2018': {
      hu: require('./conferences/2018/hu'),
      en: require('./conferences/2018/en')
    },
    '2019': {
      hu: require('./conferences/2019/hu'),
      en: require('./conferences/2019/en')
    },
    '2020': {
      hu: require('./conferences/2020/hu'),
      en: require('./conferences/2020/en')
    }
  },
  registration: {
    hu: require('./registration/hu'),
    en: require('./registration/en')
  },
  live: {
    hu: require('./live/hu'),
    en: require('./live/en')
  },
  mini: {
    hu: require('./mini/hu')
  },
  booklet: {
    '2019': {
      hu: require('./booklet/2019/hu'),
      en: require('./booklet/2019/en')
    }
  },
};
