const category = [
    {
        _id: "1",
        name: "식품",
    },
    {
        _id: "2",
        name: "생활용품",
    },
    {
        _id: "3",
        name: "뷰티",
    },
    {
        _id: "4",
        name: "문구/오피스",
    },
    {
        _id: "5",
        name: "가전디지털",
    },
    {
        _id: "6",
        name: "도서",
    },
    {
        _id: "7",
        name: "건강식품",
    },
];

const prices = [
    {
        _id: "0",
        name: "All",
        array: [],
    },
    {
        _id: "1",
        name: "0 ~ 999원",
        array: [0, 999],
    },
    {
        _id: "2",
        name: "1000 ~ 2999원",
        array: [1000, 2999],
    },
    {
        _id: "3",
        name: "3000 ~ 3999원",
        array: [3000, 3999],
    },
    {
        _id: "4",
        name: "4000 ~ 4999원",
        array: [4000, 4999],
    },
    {
        _id: "5",
        name: "5000원 이상",
        array: [5000, 99999999999],
    },
];

export { category, prices };
