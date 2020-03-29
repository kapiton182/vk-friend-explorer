const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.get('/sigh-in-form', (req, res) => {
  res.render('pages/sigh-in-form', {
    token: '1234515351'
  })
});

app.get('/oauth-vk-callback', (req, res) => {
  res.render('pages/callback-page', {
    token: JSON.stringify(req.params)
  })
})

// https://oauth.vk.com/authorize?client_id=7381036&display=page&redirect_uri=https://vk-friend-explorer.herokuapp.com/oauth-vk-callback&scope=friends&response_type=token&v=5.103&state=123456
