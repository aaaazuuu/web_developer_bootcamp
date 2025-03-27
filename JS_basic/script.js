console.log("条件分岐の前");

// let random_pre = prompt("数値を入力して");
// let random = parseFloat(random_pre);
//
// if (random < 0.5) {
//     console.log("randomは0.5未満");
//     console.log(random);
// } else if (random > 0.5) {
//     console.log("randomは0.5より大きい");
//     console.log(random);
// } else if (random === 0.5) {
//     console.log("randomは0.5です");
//     console.log(random);
// } else {
//     console.log("何物でもない 何も出ないよ");
//     console.log(random);
// }

// const password = prompt("パスワードを入力してください");

// if (password.length >= 6) {
//     console.log("パスワードは6文字以上です");
//     if (password.indexOf(" ") === -1){
//         console.log("素晴らしいパスワード")
//     }　else {
//         console.log("空白を含まないようにしてください")
//     }
// } else {
//     console.log("パスワードを変更してください");
// }

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("素晴らしいパスワードです");
// } else {
//     console.log("パスワードを変更してください");
// }
//
// const age = -10;
// if ((age >= 0 && age < 5 || age >= 65)) {
//     console.log("入場料金は無料です");
// } else if (age < 10) {
//     console.log("入場料金は500円です");
// } else if (age < 18) {
//     console.log("入場料金は1000円です");
// }

const day = 6;
switch(day) {
    case 1:
        console.log("月曜日");
        break;
    case 2:
        console.log("火曜日");
        break;
    case 3:
        console.log("水曜日");
        break;
    case 4:
        console.log("木曜日");
        break;
    case 5:
    case 6:
        console.log("金曜日");
        break;
    default:
        console.log("無効な数字");
}

console.log("条件分岐の後");
