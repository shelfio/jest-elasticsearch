const {stop} = require('@shelf/elasticsearch-local');

module.exports = async function stopES() {
  stop();
};
