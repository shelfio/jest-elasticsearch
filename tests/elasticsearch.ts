import {Client} from '@elastic/elasticsearch';

let client;

export function search(options) {
  const es = getClient();

  return es.search(options);
}

export async function refreshAllIndexes() {
  const es = getClient();

  return es.indices.refresh({index: '_all'});
}

export function getClient() {
  if (!client) {
    if (!process.env.ES_URL) {
      throw new Error('Please provide ES_URL env var first');
    }

    client = new Client({node: process.env.ES_URL, requestTimeout: 14 * 1000});
  }

  return client;
}
