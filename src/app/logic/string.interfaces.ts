export interface IStringSource extends IStringSourceContract {
  copyBt: string;
  copyMessage: string;
  close: string;
  itemSave: string;
  itemBtRemove: string;
  itemBtSwap: string;
  inputWordOne: string;
  inputWordTwo: string;
  inputBtAdd: string;
  inputErrorCommon: string;
  inputErrorEqual: string;
  inputVoidOne: string;
  inputVoidTwo: string;
}

interface IStringSourceContract {
  [key: string]: string;
}
