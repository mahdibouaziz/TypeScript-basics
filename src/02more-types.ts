/* object + arrays */
const person = {
  name: "mahdi",
  age: 21,
  hobbies: ["Sports", "Guitar"],
  role: [2, "author"],
};

let favAct: (string | number)[];
favAct = ["sports"];

console.log(person.name);

person.hobbies.map((element) => console.log(element));
/* tuples */
// fixed length + type array
let t: [number, string];
t = [5, "kl"];

/* enum: gives us a enumerated global constant identifiers */
enum Role {
  ADMIN,
  USER = 6,
  AUTHOR,
}

console.log(Role[0]);
console.log(Role.ADMIN);
console.log(Role[6]);
console.log(Role.USER);
console.log(Role.AUTHOR);
console.log(Role[7]);

/* any: basiclly it means any type */
let x: any;
x = 3;
x = "str";

let Tr: any[];
//but avoid using any because it's like a vanille JS
