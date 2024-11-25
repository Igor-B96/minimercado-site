// Exemplo de mensagem temporária ao carregar o site
document.addEventListener('DOMContentLoaded', () => {
    alert("Bem-vindo ao Minimercado Online!");
});

// Validação básica do formulário de cadastro
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    const nome = document.getElementById('nome').value;
    if (nome.trim() === "") {
        alert("Por favor, preencha o campo Nome.");
        event.preventDefault(); // Impede o envio do formulário
    }
});

// Navegação suave para links de âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão

        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth', // Rola suavemente
                block: 'start'      // Alinha com o início da seção
            });
        }
    });
});
