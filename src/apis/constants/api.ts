export const authorizationHeader = (accessToken: string) => {
    return { headers: { Authorization:`Bearer ${accessToken}` } }
}

const HOST = 'http://localhost:4040/';

export const GET_USER_URL = `${HOST}api/user`;

export const SIGN_UP_URL = `${HOST}auth/sign-up`;
export const SIGN_IN_URL = `${HOST}auth/sign-in`;

export const DUPLICATE_ID_URL = `${HOST}api/user/duplicate/checkId`;
export const DUPLICATE_TEL_NUMBER_URL = `${HOST}api/user/duplicate/checkTelNumber`;
export const DUPLICATE_USEREMAIL_URL = `${HOST}api/user/duplicate/checkEmail`;

export const POST_ORDER_URL = `${HOST}/api/order`;

export const GET_CATEGORY_LIST_URL = (storeId: string) => `${HOST}api/category/list/${storeId}`;

export const GET_MENU_LIST_URL = (storeId: string, categoryId: number) => `${HOST}api/menu/list/${storeId}/${categoryId}`;
export const GET_MENU_DETAIL_URL = (menuId: number) => `${HOST}api/menu/${menuId}`;

export const GET_ORDER_LIST_URL = (storeId: number) => `${HOST}api/order/list/${storeId}`;
