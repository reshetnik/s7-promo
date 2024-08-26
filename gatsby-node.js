const TerserPlugin = require('terser-webpack-plugin');

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  // if (stage === 'build-html' || stage === 'build-javascript') {
  //   const config = getConfig();

  //   // Найдите и отключите минификацию
  //   if (config.optimization && config.optimization.minimizer) {
  //     config.optimization.minimizer = config.optimization.minimizer.map(
  //       (plugin) => {
  //         if (plugin instanceof TerserPlugin) {
  //           return new TerserPlugin({
  //             terserOptions: {
  //               compress: false,
  //               mangle: false,
  //               output: {
  //                 beautify: true,
  //               },
  //             },
  //           });
  //         }
  //         return plugin;
  //       }
  //     );
  //   }

  //   actions.replaceWebpackConfig(config);
  // }
};
