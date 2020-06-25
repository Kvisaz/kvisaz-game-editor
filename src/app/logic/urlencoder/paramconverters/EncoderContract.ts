export interface IUrlParamEncoder<T> {
  (param: T): string;
}

export interface IUrlParamDecoder<T> {
  (paramStr: string): T;
}

export interface IUrlParamConverter<T> {
  encode(param: T): string;
  decode(paramStr: string): T;
}
