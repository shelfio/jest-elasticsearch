/* eslint-disable @typescript-eslint/no-var-requires */
import {resolve} from 'path';
import {startElasticsearch} from './elasticsearch';

const cwd = require('cwd');

module.exports = function startES() {
  const path = process.env.JEST_ELASTICSEARCH_CONFIG || resolve(cwd(), 'jest-es-config');
  const config = require(path)();

  return startElasticsearch(config);
};
