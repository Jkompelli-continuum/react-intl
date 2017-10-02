// translationRunner.js
const manageTranslations = require('react-intl-translations-manager').default;
const translationLanguages = require('./translationLanguages').default;

// es2015 import
// import manageTranslations from 'react-intl-translations-manager';
console.log(translationLanguages);

manageTranslations({
  // messagesDirectory: 'src/translations/extractedMessages',
  messagesDirectory: 'build/messages/src/client/**/*',
  translationsDirectory: 'src/translations/locales/',
  languages: translationLanguages, // any language you need
});