// let age: number = 20;

// if (age < 50) age += 10;

// console.log(age);

// let sales = 123456789;

// let course = "TypeScript";

// let is_published = true;

// let level;

// level = 1;
// level = "0";

// // function render(document) {
// //     console.log(document);

// // }

// // Arrays

// let numbers: string[] = [];

// // numbers.forEach(n => n.)

// // numbers[0] = 1;
// // numbers[1] = 2;

// console.log(numbers[1]);

// // Tuples

// let user: [number, string] = [1, "Joyjeet"];
// user.push(1);

// // Enums

// const small = 1;
// const medium = 2;
// const large = 3;

// // PascalCase
// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }

// let mySize: Size = Size.Medium;

// console.log(mySize);

// // Functions

// function calculateTax(income: number, taxYear = 2020): number {
//   if (taxYear < 2022) {
//     return income * 1.2;
//   }
//   return income * 1.3;
// }

// calculateTax(10_000);

// // Objects

// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "Joy",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
// employee.name = "Joy"; //Valid in JS.. but not in TS

// // employee.id = 0

// // Union Types

// function kgToLbs(weight: number | string): number {
//   // Narrowing

//   if (typeof weight === "number") {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }

// kgToLbs(10);
// kgToLbs("10kg");

// // Intersection Type

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable; //Intersection

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// // Literal Types
// // literal means exact, specific type
// type Quantity = 50 | 100;

// let quantity: Quantity = 100;

// type Metric = "cm" | "inch";

// // Nullable Types
// function greet(name: string | null | undefined) {
//   if (name) console.log(name.toUpperCase());
//   else console.log("Hola!");
// }

// greet(null);

// Optional Chaining

type Customer = {
  birthday?: Date;
};

function getcustomer(id: number): Customer | null | undefined{
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getcustomer(1)

// Optional Chaining
console.log(customer?.birthday?.getFullYear());

// Optional Element Access Operator
// customer?.[0]


// Optional Call
let log: any = null;
log?.('a')
