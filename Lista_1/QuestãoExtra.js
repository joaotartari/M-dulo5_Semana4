const prompt = require('prompt-sync')();
class produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}
class cliente {
  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
  }
}
class venda {
  constructor(cliente, listaProduto) {
    this.cliente = cliente;
    this.listaProduto = listaProduto;
  }
  total() {
    let valor = 0;
    for (let i of this.listaProduto) {
      valor += i.preco;
    }
    return valor;
  }
}
const clientsList = [];
const productsList = [];

while (true) {
  //Menu
  console.log(
    'Olá, bem-vindo ao sistema do mercado alvorada!\nDigite 1 para insirir um novo cliente.\nDigite 2 para inserir um novo produto.\nDigite 3 para realizar uma venda.\nDigite 0 para sair.'
  );
  let entrada = prompt('Digite o comando: ');
  if (entrada < 4 && entrada >= 0) {
    if (entrada == 0) {
      break;
    } else if (entrada == 1) {
      let nomeCliente = prompt('Digite o nome do cliente: ');
      let cpf = prompt('Digite o cpf do cliente: ');
      const novoCliente = new cliente(nomeCliente, cpf);
      clientsList.push(novoCliente);
      console.log(clientsList);
    } else if (entrada == 2) {
      let nomeProduto = prompt('Digite o nome do produto: ');
      let preco = parseFloat(prompt('Digite o preço do produto: '));
      const novoProduto = new produto(nomeProduto, preco);
      productsList.push(novoProduto);
      console.log(productsList);
    } else {
      let clienteVenda = prompt(
        'Digite o nome do cliente que está fazendo a compra: '
      );
      let cpfVenda = prompt(
        'Digite o cpf do cliente que está fazendo a compra: '
      );
      let QtdVendas = parseFloat(
        prompt('Digite quantos produtos estão sendo adquiridos na venda: ')
      );
      if (QtdVendas <= 0) {
        console.log('Quantidade inválida.');
      } else {
        let clienteSell = new cliente(clienteVenda, cpfVenda);
        let = listaVendas = [];
        for (let i = 1; i <= QtdVendas; i++) {
          let produtoSell = prompt('Digite o nome do produto: ');
          let precoSell = parseFloat(prompt('Digite o preço do produto: '));
          listaVendas.push(new produto(produtoSell, precoSell));
        }
        console.log(
          `O total de vendas do ${clienteSell.nome} foi ${new venda(
            clienteSell.nome,
            listaVendas
          ).total()}.`
        );
      }
    }
  } else {
    console.log('Comando inválido.');
  }
}
