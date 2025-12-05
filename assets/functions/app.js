// ! Function-Basics:

// ! Function Declaration:
function someFunction(name) {
    return name;
}

console.log(someFunction('Dejan'));

const student = {
    name: 'Nikola',
    lastName: 'Nikolic',
    age: 23,
    sayHello: function() {
        console.log(`Good Morning!`); // ! Kada funkciju smestimo u neki objekat to se naziva metoda
    }
}

console.log(`Student name: ${student.name}`);
student.sayHello();

// ! Funkcije su objekti

console.log(typeof student.sayHello); // function

// ? console.dir -> je funkcija koja vraca listu property-a za neki js objekat
console.dir(student.sayHello);

// ! FUNCTION EXPRESSION --> Smestanje funkcija u varijable

const myFunc = function(a,b) {
    return a*b;
}

console.log(`Result is: ${myFunc(5,10)}`); //50

const printStudentName = function(student) {
    // Ovo je duzi nacin ali bolji za pocetak da se bolje razume kod
    const studentName = student.name;
    const studentLastName = student.lastName;
    return `Student ${studentName} ${studentLastName}`;

    // Kraci nacin ali tezi za pocetak
    // return `${student.name} ${student.lastName}`
}

console.log(printStudentName(student));


// Primer funkcije kroz function expression koji argument dize na kavdrat

const squareNumber = function(someNum) {
    return someNum**2;
}

// ! Funkcije su Reuseable code!!
console.log(`Some number on square is: ${squareNumber(5)}`);
console.log(`Some number on square is: ${squareNumber(3)}`);
console.log(`Some number on square is: ${squareNumber(7)}`);
console.log(`Some number on square is: ${squareNumber(11)}`);
console.log(`Some number on square is: ${squareNumber(22)}`);
console.log(`Some number on square is: ${squareNumber(6)}`);

// ! Hoisting Function Declaration:
// pomocu hoistinga mozemo podici na vrh scoop-a kojem pripada.

console.log(`Random decimal number is ${getRandomNumber()}`);

function getRandomNumber() {
    return Math.random();
}

// ! Hoisting Function Expression:

const getCurrentYear = function() {
    const date = new Date();
    return date.getFullYear();
}

console.log(`Current year is: ${getCurrentYear()}`);

// ! ANONYMOUS FUNCTION:

// setTimeout --> Je funkcija koja kada se pozove poziva neku drugu funkciju:

setTimeout(function() {
    console.log(`Printed result of setTimeout Function`); // ! Poziva se jednom
}, 4000);

// setInterval --> Je funkcija koja kada se pozove poziva neku drugu funkciju ali vise puta(zavisno od vrednosti koji smo prosledili):

/*
setInterval(function() {
    console.log(`Printed result of setInterval Function`); // ! poziva se svake 2 sekunde
}, 2000);*/


const btnTestRef = document.getElementById('btnTest');

btnTestRef.addEventListener('click', function() {
    console.log(`Test button has been clicked!`);
});

// ! ARROW FUNCTIONS:

// primer:

const subtractTwoNumbers = (x,y) => {
    return x - y;
}

// Ovo su dve iste funkcije:
function subtractTwoNumbersOld(x,y) {
    return x-y;
}

console.log(`Result of subtracted numbers is: ${subtractTwoNumbersOld(100,70)}`); // 30

console.log(`Result of subtracted numbers is: ${subtractTwoNumbers(10,7)}`); // 3


// ? Kraci nacin zapisa arrow funkcija:

const subtractTwoNumbersShort = (x,y) => x - y;

console.log(`Result of subtracted numbers is: ${subtractTwoNumbersShort(100,22)}`); // 78

// ? arrow functions bez parametara:

const arrowFuncWithoutParams = () => {
    console.log(`I call arow functions without params`);
}

arrowFuncWithoutParams();

const arrowFuncWithoutParamsShorter = () => console.log(`I call arow functions without params shorter`);

arrowFuncWithoutParamsShorter();

// ? arrrow funkcija sa jednim parametrom

