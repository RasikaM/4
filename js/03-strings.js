console.clear();

const nickname = 'Pravardenis';
const username = 'Vardenis';
const empty = '';
const cabute1 = "Vienguba kabute (')";
const cabute2 = 'Dviguba kabute (")';
const slash = '\\'

console.log(nickname);
console.log(username);
console.log(empty);
console.log(cabute1);
console.log(cabute2);
console.log(slash);

const kabute3 = 'Vienguba ar dviguba (\'")';  // sitas operatorius sako tesiog atspausdink "\""
console.log(kabute3);

const user1 = 'Petras';
const user2 = 'Jonas';
const user3 = 'Maryte';

// Sveiki, <vardas>!
const hi1 = 'Sveiki, ' + user1 + '!';
console.log(hi1);

const hi2 = 'Sveiki, ' + user2 + '!';
console.log(hi2);

const hi3 = 'Sveiki, ' + user3 + '!';
console.log(hi3);

const personName = 'Vardenis';
const personLastname = 'Pavardenis';

const personHi = 'Hi, I am ' + personName + ' ' + personLastname + ' and I like you!';
console.log(personHi);

console.log('-------------');

const labas = 'Labas rytas\rtau.';
console.log(labas);

const labas2 = 'Labas rytas\ntau.';
console.log(labas2);

const labas3 = 'Labas rytas\r\ntau.';
console.log(labas3);

const backtickHTML = `    <header>
<a href="#">Home</a>
<a href="#">Home</a>
<a href="#">Home</a>
</header>
`

console.log(backtickHTML);

const personHi2 = `Hi, I am ${user1} and I like you`;
console.log(personHi2);