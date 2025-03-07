document.addEventListener("DOMContentLoaded", function() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-container");
    const checkoutButton = document.getElementById("checkout-button");
    const cartIcon = document.querySelector(".cart-icon");
    const totalContainer = document.createElement("div");
    totalContainer.id = "cart-total";
    cartContainer?.parentNode.insertBefore(totalContainer, checkoutButton);

    // Redirigir al carrito al hacer clic en el icono
    if (cartIcon) {
        cartIcon.addEventListener("click", function() {
            window.location.href = "carrito.html";
        });
    }

    function updateCartDisplay() {
        if (!cartContainer) return; // Evita errores si el contenedor no está en la página
        cartContainer.innerHTML = "";
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p class='empty-cart'>Tu carrito está vacío.</p>";
            totalContainer.innerHTML = "";
            return;
        }

        cartContainer.innerHTML = `<table class='cart-table'>
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                ${cart.map((item, index) => `
                    <tr>
                        <td><img src="${item.image}" width="50" height="50"></td>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td><button class="remove-button" data-index="${index}">Eliminar</button></td>
                    </tr>
                `).join("")}
            </tbody>
        </table>`;

        // Calcular el total
        const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace("€", "")), 0).toFixed(2);
        totalContainer.innerHTML = `<p class='cart-total'><strong>Total: </strong>${total} €</p>`;

        document.querySelectorAll(".remove-button").forEach(button => {
            button.addEventListener("click", function() {
                let index = this.getAttribute("data-index");
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartDisplay();
            });
        });
    }

    if (cartContainer) {
        updateCartDisplay();
    }

    if (checkoutButton) {
        checkoutButton.addEventListener("click", function() {
            if (cart.length === 0) {
                alert("Tu carrito está vacío");
                return;
            }
            alert("Gracias por tu compra!\nResumen:\n" + cart.map(item => `${item.name} - ${item.price}`).join("\n"));
            cart = [];
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
        });
    }

    // Funcionalidad para añadir productos desde cualquier página
    const buyButtons = document.querySelectorAll(".buy-button");
    buyButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            const productItem = event.target.closest(".product-item, .item");
            if (!productItem) return;

            const productName = productItem.querySelector(".product-description, .item-description").textContent;
            const productPrice = productItem.querySelector(".product-price, .item-price").textContent;
            const productImage = productItem.querySelector("img").src;
            
            const product = {
                name: productName,
                price: productPrice,
                image: productImage
            };
            
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Producto añadido al carrito!");
        });
    });
});
