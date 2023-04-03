import {Client} from '@elastic/elasticsearch';
import type {estypes as EsTypes} from '@elastic/elasticsearch';

let client: undefined | Client;

export function search(options: EsTypes.SearchRequest): Promise<EsTypes.SearchResponse> {
  const es = getClient();

  return es.search(options);
}

export function refreshAllIndexes(): Promise<EsTypes.IndicesRefreshResponse> {
  const es = getClient();

  return es.indices.refresh({index: '_all'});
}

export function getClient(): Client {
  if (!client) {
    if (!process.env.ES_URL) {
      throw new Error('Please provide ES_URL env var first');
    }

    client = new Client({node: process.env.ES_URL, requestTimeout: 14 * 1000});
  }

  return client;
}
