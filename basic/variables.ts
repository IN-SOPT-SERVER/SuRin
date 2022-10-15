const a: string = 'hello';
console.log(typeof a, a);

const test1 : string = 'hello';
console.log(test1);

const test2: number = 3;
console.log(typeof test2, test2);

const test3: boolean = true;
console.log(typeof test3, test3);

const test4: number = 5;

let aaa: number[] = [1,2,3];

let arr3: Array<string> = ['h', 'a', 'b'];

const foo1 = (a: Object) => {
    console.log(a)
}

const foo2 = (a: object) => {
    console.log(a)
}

foo1('hello')
foo2('hello')

const hello2 = (name: string): void => {
    console.log(`${name}아 안녕`)
}

const sum2 = (a: number,b: number): number => {
    return a+b;
}

// *as

const test11: any = '박수린'
const nameLength = (test11 as string).length
console.log(nameLength)

const test12: any = '김냥냥'
const nameLength2 = (<string>test12).length
console.log(nameLength2)

interface SOPT {
    name: string;
    age: number;
    inSOPT ?: boolean; //?는 필수값이 아니고 optional하다는 뜻
}

const arr = [{
    name: '박수린',
    age: 21,
    inSOPT: true
}, {
    name: '김냥냥',
    age: 25,
    inSOPT: false
}, {
    name: '쿠키',
    age: 11,
    inSOPT: false
}]