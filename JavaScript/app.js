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
let members = [45, 10, 14, 16, 85, 65, 42, 32, 31];
// members.filter((e) => console.log(e > 18));
members.filter((e) => e > 18);
// console.log(members);
let plusAge = members.filter(e => e > 18);
console.log(plusAge)










