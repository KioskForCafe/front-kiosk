interface RequestDto {
    storeId: number;
    totalPrice: number;
    orderState: string;
    orderDetailList: {
        menuId: number;
        menuCount: number;
        optionList: number[];
    }[];
  }
  export default RequestDto;