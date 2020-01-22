const documents = require('./documents.mock');
const getWikisByTerm = require('./search-by-term');
const insertDocuments = require('./insert-documents');

describe('getWikisByTerm', () => {
  beforeAll(async () => {
    await insertDocuments(documents);
  });

  it('should return wikis by term', async () => {
    const wikis = await getWikisByTerm({
      index: 'some-doc-id',
      _id: 'some-doc-id'
    });

    expect(wikis).toEqual({
      items: [
        {
          _id: 'some-doc-id',
          _index: 'documents',
          _routing: 'some-doc-id',
          _score: 1,
          _source: {
            name: 'some-name'
          },
          _type: 'documents'
        }
      ],
      totalCount: 1
    });
  });
});
