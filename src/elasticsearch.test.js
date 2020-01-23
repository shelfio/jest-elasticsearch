const {getClient} = require('./elasticsearch');

it('should export getClient function', function() {
  expect(getClient).toBeInstanceOf(Function);
});
