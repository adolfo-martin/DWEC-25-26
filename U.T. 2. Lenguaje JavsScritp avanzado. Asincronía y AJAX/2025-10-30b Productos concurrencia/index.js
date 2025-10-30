const products = [1, 3, 5, 7, 11, 13];


const url = 'https://dummyjson.com/products/';

const nTbody = document.querySelector('#tTbdProducts');

// for (const productId of products) {
//     const response = await fetch(url + productId);
//     const product = await response.json();

//     const nTr = document.createElement('tr');
//     nTbody.appendChild(nTr);

//     const nTdName = document.createElement('td');
//     nTr.appendChild(nTdName);
//     nTdName.textContent = product.title;

//     const nTdPhoto = document.createElement('td');
//     nTr.appendChild(nTdPhoto);

//     const nImage = document.createElement('img');
//     nTdPhoto.appendChild(nImage);
//     nImage.setAttribute('style', 'width: 50px');
//     nImage.setAttribute('src', product.thumbnail);
// }


// products.forEach(async productId => {
//     const response = await fetch(url + productId + '?delay=2000');
//     const product = await response.json();

//     const nTr = document.createElement('tr');
//     nTbody.appendChild(nTr);

//     const nTdName = document.createElement('td');
//     nTr.appendChild(nTdName);
//     nTdName.textContent = product.title;

//     const nTdPhoto = document.createElement('td');
//     nTr.appendChild(nTdPhoto);

//     const nImage = document.createElement('img');
//     nTdPhoto.appendChild(nImage);
//     nImage.setAttribute('style', 'width: 50px');
//     nImage.setAttribute('src', product.thumbnail);
// });


const promises = products.map(productId => async() => {
    const response = await fetch(url + productId + '?delay=2000');
    const product = await response.json();
    return product;
});

const productsDetails = await Promise.all(promises);

productsDetails.forEach(product => {
    const nTr = document.createElement('tr');
    nTbody.appendChild(nTr);

    const nTdName = document.createElement('td');
    nTr.appendChild(nTdName);
    nTdName.textContent = product.title;

    const nTdPhoto = document.createElement('td');
    nTr.appendChild(nTdPhoto);

    const nImage = document.createElement('img');
    nTdPhoto.appendChild(nImage);
    nImage.setAttribute('style', 'width: 50px');
    nImage.setAttribute('src', product.thumbnail);
});