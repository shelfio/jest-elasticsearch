# jest-elasticsearch

> Jest preset for running tests with local ElasticSearch
>
[How to mock Elasticsearch with Jest?](https://medium.com/shelf-io-engineering/test-elasticsearch-with-jest-like-a-pro-42386713b899)
## Usage
### 0. Install

```
$ yarn add @shelf/jest-elasticsearch --dev
```

### 1. Create `jest.config.js`

```js
module.exports = {
  preset: '@shelf/jest-elasticsearch'
};
```

If you have a custom `jest.config.js` make sure you remove `testEnvironment` property, otherwise it will conflict with the preset.

### 2. Create `jest-es-config.js`

```js
module.exports = () => {
  return {
    esVersion: '8.4.0', // ! must be exact version. Ref: https://github.com/elastic/elasticsearch-js .
    // don't be shy to fork our code and update deps to correct.
    clusterName: 'your-cluster-name',
    nodeName: 'your-node-name',
    port: 9200,
    indexes: [
      {
        name: 'your-index-name',
        body: {
          settings: {
            number_of_shards: '1',
            number_of_replicas: '1'
          },
          aliases: {
            'your-alias': {}
          },
          mappings: {
            dynamic: false,
            properties: {
              //here you should paste your mapping
              //Example:
              id: {
                type: 'keyword'
              }
            }
          }
        }
      }
    ]
  };
};
```

### 4. PROFIT! Write tests

```js
it();
```

## Troubleshooting

<details>
<summary> Issue running tests locally - Exception in thread "main"</summary>

```shell
Exception in thread "main'
java.lang.UnsupportedOperationException The Security Manager is deprecated and will be removed in a future release
at java.base/java.lang.System.setSecurityManager(System. java: 416)
at ora.elasticsearch.bootstrap.Elasticsearch.main(Elasticsearch.iava:71
```
The main reason why this issue appears is that you have an incompatible java version installed to run elastic locally.

### What to do?

1. List current java versions
```shell
$ /usr/libexec/java_home -V
```

2. If you see version 18.0.x
   Add this command to your bashrc, zshrc, etc
```shell
$ /usr/libexec/java_home -v 18
```

3. If you see no versions or do not have a compatible version installed - Install version 18
https://www.oracle.com/java/technologies/downloads/#java18

4. Reload the console and check the java version with
```shell
$ java -version
```
Output for proper work
```shell
$ java -version
java version "18.0.2.1"
Java(TM) SE Runtime Environment (build 18.0.2.1+1-1)
Java HotSpot(TM) 64-Bit Server VM (build 18.0.2.1+1-1, mixed mode, sharing)
```

5. Go to step **2** and set version 18.xx as a default for the shell

> Note: If you need to run elastic <= `v7.17.x` locally, then perform the steps above but for the java version 1.8.xxx


</details>

## See Also

- [elasticsearch-local](https://github.com/shelfio/elasticsearch-local)
- [jest-dynamodb](https://github.com/shelfio/jest-dynamodb)
- [jest-mongodb](https://github.com/shelfio/jest-mongodb)

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```
### Create and publish a GitHub release with your tag
1. Go to repository
2. Select `Releases`
3. Select `Draft a new release`
4. Choose a tag, fill title and describe changes
5. Press a `Publish release`


## License

MIT © [Shelf](https://shelf.io)
