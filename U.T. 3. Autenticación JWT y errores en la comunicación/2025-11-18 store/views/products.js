const params = new URLSearchParams(window.location.search);
const categoryId = params.get('category');
alert(categoryId);