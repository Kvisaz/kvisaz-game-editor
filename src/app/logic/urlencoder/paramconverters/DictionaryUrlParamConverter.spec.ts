import {DictionaryUrlParamConverter} from './DictionaryUrlParamConverter';

describe('DictionaryUrlParamConverter', () => {
  const encodedStr = 'knight@рыцарь@@mother@мама@@собака@dog';
  const testArray = [{one: 'knight', two: 'рыцарь'}, {one: 'mother', two: 'мама'}, {one: 'собака', two: 'dog'}];
  const converter = new DictionaryUrlParamConverter();


  it('should be converted', () => {
    const dictionary = converter.decode(encodedStr);
    expect(dictionary).toEqual(testArray);
  });

});
