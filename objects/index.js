//No 1
//Instagram post

function instagramPost(handle, content, link, views, likes) {
    this.handle = handle;
    this.content = content;
    this.link = link;
    this.views = views;
    this.likes = likes;
}

//No 2
//Instagram Post

const newPost = new instagramPost('@mystry22', 'Birthday Celebration', 'https://google.com/randomimage/nini.png', 10, 10);
console.log(newPost);

//No3 a
function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    }
}

console.log(createPerson('Musa Dawodu', 27, 'Lagos'));

//No3 b
function createJambScores(Eng, Govt, Lit, Crk) {
    return {
        Eng: Eng,
        Govt: Govt,
        Lit: Lit,
        Crk: Crk
    }
}

console.log(createJambScores(85, 90, 98, 90));
const addMusaObject = { ...createPerson, ...createJambScores };
console.log(addMusaObject);

//No 4
//How to add or merge objects

//No4 a Spread Method;
const spreadMethod = { ...createPerson, ...createJambScores };

//No4 b Object Method;

console.log('break')

const objectMethod = Object.assign(createPerson, createJambScores);
console.log(objectMethod);

//No 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}
for (let canditate  in presidentialCandidates) {
    console.log('the presidential candidate of ' + canditate+ ' is '+ presidentialCandidates[canditate] );
}

