/**
 * tipo de datos
 */
 console.log("-------------------------------------------");
 console.log("-------------------------------------------");
 console.log("-------------------------------------------");
 console.log("-------------------------------------------");
console.log("TIPOS DE DATOS");

console.log(typeof 16071999);
console.log(typeof "slasher");
console.log(typeof true);
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

var nombre = "alexis";
var edad = 16071999;

var elementos = ["compoutadora", "celular"];
var persona = {
    nombre: "Alexis",
    edad: 22
}

console.log(persona);

var personas = [
    {id: 1, nombre: "Alexis", edad: 22},
    {id: 2, nombre: "Ari", edad: 2},
    {id: 3, nombre: "Liz", edad: 22},
];

console.log(personas);

/**
 * funciones 
 * nota* 
 * en javascript no existe la sobrecarga de metodos
 * por lo que no hay una distincion entre dos 
 * funciones con el mismo nombre,
 * es decir, no importa si entre dos funciones
 * tienen un numero diferente de parametros,
 * el compilador de javascript sobreescribira 
 * la primera funcion ultima 
 * funcion que tenga el mismo nombre 
 */
//funcion declarativa
console.log("-------------------------------------------");
console.log("-------------------------------------------");
console.log("-------------------------------------------");
console.log("-------------------------------------------");
console.log("FUNCIONES");

function nueevaFuncion() {
    return 3;
}

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);
}

saludarEstudiante("Jose Alexis Vazquez Morales");

function sumar(a,b) {
    return a + b;
}

console.log(sumar(5,6));

function multiplicar(x,y) {
    return x * y;
}

console.log(multiplicar(5,2));

//expresion de funcion
var miFuncion = function(a,b) {
    return a + b;
}

var miFuncion = function(a,b,c) {
    return a + b + c;
}

console.log(miFuncion(5,5));
console.log(miFuncion(5,5,5));

/**
 * scope
 */
console.log("SCOPE");

//scope global
var firstname = "Alexis";

//scope local
function myName() {
    var lastname = "Vazquez";

    console.log(this.firstname + " " + lastname);
}

myName();
console.log(firstname + " " );

/**
 * hoisting
 * 
 * el hoisting es un proceso del compilador de 
 * javascript, que consiste en que la declaracion de 
 * las variables y las funciones son llevadas al inicio
 * del codigo, sin importar su posicion para su 
 * procesamiento, sin embargo, la inicilizacion de 
 * las variables no es llevada al inicio del codigo
 * oara su compilacion, sino solo su declaracion, lo
 * cual suele dar espacio a errores cuando se declara 
 * una variable sin inicializarla.
 */
//ejemplo

console.log("-------------------------------------------");
console.log("-------------------------------------------");
console.log("-------------------------------------------");
console.log("-------------------------------------------");
console.log("SCOPE");

saludo();

function saludo() {
    console.log("hola " + nombre2);
}

var nombre2 = "Jose Alexis";

/**
 * Coercion
 * es la forma en la que podemos cambiar un tipo de
 * valor a otro (lo que conocemos en java como casting
 * de variables): 
 * implicita: El lenguaje cambia los tipos de 
 * valores para que funcione el codigo
 * explicita: es cuando nosotros obligamos a que una
 * variable cambia de un tipo de valor a otro tipo
 */
 console.log("-------------------------------------------");
 console.log("-------------------------------------------");
 console.log("-------------------------------------------");
 console.log("-------------------------------------------");
 console.log("COERCION");

//coercion implicita
var b = 4 * "7";
console.log(b);
console.log(typeof b);

var z = "7" * 4;
console.log(z);
console.log(typeof z);

//coercion explicita
var shouldBeAString = 285;
var shouldBeANumber = "285";

console.log(String(shouldBeAString));
console.log(Number(shouldBeANumber));

/**
 * valores truthy
 * valores falsy
 */
 console.log("-------------------------------------------");
 console.log("-------------------------------------------");
 console.log("-------------------------------------------");
 console.log("-------------------------------------------");
 console.log("VALORES VERDADEROS Y FALSOS");
//false
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean(""));

//true
console.log(Boolean(1));
console.log(Boolean("a"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function() {}));

/**
 * operadores de asignacion, comparacion y aritmeticos
 */
console.log("-------------------------------------------");
console.log("-------------------------------------------");
console.log("-------------------------------------------");
console.log("-------------------------------------------");
console.log("ESTRUCTURAS CONDICIONALES IF, ELSE, ELSE IF");

var isRequired = false;
var age = 18;

if (isRequired) {
    console.log("an explication is required");
} else {
    console.log("an explication isn't required");
}

if (age > 17) {
    console.log("mayor de edad");
} else {
    console.log("menor de edad");
}

if (isRequired && age >= 18) {
    console.log("los documentos son requeridos y el usuario es mayor de edad");
} else if (!isRequired && age <= 17){
    console.log("los documentos no son requeridos y el usuario es menor de edad");
} else if (!isRequired && age >= 18) {
    console.log("los documentos no son requeridos y el usuario es mayor de edad");
} else {
    console.log("cualquier caso extra");
}

/**
 * Arrays
 */
 console.log("-------------------------------------------");
 console.log("-------------------------------------------");
 console.log("-------------------------------------------");
 console.log("-------------------------------------------");
 console.log("ARRAYS");

var items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];
console.log(items);
console.log(items.length);
console.log(items[0]);
console.log(items[2]);
console.log(items[3]);

items.push("item8");
console.log(items);

items.pop("item8");
console.log(items);

items.unshift("item9");
console.log(items);

items.shift();
items.shift();
items.shift();
console.log(items);

console.log(items.indexOf("item7"));

console.log("-------------------------------------------");
console.log("-------------------------------------------");
console.log("-------------------------------------------");
console.log("-------------------------------------------");
console.log("LOOPS");

var students = ["Alexis", "Maria", "Liz", "Alberto", "Carlos"];

console.log("<<<for>>>");
for (var i = 0; i < students.length; i++) {
    console.log("hello " + students[i]);
}

console.log("<<<for each>>>");
for (var student of students) {
    console.log(student);
}

console.log("<<<while>>>");
var i = 0;
while (i < students.length) {
    console.log(students[i]);
    i++;
}

console.log("<<<do while>>>");
i=0;
do {
    console.log(students[i]);
    i++;
} while(i < students.length);
/**
 * -------------------------------------------
 * -------------------------------------------
 * -------------------------------------------
 * -------------------------------------------
 * 
 */

const fullText = document.getElementById('button-1');

function updateName() {
    let name = prompt('enter your name');
    console.log(fullText);
    //fullText.textContent = 'SU NOMBRE ES: ' + name;
}