<<<<<<< HEAD
const webpack = require("webpack");
const withImages = require('next-images')

module.exports = withImages({
  webpack(config, options) {
    return config
  }
})

=======
const webpack = require('webpack');
>>>>>>> origin/frontend-component-testing
module.exports = {
webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
config.plugins.push(new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }))
return config;
}}
