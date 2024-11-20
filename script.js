// Define um objeto com as traduções para cada idioma
const translations = {
  "pt-BR": {
    "title": "Políticas de Privacidade",
    "text1": "Esta página contém as políticas de privacidade do nosso aplicativo. Por favor, leia com atenção.",
    "text2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    // Adicione mais textos aqui...
  },
  "en-US": {
    "title": "Privacy Policy",
    "text1": "This page contains the privacy policies of our application. Please read carefully.",
    "text2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    // Adicione mais textos aqui...
  },
  "es-ES": {
    "title": "Política de Privacidad",
    "text1": "Esta página contiene las políticas de privacidad de nuestra aplicación. Por favor, lea con atención.",
    "text2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    // Adicione mais textos aqui...
  }
};

// Define um objeto que mapeia os IDs dos elementos de texto no HTML para as traduções
const textElements = {
  "title": document.getElementById("title"),
  "text1": document.getElementById("text1"),
  "text2": document.getElementById("text2"),
  // Adicione mais elementos aqui...
};

// Função para alterar o idioma da página
function changeLanguage(lang) {
  Object.keys(textElements).forEach((key) => {
    textElements[key].innerText = translations[lang][key];
  });
}

// Inicializa a página com o idioma inglês como padrão
changeLanguage('en-US');

// Adiciona um evento de mudança ao seletor de idioma
document.getElementById('lang-select').addEventListener('change', function() {
  const selectedLang = this.value;
  changeLanguage(selectedLang);
});
