// ############################## VARIÁVEIS PRODUTOS ########################################################
//Produto 1
let produto1Nome = "Pão";
let produto1Valor = 2.0;
IdProduto1.innerHTML = `${produto1Nome} R$ ${produto1Valor.toFixed(2)}`;

//Produto 2
let produto2Nome = "Feijão";
let produto2Valor = 7.87;
IdProduto2.innerHTML = `${produto2Nome} R$ ${produto2Valor.toFixed(2)}`;

//Produto 3
let produto3Nome = "Arroz";
let produto3Valor = 6.98;
IdProduto3.innerHTML = `${produto3Nome} R$ ${produto3Valor.toFixed(2)}`;

//Produto 4
let produto4Nome = "Farinha";
let produto4Valor = 8.99;
IdProduto4.innerHTML = `${produto4Nome} R$ ${produto4Valor.toFixed(2)}`;

//Produto 5
let produto5Nome = "Açucar";
let produto5Valor = 4.7;
IdProduto5.innerHTML = `${produto5Nome} R$ ${produto5Valor.toFixed(2)}`;

//Produto 6
let produto6Nome = "Macarrão";
let produto6Valor = 2.9;
IdProduto6.innerHTML = `${produto6Nome} R$ ${produto6Valor.toFixed(2)}`;

//Produto 7
let produto7Nome = "Bolacha";
let produto7Valor = 6.44;
IdProduto7.innerHTML = `${produto7Nome} R$ ${produto7Valor.toFixed(2)}`;

//Produto 8
let produto8Nome = "Óleo";
let produto8Valor = 8.47;
IdProduto8.innerHTML = `${produto8Nome} R$ ${produto8Valor.toFixed(2)}`;

// ##############################LOCAL STORAGE########################################################

const tbody = document.querySelector("tbody");
const btnNew = document.querySelector("#btnNew");
const quantidade = document.querySelector("#quantidade");
const total = document.querySelector("#total");

let items;
// ############################## CADASTRAR PRODUTOS ########################################################

btnProduto1.onclick = () => {
  const temOProduto = items.find((produto) => produto.product === "Pão");
  if (temOProduto) {
    temOProduto.amount++;
  } else {
    items.push({
      product: produto1Nome,
      amount: 1,
      price: produto1Valor,
    });
  }

  setItensBD();

  loadItens();
};

btnProduto2.onclick = () => {
  const temOProduto = items.find((produto) => produto.product === "Feijão");
  if (temOProduto) {
    temOProduto.amount++;
  } else {
    items.push({
      product: produto2Nome,
      amount: 1,
      price: produto2Valor,
    });
  }

  setItensBD();

  loadItens();
};

btnProduto3.onclick = () => {
  const temOProduto = items.find((produto) => produto.product === "Arroz");
  if (temOProduto) {
    temOProduto.amount++;
  } else {
    items.push({
      product: produto3Nome,
      amount: 1,
      price: produto3Valor,
    });
  }

  setItensBD();

  loadItens();
};

btnProduto4.onclick = () => {
  const temOProduto = items.find((produto) => produto.product === "Farinha");
  if (temOProduto) {
    temOProduto.amount++;
  } else {
    items.push({
      product: produto4Nome,
      amount: 1,
      price: produto4Valor,
    });
  }

  setItensBD();

  loadItens();
};

btnProduto5.onclick = () => {
  const temOProduto = items.find((produto) => produto.product === "Açucar");
  if (temOProduto) {
    temOProduto.amount++;
  } else {
    items.push({
      product: produto5Nome,
      amount: 1,
      price: produto5Valor,
    });
  }

  setItensBD();

  loadItens();
};

btnProduto6.onclick = () => {
  const temOProduto = items.find((produto) => produto.product === "Macarrão");
  if (temOProduto) {
    temOProduto.amount++;
  } else {
    items.push({
      product: produto6Nome,
      amount: 1,
      price: produto6Valor,
    });
  }

  setItensBD();

  loadItens();
};

btnProduto7.onclick = () => {
  const temOProduto = items.find((produto) => produto.product === "Bolacha");
  if (temOProduto) {
    temOProduto.amount++;
  } else {
    items.push({
      product: produto7Nome,
      amount: 1,
      price: produto7Valor,
    });
  }
  setItensBD();

  loadItens();
};

btnProduto8.onclick = () => {
  const temOProduto = items.find((produto) => produto.product === "Óleo");
  if (temOProduto) {
    temOProduto.amount++;
  } else {
    items.push({
      product: produto8Nome,
      amount: 1,
      price: produto8Valor,
    });
  }

  setItensBD();

  loadItens();
};

// CONTINUACAO LOCAL STORAGE ##########################################################################################

function deleteItem(index) {
  items.splice(index, 1);
  setItensBD();
  loadItens();
}

function aumentaItem(index) {
  items[index].amount++;

  setItensBD();
  loadItens();
}
function diminuiItem(index) {
  items[index].amount--;
  setItensBD();
  loadItens();
}

function insertItem(item, index) {
  let tr = document.createElement("tr");

  tr.innerHTML = `
  <td class="columnAction">
  <button class="botaoIconesAumentar" onclick="aumentaItem(${index})"><i class="fa-solid fa-plus"></i></button>
  </td>
  <td class="columnAction">
  <button class="botaoIconesDiminuir" onclick="diminuiItem(${index})"><i class="fa-solid fa-minus"></i></button>
  </td>
    <td>${item.product}</td>
    <td>${item.amount}</td>
    <td>R$${Math.abs(item.price).toFixed(2)}</td>
    <td>R$${Math.abs(item.price * item.amount).toFixed(2)}</td>
  <td class="columnAction">
  <button class="botaoIconesDel" onclick="deleteItem(${index})"><i class="fa-solid fa-x"></i></button>
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
  let totalProdutos = 0;
  let totalPrecos = 0;
  let quantidadeProdutos = 0;
  let valorCompraTotal = 0;
  items.forEach((element) => {
    quantidadeProdutos++;
    totalProdutos += element.amount;
    totalPrecos += element.price;
    valorCompraTotal += element.amount * element.price;
  });

  produtosQt.innerHTML = quantidadeProdutos;
  quantidade.innerHTML = totalProdutos;
  total.innerHTML = `R$ ${Math.abs(valorCompraTotal).toFixed(2)}`;

  produtosQtTabela.innerHTML = quantidadeProdutos;
  quantidadeTabela.innerHTML = totalProdutos;
  totalTabela.innerHTML = `R$ ${Math.abs(valorCompraTotal).toFixed(2)}`;
}

const getItensBD = () =>
  JSON.parse(localStorage.getItem("BANCO_MERCADO")) ?? [];
const setItensBD = () =>
  localStorage.setItem("BANCO_MERCADO", JSON.stringify(items));

loadItens();
