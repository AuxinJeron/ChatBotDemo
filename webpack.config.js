const path = require('path');

module.exports = {
    // Set the mode to development or production
    mode: 'development',

    // Point entry to your application's script
    entry: './index.js',

    // Define the output point
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};

