//Number

//String
const myName="Surin";
console.log(`${myName}입니다.`);

//Boolean

//Symbol
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol();
const sym4 = Symbol();

console.log(sym1 === sym1);
console.log(sym1 === sym2);
console.log(sym3 === sym4);

//Object
const user = {
    email: "surinp8019@naver.com",
    name: "박수린",
    favorite: ["조개구이", "비빔밥", "생크림빵"],
    introduce: function () {
        console.log(`${this.name}입니다. ${this.favorite} 맛있엉`);
    },
    getFavoriteFoods: function () {
        this.favorite.forEach((food) => {
            console.log(`${food} 최고야!`);
        });
    },
};

//Array
const arr1 = ["Hi", 10, true];
const arr2 = Array(1, null, "냥", false, { sopt: "Server" });

arr1.map((item) => console.log("item1 :", item));
arr2.map((item) => console.log("item1 :", item));

//Function
function printer(a) {
    console.log(a);
}; //함수 선언식 (호이스팅 영향O)

const sum = (a, b) => {
    return a + b;
}; //함수 표현식 (호이스팅 영향X)

printer("printer함수당");
sum(1, 2);