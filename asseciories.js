list = [
    new Product(
        "https://ecscoffee.com/cdn/shop/products/tm-no4-filters.jpg?v=1540293496",
        "Technivorm Moccamaster #4 Coffee Filters, 100 Pack",
        8.99,
        4,"Technivorm Moccamaster"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/files/crema-54mm-sandalwood-bottomless-portafilter-1.jpg?v=1696509108&width=900",
        "Crema 54mm Bottomless Portafilter, Medium Dark Sandalwood",
        119.99,
        5,"Crema Coffee Products"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/products/crema-the-wdt-tool-1.jpg?v=1646845280&width=900",
        "Crema The WDT Tool, Black and Silver",
        59.99,4,"Crema Coffee Products"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/products/53.4mm-screeen.jpg?v=1680805660&width=900",
        "Crema 53.4mm Puck Screen",
        19.99,3,"Crema Coffee Products"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/products/AeroPress-Filters-Box-1.jpg?v=1610538746&width=900",
        "AeroPress Replacement Micro-Filters 350 Pack",
        7.99,
        5,
        "AeroPress"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/products/chemex-wire-grid.jpg?v=1540289824",
        "Chemex Stainless Steel Wire Grid",
        16.99,
        1,
        "Chemex"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/products/crema-58mm-dosing-funnel-1.jpg?v=1646852043&width=900",
        "Crema 58mm Dosing Funnel",
        39.99,
        4,"Crema Coffee Products"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/products/chemex-fsu100.jpg?v=1540289738",
        "Chemex Bonded Filters FSU-100 Pre-Folded Squares, Natural",
        15.49,5,"Chemex"
    ),
    new Product(
        
    ),
]
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