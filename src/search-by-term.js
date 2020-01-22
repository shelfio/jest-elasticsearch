const {search} = require('./elasticsearch');

module.exports = async function getWikisByTerm({startFrom = 0}) {
  const body = {
    _source: {
      includes: ['_id', 'name']
    },
    size: 20,
    from: startFrom,
    query: {match_all: {}}
  };

  const {
    body: {
      hits: {hits, total}
    }
  } = await search({index: 'some-doc-id', body});

  return {items: hits, totalCount: total};
};
