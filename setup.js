const {resolve} = require('path');
const cwd = require('cwd');
const {start} = require('@shelf/elasticsearch-local');
const getClusterSetting = require('./jest-es-config');

module.exports = async function startES() {
  /** 'config' must be {
    mapping: {} (as in the index-mapping.json),
    indexName: str,
    aliasName: str,
    esVersion: x.x.x
  } */

  const config = require(resolve(cwd(), 'jest-es-config.js'));

  await start(getClusterSetting(config));
};
