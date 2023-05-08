import { useState, useEffect } from "react";
import { IMenuItem } from "src/interfaces";
import { MENU } from "src/mock";

const usePagingHook = (COUNT: number) => {

    const [productList, setProductList] = useState<IMenuItem[]>(MENU);
    const [viewList, setViewList] = useState<IMenuItem[]>(MENU);
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
          }, [productList]);

        return {productList, viewList, pageNumber, setProductList, onPageHandler, COUNT};
    }

export default usePagingHook;
