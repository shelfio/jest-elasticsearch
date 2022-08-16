import {getClient, refreshAllIndexes} from './elasticsearch';

type Document = {id: string};

type Target = (
  | {update: {_index: string; _id: string; routing: string}}
  | {doc: Document; doc_as_upsert: boolean}
)[];

export default async function insertDocuments(documents: Document[]): Promise<void> {
  const body = generateTargetBody(documents);
  await bulk(body, {index: 'documents'});
  await refreshAllIndexes();
}

function generateTargetBody(documents: Document[]): Target {
  const targets = [] as Target;
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

async function bulk(body: Target, {index}: {index?: string} = {}) {
  const client = getClient();
  const params: {body: Target; index?: string} = {
    body
  };

  if (index) {
    params.index = index;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const {body: response} = await client.bulk(params);

  return response;
}
