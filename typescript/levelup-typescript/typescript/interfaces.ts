interface Person {
  name: string;
  age: number;
}

function print({ name, age }: Person) {
  console.log(name, age);
  return name;
}

print({ name: "tanner", age: 25 });
print({ age: 55, name: "mike" });
