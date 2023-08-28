var dyson = require('dyson');

dyson.bootstrap({
    configDir: __dirname,
    port: process.env.PORT || 3004,
    quiet: false,
    "proxyDelay": [3000, 5000 ]
});