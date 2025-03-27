//filterの使用方法　条件に合う関数だけを返す　新しい配列を作る
const prices = [200, 300, 150, 600, 100, 1000];
const goodPrices = prices.filter(price => price < 300);

function validUserNames(userNames) {
    return userNames.filter(name => (name.length < 10));
}

//reduceの使用方法　配列の要素を合計する
const scores = [10, 20, 30, 40, 50];
const totalScore = scores.reduce((total, price) => (total + price));

//初期値を第二引数にとる事も可能
const totalScore2 = scores.reduce((sum, num) => sum + num, 100);

const person = {
    firstName: 'Taro',
    lastName: 'Yamada',
    fullName: () => {
        return `${this.lastName} ${this.firstName}`; // アロー関数は周りにあるthisを参照する　この場合はwindowオブジェクト
    }
}

console.log(person.fullName());
console.log(totalScore);
console.log(totalScore2);


//forEach 関数の引数に要素が入る
// const numbers = [1, 2, 3, 4, 5];
//
// // function print (element) {
// //     console.log(element);
// // }
//
// numbers.forEach (function (element) {
//     console.log(element);
// });
//
// //map　関数の引数に要素が入る
// const doubles = numbers.map(function (num) {
//     return num * 2;
// });
//
// //アロー関数（関数式の簡略版 下に行くほど簡潔に）
// const add = function (x, y) {
//     return x + y;
// };
//
// const add2 = (x, y) => {
//     return x + y;
// };
//
// const add3 = (x, y) => (
//     x + y
// );
//
// const add4 = (x, y) => x + y;
//
// //使用用途
// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ];
//
// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`;
// });
//
// const newMovies2 = movies.map(movie => `${movie.title} - ${movie.score / 10}`);

// //setTimeout使用方法
// setTimeout(() => {
//     console.log('Hello');
// }, 3000);
//
// //setInterval使用方法
// const id = setInterval(() => {
//     console.log(Math.random());
// }, 3000);
//
// clearInterval(id);

// //関数を引数に取る関数
// function callTenTimes(func) {
//     for (let i = 0; i < 10; i++) {
//         func();
//     }
// }
//
// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }
//
// callTenTimes(rollDie)
//
// //関数を返す関数
// // function makeRanfomFunk() {
// //     const rand = Math.random();
// //     if (rand > 0.5) {
// //         return function () {
// //             console.log('Over 0.5');
// //         }
// //     }else {
// //         return function () {
// //             alert('ウイルスに感染しました！！！');
// //             alert('閉じないで');
// //             alert('閉じないで');
// //             alert('閉じないで');
// //             alert('閉じないで');
// //         }
// //     }
// // }
//
// //オブジェクトとメソッド
// const myMath = {
//     PI: 3.14,
//     square (num) {
//         return num * num;
//     },
//     cube (num) {
//         return num ** 3;
//     },
//     math () {
//         console.log(`${this.PI}は円周率です`)
//     }
// }
//
// //try catch
// function shout (msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(3));
//     }
//     catch (e) {
//         console.log(e);
//         console.log('Please pass a string');
//     }
// }
//
// const randomFunk = makeRanfomFunk();
// console.log(randomFunk);
// randomFunk();