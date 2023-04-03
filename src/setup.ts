import {resolve} from 'path';
import {start} from '@shelf/elasticsearch-local';

const cwd = require('cwd');

module.exports = function startES() {
  const path = process.env.JEST_ELASTICSEARCH_CONFIG || resolve(cwd(), 'jest-es-config.js');
  const config = require(path)();

  return start(config);
};
