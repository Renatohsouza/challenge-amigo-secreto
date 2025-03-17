// Lista para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim(); 

    // Validar entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar nome ao array
    amigos.push(nome);

    // Limpar campo de entrada
    input.value = "";

    // Atualizar a lista de amigos na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos'); 
    listaAmigos.innerHTML = "";

    // Percorrer o array e adicionar cada nome como um <li>
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        li.classList.add('name-item'); 
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    // Gerar um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Exibir o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="result-item">O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}