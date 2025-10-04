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

// TODO-Homework:

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

// TODO-Homework:

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

// alert(currentResult);
console.log(userInput);

// 2. 
function squareNumber(squareNum) {
    const finalResult = squareNum**2;
    return `Result is: ${finalResult}`;
}

console.log(squareNumber(5));

console.log(`--------------------------`);

// ! Konvertovanje tipova podataka

// let myRes = 22 + '545'; // 22545

// console.log(myRes);


let myRes = 22 + parseInt('545'); // 567

console.log(myRes);

let myResFloat = 22 + parseFloat('44.5'); // 66.5

console.log(myResFloat);

myRes = myRes + +'55'; // 622 -> ako dodamo +ispred '55' automatski string pretvara u number

console.log(myRes);

let myResStr = myRes.toString(); // '622'

console.log(myResStr);

// ? implicitna konverzija

myRes = 3 * '20'; // 60 -> iz stringa automatski vratio u number 

console.log(myRes);

myRes = '40' - 10; // 30

console.log(myRes);

myRes = '50' / 2; // 25

console.log(myRes);

// ? Kraci zapis operatora

myRes += 65; // 90

console.log(myRes);

myRes *= 2; // 180

console.log(myRes);

myRes -= 40; // 140

console.log(myRes);

myRes /= 70; // 2

console.log(myRes);

myRes **= 2; // 4

console.log(myRes);

// ? icrement and decrement opertori 

let counter = 0;

// increment
counter ++; // 1

// decrement
counter --; // 0 -> bilo je 1 zbog incrementa i sad je 0 zbog decrementa

console.log(counter);

// alert(counter++);  // 0

// alert(++counter); // 1

// ! Ostali tipovi podataka

/*
 1. string
 2. number
 3. boolean (true, false) -> koristi se za kontorlu toka programa
 4. object -> strukture podataka dozvoljavaju nam da grupisemo podatke
 5. arrays -> nizovi su lista podataka
 6. undefined
 7. null
*/

// ! Arrays(nizovi)

let myArray = [];

myArray = [1,2,3,4,5];

myArray.push(6);

myArray.push(44);

myArray.push(888);

// myArray.push('Hello World'); -> ne moramo samo number dodavati

console.log(myArray);

console.log(`First item in my Array is: ${myArray[0]}`); // 1 

console.log(`Last item in my Array is: ${myArray[myArray.length-1]}`); // 888

// ! Objects
// podaci se beleze u key: value paru

const person = {
    firstName: 'Miroljub',
    lastName: 'Petrovic',
    age: 26,
    gender: 'male',
    isStudent: false
};

// * 1. Nacin
// person.nationality = 'Serbian';

// * 2. Nacin
// person[nationality] = 'Serbian';

console.log(person.firstName);

console.log(`Person's name is: ${person.firstName} ${person.lastName}`);

console.log(`Person's name is: ${person.firstName} and is: ${person.age} years old.`);

console.log(`Is studnet: ${person.isStudent}`);

// ! undefined vs null

let testVariable;

console.log(testVariable); // undefined

let testVariable2 = null; // null

console.log(testVariable2);

// ? NaN (Not a number) -> NaN nije tip podatka vec tip number-a

console.log(100 - 'Hello World!'); // NaN

// ? typeOf operator -> sluzi za proveru tipa vrednosti

console.log(typeof(counter)); // number

console.log(typeof(5 - 'Hello World!')); // number

console.log(typeof(40.23)); // number

console.log(typeof('My random string')); // string

console.log(typeof(true)); // boolean

console.log(typeof(person)); // object

console.log(typeof(myArray)); // object

console.log(typeof(null)); // object

console.log(typeof(undefined)); // undefined

// * 2. Nacin za typeOf

console.log(typeof 'my random string'); // string

// TODO-Homework:

/*
    1. Kreirati varijablu proizvoljnog naziva. U varijablu dodati vrednost koja se dobije tako sto saberu vrednosti 33 (tipa number) i ‘27’ (tipa string). Obezbediti konverziju (parsiranje) string-a u number kako bi se matematicka operacija uspesno izvrsila. Na kraju napraviti novu varijablu u koju cete dodati vrednost koja se dobija parsiranjem dobijenog number-a u string.
    2. Prvu varijablu (tipa number) uvecati za 10 koristeci skraceni tip operatora. Nakon toga istu varijablu dekrementovati za jedan i ispisati konacnu vrednost na konzoli uz ispis ‘Current value is vrednost_varijable’.
    3. Kreirati niz sa od sledecih elemenata: ‘hello’ , ‘planet’ , ‘Jupiter’. Na kraju izvrsiti konkatinaciju ovih stringova i rezultat ispisati na konzoli.
    4. Kreirati objekat course i u njega dodati property-je: courseName (tipa string) i proizvoljnu vrednost, courseTeacher (tipa string) i proizvoljnu vrednost, duration (tipa number) i proizvoljnu vrednost i languages (tipa array) i proizvoljan niz elemenata.
    5. Ispisati na konzoli kompletan niz elemenata (languages property) iz course objekta.
    6. Ispisati poslednji element istog tog niza na konzoli.
    7. Resetovati vrednost varijable iz prvog zadatka na praznu vrednost uz odgovarajuci tip podatka.
    8. Proveriti tip podatka varijable iz prvog zadatka.
 */

// 1. Zadatak:

let firstParsedVariable = 33 + +'27'; 

console.log(firstParsedVariable);    

let secondParsedVariable = firstParsedVariable.toString();

console.log(secondParsedVariable); 

// 2. Zadatak:

firstParsedVariable +=10;

firstParsedVariable--; 

