
// 1. PRODUCT INVENTORY
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 25.00,
        image: "https://placehold.co/300x200"
    },
    {
        id: 2,
        name: "Smartwatch",
        price: 40.00,
        image: "https://placehold.co/300x200"
    },
    {
        id: 3,
        name: "Sneakers",
        price: 60.00,
        image: "https://placehold.co/300x200"
    }
];


// 2. SELECT HTML ELEMENTS AND INITIALISE CART
const productList = document.getElementById("product-list");
productList.innerHTML = "";

let cart = [];

const cartItems = document.getElementById("cart-items");
const cartTotals = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");


// 3. CART RENDERING FUNCTION
function renderCart() {
    cartItems.innerHTML = "";

    cart.forEach(function(item, index) {
        const cartItem = document.createElement("div");

        const itemName = document.createElement("span");
        itemName.textContent = item.name;
        cartItem.appendChild(itemName);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", function() {
            cart.splice(index, 1);
            renderCart();
        });

        cartItem.appendChild(removeButton);
        cartItems.appendChild(cartItem);
    });

    // UPDATE CART COUNT
    cartCount.textContent = `Cart: ${cart.length} items`;

    // CALCULATE AND UPDATE CART TOTAL
    let cartTotal = 0;

    cart.forEach(function(item) {
        cartTotal += item.price;
    });

    cartTotals.textContent = `Total: $${cartTotal.toFixed(2)}`;
}


// 4. DISPLAY PRODUCT CARDS
products.forEach(function(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    productCard.appendChild(img);

    const h3 = document.createElement("h3");
    h3.textContent = product.name;
    productCard.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = `$${product.price.toFixed(2)}`;
    productCard.appendChild(p);

    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    productCard.appendChild(button);

    // ADD PRODUCT TO CART
    button.addEventListener("click", function() {
        cart.push(product);
        renderCart();
    });

    productList.appendChild(productCard);
});


// 5. INITIALISE CART DISPLAY
renderCart();
