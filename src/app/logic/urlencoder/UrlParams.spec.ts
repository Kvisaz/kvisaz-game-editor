import {UrlParams} from './UrlParams';

describe('UrlParams', () => {

  const encodedUrl2 = 'http://kvisaz.com/game.html?d=knight@%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8C@@mother@%D0%BC%D0%B0%D0%BC%D0%B0@@%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0@dog';

  it('should be converted', () => {

    const urlVars = UrlParams.getVars(encodedUrl2);
    expect(urlVars).toEqual({d: 'knight@рыцарь@@mother@мама@@собака@dog'});
  });

});

