export interface IMenuOption {
    id: number;
    name1: string;
    name2: string;
    name3: string;
    name4: string;
    price: number;
}

export interface IMenuItem {
    menuId: number;
    menuImgUrl: string;
    menuName: string;
    menuPrice: number;
    optionDetail: IMenuOption[];
}

