const contentElement = document.getElementById('content');
const languageSelect = document.getElementById('language-select');

// Objeto com os textos da política em cada idioma
const texts = {
    en: {
        // Texto em inglês
    },
    pt: {
        // Texto em português (já fornecido no prompt)
    },
    es: {
        // Texto em espanhol
    }
};

// Função para atualizar o conteúdo da página
function updateContent(language) {
    contentElement.innerHTML = texts[language];
}

// Evento para detectar a mudança de idioma
languageSelect.addEventListener('change', () => {
    const selectedLanguage = languageSelect.value;
    updateContent(selectedLanguage);
});

// Carregar o conteúdo padrão (inglês)
updateContent('en');
