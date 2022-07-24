/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso 
 (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 */

function isAnagram(word1, word2) {
    return word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join('');
}
console.log(isAnagram('amoR', 'rOma'));
console.log(isAnagram('Nacionalista', 'Altisonancia'));
console.log(isAnagram('Fotolitografía', 'Litofotografía'));
console.log(isAnagram('Aparcamiento', 'Metacarpiano'));
console.log(isAnagram('Brasil', 'Silbar'));
console.log(isAnagram('Polonia', 'Opalino'));
console.log(isAnagram('Salario', 'Rosalia'));
console.log(isAnagram('Imponderable', 'imperdonable'));
console.log(isAnagram('Nepal', 'Panel'));
console.log(isAnagram('Mora', 'roma'));
console.log(isAnagram('Mora', 'roma'));

/*  
*El toLowerCase() método devuelve el valor de la cadena de llamada convertido a minúsculas.
*El split() método divide a String en una lista ordenada de sub cadenas, coloca estas sub cadenas en 
una matriz y devuelve la matriz.
*El sort() método ordena los elementos de una matriz en su lugar y devuelve la matriz ordenada. El 
orden de clasificación predeterminado es ascendente.
*El join() método crea y devuelve una nueva cadena al concatenar todos los elementos en una matriz 
(o un objeto similar a una matriz ), separados por comas o una cadena de separación especificada.
*/