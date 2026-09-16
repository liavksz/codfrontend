import './App.css'

function App() {

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
    </div>
  )
}

export default App
