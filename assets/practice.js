// ! Variables(var, const, let):

// ? Let (1. mogu se pregaziti vrednosti 2. let varijable mozemo deklarisati i inicijalizovati)

let firstString = 'My first string';

let mySecondVariable;

mySecondVariable = 'Dejan';

firstString = 25;

console.log(firstString);



// ? Const (ne moze se pregaziti vrednosti)

const myAge = 26;

console.log(myAge);

// ? Dobra praksa u pisanju JS-a:

// 1. Imenovanje varijabli u CamelCase formatu:
let camelCaseVariable;

// 2. U imenovanj koristiti brojeve:
const top11 = 11;

// 3. U imenovanju mozemo koristi $ ili _ prefiksom
let $specialVar;
let _intervalVar;

// ! Losa praksa u pisanju JS-a:

// 1. Imenovanje varijabli uz odvajanje reci uz _  snake_case formatu:
let not_good_idea;

// 2. Imenovanje varijabli uz cifru na pocetku naziva:
// let 7continets = 7;

// 3. Imenovanje varijabli u kebab-case formatu:
// let my-variable;

// 4. Imenovanje varijabli uz koriscenje kljucnih (rezervisanih) reci:
// let const;
// const let;

// ! OPERATORI

//  + - / * % **

let someNumber = 20;

someNumber = someNumber + 50;

console.log(someNumber);

let square = 2**2;

console.log(square);

someNumber = someNumber + (50 * 3) + 13;

console.log(someNumber);

// ! Homework

// 1. Kreirati varijable proizvoljnog naziva u dozvoljenom camelCase formatu, kreirati ih uz kombinaciju let i const.
// 2. Napraviti 2 varijable uz let ili const, prva varijabla neka sacuva rezultat neke matematicke operacije, druga ne sacuva opis matematicke operacije koju smo napisalu

// 1.
let firstVar = 55;
const personName = 'Milan';
let secondVar = firstString - 5;

console.log(firstVar);
console.log(personName);
console.log(secondVar);

// 2.
let a = 20;
let operation;

const myOperation = a + 25 - 40 - a / 2 + 5 * 3;
operationStr = 'a + 25 - 40 - a / 2 + 5 * 3';

console.log(myOperation);
console.log(operationStr);

let myMathOperation = (a / 10) + (a * 5) - 10;

let myMathOperationString = '(' + a + ' / 10) + (' + a + ' * 5 ) -10';

console.log(myMathOperation);

console.log(myMathOperationString);

let res = 10;

let firsTaskOperation = 'res + (res*3) - (10+res)';

let firsTaskOperationString = res + ' + (' + res + '*3) - (10+' + res + ')';

console.log(firsTaskOperationString);