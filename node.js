// Write a function that returns the string "something" joined with a space " " and the given argument a.

// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// giveMeSomething("something") ➞ "something something"

// First Way

// const giveMeSomething = (str) => ["something", str].join(" ");

// console.log(giveMeSomething ("is better than nothing"));

// Second Way

// function giveMeSomething (str) {
//     return "something" + " " +str
// }
// console.log(giveMeSomething("is better than nothing"));

// Third Way

// function giveMeSomething(a) {
//   return `something ${a}`}
// console.log(giveMeSomething("is better than nothing"));

// Fourth Way

function giveMeSomething(a) {
  return "something " + a;
}
console.log(giveMeSomething("is better than nothing"));
