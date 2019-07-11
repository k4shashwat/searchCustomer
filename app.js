const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const customers = require('./routes/customer');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send('Url not found please enter valid url.');
  });

app.use('/', customers);

app.listen(port, () => {
  console.log(`App is runnig at port ${port}`);
});