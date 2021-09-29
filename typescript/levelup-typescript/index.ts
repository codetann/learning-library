interface Dog {
  name: string;
  age?: number;
}

function createDog({ name, age }: Dog): Dog {
  return { name, age };
}

const digger = createDog({ name: "digger", age: 55 });
console.log(digger);
