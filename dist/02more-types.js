"use strict";
/* object + arrays */
const person = {
    name: "mahdi",
    age: 21,
    hobbies: ["Sports", "Guitar"],
    role: [2, "author"],
};
let favAct;
favAct = ["sports"];
console.log(person.name);
person.hobbies.map((element) => console.log(element));
/* tuples */
// fixed length + type array
let t;
t = [5, "kl"];
/* enum: gives us a enumerated global constant identifiers */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 6] = "USER";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
console.log(Role[0]);
console.log(Role.ADMIN);
console.log(Role[6]);
console.log(Role.USER);
console.log(Role.AUTHOR);
console.log(Role[7]);
/* any: basiclly it means any type */
let x;
x = 3;
x = "str";
let Tr;
//but avoid using any because it's like a vanille JS
