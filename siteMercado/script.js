// ##############################LOCAL STORAGE########################################################

const tbody = document.querySelector("tbody");
const btnNew = document.querySelector("#btnNew");
// const incomes = document.querySelector(".incomes");
// const expenses = document.querySelector(".expenses");
// const total = document.querySelector(".total");

let items;

btnNew.onclick = () => {
  items.push({
    descricao: Pao,
    preco: 2,
    Qt: 1,
  });

  setItensBD();

  loadItens();
};

function deleteItem(index) {
  items.splice(index, 1);
  setItensBD();
  loadItens();
}

// function insertItem(item, index) {
//   let tr = document.createElement("tr");

//   tr.innerHTML = `
//     <td>${item.descricao}</td>
//     <td>R$ ${item.preco}</td>
//     <td> ${item.Qt}</td>
//     }</td>
//     <td class="columnAction">
//       <button onclick="deleteItem(${index})">Deletar</button>
//     </td>
//   `;

//   tbody.appendChild(tr);
// }

function loadItens() {
  items = getItensBD();
  tbody.innerHTML = "";
  items.forEach((item, index) => {
    insertItem(item, index);
  });

  // getTotals();
}

// function getTotals() {
//   const precoIncomes = items
//     .filter((item) => item.type === "Entrada")
//     .map((transaction) => Number(transaction.preco));
//   const precoExpenses = items
//     .filter((item) => item.type === "Saída")
//     .map((transaction) => Number(transaction.preco));
//   const totalIncomes = precoIncomes
//     .reduce((acc, cur) => acc + cur, 0)
//     .toFixed(2);
//   const totalExpenses = Math.abs(
//     precoExpenses.reduce((acc, cur) => acc + cur, 0)
//   ).toFixed(2);
//   const totalItems = (totalIncomes - totalExpenses).toFixed(2);
//   Qt.innerHTML = totalIncomes;
//   total.innerHTML = totalItems;
// }

const getItensBD = () => JSON.parse(localStorage.getItem("bancoMercado")) ?? [];
const setItensBD = () =>
  localStorage.setItem("bancoMercado", JSON.stringify(items));

loadItens();
