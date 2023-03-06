// ##############################LOCAL STORAGE########################################################

const tbody = document.querySelector("tbody");
const btnNew = document.querySelector("#btnNew");
const quantidade = document.querySelector("#quantidade");
const total = document.querySelector("#total");

let items;
// ##### CADASTRAR PRODUTOS ######

btnProduto1.onclick = () => {
  const temOProduto = items.find((produto) => produto.product === "Pão");
  if (temOProduto) {
    temOProduto.amount++;
  } else {
    items.push({
      product: "Pão",
      amount: 1,
      price: 2,
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
      product: "Feijão",
      amount: 1,
      price: 7.87,
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
      product: "Arroz",
      amount: 1,
      price: 6.98,
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
      product: "Farinha",
      amount: 1,
      price: 8.99,
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
      product: "Açucar",
      amount: 1,
      price: 4.7,
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
      product: "Macarrão",
      amount: 1,
      price: 2.9,
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
      product: "Bolacha",
      amount: 1,
      price: 6.4,
    });
  }

  btnProduto8.onclick = () => {
    const temOProduto = items.find((produto) => produto.product === "Óleo");
    if (temOProduto) {
      temOProduto.amount++;
    } else {
      items.push({
        product: "Óleo",
        amount: 1,
        price: 8.74,
      });
    }

    setItensBD();

    loadItens();
  };
};

// CONTINUACAO LOCAL STORAGE #########

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

  items.forEach((element) => {
    quantidadeProdutos++;
    totalProdutos += element.amount;
    totalPrecos += element.price;
  });

  let valorCompraTotal = totalProdutos * totalPrecos;

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
