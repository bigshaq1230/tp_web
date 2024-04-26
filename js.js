
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let user = localStorage.getItem('user') || "false"
function getCartTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
function addToCart(product) {
    // Check if the product is already in the cart by comparing unique identifiers, like `desc` or `url`
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
    displayCart(); // Updating the cart UI when the cart changes

}
function displayTotal() {
    const total = getCartTotal();
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

function displayCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Clear existing items

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

// Ensure to call `displayCart()` on page load to show the cart if it already has items
document.addEventListener('DOMContentLoaded', function() {
    displayCart();
});


function updateCartUI() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    cartItemsList.innerHTML = ''; // Clear existing items

    cart.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsList.appendChild(itemElement);
    });

    const total = getCartTotal();
    cartTotalSpan.textContent = total.toFixed(2);
}


function loadUser() {
    // Check if 'user' in localStorage is "true"
    var user = localStorage.getItem('user');  // Retrieve the user status from localStorage
    if (user === "true") {
        document.getElementById("log").textContent = "Logout";
    } else {
        document.getElementById("log").textContent = "Login";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loadUser();  // Initialize the login/logout text based on user status
    document.getElementById("log").addEventListener("click", () => {
        var user = localStorage.getItem('user');  // Retrieve the user status from localStorage each time
        if (user === "true") {
            localStorage.setItem('user', "false");  // Set user to "false" on logout
            alert('Logged out successfully.');  // Provide feedback to user
        } else {
            window.location.href = "login.html";  // Redirect to login page on click
        }
        loadUser();  // Update the login/logout text accordingly
    });
});