let input = parseInt(prompt('問題の範囲を指定する為，最大値の数字を入力'));

while (!input) { // 空文字列やnullなどの場合はfalseとなる為、!inputでtrueになる　なのでfalseの時、このループに入る
    input = parseInt(prompt('数字を入力してください'));
}

const targetNum = Math.floor(Math.random() * input) + 1;

let guess = prompt('一つの数字を決めました。数字を当ててみてください：');
let count = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    count++;
    if (guess > targetNum) {
        guess = prompt('小さいです。もう一度入力してください：');
    } else {
        guess = prompt('大きいです。もう一度入力してください：');
    }
}

if (guess === 'q') {
    console.log('ゲームを終了します');
} else {
    console.log(`正解です！${count}回目で当てました！`);
}