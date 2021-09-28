// normal js function
const sayHello = () => {
  console.log("hello");
};

const toNumber = (word: string): number => {
  console.log(word);
  return +word;
};

toNumber("33");
