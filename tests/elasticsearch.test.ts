import {getClient} from './elasticsearch';

it('should export getClient function', function () {
  expect(getClient).toBeInstanceOf(Function);
});
