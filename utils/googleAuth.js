const path = require('path');
const { authenticate } = require('@google-cloud/local-auth');

const SCOPES = [
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/gmail.labels',
  'https://mail.google.com/'
];

async function googlAuthenticate() {
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, '../credentials.json'),
    scopes: SCOPES,
  });
  return auth;
}

module.exports = { googlAuthenticate };
