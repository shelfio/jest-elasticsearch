import type {estypes as EsTypes} from '@elastic/elasticsearch';
import {search} from './elasticsearch';

type GetDocumentsResponse = {
  items: EsTypes.SearchHit[];
  totalCount: EsTypes.SearchHitsMetadata['total'];
};

export default async function getDocuments({
  index,
  id,
  startFrom = 0
}: {
  index: string;
  id: string;
  startFrom?: number;
}): Promise<GetDocumentsResponse> {
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
    hits: {hits, total}
  } = await search({index, ...body});

  return {items: hits, totalCount: total};
}
