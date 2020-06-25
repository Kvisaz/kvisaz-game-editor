import {IUrlParamConverter} from './EncoderContract';

export class DictionaryUrlParamConverter implements IUrlParamConverter<Array<IWordPair>> {
  constructor(
    private delimWord = '@',
    private delimPairs = '@@') {
  }

  decode(paramStr: string): Array<IWordPair> {
    const pairs = paramStr.split(this.delimPairs).map(pairStr => {
      const parts = pairStr.split(this.delimWord);
      return {
        one: parts[0],
        two: parts[1]
      };
    });
    return pairs;
  }

  encode(words: Array<IWordPair>): string {
    const encoded = words
      .map(pair => `${pair.one}${this.delimWord}${pair.two}`)
      .join(this.delimPairs);

    return encoded;
  }

}


interface IWordPair {
  one: string;
  two: string;
}
