const PuzzleJs = require('@puzzle-js/core');
const path = require('path');

const gateway = new PuzzleJs.Gateway({
    name: "platform-gw",
    fragments: [
        {
            name: "header",
            testCookie: "header-ab",
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
            name: 'footer',
            testCookie: "footer-ab",
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
        }
    ],
    api: [],
    serverOptions: {
        port: 4446
    },
    url: 'http://localhost:4446',
    fragmentsFolder: path.join(__dirname, "./src/fragments")
});

gateway.init(() => {
    console.log('Gateway is ready to respond');
});