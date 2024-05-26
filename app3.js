
let favoriteSnack = prompt("Enter your favorite snack:");

let currentAge = parseInt(prompt("Enter your current age:"));


let maxAge = parseInt(prompt("Enter your maximum age:"));

let amountPerDay = parseFloat(prompt("Enter the estimated amount of snacks you eat per day:"));

let remainingYears = maxAge - currentAge;
let totalSnacks = remainingYears * 365 * amountPerDay;


console.log("You will need", Math.round(totalSnacks), "to last you until the ripe old age of", maxAge);

