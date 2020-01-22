const {resolve} = require('path');
const cwd = require('cwd');
const {start} = require('@shelf/elasticsearch-local');
const generateMapping = require('./jest-es-config');

module.exports = async function startES() {
  /** 'config' should be {
    mapping: {} (documents.mapping.json),
    indexName: str,
    aliasName: str,
    esVersion: x.x.x
  } */

  const config = require(resolve(cwd(), 'jest-es-config.js'));

  await start(generateMapping(config));
};
