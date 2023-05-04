console.clear();

const petras = ['Petras', 99, true];
const maryte = ['Maryte', 88, false];

const s1 = `Sveiki, mano varads ${petras[0]} ir man ${petras[1]} metu.`;
console.log(s1);

const s2 = `Sveiki, mano varads ${maryte[0]} ir man ${maryte[1]} metu.`;
console.log(s2);

const jonas = {
    name: 'Jonas',
    age: 21,
    isMarried: false,
};

const ona = {
    name: 'Ona',
    age: 33,
    isMarried: true,
};

console.log(jonas);
console.log(ona);

console.log(ona['age']);
console.log(ona['name']);
console.log(ona['isMarried']);

console.clear();

const student = {
    name: 'Chuck Norris',
    age: Infinity,
    movies: [
        {
            title: 'Walker: Texas ranger',
            year: 1990,
            actors: [
                'Chuck Norris 1',
                'Chuck Norris 2',
            ]
        },
        {
            title: 'Before me',
            year: -3000,
            actors: [
                'Chuck Norris 3',
                'Chuck Norris 4',
            ]
            
        },
        {
            title: 'Hell riser',
            year: 2000,
            actors: [
                'Chuck Norris 5',
                'Chuck Norris 6',
            ]
        }
    ]
};

console.log(student.name);
console.log(student.age);
console.log(student.movies.length);

console.log(student.movies[0].title);
console.log(student.movies[0].year);
console.log(student.movies[0].actors);
console.log(student.movies[0].actors[0]);
console.log('----------------------------');
console.log(student.movies[0].title);
console.log(student.movies[1].title);
console.log(student.movies[2].title);

const auto = {
    marke: 'Audi',
};
console.log(auto);

auto.marke = 'Audine';
console.log(auto);

auto.kaina = 1000;
console.log(auto);
console.log(auto.kaina);

auto.color = 'red';
console.log(auto);
auto.color = 'blue';
console.log(auto);

delete auto.color;
console.log(auto);

auto.savininkai = [];
console.log(auto);

console.log(auto);