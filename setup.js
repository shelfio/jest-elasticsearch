const {resolve} = require('path');
const cwd = require('cwd');
const {start} = require('@shelf/elasticsearch-local');
const getClusterSetting = require('./jest-es-config');

module.exports = async function startES() {
  const userConfig = require(resolve(cwd(), 'jest-es-config.js'));
  const esConfig = typeof userConfig === 'object' ? userConfig : getClusterSetting();

  await start(esConfig);
};
