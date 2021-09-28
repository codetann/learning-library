/* 1. JS FUNCTION */
const sayHello = () => {
  console.log("hello");
};

/* 2. TS FUNCTION */
const toNumber = (word: string): number => {
  return +word;
};

/* 3. PARAMETERS */
// ? for optional params
const logWord = (word?: string): string => {
  return word || "no word given";
};

// default params
const logNumber = (num = 15): number => {
  return num;
};

// rest params
const logAll = (first = "hello", ...rest: any): string => {
  console.log(rest);
  return first;
};
