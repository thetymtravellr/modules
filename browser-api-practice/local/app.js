const addItem = () => {
    const productField = document.getElementById('product');
    const product = productField.value;
    const quantityField = document.getElementById('quantity');
    const quantity = parseInt(quantityField.value);
    //display product to the ui
    displayProduct(product);
    //add product to local storage
    addCartToLocalStorage(product,quantity);
    productField.value = '';
    quantityField.value = '';
}
const ul = document.getElementById('product-list');

const displayProduct = name => {
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
}

const addCartToLocalStorage = (name,quantity) => {
    const cart = getCart();
    if(cart[name]){
        cart[name] += quantity;
    } else {
    cart[name] = quantity;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const loadCart = () => {
    const cart = getCart();
    for(const name in cart) {
        displayProduct(name,cart[name]);
    }
}
loadCart();