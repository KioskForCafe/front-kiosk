interface Dto {
    orderDetailId : number
    menuName : string
    menuPrice: number
    optionList: Option[];
    orderDetailCount: number
}

interface Option {
    optionId: number
    optionName: string
    optionPrice: number
}

export default Dto;