import User from './User.interface';
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
    categoryId: ICategory;
}

export interface ICategory {
    categoryId: number;
}


export interface IUser {
    userId: string;
    userName: string;
    password: string;
    userEmail: string;
    createdAt: string;
    isAdmin: boolean;
    telNumber: string;
}


export type { User };






