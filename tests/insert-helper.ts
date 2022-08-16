import {getClient, refreshAllIndexes} from './elasticsearch';

export default async function insertDocuments(documents) {
  const body = generateTargetBody(documents);
  await bulk(body, {index: 'documents'});
  await refreshAllIndexes();
}

function generateTargetBody(documents) {
  const targets = [];
  documents.map(document => {
    const body = [
      {update: {_index: 'documents', _id: document.id, routing: document.id}},
      {
        doc: document,
        doc_as_upsert: true
      }
    ];

    return targets.push(...body);
  });

  return targets;
}

async function bulk(body, {index}: {index?: string} = {}) {
  const client = getClient();
  const params: {body: any; index?: string} = {
    body
  };

  if (index) {
    params.index = index;
  }

  const {body: response} = await client.bulk(params);

  return response;
}
