/* alias to our union types */
type NumStr = number | string;

/* Union types */
function combine(
  input1: number | string,
  input2: NumStr,
  resultType: "as-number" | "as-text"
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultType === "as-number") {
    return +result;
  }
  return result.toString();
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("mahdi", " ok", "as-text");
console.log(combinedNames);
