/**
 * Que es un callback?
 * los callbacks son el nombre de 
 * una convencion para usar funciones
 * que llaman a otras en JavaScript.
 * no hay una palabra reservada llamada
 * "callback" en el lenguaje JavaScript
 * que haga que nuestro codigo sea 
 * diferente o especial, es mas una convencion.
 * Tal es el caso que en lugar de llar
 * "callback" lo llamaramos "suma" 
 * funcionaria exactamente igual a que si
 * lo llamamos "callback"
 * 
 * Para que sirven los callbacks?
 * la mayoria estamos acostumbrados a programar 
 * de manera sincrona. El problema radica en 
 * que si quisieramos crear un programa que 
 * nos convierta nuestra moneda (pesos) a su
 * equivalente en Bitcoin, podemos definir X
 * (valor de nuestro dinero) pero no podemos
 * definir de manera implicita "Y" (precio del
 * Bitcoin) por que es algo muy volatil.
 * 
 * ventajas
 * Simple: son conceptualmente simples. 
 * pasas una funcion que quieras que se
 * ejeute despues.
 * 
 * Universal: corren donde sea. no requiere 
 * de un transpilador.
 * 
 * desventajas
 * composicion robusta: las llamadas anidadas
 * pueden llevar a realizar un codigo con aun
 * mas anidaciones dentro (callback hell)
 * 
 * Flujo poco intuitivo: requieren que te muevas
 * dentro del codigo para comprender el flujo
 * del mismo.
 * 
 * consejo para el uso de callbacks
 * muchas de las funciones del core de node.js
 * estan basadas en callbacks, no obstante, a 
 * partir de la vrsion ES6 se ha simplificado 
 * el codigo con el uso de las promesas. 
 * usa los callbacks lo menos posible para 
 * mantener un codigo limpio.
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */

function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1,num2);
}

console.log(calc(4,4,sum));

function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);