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

const job: Job = Job.WebDev;

// any
const phone: any = "Pixel";
const table: any = 3;

// null / undefined
const noValue: null = null;
