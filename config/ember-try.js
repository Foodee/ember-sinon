'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized  } = require('@embroider/test-setup');

module.exports = async function() {
  return {
    useYarn: true,
    // override this to avoid ember-try trying to use `--no-lockfile` which
    // doesn't exist in yarn 3 or 4
    // see https://github.com/ember-cli/ember-try/issues/741
    buildManagerOptions() {
      return [''];
    },
    scenarios: [
      {
        name: 'ember-lts-5.4',
        npm: {
          devDependencies: {
            'ember-source': '~5.4.0',
            'ember-auto-import': '^2.7.4',
            'webpack': '^5.93.0'
          }
        }
      },
      {
        name: 'ember-lts-5.8',
        npm: {
          devDependencies: {
            'ember-source': '~5.8.0',
            'ember-auto-import': '^2.7.4',
            'webpack': '^5.93.0'
          }
        }
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
            'ember-auto-import': '^2.7.4',
            'webpack': '^5.93.0'
          }
        }
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
            'ember-auto-import': '^2.7.4',
            'webpack': '^5.93.0'
          }
        }
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
            'ember-auto-import': '^2.7.4',
            'webpack': '^5.93.0'
          }
        }
      },
      // The default `.travis.yml` runs this scenario via `npm test`,
      // not via `ember try`. It's still included here so that running
      // `ember try:each` manually or from a customized CI config will run it
      // along with all the other scenarios.
      {
        name: 'ember-default',
        npm: {
          devDependencies: {}
        }
      },
      embroiderSafe(),
      embroiderOptimized(),
    ]
  };
};
