//함수 선언식
function hello(name) {
    console.log(`안녕 ${name}`);
};

//함수표현식
const sum = (num1, num2) => {
    const result = num1 + num2;
    console.log(result);
};

hello("surin")
sum(1, 2);