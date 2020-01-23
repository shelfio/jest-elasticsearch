const {resolve} = require('path');
const cwd = require('cwd');
const {start} = require('@shelf/elasticsearch-local');
const getClusterSetting = require('./jest-es-config');

module.exports = async function startES() {
  const userConfig = require(resolve(cwd(), 'jest-es-config.js'));

  if (typeof userConfig === 'object') {
    return start(userConfig);
  }

  return start(getClusterSetting());
};
