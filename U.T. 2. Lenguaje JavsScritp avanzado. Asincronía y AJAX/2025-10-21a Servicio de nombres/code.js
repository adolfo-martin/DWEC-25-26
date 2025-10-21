setup(); // iniciar


async function setup() { // especie de main
    
    // document.getElementById('tButRequestNames').addEventListener('click', showNames);
    document.querySelector('#tButRequestNames').addEventListener('click', showNames);
}


async function showNames(_) {
    const quantity = document.getElementById('tRngQuantity').value;

    // const nRadMale = document.getElementById('tRadMale');
    // const nRadFemale = document.getElementById('tRadFemale');

    // let gender = undefined;
    // if (nRadMale.checked) {
    //     gender = 'male';
    // } else if (nRadFemale.checked) {
    //     gender = 'female';
    // } else {
    //     gender = 'both';
    // }

    const gender = document.querySelector('input[type=radio][name=gender]:checked').value;

    const names = await retrieveNames(quantity, gender);
    fillTable(names);
}


async function retrieveNames(quantity, gender) {
    const url = `https://namey.muffinlabs.com/name.json?count=${quantity}&type=${gender}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


function fillTable(names) {
    const nTbody = document.getElementById('tTbdNames');
    
    while (nTbody.hasChildNodes()) {
        nTbody.removeChild(nTbody.lastChild);
    }

    names.forEach((name, i) => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);

        const nTdContador = document.createElement('td');
        nTr.appendChild(nTdContador);
        nTdContador.textContent = i + 1;

        const nTdName = document.createElement('td');
        nTr.appendChild(nTdName);
        nTdName.textContent = name;
    });
}