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

console.log(typeof number); // prompt prihvat string zato vraca string iako upisemo broj

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

// ! && logicki operator:

// '33'
if (number > 0 && number === 33) {
    console.log(`Your number ${number} is exactly 33 wich is greater than 0!`)
}

const parsedNumber = parseInt(number); // '33' -> 33

if (parsedNumber > 0 && parsedNumber === 33) {
    console.log(`Your number ${parsedNumber} is exactly 33 wich is greater than 0!`)
}

// TODO 5. cas domaci
/**
* 1. Kreirati dve varijable tipa number sa vrednostima 30 i 50
* 2. Uporediti varijable koristeci == i === i rezultate poredjenja ispisati na konzoli
* 3. Uporediti varijable koristeci != i !== i rezultate poredjenja ispisati na konzoli
* 4. Rezultat poredjenja iz 2. zadatka invert-ovati uz NOT operator i ispisati na konzoli
* 5. Kreirati 3. varijablu sa vrednoscu '30' (tipa string)
* 6. Uporediti varijablu sa vrednoscu 30 (number) i '30' (string) pomocu oba tipa equality operatora (== i ===), uporediti razlike rezultata poredjenja
* 7. Kreirati 4. varijablu (npr. promptAnswer) cija se vrednost dobija kroz prompt prozor browser-a
* 8. Vrednost varijable proveriti kroz if - else if - else uslove i shodno tome ispisati status o varijabli u formatu `Value ${promptAnswer} is ________`
*/

// 1.
const myNum1 = 30;

const myNum2 = 50;

// 2.
console.log(`Comparing variables myNum1 and myNum2 by loose equality: ${myNum1 == myNum2}`); // false

console.log(`Comparing variables myNum1 and myNum2 by strict equality: ${myNum1 === myNum2}`); // false

// 3.
console.log(`Comparing variables myNum1 and myNum2 by not equality: ${myNum1 != myNum2}`); // true

console.log(`Comparing variables myNum1 and myNum2 by not equality: ${myNum1 !== myNum2}`); // true

// 4.
console.log(`Invert loose equality result: ${!(myNum1 == myNum2)}`); // true 

console.log(`Invert strict equality result: ${!(myNum1 === myNum2)}`); // true 

// 5.
const myStr = '30';

// 6.
console.log(`Comparing myNum1 and myStr variables by double equality: ${myNum1 == myStr}`); // true

console.log(`Comparing myNum1 and myStr variables by triple equality: ${myNum1 === myStr}`); // false

// 7.
const promptAnswer = prompt('Write some number:');

// 8.
if (promptAnswer > 11) {
    console.log(`Value ${promptAnswer} is greater than 11.`);
} else if (promptAnswer < 11) {
     console.log(`Value  ${promptAnswer} is less than 11.`);
} else {
    console.log(`Value ${promptAnswer} is exactly 11.`);
}

console.log(`----------------------------`);
 

// ! OR logicki operator:

if (parsedNumber > 0 || parsedNumber < 0) {
    console.log(`1st log -> Number ${parsedNumber} is either positive or negative`);
}

// ! Kombinovanje logickih operatora:
// && > ||

if (parsedNumber > 0 && parsedNumber === 5 || parsedNumber < 0) {
    console.log(`2nd log -> Number ${parsedNumber} is either positive or negative`); 
}

if ((parsedNumber > 0 && parsedNumber === 5) || parsedNumber < 0) {
    console.log(`2nd log -> Number ${parsedNumber} is either positive or negative`); 
}

// ! Ternarni(kondicioni) operator:

let answer = (parsedNumber < 0) ? `${parsedNumber} is negative number` : `${parsedNumber} is equal or greater than 0.`;

console.log(answer);

// ? Kombinovanje if-else blokova i trenanrnih operatora:

if (parsedNumber === 0) {
    console.log(`${parsedNumber} is equal to 0.`);
} else {
    let answer = (parsedNumber < 0) ? `${parsedNumber} is negative number` : `${parsedNumber} is equal or greater than 0.`;
    console.log(answer);
}

