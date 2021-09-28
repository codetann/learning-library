// normal js function
const sayHello = () => {
  console.log("hello");
};

// basic ts function
const toNumber = (word: string): number => {
  return +word;
};

// optional parameters
// ? for optional params

const logWord = (word?: string): string => {
  return word || "no word given";
};

// default params
const logNumber = (num = 15): number => {
  return num;
};

const logAll = (first = "hello", ...rest: any): string => {
  console.log(rest);
  return first;
};

logAll("hi", 1, 2, 3);
