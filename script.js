
// Lucky ticket

let numbers = prompt("Input your tickets number, please (6 numbers)");
let convertToArray = '' + numbers;
let intArr = [...convertToArray].reduce((acc, n) => acc.concat(+n), []);

console.log(intArr);

function isItLucky () {
   const firstHalf = intArr
    .slice(0, intArr.length / 2)
    .reduce(function(a, b) {
      return a + b  ;
    });

  const secondHalf = intArr
    .slice(intArr.length / 2, intArr.length)
    .reduce(function(a, b) {
      return a + b ;
    });

if (firstHalf === secondHalf) {
    alert("Congratulations!Your tickets number is lucky");
} else {
    alert("Sorry!Your tickets number is not lucky");
}
    return firstHalf === secondHalf;
    
}

console.log(isItLucky () );

//  The shortest word

let userString = prompt("Input your string here, please").split(' ');
let shotestWord = userString[0].length;
for (i = 1; i < userString.length; i++) {
    if (userString[i].length < shotestWord) {
        shotestWord = userString[i].length;
    }
}

console.log (shotestWord); 
alert(`The shotest word have letters - ${shotestWord}`);

// DNA

const userDna = prompt('Input your DNA');
let rezultDna = '';
for (let i = 0; i < userDna.length; i++) {
    if (userDna[i] === 'A') {
        rezultDna = rezultDna + 'T';
    }
    if (userDna[i] === 'T') {
        rezultDna = rezultDna + 'A';
    }
    if (userDna[i] === 'C') {
        rezultDna = rezultDna + 'G';
    }
    if (userDna[i] === 'G') {
        rezultDna = rezultDna + 'C';
     }
 }

console.log(rezultDna);
alert(`Couple to yours ${rezultDna}`);

