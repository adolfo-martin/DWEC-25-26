async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cioc');
    const countries = await response.json();
    return countries
        .filter(country => country.cioc)
        .filter((_, i) => i < 5)
        .map(country => ({ id: country.cioc, name: country.name.common }));
}


async function getCountry(countryId) {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryId}?fields=name,cioc,population,area,flags` );
    const data = await response.json();
    return data;
}


// for (const { id } of (await getCountries())) {
//     const country = await getCountry(id);
//     console.log(country);
// }


// (await getCountries()).forEach(async ({ id }) => {
//     const country = await getCountry(id);
//     console.log(country);
// });


const countries = await getCountries();
const promises = countries.map(country => getCountry(country.id));
const countries2 = await Promise.all(promises);
console.table(countries2);