console.clear();

function sum(a, b) {
 console.log('>>>', a, b);
 return a + b;
}

const s1 = sum (2, 2);
console.log(s1);

const s2 = sum (7.42, 5.22);
console.log(s2);

const s3 = sum (-17, -55);
console.log(s3);

const s4 = sum (1);
console.log(s4);

const s5 = sum ();
console.log(s5);




function hi(name) {
    return `Hi, my name is ${name}!`;
}

// Hi, my name is Petras!
console.log(hi('Petras'));
console.log(hi('Maryte'));

function prisistatymas(name, age) {
    return `Sveiki, as ${name} ir man ${age} metu.`
}

console.log(prisistatymas('Petras', 16));
console.log(prisistatymas('Jonas', 26));
console.log(prisistatymas( 26,'Jonas'));