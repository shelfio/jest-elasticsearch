import {resolve} from 'path';
import {start} from '@shelf/elasticsearch-local';

const cwd = require('cwd');

module.exports = async function startES() {
  const config = require(resolve(cwd(), 'jest-es-config.js'))();

  return start(config);
};
