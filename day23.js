function canReconfigure(from, to) {
  if (from.length !== to.length) return false;
  // console.log( new Set(from))
  // console.log( new Set(to))
  return new Set(from).size == new Set(to).size;
}

console.log(canReconfigure('BAL', 'LIB')); // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

console.log(canReconfigure('CON', 'JUU')); // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

console.log(canReconfigure('MMM', 'MID')); // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

console.log(canReconfigure('AA', 'MID')); // false -> no tiene la misma longitud
