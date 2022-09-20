# Breaking Changes

## 5.0.0

- Upgrade `@elastic/elasticsearch` to version 8.4.0
  - Changed `getDocuments` request parameters according to the new Elasticsearch version
    - use `getDocuments({index, {query: {}})` instead of `getDocuments({index, body: {query: {}}})`
  - Run Elasticsearch >= `v8.0.0` locally requires java `v17`/`v18`. See [Support Matrix](https://www.elastic.co/support/matrix#matrix_jvm)

## 4.0.0

- Upgrade `jest` to version 28
