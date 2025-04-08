document.addEventListener('DOMContentLoaded', function() {
    fetch('products.php')
        .then(response => response.json())
        .then(data => {
            const productsDiv = document.getElementById('products');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>Ár: ${product.price} Ft</p>
                    <button onclick="addToCart('${product.name}', ${product.price})">Kosárba</button>
                `;
                productsDiv.appendChild(productDiv);
            });
        });
});

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
}
