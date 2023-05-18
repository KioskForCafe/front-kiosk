import { GetMenuResponseDto } from "src/apis/response/menu";

export const getPageCount = (list: any[] | GetMenuResponseDto[], count: number) => {
    return Math.floor((list.length - 1) / count) + 1
};