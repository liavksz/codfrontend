import './App.css'

function App() {

  // bloco A

function testar() {
  let nome = prompt("Qual é o seu nome?")
  let bocaDoSapo = nome
 alert (nome + ", seu nome tá na bocaDoSapo")
}
function calcularMedia() { 

let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let media = (nota1 + nota2) / 2;

alert("A média das notas é: " + media);

 }
function calcularPontos(){

  let vitorias = Number(prompt('Número de vitórias:'))
  let empates = Number(prompt('Número de empates:'))
  let pontos = vitorias*3 + empates
  alert('O seu time tem ' + pontos + ' pontos')

}
function trocarSapatos(){

let qndPares = Number(prompt('Digite a quantidade de pares:'))
let precoPar = Number(prompt('Digite o preço de cada par:'))
let valorTotal = qndPares * precoPar
alert('Valor total R$' + valorTotal.toFixed(2))

 }
function calcularDevs (){
 let clt = Number(prompt('Quantos trabalhadores de carteira assinada tem na sua empresa?'))
 let estagiarios = Number(prompt('Quantos estagiários tem na sua empresa?'))
 let pj = Number(prompt('Quantas pessoas jurídicas tem na sua empresa?'))
 let resultado = clt+estagiarios+pj 
 alert('No total, há '+ resultado + ' devs na sua empresa.')
 }
function laranjasDoDia(){
let laranjasIniciais = Number(prompt('quantas laranjas haviam no início?'))
let laranjasFinais = Number(prompt('Quantas laranjas haviam no final das vendas?'))
let resultado = laranjasIniciais - laranjasFinais
alert('No total, foram '+ resultado + ' laranjas vendidas no dia.')

}
function igreja(){
let custosMensais = Number(prompt('Quais são os custos mensais da igreja?'))
let dizimo = Number(prompt('Quanto foi recebido de doações e dízimo hoje?'))
let resultado = custosMensais - dizimo
alert('Faltam R$'+resultado.toFixed(2)+' para pagar os custos mensais.')
}
function junin (){
let salario = Number(prompt('Quanto é seu salário?'))
let diasJob = Number(prompt('Quantos dias foram trabalhados?'))
let resultado = salario / diasJob
alert('Seu salário por dia é '+ resultado+ ' reais')
}
function caminhao(){

  let peso = Number(prompt('Qual foi o peso total do caminhão com a carga?'))
  let pesoCaminhao = Number(prompt('E qual é o peso do caminhão vazio?'))
  let resultado = peso - pesoCaminhao
  alert('O peso da carga é '+ resultado)
}
function celular (){

let n = Number(prompt("Quantas vezes usou o celular?"));

let chance = (0.1 / (1 + 500 * n)) * 100;

alert(chance + "%");

}

//bloco b

function frete(){
let peso = Number(prompt('Digite o peso:'))
let volume = Number (prompt('Digite o volume:'))
let distancia = Number(prompt('Digite a distância:'))
let frete = 15 + (peso*2) + (distancia*0.05) + (volume*10)
alert('O valor do frete é '+ frete+' reais.')

}
function donaBete(){
let faturamento = Number(prompt('Quanto foi o faturamento de hoje?'))
let premiacoes = Number(prompt('QUanto foi gasto em premiações?'))
let agrados = Number(prompt('O quanto foi gasto em agrados para as autoridades?'))
let comissoes = Number(prompt('O quanto foi gasto em comissões para os operários?'))
let resultado = faturamento-premiacoes-agrados-comissoes 
alert('O faturamento de hoje foi '+resultado+' reais.')
}
function lucro(){
let gasto = Number(prompt('O quanto foi gasto para manter o navio?'))
let ingressos = Number(prompt('Quanto foi o lucro com a venda de ingressos?'))
let itens = Number(prompt('Qual foi a renda com a venda de itens?'))
let resultado = (itens+ingressos)-gasto
let percentual = (resultado/gasto)*100
alert('O lucro foi de '+resultado+' reais, e o lucro percentual foi de '+percentual+'%')
}
function bomba(){
let show = Number (prompt('Quantos shows estão agendados?'))
let bombas = 7
let resultado = bombas*show 
alert('Você vai precisar de '+resultado+' bombas.')
}
function manoJuca(){
let salario = Number(prompt('Olá Juca! Quanto de salário você recebeu?'))
let moradia = Number(prompt('Quanto você gastou com moradia?'))
let agua = Number(prompt('Quanto você gastou com água?'))
let luz = Number(prompt('Quanto você gastou com luz?'))
let internet = Number(prompt('Quanto você gastou com internet?'))
let gasolina = Number(prompt('Quanto você gastou com gasolina?'))
let streamings = Number(prompt('Quanto você gastou com streamings?'))
let telefone = Number(prompt('Quanto você gastou com telefone?'))
let outros = Number(prompt('Quanto você gastou com outros?'))
let resultado = salario-(moradia+agua+luz+internet+gasolina+streamings+telefone+outros)
alert ('Juca, você tem atualmente '+resultado+' reais!')
}
function romero(){
let obra = Number(prompt('Romero, quanto você pagou na obra comprada?'))
let lucro = obra*3 
alert('Você deve vender a obra por '+lucro+' reais.')
}
function bernardo(){
let peso = Number(prompt("Digite o peso da ração em gramas:"));
let preco = peso / 1000 * 10;
alert("O preço é R$ " + preco.toFixed(2));

}
function calcular() {
let pessoas = Number(prompt("Quantas pessoas vão ao açougue?"));
let carne = pessoas * 0.5;
let cerveja = pessoas * 1;
let agua = pessoas * 0.5;
let refri = pessoas * 0.2;
alert(
"Carne: " + carne + " kg\n" +
"Cerveja: " + cerveja + " L\n" +
"Água: " + agua + " L\n" +
"Refrigerante: " + refri + " L"
)
}





  return (
    <div className="cont-app">
   <h1>JavaScript no React</h1>
   <h2>Exercícios supimpas</h2>
   <hr />
   <h2>Aula 1</h2>
   <button onClick={testar}>Testar</button>
  <button onClick={calcularMedia}>Média</button>
  <hr />
  <h2>Aula 2</h2>
  <button onClick={calcularPontos}>Campeonato</button>
  <button onClick={trocarSapatos}>Trocas Pé Pequeno</button>
  <button onClick={calcularDevs}>Calcular devs</button>
  <button onClick={laranjasDoDia}>Calcular laranjas</button>
  <button onClick={igreja}>Calcular doações</button>
  <button onClick={junin}>Salário por dia</button>
  <button onClick={caminhao}>Calcular caminhão</button>
  <button onClick={celular}>Suas chances</button>
  <hr />
  <h2>Aula 3</h2>
  <button onClick={frete}>Preço do frete</button>
  <button onClick={donaBete}>Cálculo Bet</button>
  <button onClick={lucro}>Lucro Capitão Ganso</button>
  <button onClick={bomba}>Show de ilusionismo</button>
  <button onClick={manoJuca}>Calculador do Juca</button>
  <button onClick={romero}>Obras do Romero</button>
  <button onClick={bernardo}>Ração</button>
  <button onClick={calcular}>Calcular açougue</button>
    </div>
  )
}

export default App
