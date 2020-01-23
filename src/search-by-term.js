const {search} = require('./elasticsearch');

module.exports = async function getDocuments({index, id, startFrom = 0}) {
  const body = {
    _source: {
      includes: ['_id', 'name', 'id']
    },
    size: 20,
    from: startFrom,
    query: {
      match: {
        id: id
      }
    }
  };

  const {
    body: {
      hits: {hits, total}
    }
  } = await search({index, body});

  return {items: hits, totalCount: total};
};
