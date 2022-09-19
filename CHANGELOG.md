# Breaking Changes

## 5.0.0

- Upgrade `@elastic/elasticsearch` to version 8.4.0
  - Changed `getDocuments` request parameters according to the new Elasticsearch version
    - use `getDocuments({index, {query: {}})` instead of `getDocuments({index, body: {query: {}}})`

## 4.0.0

- Upgrade `jest` to version 28
