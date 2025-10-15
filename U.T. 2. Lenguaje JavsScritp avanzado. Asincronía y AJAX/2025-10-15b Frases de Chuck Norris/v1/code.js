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