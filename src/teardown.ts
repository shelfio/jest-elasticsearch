import {stop} from '@shelf/elasticsearch-local';

module.exports = async function stopES() {
  stop();
};
