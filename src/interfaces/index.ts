import User from './User.interface';
export interface IMenuItem {
    menuId: number;
    menuImgUrl: string | null;
    menuName: string;
    menuPrice: number;
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