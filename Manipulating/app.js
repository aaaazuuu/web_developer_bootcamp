const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = '私はリンクです！！！！';
// }

for (let link of allLinks) {
    link.style.color = 'red';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

function cointos () {
    const num = Math.floor(Math.random() * 100)
    if (num <= 50) {
        console.log('表');
    } else {
        console.log('裏')
    }
}

