//1
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let long = fruits.length;
console.log(long);

//2
const cars = ["Bentley", "Mustang", "Nissan", "Ferrari"];
let index = cars.indexOf("Mustang");
console.log(index);

//3
const motor = ["supra", "astrea", "karisma"]
motor.push("honda")
console.log(motor);

//4
const drink = ['mizone', 'aqua', 'leminerale']
const drinks = ['sprite', 'coca-cola']
const result = drink.concat(drinks)
console.log(result);

//5
const ages = [32, 33, 16, 40];
ages.every((item)=>{
    console.log(item > 18);
})

//6
const score = [90, 80, 85, 70, 15, 16, 30];
let results = score.find((item)=>{
    return item < 80
})
console.log(results);

//7
let text = "Hello World";
let letter = text.charAt(0);
console.log(letter);

//8
let junkFoods = ['hamburgers', 'hotdog', 'pizza']
junkFoods.pop()
console.log(junkFoods);

//9
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers.includes(5));

//10
let buah = ['pisang', 'anggur', 'apel']
buah.shift()
console.log(buah);