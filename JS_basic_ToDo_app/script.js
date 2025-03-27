let input = prompt('コマンドを入力してください(new, list, delete, quit)');

while (input !== 'new' && input !== 'list' && input !== 'delete' && input !== 'quit') {
    input = prompt('コマンドを入力してください(new, list, delete, quit)');
}

const todos = [];

while (input !== 'quit') {
    if (input === 'new'){
        const newTodo = prompt('新しいToDoを入力してください:');
        todos.push(newTodo);
        console.log(`${newTodo}が追加されました`);
        input = prompt('コマンドを入力してください(new, list, delete, quit)');
    }
    else if (input === 'list'){
        for (let i = 0; i < todos.length; i++){
            console.log('*******************');
            console.log(`${i}：${todos[i]}`);
        }
        input = prompt('コマンドを入力してください(new, list, delete, quit)');
    }
    else if (input === 'delete'){
        const delIndex = parseInt(prompt('削除するインデックスを入力してください:'));
        if (!Number.isNaN(delIndex)) { //NaNが入るとfalseになるので、NaNではないときに下の処理に入る
            const deleted = todos.splice(delIndex,1);
            console.log(`${deleted[0]} を削除しました`)
            input = prompt('コマンドを入力してください(new, list, delete, quit)');
        } else{
            console.log('適切な値を入力してください')
            input = prompt('コマンドを入力してください(new, list, delete, quit)');
        }

    }
}

console.log('アプリを終了しました')

