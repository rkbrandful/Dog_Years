//setting my age 
const myAge = 25;
//this value equates how humans grow early years
let earlyYears = 2;
//multiplying this yeaars to get equivalence in dog years
earlyYears *= 10.5;
//taking care of first two years
let laterYears = myAge - 2;
//subsequent 4 years in dog years;
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//adding the years together;
myAgeInDogYears = laterYears + earlyYears;
//my name in lower cases;
myName = 'Kofi Stunner'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)