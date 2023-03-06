// #############################OCULTAR INSERIR REGISTRO#########################################################
MostrarLancarReceita = () => {
  let informacoesLancarReceita = document.querySelector(
    "#informacoesLancarReceita"
  );
  informacoesLancarReceita.classList.toggle("esconder");
};

MostrarLancarDespesa = () => {
  let informacoesLancarDespesa = document.querySelector(
    "#informacoesLancarDespesa"
  );
  informacoesLancarDespesa.classList.toggle("esconder");
};
// ############################# MUDAR IMAGEM EFETUAR REGISTRO #########################################################
const MudaClass = () => {
  let opcaoescolhida = document.querySelector("#type");

  if (opcaoescolhida.value === "Saída") {
    Receita1.classList.add("divimg2");
    Receita1.classList.remove("divimg1");
    Receita1.classList.remove("divimg3");
    Receita2.classList.add("sombravermelha");
    Receita2.classList.remove("sombraverde");
    amount.classList.remove("inputreceita");
    amount.classList.add("inputdespesa");
  } else if (opcaoescolhida.value === "Entrada") {
    Receita1.classList.add("divimg1");
    Receita1.classList.remove("divimg2");
    Receita1.classList.remove("divimg3");
    Receita2.classList.add("sombraverde");
    Receita2.classList.remove("sombravermelha");
    Receita2.classList.remove("sombrabranca");

    amount.classList.add("inputreceita");
    amount.classList.remove("inputdespesa");
  } else {
    Receita1.classList.add("divimg3");
    Receita1.classList.remove("divimg1");
    Receita1.classList.remove("divimg2");
    Receita2.classList.add("sombrabranca");
    Receita2.classList.remove("sombraverde");
    Receita2.classList.remove("sombravermelha");
    amount.classList.add("inputreceita");
    amount.classList.remove("inputdespesa");
  }
};

// ##############################LOCAL STORAGE########################################################

const tbody = document.querySelector("tbody");
const descItem = document.querySelector("#desc");
const amount = document.querySelector("#amount");
const type = document.querySelector("#type");
const btnNew = document.querySelector("#btnNew");

const incomes = document.querySelector(".incomes");
const expenses = document.querySelector(".expenses");
const total = document.querySelector(".total");

let items;

btnNew.onclick = () => {
  if (descItem.value === "" || amount.value === "" || type.value === "") {
    return alert("Preencha todos os campos!");
  }

  items.push({
    desc: descItem.value,
    amount: Math.abs(amount.value).toFixed(2),
    type: type.value,
  });

  setItensBD();

  loadItens();

  descItem.value = "";
  amount.value = "";
};

function deleteItem(index) {
  items.splice(index, 1);
  setItensBD();
  loadItens();
}

function insertItem(item, index) {
  let tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${item.desc}</td>
    <td>R$ ${item.amount}</td>
    <td>${
      item.type === "Entrada"
        ? '<i style=" color: green;" class="fa-regular fa-plus"></i>'
        : '<i style=" color: red;"  class="fa-solid fa-minus"></i>'
    }</td>
    <td>
    <a class= "excluirBotao"
    onclick="deleteItem(${index})">
    <i class="fa-solid fa-x"></i>
    </a>
      </td>
  `;

  tbody.appendChild(tr);
}

function loadItens() {
  items = getItensBD();
  tbody.innerHTML = "";
  items.forEach((item, index) => {
    insertItem(item, index);
  });

  getTotals();
}

function getTotals() {
  const amountIncomes = items
    .filter((item) => item.type === "Entrada")
    .map((transaction) => Number(transaction.amount));

  const amountExpenses = items
    .filter((item) => item.type === "Saída")
    .map((transaction) => Number(transaction.amount));

  const totalIncomes = amountIncomes
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);

  const totalExpenses = Math.abs(
    amountExpenses.reduce((acc, cur) => acc + cur, 0)
  ).toFixed(2);

  const totalItems = (totalIncomes - totalExpenses).toFixed(2);

  incomes.innerHTML = `R$ ${totalIncomes}`;
  expenses.innerHTML = `R$ ${totalExpenses}`;
  total.innerHTML = `R$ ${totalItems}`;
}

const getItensBD = () => JSON.parse(localStorage.getItem("banco")) ?? [];
const setItensBD = () => localStorage.setItem("banco", JSON.stringify(items));

loadItens();
