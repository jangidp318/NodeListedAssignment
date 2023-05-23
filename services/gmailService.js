const { google } = require('googleapis');

const gmailService = google.gmail({ version: 'v1' });

async function getLabels(auth) {
  return await gmailService.users.labels.list({ userId: 'me', auth });
}

module.exports = {
  getLabels,
};
