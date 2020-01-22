const {start} = require('@shelf/elasticsearch-local');
const generateMapping = require('./jest-es-config');

module.exports = async function startES() {
  await start(generateMapping());
};
