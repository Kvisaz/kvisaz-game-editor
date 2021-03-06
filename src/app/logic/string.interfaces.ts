export interface IStringSource extends IStringSourceContract {
  copyUrlLabel: string;
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
  navBarTitle: string;
}

interface IStringSourceContract {
  [key: string]: string;
}
