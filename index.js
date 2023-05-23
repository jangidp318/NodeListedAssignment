
//imported required modules
const express = require('express');
const gmailController = require('./controllers/gmailController');
const googleAuth = require('./utils/googleAuth');
const gmailService = require('./services/gmailService');

// Creating express App
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  //creating auth instance
  const auth = await googleAuth.googlAuthenticate();

  const response = await gmailService.getLabels(auth);

  gmailController.main(auth).catch(err => console.log(err));

  const labels = response.data.labels;
  res.send("You have successfully subscribed to our service.");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
