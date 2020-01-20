const {start} = require('@shelf/elasticsearch-local');
const config = require('./jest-es-config');

module.exports = async function startES() {
  await start(config);
};
