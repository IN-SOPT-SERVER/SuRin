interface introduce {
    name: string;
    age: number;
    location: string;
    fav: string;
    mbti: string;
    school: string;
}

const members: introduce[] = [
    {
        name : '유수화',
        age: 23,
        location: '공덕역',
        fav: '보리(강아지)',
        mbti: 'ENFP',
        school: '숙명여대'
    }, {
        name : '조예슬',
        age: 24,
        location: '잠실새내역',
        fav: '고양이',
        mbti: 'ENFP',
        school: '성신여대'
    }, {
        name: '정준서',
        age: 23,
        location: '잠실새내역',
        fav: '쌀국수',
        mbti: 'ENFP',
        school: '성신여대'
    }
]

members.map((person) => {
    console.log(`이름: ${person.name}`);
    console.log(`나이: ${person.age}`);
    console.log(`사는곳: ${person.location}`);
    console.log(`좋아하는것: ${person.fav}`);
    console.log(`MBTI: ${person.mbti}`);
    console.log(`학교: ${person.school}`);
    console.log();
})