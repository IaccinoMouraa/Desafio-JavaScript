//A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.
//Mostre no console quantos produtos tem nessa lista.
//Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
//Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.
//Remova o segundo item da sua lista.
//Crie uma lista de apenas numeros 1,3,5,7,0,9​

//Ordene essa lista do menor para o maior.
//Retire o primeiro numero desta lista.
//Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]
//Crie uma string que contenha o dia de hoje, exemplo: 

//let hoje = '20/07/2019';

//Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.

//INICIO DO EXERCICIO: DESAFIO JAVASCRIPT.


//A lista de produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.
let listProducts = ["Computador", "Telefone", "Mouse", "Teclado"];

//buscando os item dentro da lista
listProducts.map((i)=>{
    console.log(i)
});

//quantidade de itens possui a lista.
console.log(`Essa lista possui ${listProducts.length} elementos`);

// Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes. 
const itemRemovido1 = listProducts.splice(2, 1)
listProducts.map((i) => {
    console.log(i);
});
console.log(`Item removido ${itemRemovido1}`);

// Faça uma busca na sua lista por algum produto, por exemplo procure por Computador 
// e caso exista esse produto na sua lista exiba um console falando que este produto 
// existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisando
// que o produto não foi encontrado.
let itemEcontrado = listProducts.find((item) =>{
    return item;
});

if(itemEcontrado === "Computador"){
    console.log(`Item encontrado: ${itemEcontrado}`)
}else{
    console.log("Item nao encontrado ou inexistente!")
}

//REMOVENDO O SEGUNDO ITEM DA LISTA.
const itemRemovido2 = listProducts.splice(1, 1);
listProducts.map((item) =>{
    console.log(item);
});
console.log(`Item removido: ${itemRemovido2}`);

//Crie uma lista de apenas numeros 1,3,5,7,0,9​:
let numeros = [1, 3, 5, 7, 0, 9];

//ORDENANDO A LISTA DO MENOR PARA O MAIOR.
console.log(numeros.sort());
//RETIRANDO UM NUMERO DA LISTA.
console.log(numeros.splice(1));

//CRIE UMA STRING QUE CONTENHA O DIA DE HOJE, EXEMPLO:
// LET HOJE = `20/07/2019`;
const data = new Date();
const dataDia = data.getDay().toString().padStart(2, '0');
const dataMes = data.getMonth();
const dataAno = data.getFullYear();

console.log(`${dataDia} /${dataMes}/${dataAno}`);
