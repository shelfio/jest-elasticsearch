const documents = require('./documents.mock');
const getDocuments = require('./search-by-term');
const insertDocuments = require('./insert-documents');

describe('getDocuments', () => {
  beforeAll(async () => {
    await insertDocuments(documents);
  });

  it('should return documents after inserting', async () => {
    const docs = await getDocuments({
      index: 'documents',
      _id: 'some-doc-id'
    });

    expect(docs).toEqual({
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
      totalCount: {
        relation: 'eq',
        value: 1
      }
    });
  });
});
