const documentsMapping = require('./documents-mapping');

module.exports = {
  esVersion: '7.5.0',
  clusterName: 'jest-es',
  nodeName: 'jest-es',
  port: 9200,
  indexes: [
    {
      name: 'documents',
      body: {
        settings: {
          number_of_shards: '1',
          number_of_replicas: '1'
        },
        aliases: {
          'some-doc-id': {}
        },
        mappings: documentsMapping
      }
    }
  ]
};
