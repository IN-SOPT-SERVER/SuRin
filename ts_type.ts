/*
기본적인 문법
const 변수명: Type = 초기값;
let 변수명: Type = 초기값;
*/
const isLiked: boolean = true;
console.log(`${typeof isLiked}, ${isLiked}`)

const str: string = 'hello'
console.log(`${typeof str}, ${str}`)

let num: number = 31
console.log(`${typeof num}, ${num}`)

/*
배열타입 표현
const 변수명: Type[] = 초기값;
let 변수명: Array<Type> = 초기값;
*/
let numbers: number[] = [1, 2, 3];

const strings: Array<string> = ['hi', 'surin'];

const objArray1: Object[] = [
    { item1: 'good' },
    { item2: 'morning' }
];

const objArray2: object[] = [
    { item1: 'good' },
    { item2: 'morning' }
];

//함수타입표현
const fun = (name: string): void => console.log(`hi, ${name}~`); // 반환이 없는 함수는 void로 표기

const sum1 = (a: number, b: number): number => a + b;

const sum2 = (a: number, b: number): number => {
    return a + b;
};

//null, undefined 타입
const a: null = null;

let oops: null = 2; //error 발생

let b: undefined = undefined;

let c: undefined = null; //error발생

//타입 단언
let nickName: any = "rin";
let strLength: number = (<string>str).length;
console.log(`${typeof strLength}, ${strLength}`);

let nickName2: any = "su";
let str2Length: number = (nickName2 as string).length;
console.log(`${typeof str2Length}, ${str2Length}`);

//인터페이스
interface SOPT {
    name: string;
    age: number;
    isSOPT?: boolean; //선택적 프로퍼티(필수가 아님)
}

const info: SOPT = {
    name: "박수린",
    age: 21,
    isSOPT: true,
};