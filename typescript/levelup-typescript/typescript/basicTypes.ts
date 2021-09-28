/**
 * ! BASIC TYPES
 */

// boolean
const isOpen: boolean = false;

// string
const myName: string = "Tanner";

// number
const myAge: number = 25;

// array w/ all same type
const list: number[] = [0, 1, 5];

// tuple
const me: [string, number, boolean] = [myName, myAge, isOpen];

// enum
enum Job {
  WebDev,
  WebDesigner,
  PM,
}

// any
const phone: any = "Pixel";
const table: any = 3;

// null / undefined
let dog;
dog = "hi";
dog = null;
dog = 12;

/**
 * ! ADVANCED TYPES
 */

// implicit types
let nameOne = "Tanner";
let nameTwo = nameOne; // name two has to be a string

// union types
let isNumOrStr: string | number = 20;

const margin = (x: string | number): string => {
  return `margin ${x}px`;
};
