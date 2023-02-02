/**
 * 1. Schreiben Sie ein JavaScript-Programm, um den Flächeninhalt eines Dreiecks zu ermitteln, dessen drei Seitenlängen a, b, c sind.
 */


const area = ((5 * 6) / 2)

console.log(
  `The area of the triangle is ${area}`
);



/**
 * 2. Schreiben Sie ein JavaScript-Programm, um den String 'Techstarter' periodisch alle 2 Sekunden auf die Konsole anzuzeigen.
 */

const interval = setInterval(() => console.log("Techstarter"), 2000)
const clearInterval(interval);

//console.log("Techstarter".repeat(10));


/**
 * 3. Schreiben Sie ein JavaScript-Programm, um die Differenz zwischen einer gegebenen Zahl und 13 zu erhalten, 
 * wenn die Zahl größer als 13 ist, geben Sie die doppelte absolute Differenz zurück.
 */

function diff(a, b){
    return Math.abs(a-b);
}

  
console.log(diff);




/**
 * 4. Schreiben Sie ein JavaScript-Programm, um zu prüfen, ob zwei gegebene Integer-Werte im Bereich 50..99 (einschließlich) liegen.
 * Geben Sie wahr zurück, wenn einer von ihnen in dem genannten Bereich liegt.
 */





/**
 * 5. Schreiben Sie ein JavaScript-Programm, um jedes n-te Element in einem gegebenen Array zu erhalten.
 */

const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

const first2 = arr.slice(0, 2);
console.log(first2);



/**
 * 6. Schreiben Sie ein JavaScript-Programm, um herauszufinden, ob ein Wort ein Palindrom ist, oder nicht. (z. B. Madam, Anna, Otto)
 */

function palindrome(str) {
    return true;
  }
  palindrome("eye");



/**
 * 7. Schreiben Sie eine JavaScript-Funktion, die alle Kombinationen eines Strings generiert. Example string: 'dog'; Expected Output: d,o,do,g,dg,og,dog.
 */



let combinations = (str) => {
    let tempArr = [];
    let resultArr = [];
    for (let i = 0; i < str.length; i++) {
      tempArr = [str[i]];
      let index = 0;
      while (resultArr[index]) {
        tempArr.push("" + resultArr[index] + str[i]);
        index++;
      }
      resultArr = resultArr.concat(tempArr);
    }
    return resultArr;
  };
  console.log(combinations("dog"));




/**
 * 8. Schreiben Sie ein JavaScript-Programm, um die nicht eindeutigen Werte in einem Array herauszufiltern. (Beispiel-Array: [1, 2, 2, 3, 4, 4, 5]).
 */





/**
 * 9. Schreiben Sie eine JavaScript-Funktion, um das erste Element eines Arrays abzurufen. Das Übergeben eines Parameters 'n' gibt die ersten 'n' Elemente des Arrays zurück.

Test Data :

const first = arr.slice(0);

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
*/
/** 
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
*/




/**
 * 10. Schreiben Sie ein JavaScript-Programm, um ein Array zu mischen.
 */

function shuffle(array){
let arr2 = [1, 2, 3];

shuffle(arr2);
}

console.log(shuffle)