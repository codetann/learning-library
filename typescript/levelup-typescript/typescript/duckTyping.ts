// duck typing
interface Person {
  name: string;
  age: number;
}

class Dancer implements Person {
  name: string;
  age: number;
}

let Cheyanne: Person = new Dancer();

const fake = {
  name: "Cheyanne",
  age: 25,
};

Cheyanne = fake;
