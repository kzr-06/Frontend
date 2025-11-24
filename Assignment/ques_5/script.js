const products = [
  { name: "Laptop", category: "electronics" },
  { name: "Smartphone", category: "electronics" },
  { name: "Headphones", category: "electronics" },
  { name: "T-Shirt", category: "clothing" },
  { name: "Jeans", category: "clothing" },
  { name: "Jacket", category: "clothing" },
  { name: "Novel Book", category: "books" },
  { name: "Science Textbook", category: "books" },
  { name: "Notebook", category: "books" },
  { name: "Sneakers", category: "clothing" },
];

const productList = document.getElementById("productList");
const buttons = document.querySelectorAll("button");


function displayProducts(filteredProducts) {
  productList.innerHTML = ""; 
  filteredProducts.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product-item");
    div.innerText = product.name;
    productList.appendChild(div);
  });
}

displayProducts(products);


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    if (category === "all") {
      displayProducts(products);
    } else {
      const filtered = products.filter(p => p.category === category);
      displayProducts(filtered);
    }
  });
});
