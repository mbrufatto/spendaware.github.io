const texts = {
    pt: {
        titulo: "Bem-vindo ao meu site!",
        conteudo: "Este é um exemplo de página multilíngue."
    },
    en: {
        title: "Welcome to my website!",
        content: "This is an example of a multilingual page."
    }
};

const languageSelect = document.getElementById('language-select');
const contentElement = document.getElementById('content');

languageSelect.addEventListener('change', () => {
    const selectedLanguage = languageSelect.value;
    contentElement.innerHTML = `
        <h2>${texts[selectedLanguage].titulo}</h2>
        <p>${texts[selectedLanguage].conteudo}</p>
    `;
});

// Carregar o conteúdo inicial (por exemplo, em português)
contentElement.innerHTML = `
    <h2>${texts.pt.titulo}</h2>
    <p>${texts.pt.conteudo}</p>
`;
