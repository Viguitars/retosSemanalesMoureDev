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

function isAPrimeNumber(num) {
    if (num < 2) {
        return false;
    }
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i <= 100; i++) {
    if (isAPrimeNumber(i)) {
        console.log(i);
    }
}