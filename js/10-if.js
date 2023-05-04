console.clear();
/*

visi: >, <, >=, <=, ==, ===,
naudotini: >, <, >=, <=,  ===,
nenaudotini: ==

if () {}
if () {} else {}
if () {} else if () {}


*/

if (4 > 2) {
    console.log('taip');
} else {
    console.log('ne');
}

if (7 < 10) {
    console.log('7 < 10');
} else {
    console.log('7 ne < uz 1');
}

const userAge = 10;
const ageLimit = 18;

if (userAge >= ageLimit) {
    console.log('uzeik....');
} else {
    console.log(`dar palauk ${ageLimit - userAge} metu...`);
}


const diena = 5;

console.log('start');

if (diena === 1) {
    console.log('pirmadienis');
} else if (diena === 2) {
    console.log('antradienis');
} else if (diena === 3) {
    console.log('treciadienis');
} else {
    console.log('tokios dienos nera');
}

console.log('======================');

const arSvieciaSaule = true;
const arLyja = true;

let kaDaryti = 'nezinau';

if (arSvieciaSaule) {
    kaDaryti = 'eisim i kiema';
    if (arLyja) {
        kaDaryti = 'ziurim i vaivorykste';
    } else {
        kaDaryti = 'deginames pleziuke';
    }
} else {
    kaDaryti = 'kodinsim....'
    if (arLyja) {
        kaDaryti = 'koks skyrtumas busiu namie';
    } else {
        kaDaryti = 'stebim zvaigzdes';
    }
}

console.log(kaDaryti);

console.log('==================');

const day = 7;

if (day === 1) {
    console.log('pirm');
} else {
    if (day === 2) {
    console.log('antradienis');
    } else if (day === 3) {
        console.log('trec');
        } else if (day === 4) {
            console.log('ketv');
            } else if (day === 5) {
                console.log('penkt');
                } else if (day === 6) {
                    console.log('sest');
                    } else if (day === 7) {
                        console.log('sekm');
                        } else {
                console.log('nieko');
            }
        }
    
console.log('=======================');


const dd = 2;
let kokiaDiena = 'nezinau...';

if (dd === 1) {
    kokiaDiena = 'pirm';
}

if (dd === 2) {
    kokiaDiena = 'antr';
}

console.log(kokiaDiena);

console.log('=======================');

const siandien = 4;

function kokiaSavaitesDiena (dienosNr) {
const dienuPavadinimai = [
    'pirm',
    'antr',
    'trec',
    'ketv',
    'penkt',
    'sest',
    'sekm',
];

const savaitesDiena = dienuPavadinimai[dienosNr - 1];

    if (savaitesDiena === undefined) {
        return 'tokios dienos nera' ;
    } else {
        return savaitesDiena;
    }
}

console.log(kokiaSavaitesDiena(1));
console.log(kokiaSavaitesDiena(siandien));

console.log('=======================');

if (4 > 2) {
    if (8 < 20) {
        console.log('>>> and 1');
    }
}

if (4 > 2 && 8 < 20) {
    console.log('>>> and 2');
}

if (1 < 0 || 2 < 4) {
    console.log('>>> arba');
}

if (1 === 1 && 2 === 3 || 4 === 4) {
    console.log('mix');
}

const a = true;

if (!a) {
    console.log('taip');
} else {
    console.log('ir ne');
}

const error = false;

if (!error) {
    console.log('all good');
} else {
    console.log('ERROR');
}

console.log('=======================');

// visi skaiciai - TRUE, isskyrus 0 ir NaN

if (NaN) {
    console.log('kazkas');
} else {
    console.log('ne kazka');
}