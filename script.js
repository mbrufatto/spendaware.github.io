const contentElement = document.getElementById('content');
const languageSelect = document.getElementById('language-select');

// Objeto com os textos da política em cada idioma
const texts = {
    en: {
        introduction: "Introduction",
        dataCollection: "The app uses the user's iCloud to allow them to access their data on all their devices.",
        // ...
    },
    pt: {
        introducao: "Introdução",
        coletaDeDados: "O aplicativo utiliza o iCloud do usuário para que ele possa ter acesso aos seus dados em todos os seus dispositivos.",
        usoDeDados: "Todos os dados ficam registrados no iCloud do usuário.",
        // ...
    },
    es: {
        introduccion: "Introducción",
        recoleccionDeDatos: "La aplicación utiliza el iCloud del usuario para que pueda acceder a sus datos en todos sus dispositivos.",
        // ...
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
