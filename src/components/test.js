const a = "2 + 2";
const b = Function("return" + a)();

console.log(b);