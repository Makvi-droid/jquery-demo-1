$(document).ready(function () {
    const products = [
        { id: 1, name: "Product 1", price: 20, image: "https://via.placeholder.com/200" },
        { id: 2, name: "Product 2", price: 30, image: "https://via.placeholder.com/200" },
        { id: 3, name: "Product 3", price: 25, image: "https://via.placeholder.com/200" },
        { id: 4, name: "Product 4", price: 15, image: "https://via.placeholder.com/200" }
    ];

    let cart = [];

    function renderProducts() {
        const productList = $('#product-list');
        productList.empty();

        products.forEach(product => {
            const productCard = `
                <div class="col-md-3">
                    <div class="card product-card">
                        <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">$${product.price}</p>
                            <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `;
            productList.append(productCard);
        });
    }

    function updateCartCount() {
        $('#cart-count').text(cart.length);
    }

    function renderCart() {
        const cartItemsContainer = $('#cart-items');
        cartItemsContainer.empty();

        if (cart.length === 0) {
            cartItemsContainer.append('<p>Your cart is empty.</p>');
        } else {
            cart.forEach(item => {
                const cartItem = `
                    <div class="d-flex justify-content-between">
                        <span>${item.name}</span>
                        <span>$${item.price}</span>
                    </div>
                `;
                cartItemsContainer.append(cartItem);
            });
        }
    }

    $(document).on('click', '.add-to-cart', function () {
        const productId = $(this).data('id');
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCartCount();
    });

    $('#cart').on('click', function () {
        renderCart();
        $('#cartModal').modal('show');
    });

    $('#checkout').on('click', function () {
        alert('Proceeding to checkout...');
        cart = [];
        updateCartCount();
        $('#cartModal').modal('hide');
    });

    renderProducts();
});
