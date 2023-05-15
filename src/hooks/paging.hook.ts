import { useState, useEffect } from "react";
import { ICategory, IMenuItem } from "src/interfaces";
import { MENU } from "src/mock";

const usePagingHook = (COUNT: number, selectedCategory: ICategory | null) => {

    let products = MENU;
    
    if(selectedCategory !== null){
        products = MENU.filter((menu)=>menu.categoryId === selectedCategory.categoryId)
    }

    const [productList, setProductList] = useState<IMenuItem[]>(products);
    const [viewList, setViewList] = useState<IMenuItem[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const onPageHandler = (page: number) => {
        setPageNumber(page);

        const tmpList: (IMenuItem)[] = [];

        const startIndex = COUNT * (page - 1);
        const endIndex = COUNT * page - 1;

        for (let index = startIndex; index <= endIndex; index++){
            if (productList.length < index + 1) break;
            tmpList.push(productList[index]); }
      
            setViewList(tmpList);   
        }

        useEffect(() => {
            onPageHandler(pageNumber);
          }, [ productList]);

        useEffect(()=>{
            setProductList(products)
            onPageHandler(1)
        },[selectedCategory])

        return {productList, viewList, pageNumber, setProductList, onPageHandler, COUNT};
    }

export default usePagingHook;
