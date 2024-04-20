list = [
    new Product(
        "https://ecscoffee.com/cdn/shop/products/88-mph-espresso-blend-ixxi-coffee_0d074024-0ee9-44ef-b4a4-6548aa1acbbe.jpg?v=1610547034&width=900",
        "I.XXI 88 MPH Espresso Blend Whole Bean Coffee, 12 oz",
        15.99,
        5,
        "One Point Twenty One"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/products/trucillo-gran-bar-beans.jpg?v=1567625410&width=900",
        "Trucillo Espresso Gran Bar Whole Bean Coffee 1kg",
        31.99,
        4,
        "Trucillo"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/products/great-scott-new-espresso-blend-front.jpg?v=1620140232&width=900",
        "I.XXI Great Scott Robusta Espresso Blend Whole Bean Coffee, 12 oz.",
        16.99,
        5,
        "One Point Twenty One"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/products/lavazza-super-crema-new.jpg?v=1567624384&width=900",
        "Lavazza Super Crema Espresso Whole Beans 1 kg",
        34.99,
        5,
        "Lavazza"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/products/guatemala-one-point-twenty-one-coffee.jpg?v=1610546511&width=900",
        "I.XXI Guatemala Manos de Mujer Whole Bean Coffee, 12 oz.",
        15.99,
        4,
        "One Point Twenty One"
    ),
    new Product(
        "https://ecscoffee.com/cdn/shop/products/rufino-super-bar.jpg?v=1540312345&width=900",
        "Rufino Espresso Super Bar Whole Bean Coffee, 12 oz.",
        16.99,
        5,
        "Rufino"
    )
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