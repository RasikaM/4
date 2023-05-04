console.clear();

/* sarasas */ 

const empty = [];
console.log(empty);

const pazymiai = [10, 2 , 8, 4];
console.log(pazymiai);

const random = [1, 'antras', 3, '4', 3.14, 'asdasd'];
console.log(random);

const vardai = ['Petras', 'Maryte', 'Jonas'];
console.log(vardai);

const vardas1 = vardai[0];
console.log(vardai[0]);
console.log(vardai[1]);
console.log(vardai[2]);

const skaiciai = [1, 2 ,3 ];
console.log(skaiciai);

console.log(skaiciai[0]);
console.log(skaiciai[1]);
console.log(skaiciai[2]);

console.clear();

const marks1 = [10, 9, 8];
const marks2 = [6, 4, 8];
const marks3 = [1, 3, 8];

function average(marks) {
    let sum = 0;
    sum += marks[0];
    sum += marks[1];
    sum += marks[2];
    return sum / marks.length;
}

console.log('Vidurkis 1:', marks1, '=', average(marks1));
console.log('Vidurkis 2:', marks2, '=', average(marks2));
console.log('Vidurkis 3:', marks3, '=', average(marks3));

const dict1 = ['pirmas', 'zodis', 'labas'];
const dict2 = ['labas', 'rytas', 'Lietuva'];
const dict3 = ['labas', 'rytas', 'suraitytas'];

 function dictionary(wordlist) {
    console.log(wordlist);
    let result = 'Zodynas: ';

   // result += wordlist [0] + ', ';
    //result += wordlist [1] + ', ';
    //result += wordlist [2] + '.';

   // return result;
    return `Zodynas: ${wordlist[0]}, ${wordlist[1]}, ${wordlist[2]}.`
 }
 
 console.log(dictionary(dict1));
 console.log(dictionary(dict2));
 console.log(dictionary(dict3));

