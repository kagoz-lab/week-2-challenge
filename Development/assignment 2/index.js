
document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const addButton = document.getElementById("addlist");
  const clearButton = document.getElementById("clearlist");
  const itemInput = document.getElementById("itemName");
  const priceInput = document.getElementById("price");
  const shoppingList = document.getElementById("shoppingList");
  const toggleButton = document.getElementById("toggleButton");

  // Function to add item to the shopping list
  function addItem() {
      const itemName = itemInput.value.trim();
      const price = priceInput.value.trim();

  if (itemName && price) {
      const listItem = document.createElement("div");
      listItem.classList.add("list-item");
      listItem.innerHTML = `<span>${itemName} - $${price}</span>`;
      shoppingList.appendChild(listItem);

      // Clear inputs after adding
      itemInput.value = '';
      priceInput.value = '';
  } else {
      alert("Please enter both item and price.");
  }
  }

  // Function to clear the shopping list
  function clearList() {
      shoppingList.innerHTML = '';
  }

  // Dark mode / Light mode toggle
  toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  });

  // Event listeners for buttons
  addButton.addEventListener("click", addItem);
  clearButton.addEventListener("click", clearList);
});

