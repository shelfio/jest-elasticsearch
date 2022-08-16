import {Client} from '@elastic/elasticsearch';
import {
  ApiResponse,
  TransportRequestOptions,
  TransportRequestPromise
} from '@elastic/elasticsearch/lib/Transport';

let client: undefined | Client;

export function search(options: TransportRequestOptions): TransportRequestPromise<ApiResponse> {
  const es = getClient();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return es.search(options);
}

export async function refreshAllIndexes(): Promise<TransportRequestPromise<ApiResponse>> {
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
