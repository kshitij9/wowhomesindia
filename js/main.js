const products = document.querySelector('productsList');

document.addEventListener('click', (event) => {
    sessionStorage.setItem('selectedProduct', event.target.id);
    let hostname = location.href;
    const a = hostname.split('/');
    a.splice(a.length - 1);
    hostname = a.join('/');

    window.location = `${hostname}/sproduct.html`;
});