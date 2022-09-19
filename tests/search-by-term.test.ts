import documents from './mocks';
import getDocuments from './search-by-term';
import insertDocuments from './insert-helper';

describe('getDocuments', () => {
  beforeAll(async () => {
    await insertDocuments(documents);
  });

  it('should return documents by id after inserting', async () => {
    const docs = await getDocuments({
      index: 'documents',
      id: '1'
    });

    expect(docs).toEqual({
      _shards: {failed: 0, skipped: 0, successful: 1, total: 1},
      hits: {
        hits: [
          {
            _id: 'some-doc-id-1',
            _index: 'documents',
            _routing: 'some-doc-id-1',
            _score: expect.any(Number),
            _source: {id: 'some-doc-id-1', name: 'some-name-1'}
          }
        ],
        max_score: expect.any(Number),
        total: {relation: 'eq', value: 1}
      },
      timed_out: false,
      took: expect.any(Number)
    });
  });
});
