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
        document.querySelector(".products").innerHTML = '';  // Clear existing products
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

                document.querySelector(".products").appendChild(div);
            }
        });
    }

    // Initialize display
    filterProducts();
});


function Product(url, desc, price, ratings, brand) {
    this.url = url;
    this.desc = desc;
    this.price = price;
    this.ratings = ratings;
    this.brand = brand;
}