const arrowSquareFunc = number => number**2; 

console.log(`${arrowSquareFunc(9)}`); // 81

/**
* TODO 9. CAS DOMACI (koriscenje ili regularnih ili anonimnih funkcija)
*
* 1. Prepraviti sledecu funkciju:
*
* function sumUp(a, b) {
* return a + b;
* }
*
* u format ARROW funkcije.
*
* 2. U istu funkciju (sumUp) za parametar b dodati default vrednost, koja ce biti koriscena u slucaju da se vrednost
* ne prosledi (npr 10).
*
* 3. Kreirati u DOM-u dva button-a (Start Counting i Stop Counting).
* 4. Kreirati po jedan event za ta oba button-a.
* 5. Kada se klikne start counting button, na svaki sekund neka se na konzoli ispise trenutna vrednost counter-a.
* 6. U momentu kada se klikne na stop counting button, ispisivanje na konzoli counter-a treba da prestane.
**/

// 1. Zadatak:
const sumUp = (a,b) => a + b;

console.log(`Result of adding a and b is ${sumUp(32,12)}`); // 44

// 2. Zadatak 
const sumUpWithDefault = (a, b = 10) => a + b;

console.log(sumUpWithDefault(32)); // 42

// 3 i 4. Zadatak
const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');

let counter = 0; 
let intervalId;         


// 5. Zadatak
startButton.addEventListener('click', function() {

  if (!intervalId) {
    intervalId = setInterval(() => {
      counter++;
      console.log(counter);
    }, 1000);
  }
});

// 6. Zadatak
stopButton.addEventListener('click', function() {
  clearInterval(intervalId); 
  intervalId = null;          
});


/** *
 * TODO zadaci sa interneta
 * */

// ===============================
// FUNKCIJE I ARROW FUNKCIJE
// ===============================

// Zadatak 1
const multiplyNumbers = (a, b = 5) => a * b;
console.log("Zadatak 1:", multiplyNumbers(4), multiplyNumbers(4, 3));

// Zadatak 2
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log("Zadatak 2:", greet(), greet("Marko"));


// ===============================
// OBJEKTI I METODE
// ===============================

// Zadatak 3 i 4
const car = {
  brand: "Audi",
  model: "A4",
  year: 2020,
  printInfo() {
    console.log(`${this.brand} ${this.model} (${this.year})`);
  },
  updateYear(newYear) {
    this.year = newYear;
    return `Updated year: ${newYear}`;
  }
};

console.log("Zadatak 3:");
car.printInfo();

console.log("Zadatak 4:");
console.log(car.updateYear(2024));
car.printInfo();


// ===============================
// DOM MANIPULACIJA + EVENTI
// ===============================

// Zadatak 5 – Promena pozadine
document.getElementById("colorBtn").addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.background = randomColor;
  console.log("Nova boja:", randomColor);
});

// Zadatak 6 – Timer start/stop
let intervalId2;

document.getElementById("startTimer").addEventListener("click", () => {
  let counter = 0;
  intervalId2 = setInterval2(() => {
    console.log("Counter:", counter++);
  }, 1000);
});

document.getElementById("stopTimer").addEventListener("click", () => {
  clearInterval(intervalId);
  console.log("Timer zaustavljen.");
});

// Zadatak 7 – Odbrojavanje
document.getElementById("countDownBtn").addEventListener("click", () => {
  let time = 10;
  const countdownEl = document.getElementById("countdown");

  countdownEl.textContent = time;

  const countdownInterval = setInterval(() => {
    time--;
    countdownEl.textContent = time;

    if (time === 0) {
      clearInterval(countdownInterval);
      countdownEl.textContent = "Time's up!";
    }
  }, 1000);
});

// Zadatak 8 – Pozdrav iz inputa
document.getElementById("sayHiBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  const sayHi = (ime) => console.log(`Hello, ${ime}!`);

  if (name.trim() === "") {
    console.log("Unesi ime!");
  } else {
    sayHi(name);
  }
});
