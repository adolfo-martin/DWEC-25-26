await setup();

async function setup() {
    const countries = await getCountries();
    fillTableCountries(countries);
}

/**
 * 
 * @returns Promise<Array<{ name: {common: string, official: string }, capital: Array<string>, flags: { png: string }, name: Object, population: number, area: number }>>
 */
async function getCountries() {
    const url = 'https://restcountries.com/v3.1/all?fields=name,capital,population,area,flags';
    const response = await fetch(url);
    const data = await response.json();
    const countries = data;
    return countries;
}

/**
 * 
 * @param { Array<{ name: {common: string, official: string }, capital: Array<string>, flags: { png: string }, name: Object, population: number, area: number }> } countries 
 */
function fillTableCountries(countries) {
    const nTbody = document.getElementById('tTbdCountries');

    for (const country of countries) {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);
    
        const nTdCommonName = document.createElement('td');
        nTr.appendChild(nTdCommonName);
        nTdCommonName.textContent = country.name.common; // createTextNode, innerText, innerHTML
    
        const nTdOfficialName = document.createElement('td');
        nTr.appendChild(nTdOfficialName);
        nTdOfficialName.textContent = country.name.official;
    
        const nTdFlag = document.createElement('td');
        nTr.appendChild(nTdFlag);
    
        const nImgFlag = document.createElement('img');
        nTdFlag.appendChild(nImgFlag);
        nImgFlag.setAttribute('src', country.flags.svg);
        nImgFlag.setAttribute('data-capital', country.capital);
        nImgFlag.setAttribute('data-population', country.population);
        nImgFlag.setAttribute('data-area', country.area);
        // nImgFlag.src = country.flags.svg;
        // nImgFlag.setAttribute('onclick', `showDetailsCountry("${country.capital}", ${country.population}, ${country.area})`);
        nImgFlag.addEventListener('click', showDetailsCountry);
    }

}

/**
 * 
 * @param { string } capital 
 * @param { number } population 
 * @param { number } area 
 */
// function showDetailsCountry(capital, population, area) {
//     document.getElementById('tSpnCapital').textContent = capital;
//     document.getElementById('tSpnPopulation').textContent = population;
//     document.getElementById('tSpnArea').textContent = area;
// }

function showDetailsCountry(e) {
    const nImg = e.currentTarget; // currentTarget siempre funciona

    // document.getElementById('tSpnCapital').textContent = nImg.getAttribute('data-capital');
    document.getElementById('tSpnCapital').textContent = nImg.dataset.capital;
    document.getElementById('tSpnPopulation').textContent = nImg.dataset.population;
    document.getElementById('tSpnArea').textContent = nImg.dataset.area;
}