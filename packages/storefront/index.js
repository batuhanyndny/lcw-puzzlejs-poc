const PuzzleJs = require('@puzzle-js/core');
const path = require('path');
const fs = require('fs');

const storefront = new PuzzleJs.Storefront({
  serverOptions: {
    port: 4444
  },
  gateways: [
    {
      name: 'product-gw',
      url: 'http://localhost:4445/',
    },
    {
      name: "platform-gw",
      url: "http://localhost:4446"
    }
  ],
  pages: [
    {
      name: 'homepage',
      url: '/',
      html: fs.readFileSync(path.join(__dirname, './pages/homepage.html'), 'utf8')
    }
  ],
  dependencies: []
});

storefront.init(() => {
  console.log('Storefront is ready to respond');
});