// ! TRUTHY and FALSY vrednosti:

// FALSY vrednosti: false, '', ``, "", 0, -0, 0n, NaN, null, undefined
// TRUTHY vrednosti: sve sto nije gore navedeno: ('H', true, 12, -41.14, itd...)

// const falsyValue = '';
// const truthyValue = 'JS is great!';

const falsyValue = 0;
const truthyValue = 111;

if (falsyValue) {
    console.log(`Entered FALSy block.`);
}

if (truthyValue) {
    console.log(`Entered TRUTHY block`);
}

// primer:

const answerOfOperation = parsedNumber > 0 && parsedNumber < 50;

console.log(`Answer of operation variable value: ${answerOfOperation}`);

if (answerOfOperation) {
    console.log(`Your number is: ${parsedNumber}`);
}

// primer:

let userCase; // undefined

if (userCase) {
    console.log(`A user has entered: ${userCase}`)
} else if (userCase === null) {
    console.log(`User case vaule is null.`);
} else {
    console.log(`None of above.`);
}

// * Moguce je konvertovati(pretvoriti) truthy i falsy vrednosti u false ili true:

let answerOfOperationConverted = !!answerOfOperation;

console.log(answerOfOperationConverted);

// * Moguce je definisati vrednost varijable na osnovu OR operatora(||):

let userInputName = prompt(`Enter your user name:`);

let userName = userInputName || 'Default User Name';

console.log(`A name that User has provided is: ${userName}`);

// ? duzi nacin ovoga od gore.
// let userName;
// if (userInputName) {
//     userName = userInputName;
// } else {
//     userName = 'Default Name:';
// }

// * Moguce je definisati vrednost varijable na osnovu AND operatora(&&):

let registredUser = true;

let userName1 = registredUser && 'dejan123';

console.log(`User name 1 value: ${userName1}`);

console.log(`-----------------------------`);

// ! SWICH case:

const mathGrade = 4;

switch(mathGrade) {
    case 1: 
        console.log(`Math grade is: 1`);
        break;
    case 2: 
        console.log(`Math grade is: 2`);
        break;   
    case 3: 
        console.log(`Math grade is: 3`);
        break;
    case 4: 
        console.log(`Math grade is: 4`);
        break;
    case 5: 
        console.log(`Math grade is: 5`);
        break;            
}

console.log(`-----------------------------`);

// ! Petlje(loop):

/**
 * 1. for -> koristi se za pozivanje nekog koda nekoliko puta.
 * 2. for-of -> koristi se za pozivanje nad svakim elementom nekog niza.
 * 3. for-in -> koristi se za vracanje svih KEY-eva nekog objekta(mogu se i vratiti vrednosti).
 * 4. while -> izvrsava se dok je neki logicki uslov zadovoljen.
 * 5. do-while -> koristi se kada želimo da se blok koda izvrši barem jednom, bez obzira na to da li je uslov ispunjen.
 *  Nakon prvog izvršavanja, petlja proverava uslov — ako je uslov tačan (true),
 *  izvršavanje se ponavlja; ako nije (false), petlja se prekida.
 */

// ! FOR petlja:

for(let counter = 1; counter <= 5; counter++) {
    console.log(`Counter is ${counter}`);
}

// primer -> program koji racuna zbir prvih 100 prirodnih brojeva:

let sum = 0;

