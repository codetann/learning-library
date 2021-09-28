// interface Person {
//   name: string;
//   age?: number;
// }

// function print({ name, age }: Person): Person {
//   console.log(name);
//   return { name };
// }

// print({ name: "tanner", age: 55 });
// // print({ age: 55, name: "mike" });

interface Dog {
  name: string;
  age?: number;
}

function createDog({ name, age }: Dog): Dog {
  return { name, age };
}

const digger = createDog({ name: "digger", age: 55 });
console.log(digger);
