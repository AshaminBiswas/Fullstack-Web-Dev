document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const item = document.getElementById("item");
  const amount = document.getElementById("amount");
  const showExpenses = document.getElementById("showExpenses");
  const total = document.getElementById("total");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotal();

  renderExpenses();
  updateTotal();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = item.value.trim();
    const expenseAmount = parseFloat(amount.value.trim());

    if (name !== "" && !isNaN(expenseAmount) && expenseAmount > 0) {
      const newExpense = {
        id: Date.now(),
        name: name,
        expenseAmount: expenseAmount,
      };
      expenses.push(newExpense);
      saveExpensesToLocal();
      renderExpenses();
      updateTotal();

      // Clear input
      item.value = "";
      amount.value = "";
    }
  });

  function calculateTotal() {
    return expenses.reduce((sum, expense) => sum + expense.expenseAmount, 0);
  }

  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  function updateTotal() {
    totalAmount = calculateTotal();
    total.textContent = totalAmount.toFixed(2);
  }

  function renderExpenses() {
    showExpenses.innerHTML = "";
    expenses.forEach((element) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${element.name} -- $${element.expenseAmount}
        <button data-id="${element.id}">Delete</button>
      `;
      showExpenses.appendChild(li);
    });
  }
  showExpenses.addEventListener("click", (e) => {
    if ((e.target.tagName = "BUTTON")) {
      const deleteButtonId = parseInt(e.target.getAttribute("data-id"));
      expenses = expenses.filter((expense) => expense.id !== deleteButtonId);
      saveExpensesToLocal();
      renderExpenses();
      updateTotal();
    }
  });
});
