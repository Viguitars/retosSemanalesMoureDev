/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 *
 */

let count = 0;
function isAPrimeNumber(num) {
    for (i = 1; i <= num; i++) {
        if (num % i == 0) {
            count += 1;
        }
    }
    if (num == 1 || count > 2) {
        return false;
    } else {
        return true;
    }
}

for (i = 1; i <= 100; i++) {
    if (isAPrimeNumber(i)) {
        console.log(i);
    }
}