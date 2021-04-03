const PuzzleJs = require('@puzzle-js/core');
const path = require('path');

const gateway = new PuzzleJs.Gateway({
  name: "Gateway 1",
  fragments: [
    {
      name: "my-product",
      testCookie: "my-product-ab",
      version: "1.0.0",
      versions: {
        "1.0.0": {
          assets: [],
          dependencies: []
        }
      },
      render: {
        url: "*"
      }
    },
    {
      name: "landing-page",
      testCookie: "lp-ab",
      version: "1.0.0",
      versions: {
        "1.0.0": {
          assets: [],
          dependencies: []
        }
      },
      render: {
        url: "/"
      }
    },
  ],
  api: [
  ],
  serverOptions: {
    port: 4445
  },
  url: 'http://localhost:4445',
  fragmentsFolder: path.join(__dirname, "./src/fragments")
});

gateway.init(() => {
  console.log('Gateway is ready to respond');
});