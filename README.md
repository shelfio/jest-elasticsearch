# jest-elasticsearch

> Jest preset for running tests with local ElasticSearch

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
    esVersion: '7.6.0', // ! must be exact version. Ref: https://github.com/elastic/elasticsearch-js .
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

2. If you see version 1.8.xxx
   Add this command to your bashrc, zshrc, etc
```shell
$ /usr/libexec/java_home -v 1.8
```

3. If you see no versions or do not have a compatible version installed - Install version 1.8xxx
https://www.java.com/en/download/

4. Reload the console and check the java version with
```shell
$ java -version
```
Output for proper work
```shell
$ java -version
java version "1.8.0_333"
Java(TM) SE Runtime Environment (build 1.8.0_333-b02)
Java HotSpot(TM) 64-Bit Server VM (build 25.333-b02, mixed mode)
```

5. Go to step 2 and set version 1.8xx as a default for the shell


</details>

## See Also

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
