const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const languages = require('./src/components/i18n/languages');
require('default-passive-events');

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin({
        exclude: /node_modules/
      })],
    },
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise(resolve => {
    const Redirect = path.resolve('src/components/i18n/redirect.js');
    const redirectPage = {
      ...page,
      component: Redirect,
      context: {
        languages,
        locale: '',
        routed: false,
        redirectPage: page.path,
      },
    };

    deletePage(page);
    createPage(redirectPage);

    languages.forEach(lang => {
      const localizedPath = `/${lang.locale}${page.path}`;
      const localePage = {
        ...page,
        originalPath: page.path,
        path: localizedPath,
        context: {
          languages,
          locale: lang.locale,
          routed: true,
          originalPath: page.path,
        },
      };
      createPage(localePage);
    });

    resolve();
  });
};
