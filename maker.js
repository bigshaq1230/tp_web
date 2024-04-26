let list = [
    new Product(
        "https://ecscoffee.com/cdn/shop/products/smeg-coffee-maker-white-DCF02WHUS.jpg?v=1587479943&width=900",
        "Smeg 50s Style Drip Filter Coffee Machine, White #DCF02WHUS",
        244.99, 5, "nespressoo"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/products/chemex-3-cup.jpg?v=1540289778",
        "Chemex CM-1C Classic Series 3-Cup Coffeemaker",
        62.99, 4, "chemex"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/products/hario-dripper-2.jpg?v=1540289141",
        "Hario V60-02 Ceramic Coffee Dripper, White",
        39.99, 4, "Hario"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/products/lc-french-press-large-cherry.jpg?v=1540289596",
        "Le Creuset Cafe Stoneware French Press - Cerise",
        100,
        3,
        "Le Creuset"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/products/Delonghi-COM532-Espresso-Machine-1.jpg?v=1614019062&width=900",
        "Nespresso All-In-One Coffee & Espresso Maker #COM532M",
        349.99,
        2,
        "Nespresso"
    ),

    new Product(
        "https://ecscoffee.com/cdn/shop/products/chemex-rawhide.jpg?v=1540299776",
        "Chemex Rawhide for Wood Collar",
        6.99,
        0,
        "Chemex"
    ),

    new Product(
        "https://ecscoffee.com/cdn/shop/files/aeropress-clear-1.jpg?v=1692970029&width=900",
        "AeroPress Coffee & Espresso Maker - Clear",
        69.99,
        0,
        "AeroPress"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/products/aeropress-coffee-maker-new.jpg?v=1597323596&width=900",
        "AeroPress Coffee & Espresso Maker",
        46.99,
        5,
        "AeroPress"
    )
];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function getCartTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
function addToCart(product) {
    const existingProduct = cart.find(p => p.desc === product.desc);
    if (existingProduct) {
        existingProduct.quantity += 1;
        console.log("item found")
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    updateCart();
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}
function displayTotal() {
    const total = getCartTotal();
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

function displayCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('li');
        let img = document.createElement("img")
        let span = document.createElement("span")

        img.src = item.url
        span.textContent = `${item.desc} - $${item.price} x ${item.quantity}`;
        img.style.width = "50px"
        img.style.float = "left"
        itemElement.appendChild(img)
        itemElement.appendChild(span)
        cartItemsList.appendChild(itemElement);

    });

    displayTotal();
}


function displayTotal() {
    const total = getCartTotal();
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function() {
    displayCart();
});


function updateCartUI() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    cartItemsList.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsList.appendChild(itemElement);
    });

    const total = getCartTotal();
    cartTotalSpan.textContent = total.toFixed(2);
}
document.addEventListener("DOMContentLoaded", function () {
    var brands = [];
    var checkboxes = document.querySelectorAll(".menu input[type='checkbox']");

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            if (brands.includes(checkbox.value)) {
                let index = brands.indexOf(checkbox.value);
                brands.splice(index, 1);
            } else {
                brands.push(checkbox.value);
            }
            filterProducts();
        });
    });

    function filterProducts() {
        document.querySelector(".products").innerHTML = '';
        list.forEach(function (product) {
            if (brands.length === 0 || brands.includes(product.brand)) {
                let div = document.createElement("div");
                div.className = "product";

                let img = document.createElement("img");
                img.src = product.url;
                div.appendChild(img);

                let desc = document.createElement("p");
                desc.textContent = product.desc;
                div.appendChild(desc);

                let price = document.createElement("strong");
                price.textContent = "$" + product.price.toFixed(2);
                div.appendChild(price);

                let review = document.createElement("p");
                review.style.color = "gold";
                review.innerHTML = "&star;".repeat(product.ratings) + "&star;".repeat(5 - product.ratings).fontcolor("lightgray");
                div.appendChild(review);
                let btn = document.createElement("button");
                btn.textContent = "add to cart";

                btn.onclick = function () { addToCart(product); };
                img.onclick = function () {
                    localStorage.setItem('prod', JSON.stringify(product));
                    window.location.href = 'prod.html';
                }
                div.appendChild(btn)
                document.querySelector(".products").appendChild(div);
            }
        });
    }

    filterProducts();
});



function Product(url, desc, price, ratings, brand) {
    this.url = url;
    this.desc = desc;
    this.price = price;
    this.ratings = ratings;
    this.brand = brand;
}
function loadUser() {
    var user = localStorage.getItem('user');
    if (user === "true") {
        document.getElementById("log").textContent = "Logout";
    } else {
        document.getElementById("log").textContent = "Login";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loadUser();
    document.getElementById("log").addEventListener("click", () => {
        var user = localStorage.getItem('user');
        if (user === "true") {
            localStorage.setItem('user', "false");
            alert('Logged out successfully.');
        } else {
            window.location.href = "login.html";
        }
        loadUser();
    });
});