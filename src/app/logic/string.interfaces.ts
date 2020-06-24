export interface IStringSource extends IStringSourceContract {
  itemBtRemove: string;
  inputWordOne: string;
  inputWordTwo: string;
  inputBtAdd: string;
}

interface IStringSourceContract {
  [key: string]: string;
}
