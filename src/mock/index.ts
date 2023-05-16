import { ICategory, IMenuItem, IOrderLog } from "src/interfaces";

export const MENU: IMenuItem[] = [
    {
        menuId: 1,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000002407]_20210225095106743.jpg',
        menuName: '아메리카노',
        menuPrice: 2000,
        optionDetail: [
            {
                id: 1,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 1
    },
    {
        menuId: 2,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg',
        menuName: '카페라떼',
        menuPrice: 2500,
        optionDetail: [
            {
                id: 2,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 1
    },
    {
        menuId: 3,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg',
        menuName: '캬라멜마끼야또',
        menuPrice: 3000,
        optionDetail: [
            {
                id: 3,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 1
    },
    {
        menuId: 4,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg',
        menuName: '카푸치노',
        menuPrice: 3500,
        optionDetail: [
            {
                id: 4,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 1
    },
    {
        menuId: 5,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000002093]_20210225094415504.jpg',
        menuName: '아메리카노',
        menuPrice: 2000,
        optionDetail: [
            {
                id: 5,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 1
    },
    {
        menuId: 6,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2022/03/[9200000002672]_20220311105511600.jpg',
        menuName: '카페라떼',
        menuPrice: 2500,
        optionDetail: [
            {
                id: 6,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 1
    },
    {
        menuId: 7,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2023/03/[9200000004559]_20230320090452696.jpg',
        menuName: '캬라멜마끼야또',
        menuPrice: 3000,
        optionDetail: [
            {
                id: 7,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 1
    },
    {
        menuId: 8,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '카푸치노',
        menuPrice: 3500,
        optionDetail: [
            {
                id: 8,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 1
    },
    {
        menuId: 9,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '아메리카노',
        menuPrice: 2000,
        optionDetail: [
            {
                id: 9,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 1
    },
    {
        menuId: 10,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '카페라떼',
        menuPrice: 2500,
        optionDetail: [
            {
                id: 10,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 1
    },
    {
        menuId: 11,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '캬라멜마끼야또',
        menuPrice: 3000,
        optionDetail: [
            {
                id: 11,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 1
    },
    {
        menuId: 12,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '카푸치노',
        menuPrice: 3500,
        optionDetail: [
            {
                id: 12,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 1
    },
    {
        menuId: 13,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '아메리카노',
        menuPrice: 2000,
        optionDetail: [
            {
                id: 13,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 1
    },
    {
        menuId: 14,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '카페라떼',
        menuPrice: 2500,
        optionDetail: [
            {
                id: 14,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 2
    },
    {
        menuId: 15,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '캬라멜마끼야또',
        menuPrice: 3000,
        optionDetail: [
            {
                id: 15,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 2
    },
    {
        menuId: 16,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '카푸치노',
        menuPrice: 3500,
        optionDetail: [
            {
                id: 16,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 2
    },
    {
        menuId: 17,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '아메리카노',
        menuPrice: 2000,
        optionDetail: [
            {
                id: 17,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 2
    },
    {
        menuId: 18,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '카페라떼',
        menuPrice: 2500,
        optionDetail: [
            {
                id: 18,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 2
    },
    {
        menuId: 19,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '캬라멜마끼야또',
        menuPrice: 3000,
        optionDetail: [
            {
                id: 19,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 3
    },
    {
        menuId: 20,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '카푸치노',
        menuPrice: 3500,
        optionDetail: [
            {
                id: 20,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 3
    },
    {
        menuId: 21,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '아메리카노',
        menuPrice: 2000,
        optionDetail: [
            {
                id: 21,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 3
    },
    {
        menuId: 22,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '카페라떼',
        menuPrice: 2500,
        optionDetail: [
            {
                id: 22,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 4
    },
    {
        menuId: 23,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '캬라멜마끼야또',
        menuPrice: 3000,
        optionDetail: [
            {
                id: 23,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 4
    },
    {
        menuId: 24,
        menuImgUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
        menuName: '카푸치노',
        menuPrice: 3500,
        optionDetail: [
            {
                id: 24,
                name1: "Regular",
                name2: "Large",
                name3: "샷추가1",
                name4: "샷추가2",
                price: 300
            }
        ],
        categoryId: 4
    },
]

export const CATEGORY: ICategory[] = [
    {
        categoryId: 1,
        categoryName: "커피"
    },
    {
        categoryId: 2,
        categoryName: "디저트"
    },
    {
        categoryId: 3,
        categoryName: "케이크"
    },
    {
        categoryId: 4,
        categoryName: "스무디"
    },
]

export const ORDERLOG: IOrderLog[] = [
    {
        orderId: 1,
        createdAt: '2023-05-17'
    },
    {
        orderId: 2,
        createdAt: '2023-05-17'
    },
    {
        orderId: 3,
        createdAt: '2023-05-18'
    },
    {
        orderId: 4,
        createdAt: '2023-05-19'
    },
    {
        orderId: 5,
        createdAt: '2023-05-20'
    },
    {
        orderId: 6,
        createdAt: '2023-05-21'
    },
    {
        orderId: 7,
        createdAt: '2023-05-23'
    },
    {
        orderId: 8,
        createdAt: '2023-05-23'
    },
    {
        orderId: 9,
        createdAt: '2023-05-25'
    },
    {
        orderId: 10,
        createdAt: '2023-05-25'
    },
    {
        orderId: 11,
        createdAt: '2023-05-27'
    },
    {
        orderId: 12,
        createdAt: '2023-05-28'
    },

]