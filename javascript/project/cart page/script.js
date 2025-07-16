document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "product1",
      price: 100,
    },
    {
      id: 2,
      name: "product2",
      price: 200,
    },
    {
      id: 3,
      name: "product3",
      price: 300,
    },
  ];

  const cart = [];

  const productLists = document.getElementById("product-lists");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const cartTotalPrice = document.getElementById("total-price");
  const checkOut = document.querySelector("#checkout");

  products.forEach((items) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-div");
    productDiv.innerHTML = `<span>${items.name} - $${items.price.toFixed(2)}
    </span> <button data-id ="${items.id}">Add Cart</button>`;
    productLists.appendChild(productDiv);
  });

  productLists.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => {
        return p.id === productId;
      });
      // console.log(product);

      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    // console.log(cart);
    renderCart();
  }

  function renderCart() {
    emptyCartMessage.innerHTML = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartItems.innerHTML = "";

      cart.forEach((item) => {
        totalPrice += item.price;

        const cartItemList = document.createElement("div");
        cartItemList.innerHTML = `${item.name} - $${item.price.toFixed(
          2
        )} <button>Delete</button>`;

        cartItemList.querySelector("button").addEventListener("click", () => {
          const index = cart.indexOf(item);
          if (index > -1) {
            cart.splice(index, 1); // Remove from cart array
          }
          renderCart(); // Refresh cart UI
        });

        cartItems.appendChild(cartItemList);
      });

      cartTotalPrice.innerHTML = totalPrice.toFixed(2);
    } else {
      emptyCartMessage.classList.remove("hidden");
      cartTotalPrice.innerHTML = "0.00";
      cartItems.innerHTML = "";
    }
  }

  checkOut.addEventListener("click", () => {
    cart.length = 0;
    renderCart();
  });
});