for(let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(`Sum of first 100 natural number is: ${sum}`);

console.log(`-----------------------`);

// ! FOR-OF loop:

const programingLanguages = ['JavaScript', 'C#', 'Phyton', 'Solidity', 'Java'];

console.log(`-----Izvlacenje elemenata iz niza prvo FOR loop-om`);

for(let i = 0; i < programingLanguages.length; i++) {
    console.log(`I want to learn: ${programingLanguages[i]}`);
}

console.log(`-----Izvlacenje elemenata iz niza prvo FOR-OF loop-om`);

// ? Prisup uz for-of loop:

for(let language of programingLanguages) {
    console.log(`I want to learn: ${language}`);
}

const greetings = 'Welcome';

for(let letter of greetings) {
    console.log(letter);
}

// ? FOR-IN loop:

const someUser = {
    name: 'Marko Markovic',
    email: 'marko@gmail.com',
    age: 22,
    student: true
}

for(let key in someUser) {
    console.log(`${key}`); // vraca naziv key-a odnosno property-ja objekta
}

// ! uz . pristup property-ju objekta ovo ne moze u FOR-IN loop-u
// for(let key in someUser) {
//     console.log(`${key} : ${someUser.key}`);
// }

for(let key in someUser) {
    console.log(`${key} : ${someUser[key]}`);
}

// ! Kombinacija FOR-OF i FOR-IN loop-a:

const bankAccaunt = {
    owner: 'Miroljub Pertovic',
    pin: 1389,
    phone: '555-333',
    transactions: ['+300', '-250', '+700', '-25', '+800']
}

console.log(`------Kombinovanje loopova`);

for(let prop in bankAccaunt) {
    console.log(`${prop} : ${bankAccaunt[prop]}`);
    if(prop === 'transactions') { // 'transaction' === 'transaction'
        for(let transactions of bankAccaunt.transactions) {
            console.log(transactions);
        }
    }
}

// ! WHILE loop

let userLoggedIn = true;
let i = 0;

// ! Ovo vraca endless loop(beskonacnu petlju)
// while(userLoggedIn) {
//     console.log(i);
//     i++;
// }

while(i<5) {
    console.log(`While counter i value: ${i}`);
    i++;
}

// ! DO WHILE loop:

i = 0;

do {
    console.log(i);
    i++
} 
while(i<=5);

console.log(`---------break and continue-----`);

// ! BREAK and CONTINUE:

// ? break -> se koristi kada hocemo da prekinemo neku petlju u odredjenoj iteraciji (u odredjenom momentu)

for(let i = 0; i < 5; i++) {
    if(i === 4) {
        break;
    }
    console.log(`Number is: ${i}`);
}

// ? continue -> se korisiti ako hocemo da preskocimo odredjenu iteraciju ako je neki uslov zadovoljen

for(let i = 0; i < 5; i++) {
    if(i === 3) {
        continue;
    }
    console.log(`Number: ${i}`);
}

console.log(`---------TRY-CATCH-FINALLY-----`);

// ! TRY, CATCH, FINALLY blokovi:

// ? try- u ovaj blok ide kod koji moze da baci neki error
// ? catch - u ovaj blok ide kod koji je hendlovanje greske uhvacene u try bloku i obradjivanje te greske
// ? finally - se uvke izvrsava bez obzira da li je try blok prosao ili je uhvacena neka greska
// ? najcesce se koristi za hendlovanje nekih nework greski

try {
    // console.log(`Testing try block`);
    console.log(someRandomVariable);
} catch(error) {
    console.log(error.name + ' ' + error.message);
} finally {
    console.log(`Finally block is always happening`);
}


// TODO: 

// 1. Uporediti vrednost kreirane varijable (const someNum = prompt('Please enter your number')) pomocu ternarnog operatora tako da se ispise da li je broj pozitivan ili negativan
// 2. Dodati OR (||) logicki operator kako bi se proverilo da li je someNum vrednost nula ili veca od nule i rezultat ispisati na konzoli zajedno
// 3. Dodati breakpoint u prethodnom izvrsavanju if bloka i utvrditi potencijalnu gresku na osnovu iscitavanja vrednosti
// 4. za svaku liniju koda u nastavku ispisati sta vraca:
// /**
// * const userEmail = 'marko@gmail.com';
// const backupEmail = '';
// console.log(userEmail === 'marko@gmail.com');
// console.log(userEmail);
// console.log(userEmail || null);
// console.log(backupEmail || 'milan@gmail.com');
// console.log(backupEmail || '');
// console.log(backupEmail || null || 'petar@gmail.com');
// console.log(userEmail && 'petar@gmail.com');
// console.log(backupEmail && 'petar@gmail.com');
// console.log(userEmail && '');
// *
// */
// 5. Kreirati varijablu "dayOfTheWeek" i postaviti na danasnji dan (hardkodovati, npr: 'tuesday'). Promeniti case-ove switch opcijom i u skladu sa tim ispisati vrednost na konzoli.
// 6. Ispisati proizvod svih brojeva od 1 do 10
// 7. Kreirati niz "foreignLanguages" i 3 jezika dodati u njega. Svaki jezik treba da ima svoj naziv i recenicu na tom jeziku.
// 8. Nakon toga, proci kroz niz jezika i ispisati svaki element u formatu:
// 'Here is a sentence on LANGUAGE_NAME : LANGUAGE_SENTENCE'
// 9. Za PRVI jezik iz foreignLanguages dodati (nalepiti) jos jedan property -> teachers niz nastavnika koji predaju jezik (3).
// Za svakog od nastavnika napraviti property firstName i lastName i dodeliti neke vrednosti.
// 10. Ispisati redni broj nastavnika te njegovo ime i prezime i taj jezik koji predaje u formatu:
// Teacher number BROJ : IME PREZIME is teaching JEZIK

// 1. 
let someNum = prompt('Please enter your number');

const myResult = someNum > 0 ? 'Number is positive' : 'Number is negative';

console.log(myResult);

// 2. 
if (someNum > 0 || someNum === 0) {
  console.log('Broj je nula ili pozitivan');
} else {
  console.log('Broj je negativan');
}

// 4.
const userEmail = 'marko@gmail.com';
const backupEmail = '';

console.log(userEmail === 'marko@gmail.com');   // true
console.log(userEmail);                         // 'marko@gmail.com'
console.log(userEmail || null);                 // 'marko@gmail.com'
console.log(backupEmail || 'milan@gmail.com');  // 'milan@gmail.com'
console.log(backupEmail || '');                 // ''
console.log(backupEmail || null || 'petar@gmail.com'); // 'petar@gmail.com'
console.log(userEmail && 'petar@gmail.com');    // 'petar@gmail.com'
console.log(backupEmail && 'petar@gmail.com');  // '' (prvi operand je falsy)
console.log(userEmail && '');                   // '' (drugi operand je falsy)

// 5.

const dayOfTheWeek = 'tuesday'; // hardkodovan primer

switch (dayOfTheWeek) {
  case 'monday':
    console.log('Danas je ponedeljak.');
    break;
  case 'tuesday':
    console.log('Danas je utorak.');
    break;
  case 'wednesday':
    console.log('Danas je sreda.');
    break;
  case 'thursday':
    console.log('Danas je četvrtak.');
    break;
  case 'friday':
    console.log('Danas je petak.');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Vikend je!');
    break;
  default:
    console.log('Nepoznat dan.');
}

// 6.
let proizvod = 1;
for (let i = 1; i <= 10; i++) {
  proizvod *= i;
}
console.log('Proizvod svih brojeva od 1 do 10 je:', proizvod); // 3628800

// 7.
const foreignLanguages = [
  { name: 'English', sentence: 'Hello, how are you?' },
  { name: 'Spanish', sentence: 'Hola, ¿cómo estás?' },
  { name: 'German', sentence: 'Hallo, wie geht es dir?' }
];


// 8.
foreignLanguages.forEach(lang => {
  console.log(`Here is a sentence on ${lang.name}: ${lang.sentence}`);
});


// 9.
foreignLanguages[0].teachers = [
  { firstName: 'John', lastName: 'Smith' },
  { firstName: 'Emma', lastName: 'Johnson' },
  { firstName: 'Michael', lastName: 'Brown' }
];

// 10.
foreignLanguages[0].teachers.forEach((teacher, index) => {
  console.log(
    `Teacher number ${index + 1}: ${teacher.firstName} ${teacher.lastName} is teaching ${foreignLanguages[0].name}`
  );
});