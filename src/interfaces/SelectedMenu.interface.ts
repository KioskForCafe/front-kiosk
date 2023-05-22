export interface SelectedMenu {
  menuId: number;
  menuName: string;
  menuCount: number;
  menuPrice: number;
  optionList: Option[];
}

export interface Option {
    optionId: number;
    optionName: string;
    optionPrice: number;
}