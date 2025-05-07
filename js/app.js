let listaAmigos = [];

function adicionar() {

    let nome = document.getElementById('nome-amigo').value.trim();

    if (!/^[a-zA-ZÀ-ú\s]+$/.test(nome)) {
        alert('Insira um nome válido contendo apenas letras.');
        return;
    }
    if (nome === '') {
        alert('Insira um nome');
        return;
    }
    if (listaAmigos.includes(nome)) {
        alert('Nome já adicionado, insira um nome válido');
        return;
    }

    listaAmigos.push(nome);

    let listaAmigosDiv = document.getElementById('lista-amigos');
    if (listaAmigosDiv.textContent === '') {
        listaAmigosDiv.textContent = nome;
    } else {
        listaAmigosDiv.textContent += ', ' + nome;
    }

    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if (listaAmigos.length < 4) {
        alert('Adicione pelo menos 4 nomes');
        return;
    }
    embaralha(listaAmigos);

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        let proximo = (i === listaAmigos.length - 1)
            ? listaAmigos[0]
            : listaAmigos[i + 1];
        sorteio.innerHTML += listaAmigos[i] + ' --> ' + proximo + '<br/>';
    }
}

function embaralha(listaAmigos) {
    for (let indice = listaAmigos.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [listaAmigos[indice - 1], listaAmigos[indiceAleatorio]] = 
            [listaAmigos[indiceAleatorio], listaAmigos[indice - 1]];
    }
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}