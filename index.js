function changeBackground() {
    // Limpar o conteúdo atual da página
    document.body.innerHTML = '';

    // Definir o fundo da página para amarelo
    document.body.style.backgroundColor = 'blue';

    // Criar uma nova imagem
    let img = document.createElement('img');
    img.src = 'homem camisa.webp';  // Substitua pelo caminho da sua imagem
    img.alt = 'Imagem centralizada';
    
    // Estilizar a imagem
    img.style.position = 'absolute';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    img.style.borderRadius = '10px';
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';

    // Adicionar a imagem ao corpo da página
    document.body.appendChild(img);
}

// Adicionar o ouvinte de evento ao botão
document.getElementById('changeButton').addEventListener('click', changeBackground);
