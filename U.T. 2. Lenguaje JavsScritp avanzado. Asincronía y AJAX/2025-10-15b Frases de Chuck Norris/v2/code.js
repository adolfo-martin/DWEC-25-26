setup();

async function setup() {
    const jokeInEnglish = await retrieveJoke();
    const jokeInSpanish = await translateSentence(jokeInEnglish);
    showJoke(jokeInSpanish);
}


async function retrieveJoke() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    return data.value;
}


async function translateSentence(sentence) {
    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=' + sentence;
    const response = await fetch(url);
    const data = await response.json();
    return data[0][0][0];
}


function showJoke(joke) {
    document.getElementById('tParJoke').textContent = joke;
}
