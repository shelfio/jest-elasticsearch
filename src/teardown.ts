import {stop} from '@shelf/elasticsearch-local';

module.exports = function stopES() {
  stop();
};
