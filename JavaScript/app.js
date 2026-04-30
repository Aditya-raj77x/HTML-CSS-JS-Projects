// let a = ["appke", "banana", "mango", "grappes"]
// console.log(a);
// a.push("run");
// console.log(a);
// a.push("walk", "why walk");
// console.log(a);
// let v = a.pop();
// console.log(a);
// console.log(v)
// a.unshift("111");
// console.log(a);
// a.unshift("444", "888", "---");
// console.log(a);
// let g = a.shift();
// console.log(a);
// console.log(g);

// // 2nd wala
// let a = ["appke", "banana", "mango", "grappes"]
// console.log(a.includes("mango"));
// console.log(a.includes("Mango"));
// console.log(a.includes("appke"));
// console.log(a.includes("appke", 1));

// let a = ["appke", "banana", "mango", "grappes"]
// console.log(a.indexOf("mango"));
// console.log(a.indexOf("appke", 1));

// let score = [10, 5, 54, 80, 65, 90]
// let newData = score.find(s => s > 50);
// console.log(newData);

// let score = [10, 5, 54, 80, 65, 90]
// let c = score.slice(1, 3);
// console.log(c)

// let score = [1, 2, 3, 4, 5]
// score.splice(2, 0, 66);
// console.log(score)
// at 3 position
// score.splice(3, 0, "aditya")
// console.log(score)
// replace
// score.splice(1, 1, "raj");
// console.log(score)

// score.splice(2, 1);
// score.splice(2, 2);

// console.log(score)

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3);
// console.log(arr);
// arr.splice(2, 2);
// console.log(arr);
// arr.splice(1, 0, 45, 100)
// console.log(arr)
// arr.splice(2, 2, 45, 80);
// console.log(arr)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newarr = arr.forEach((e) => {
//     // console.log(e * 2);
// });
// console.log(newarr);


// let data = [
//     { name: "laptop", price: 1000 },
//     { name: "phone", price: 5000 },
//     { name: "charger", price: 500 },
// ];
// // data.map((e) => console.log(e.name.toUpperCase()));
// let nameOnly = data.map((e) => {
//     return e.name
// })
// let priceOnly = data.map(e => e.price);
// console.log(nameOnly)
// console.log(priceOnly)
// let members = [45, 10, 14, 16, 85, 65, 42, 32, 31];
// // members.filter((e) => console.log(e > 18));
// members.filter((e) => e > 18);
// // console.log(members);
// let plusAge = members.filter(e => e > 18);
// console.log(plusAge)


// const users = ["Alice", "Bob", "Charlie"];

// // Let's just say hello to everyone
// users.forEach((name) => {
//     console.log("Hello, " + name + "!");
// });
// Output in console:
// "Hello, Alice!"
// "Hello, Bob!"
// "Hello, Charlie!"

// If you try to save it to a variable, it fails:
// const result = users.forEach(name => name);
// console.log(result); // Output: undefined


// const products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 },
//     { name: "Tablet", price: 300 }
// ];

// // Let's create a new array that ONLY contains the prices
// const pricesOnly = products.map((item) => {
//     return item.price;
// });

// console.log(pricesOnly);
// // Output: [1000, 500, 300]
// // The original 'products' array is completely untouched!


const numbers = [15, 2, 8, 42, 7, 101];

// Let's keep only the numbers greater than 10
const bigNumbers = numbers.filter((num) => {
    return num > 10; // This is the True/False test
});

console.log(bigNumbers);
// Output: [15, 42, 101]
console.log(numbers) // orignal  data stays the same 