console.log(`Current value is: ${firstParsedVariable}.`);    

// 3. Zadatak: 

let myFirstArray = ['hello', 'planet', 'Jupiter'];

console.log(`Say hi to planet: ${myFirstArray[0]} ${myFirstArray[1]} ${myFirstArray[2]}`);

// 4. Zadatak:

const course = {
    courseName: 'Javascript basics',
    courseTeacher: 'Dejan Karakasevic',
    duration: 6,
    languages: ['Javascript', 'ReactJS', 'NodeJS']
}

// 5. Zadatak:

console.log("My full array:", course.languages);

// 6. Zadatak:

console.log(`My last array element is: ${course.languages[course.languages.length - 1]}`);

// 7. Zadatak:

firstParsedVariable = null;

// 8. Zadatak:

console.log(typeof(firstParsedVariable)); // object

console.log(`-------------------------------`);

// ? false -> je default vrednost
let myBool; // false

// ! Operatori poredjenja (== i ===)

// ? operator == -> operande poredi samo po vrednosti (double (loose) equality)

console.log(`10 == 10 is: ${10 == 10}`); // true

console.log(`50 != 50 is: ${50 != 50}`); // flase -> ovo je NOT operator !=

console.log(`Comparing strings 'Hello' and 'Hello': ${'Hello' == 'Hello'}`); // true

console.log(`Comparing strings 'World' and 'Winter': ${'World' == 'Winter'}`); // false

console.log(`Comparing strings 'World' and 'world': ${'World' == 'world'}`); // flase

console.log(`Comparing not equality of strings 'World' and 'Winter': ${'World' != 'Winter'}`); // true

console.log(`100 and '100'is equal? : ${100 == '100'}`); // true

// ? operator === -> operande poredi i po vrednosti i po tipu vrednosti (triple (strict) equality)

console.log(`100 and '100'is equal? : ${100 ==='100'}`); // false

console.log(`100 and '100'is equal? : ${100 === parseInt('100')}`); // true

console.log(`100 and '100'is not equal? : ${100 !== parseInt('100')}`); // false

// ! Poredjenje vrednosti po: >, <, >=, <=

console.log(`25 > 3 is: ${25 > 3}`); // true

console.log(`-17.7 < 0 is: ${-17.7 < 0}`) // ture

console.log(`44 >= 44 is: ${44 >= 44}`); // true

console.log(`2 <= 2 is: ${2 <= 2}`); // true

console.log(`33 > '12' is: ${33 > '12'}`); // true

console.log(`33 < '11' is: ${33 < '11'}`); // false

// ? Pordjenje stringova
// b > a 

console.log(`'ab' > 'aa' is: ${'ab' > 'aa'}`); // true

console.log(`'c' > 'C' is: ${'c' > 'C'}`); // true

console.log(`'a' > 'B' is: ${'a' > 'B'}`); // true

// ! STATMENTI(blokovi):

// 1. IF blokovi (IF statment):

if (5 === 5) {
    console.log(`5 is equal to 5`);
}

if (20 === '20') {
    console.log(`20 is equal to '20'`);
}

if (20 !== '20') {
    console.log(`20 is not equal to '20' by triple equality.`);
}

// primer uz promt prozor

console.log(`-----------IF-BLOKOVI-------------`);

const number = prompt('Eneter your number: ');

console.log(typeof number); // prompt prihvat string zato vrac string iako upisemo broj

if (number > 0) {
    console.log(`Your number ${number} is greater than 0.`);
}

// 1. IF-ELSE blokovi:

console.log(`-----------IF-ELSE-BLOKOVI-------------`);

if (number > 0) {
    console.log(`Your number ${number} is greater than 0.`);
} else {
    console.log(`Your number ${number} is less than 0.`);
}

// 1. IF-ELSE IF-ELSE blokovi:

console.log(`-----------IF-ELSE IF-ELSE-BLOK-------------`);

if (number > 0) {
    console.log(`Your number ${number} is greater than 0.`);
} else if (number < 0) { 
    console.log(`Your number ${number} is less than 0.`);
} else {
    console.log(`Your number ${number} is eqaul to 0.`);
}

// ! Ugnjezdeni IF-ELSE(nest-ovani) blokovi:

console.log(`-----------Ugnjezdeni IF-ELSE-BLOK-------------`);

if (number >= 0) {
    if (number > 0) {
        console.log(`Your number ${number} is greater than 0.`);
    } else {
        console.log(`Your number ${number} is eqaul to 0.`);
    }
} else {
    console.log(`Your number ${number} is less than 0.`);
}

// ! Poredjenje objekata i nizova

const firstCourse = {
    name: 'Java'
}

const secondCourse = {
    name: 'Java'
}

console.log(`Comparing objects: ${firstCourse === secondCourse}`); // false 

console.log(`Comparing objects: ${firstCourse == secondCourse}`); // false 

const courses = ['Java', 'Javascript', 'C#'];

const otherCourses = ['Java', 'Javascript', 'C#'];

console.log(`Comparing arrays: ${courses === otherCourses}`); // false

console.log(`Comparing arrays: ${courses == otherCourses}`); // false

// ! Poredjenje uz vise logickih uslova(and,or,not(!)):

// true i false => false
// false i false => false
// true i true => true

console.log(`---------AND(&&)-OR-NOT (!)--------------`);

// '33'
if (number > 0 && number === 33) {
    console.log(`Your number ${number} is exactly 33 wich is greater than 0!`)
}

const parsedNumber = parseInt(number); // '33' -> 33

if (parsedNumber > 0 && parsedNumber === 33) {
    console.log(`Your number ${parsedNumber} is exactly 33 wich is greater than 0!`)
}
