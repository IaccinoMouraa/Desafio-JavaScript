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

let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let produtos =  JSON.parse(localStorage.getItem("@listaProdutos")) || [];


function renderProdutos(){
    listElement.innerHTML = "";

    produtos.map((todo)=>{
        let liElement = document.createElement("li");
        let produtosText = document.createTextNode(todo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        //indexOf:buscar a posicao do item.
        let posicao = produtos.indexOf(todo);

        linkElement.setAttribute("onclick", `deletarProdutos(${posicao})`)

        liElement.appendChild(produtosText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);

    })
}

renderProdutos();


function adicionarProdutos(){
    if(inputElement.value === ''){
        alert("Digite algum produto.");
        return false;
    }else{
        let novoProdutos = inputElement.value;

        produtos.push(novoProdutos);
        inputElement.value = '';

        renderProdutos();
        salvarDados();

    }
}

buttonElement.onclick =  adicionarProdutos;


//chamando o renderTarefa: retornando a funcionalidade desejada.
//splice: removendo o item apartir da posicao.
function deletarProdutos(posicao){
    produtos.splice(posicao, 1);
    renderProdutos();
    salvarDados();
}

function salvarDados(){
    localStorage.setItem("@listaProdutos", JSON.stringify(produtos) )
}



