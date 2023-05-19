import { useState, useEffect } from "react";
import { GetCategoryResponseDto } from "src/apis/response/category";
import { GetMenuDetailResponseDto, GetMenuResponseDto } from "src/apis/response/menu";
import { ICategory, IMenuItem } from "src/interfaces";
import { MENU } from "src/mock";

const usePagingHook = (COUNT: number) => {

    // let products = MENU;
    
    // if(selectedCategory !== null){
    //     products = MENU.filter((menu)=>menu.categoryId === selectedCategory.categoryId)
    // }

    const [productList, setProductList] = useState<(GetMenuResponseDto | GetMenuDetailResponseDto)[]>([]);
    const [menuList, setMenuList] = useState<(GetMenuResponseDto | GetMenuDetailResponseDto)[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const onPageHandler = (page: number) => {
        setPageNumber(page);

        const tmpList: (GetMenuResponseDto | GetMenuDetailResponseDto)[] = [];

        const startIndex = COUNT * (page - 1);
        const endIndex = COUNT * page - 1;

        for (let index = startIndex; index <= endIndex; index++){
            if (productList.length < index + 1) break;
            tmpList.push(productList[index]); }
      
            setMenuList(tmpList);   
        }

        useEffect(() => {
            onPageHandler(pageNumber);
          }, [ productList]);

        // useEffect(()=>{
        //     setProductList([])
        //     onPageHandler(1)
        // },[selectedCategory])

        return {productList, menuList, pageNumber, setProductList, onPageHandler, COUNT};
    }

export default usePagingHook;
