const documentsMapping = require('./documents-mapping');

module.exports = function generateMapping(
  mappingSchema,
  indexName,
  aliasName,
  elasticSearchVersion
) {
  return {
    esVersion: elasticSearchVersion || '6.8.2',
    clusterName: 'docs',
    nodeName: 'docs',
    port: 9200,
    indexes: [
      {
        name: indexName || 'documents',
        body: {
          settings: {
            number_of_shards: '1',
            number_of_replicas: '1'
          },
          aliases: {
            [aliasName || 'some-doc-id']: {}
          },
          mappings: mappingSchema || documentsMapping
        }
      }
    ]
  };
};
