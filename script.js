onst languageSelect = document.getElementById('language-select');
const title = document.getElementById('title');
const introduction = document.getElementById('introduction');
const dataCollection = document.getElementById('data-collection');
const dataCollectionText = document.getElementById('data-collection-text');
const dataCollectionDescription = document.getElementById('data-collection-description');
const dataCollectionList = document.getElementById('data-collection-list');
const authentication = document.getElementById('authentication');
const accessControl = document.getElementById('access-control');
const icloudSharing = document.getElementById('icloud-sharing');
const dataSharing = document.getElementById('data-sharing');
const userRights = document.getElementById('user-rights');
const userRightsList = document.getElementById('user-rights-list');
const accessAndCorrectData = document.getElementById('access-and-correct-data');
const cancelAccount = document.getElementById('cancel-account');
const exerciseRights = document.getElementById('exercise-rights');
const changesToPolicy = document.getElementById('changes-to-policy');
const changesToPolicyText = document.getElementById('changes-to-policy-text');
const contact = document.getElementById('contact');
const contactText = document.getElementById('contact-text');
const lastUpdate = document.getElementById('last-update');
const lastUpdateText = document.getElementById('last-update-text');

const translations = {
  en: {
    title: 'Privacy Policy',
    introduction: 'Our app is committed to protecting the privacy and security of our users\' data. This privacy policy describes how we collect, use and protect our users\' data.',
    dataCollection: 'Data Collection',
    dataCollectionText: 'The app uses the user\'s iCloud to allow them to access their data on all their devices.',
    dataCollectionDescription: 'All data is stored in the user\'s iCloud.',
    dataCollectionList: [
      'User authentication',
      'Access control',
      'iCloud sharing'
    ],
    dataSharing: 'We do not share user data with third parties, except in the user\'s iCloud.',
    userRights: 'User Rights',
    userRightsList: [
      'Access and correct their data (except for the nickname)',
      'Cancel their account',
      'Exercise their rights under applicable law'
    ],
    changesToPolicy: 'Changes to this Policy',
    changesToPolicyText: 'We reserve the right to make changes to this privacy policy at any time, with notice to our users.',
    contact: 'Contact',
    contactText: 'If you have any questions or concerns about this privacy policy, please contact us at spendaware@gmail.com.',
    lastUpdate: 'Last Update',
    lastUpdateText: 'This privacy policy was last updated on November
