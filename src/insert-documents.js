const {refreshAllIndexes, getClient} = require('./elasticsearch');

module.exports = async function insertDocuments(document) {
  const body = [
    {update: {_index: 'documents', _id: document.id, routing: document.id}},
    {
      doc: document,
      doc_as_upsert: true
    }
  ];

  await bulk(body, {index: 'documents'});

  await refreshAllIndexes();
};

async function bulk(body, {index, skipSource} = {}) {
  const client = getClient();
  const params = {
    type: 'documents',
    body
  };

  if (index) {
    params.index = index;
  }

  if (skipSource) {
    params._source = [];
  }

  const {body: response} = await client.bulk(params);

  return response;
}
