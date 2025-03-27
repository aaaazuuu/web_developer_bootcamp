//デフォルトparamater
function rollDice(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

function greet (person, msg = 'こんにちわ') {
    console.log(`${msg}, ${person}!`);
}

//スプレッド構文
nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums);
console.log(...nums);

console.log('あいうえお');
console.log(...'あいうえお');

// スプレッド構文を使って配列をコピーする
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs, 'Sakura'];

// スプレッド構文を使ってオブジェクトをコピーする
const feline = {legs: 4, family: 'Felidae'};
const canine = {family: 'Caninae', furry: true};

// この場合、familyの値は後勝ちする為、Caninaeが出力される
const catDog = {...feline, ...canine};

// feline.id = 1;　書くとfelinaにidが追加されてしまい、基データに影響を与えてしまう為、コピーの為にはスプレッド構文を使う

// レスト構文
function sum(...nums) {
    return nums.reduce((total, num) => total + num);
}

// 残りの引数を受け取る　レスト構文
function raceResults (gold, silver, ...rest) {
    console.log(`Gold medal goes to: ${gold}`);
    console.log(`Silver medal goes to: ${silver}`);
    console.log(`Thanks for participating: ${rest}`);
}

// 分割代入
const scores = [9283, 109, 34, 298, 23, 23];
const [gold, silver, bronze, ...everyoneElse] = scores;

//オブジェクトの分割代入
const user = {
    email: 'azasdfgasdf',
    password: 'asdfasdf',
    firstName: 'Haruka',
    lastName: 'Kawaguchi',
    born: 1993
}

const {email:em, password:pw, firstName, lastName, born} = user;

function fullName(user) {
     const {firstName, lastName} = user;
     return `${firstName} ${lastName}`;
}

function fullName_new({firstName, lastName}) {
    return `${firstName} ${lastName}`;
}
