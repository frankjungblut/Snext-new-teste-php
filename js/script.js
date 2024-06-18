//Atualiza o Copyright com o ano atual
document.querySelector(".copyright").innerHTML = `Copyright ${new Date().getFullYear()} © <a href="index.html">S NEXT Cibersegurança</a>`;

document.addEventListener("DOMContentLoaded", function () {
    // Página equipe
    let up1 = document.querySelector(".up1");
    let up2 = document.querySelector(".up2");
    let up3 = document.querySelector(".up3");
    let list = document.querySelector(".equipe-center");

    // Função para exibir os detalhes de um item
    function showItens(array) {
        let textElement = document.querySelector('.equipe-presentation-text');
        let imageElement = document.querySelector('.img-presentation');

        if (array && array.length > 0) { // Verifica se o array não é nulo e tem elementos
            textElement.innerHTML = `
                <h4>${array[0].title}</h4>
                <p>${array[0].subtitle}</p>
                <br>
                <p>${array[0].description}</p>
            `;
            imageElement.innerHTML = `<img src="${array[0].src}" height="" width="">`;
        } else {
            // Se o array de employees estiver vazio ou nulo, limpa os elementos
            textElement.innerHTML = '';
            imageElement.innerHTML = '';
        }
    }

    // Função para definir o botão ativo
    function setActiveButton(button) {
        // Remove a classe 'active' de todos os botões
        document.querySelectorAll('.equipe-options a').forEach(function (btn) {
            btn.classList.remove('active');
        });
        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');
    }

    // Função para aplicar efeitos de transição
    function applyTransitionEffect() {
        let textElement = document.querySelector('.equipe-presentation-text');
        let imageElement = document.querySelector('.img-presentation');

        // Remover e redefinir a classe de transição após um pequeno atraso
        textElement.classList.remove('transition-effect');
        imageElement.classList.remove('transition-effect');

        setTimeout(() => {
            textElement.classList.add('transition-effect');
            imageElement.classList.add('transition-effect');
        }, 100);
    }

    // Função para inicializar a página da equipe
    function initializeTeamPage() {
        if (typeof employees !== 'undefined') {
            // Se o array de employees estiver definido, executa o código relacionado
            showItens([employees[0]]);
            setActiveButton(up1); // Define o botão 'up1' como ativo
            applyTransitionEffect(); // Aplica o efeito de transição

            // Adiciona ouvintes de evento aos botões para exibir os detalhes do respectivo item
            up1.addEventListener("click", () => {
                showItens([employees[0]]);
                setActiveButton(up1);
                applyTransitionEffect();
            });
            up2.addEventListener("click", () => {
                showItens([employees[1]]);
                setActiveButton(up2);
                applyTransitionEffect();
            });
            up3.addEventListener("click", () => {
                showItens([employees[2]]);
                setActiveButton(up3);
                applyTransitionEffect();
            });

            // Adiciona eventos de clique aos botões para mostrar os detalhes do respectivo item
            up1.addEventListener("click", () => showItens([employees[0]]));
            up2.addEventListener("click", () => showItens([employees[1]]));
            up3.addEventListener("click", () => showItens([employees[2]]));
        } else {
           console.log("Olá! Que legal te ver por aqui. 😁")
        }
    }

    // Chama a função de inicialização quando o DOM estiver totalmente carregado
    initializeTeamPage();
});

//FAZ A TROCA DE VIDEOS NA PÁGINAS DE VIDEOS
document.addEventListener('DOMContentLoaded', function() {
    const videoListItems = document.querySelectorAll('#video-list li');
    const mainVideo = document.getElementById('main-video');

    videoListItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoId = item.getAttribute('data-video-id');
            mainVideo.src = `https://www.youtube.com/embed/${videoId}`;
        });
    });
});