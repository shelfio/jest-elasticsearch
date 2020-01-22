const documentsMapping = require('./index-mapping');

module.exports = function getClusterSetting({mapping, indexName, aliasName, esVersion}) {
  return {
    esVersion: esVersion || '6.8.2',
    clusterName: 'docs',
    nodeName: 'docs',
    port: 9200,
    indexes: [
      {
        name: indexName,
        body: {
          settings: {
            number_of_shards: '1',
            number_of_replicas: '1'
          },
          aliases: {
            [aliasName]: {}
          },
          mappings: mapping || documentsMapping
        }
      }
    ]
  };
};
