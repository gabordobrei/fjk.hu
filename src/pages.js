'use strict';

const { landing, conferences, registration, live, error } = require('./data');

module.exports = [
  { templateFile: '404.pug', data: {}, destinationPath: '404.html' },

  { templateFile: 'landing.pug', data: landing.hu, destinationPath: 'index.html' },
  { templateFile: 'landing.pug', data: landing.en, destinationPath: 'en/index.html' },

  { templateFile: 'conference.pug', data: conferences['2016'].hu, destinationPath: 'conferences/2016/index.html' },
  { templateFile: 'conference.pug', data: conferences['2016'].en, destinationPath: 'en/conferences/2016/index.html' },

  { templateFile: 'conference.pug', data: conferences['2017'].hu, destinationPath: 'conferences/2017/index.html' },
  { templateFile: 'conference.pug', data: conferences['2017'].en, destinationPath: 'en/conferences/2017/index.html' },

  { templateFile: 'registration.pug', data: registration.hu, destinationPath: 'registration/index.html' },
  { templateFile: 'registration.pug', data: registration.en, destinationPath: 'en/registration/index.html' },

  { templateFile: 'live.pug', data: live.hu, destinationPath: 'live/index.html' },
  { templateFile: 'live.pug', data: live.en, destinationPath: 'en/live/index.html' }
];