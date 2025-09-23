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

let copyOfFirstTaskOperation = firsTaskOperation;

console.log(firsTaskOperation);
console.log(copyOfFirstTaskOperation);

firsTaskOperation = 555;

console.log(firsTaskOperation);
console.log(copyOfFirstTaskOperation); // stay same as it was

firsTaskOperation = 'res + (res*3) - (10+res)';

let templateLiteralsVariable = `${res} + (${res} * 3) - (10 + ${res})`;

console.log(templateLiteralsVariable);

let secondTaskOperation = 'res * (15 * res) - (res / 2) + res';

let secondTaskOperationString = `${res} * ( 15 * ${res}) - (${res} / 2) + ${res}`;

console.log(secondTaskOperationString);

let gotToNewLineString = `My string can go \nto next line.`; // \n brake string

console.log(gotToNewLineString);

// ! Functions

function helloWorld(planetName) {
    alert(`Hello planet ${planetName}`);
}

// helloWorld('Jupiter');

// helloWorld('Earth');

// helloWorld('Mars');

const result = 'Hello JS!';

function add(number1, number2) {
    const result = number1 + number2;
    console.log(`Testing result variable: ${result}`);
    //  return result;
    return `Result of add function is: ${result}`;
    // return `Result of add function is ${number1+number2}`;
}

console.log(result);

console.log(add(50,100));

console.log(add(3,10));

function printVariable() {
    console.log(`Testing anotherX variable: ${anotherX}`);
}

let anotherX;

anotherX = 55;

printVariable();

// ! Homework

/* 1. Kreirati dve varijable. Jedna neka bude tipa number i neka se zove userInput (na koju god vrednost je postavite) i druga neka se naziva currentResult i nemojte je postaviti ni na kakvu vrednost.
Postavite currentResult varijablu na vrednost userInput plus neki broj (npr 20).
U naredne 3 linije koda, varijablu currentResult promenite u svakoj narednoj liniji koda operacijama oduzimanja, mnozenja i deljenja nad tom currentResult varijablom i svaki put ispisati vrednost varijable na konzoli u formatu koji zelite s tim da pre toga stoji prefiks `Current result is: `
Na kraju varijablu currentResult ispisati u okviru alert prozora, a userInput varijablu ispisati samo na konzoli.

2. Kreirati funkciju square() koja ce broj prosledjen kao parametar podici na kvadrat.
Rezultat vratiti u formatu ‘Result is: broj’.
Funkciji kao argument proslediti odredjeni broj (npr 5).*/

// 1.

let userInput = 38;
let currentResult;

currentResult = userInput + 64;

currentResult = currentResult - 12;
console.log(`Current result is: ${currentResult}`);

currentResult = currentResult / 2;
console.log(`Current result is: ${currentResult}`);

currentResult = currentResult * 25;
console.log(`Current result is: ${currentResult}`);

alert(currentResult);
console.log(userInput);

// 2. 
function squareNumber(squareNum) {
    const finalResult = squareNum**2;
    return `Result is: ${finalResult}`;
}

console.log(squareNumber(5));