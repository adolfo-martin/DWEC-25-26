// retrieveJokeAndShow();

// function retrieveJokeAndShow() {
//     fetch('https://api.chucknorris.io/jokes/random')
//         .then(response => response.json())
//         .then(data => {
//             document.getElementById('tParJoke').innerText = data.value;
//         })
// }


await retrieveJokeAndShow();

async function retrieveJokeAndShow() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    document.getElementById('tParJoke').textContent = data.value;
}


async function translateSentence(sentence) {
    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=' + sentence;

    const response = await fetch(url);
    const data = await response.json();
    return data[0][0][0];
}


