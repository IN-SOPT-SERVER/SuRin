interface Member {
    name: string;
    group: string;
}

interface Dinner {
    member: Member[];
    food: string[];
    shuffle(array: Member[] | string[]) : any;
    organize(array: Member[], food: string[]): void; 
}

const dinner: Dinner = {
    member: [
      {
        name: "권세훈",
        group: "ob",
      },
      {
        name: "박수린",
        group: "yb",
      },
      {
        name: "남지윤",
        group: "ob",
      },
      {
        name: "김혜수",
        group: "ob",
      },
      {
        name: "이종현",
        group: "ob",
      },
    ],
    food: [
        "조개구이", "라멘", "마라탕", "국밥", "생크림빵"
    ],
    shuffle(array) {
      array.sort(() => Math.random() - 0.5);
      return array;
    },
    organize(array, food) {
      this.shuffle(array);
      this.shuffle(food);
      console.log(`${array[0].name}님, ${array[1].name}님 / ${food[0]} 맛있게드세요옹`);
    },
  };
  
  dinner.organize(dinner.member,dinner.food);