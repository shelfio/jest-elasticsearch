const documents = require('./documents.mock');
const getDocuments = require('./search-by-term');
const insertDocuments = require('./insert-documents');

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
      items: [
        {
          _id: 'some-doc-id-1',
          _index: 'documents',
          _routing: 'some-doc-id-1',
          _score: expect(Number),
          _source: {
            id: 'some-doc-id-1',
            name: 'some-name-1'
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
