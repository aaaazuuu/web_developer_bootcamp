// const nums = [[1,2,3], [4,5,6], [7,8,9]];
//
// console.log(nums[0][0] + 1);
//
// console.log(nums)
// const comments = [
//     {username: 'Tammy', text: 'lololol', votes: 9},
//     {username: 'FishBoi', text: 'glub', votes: 123},
// ]
//
// console.log(comments[1].text);

// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);

// for(let i=1; i<=10; i++){
//     console.log(i);
// }
//
// for(let i=0; i<=20; i+=2){ // iが20いかになるまで2足され続けるので、偶数の出力になる
//     console.log(i);
// }

// for(let i=100; i>=0; i-=10){
//     console.log(i);
// }

// const animals = ['lions', 'tigers', 'bears'];

const testScores = {
    ken: 80,
    ryu: 90,
    akuma: 100,
    chunli: 95,
    guile: 75,
};

for (let student of Object.keys(testScores)){
    console.log(`${student} scored ${testScores[student]}`);
}

// for (let student in testScores){
//     console.log(`${student} scored ${testScores[student]}`);
// }


const seatingChart = [
    ['伊藤', '松本', '鈴木'],
    ['井上', '田中', '川野'],
    ['阿部', '後藤', '橋本']
];

for (let row of seatingChart){
    for (let student of row){
        console.log(student);
    }
}

for (let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    console.log(`${i + 1}クラス`);
    for (let j = 0; j < row.length; j++){
        console.log(' ' + row[j]);
    }
}

let input = prompt('なにか入力してください');
while (true) {
    input = prompt(input)
    if (input === quite) break;
}

// const SECRET = 'super'
//
// let guess = '';
//
// while (guess !== SECRET) {
//     guess = prompt('秘密のコードを入力してください')
// }
// console.log('正解！！')


// for (let i = 0; i < animals.length; i++){
//     console.log(i, animals[i])
// }
//
// for (let i = animals.length - 1; i >= 0; i--){
//     console.log(i, animals[i])
// }
//
// for (let i = 1; i <= 10; i++){
//     console.log(`iは${i}`);
//     for (let j = 1; j < 4; j++){
//         console.log(` jは${j}`);
//     }
// }