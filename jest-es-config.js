const documentsMapping = require('./index-mapping');

module.exports = function getClusterSetting() {
  return {
    esVersion: '7.6.0',
    clusterName: 'docs',
    nodeName: 'docs',
    port: 9200,
    indexes: [
      {
        name: 'some-index',
        body: {
          settings: {
            number_of_shards: '1',
            number_of_replicas: '1'
          },
          aliases: {
            'some-alias': {}
          },
          mappings: documentsMapping
        }
      }
    ]
  };
};
