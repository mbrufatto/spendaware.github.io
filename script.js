// Define um objeto com as traduções para cada idioma
const translations = {
    "pt-BR": {
      "title": "Políticas de Privacidade",
      "introduction_title": "Introdução",
      "introduction_description": "O nosso aplicativo é comprometido em proteger a privacidade e a segurança dos dados dos nossos usuários. Esta política de privacidade descreve como coletamos, usamos e protegemos os dados dos nossos usuários.",
      "data_collection_title": "Coleta de Dados",
      "data_collection_description": "O aplicativo utiliza o iCloud do usuário para que ele possa ter acesso aos seus dados em todos os seus dispositivos.\n\nTodos os dados ficam registrados em seu iCloud.\n\nNós não coletamos dados de nossos usuários.\n\nNós protegemos os dados dos nossos usuários com medidas de segurança adequadas, incluindo:\n - Autenticação de usuários Controle de acesso \n - Compartilhamento de Dados no iCloud do nossos usuários.\n\nNós não compartilhamos os dados dos nossos usuários com terceiros, apenas no iCloud do usuário.\n",
      "user_rights_title": "Direitos dos Usuários",
      "user_rights_subtitle": "Os usuários têm o direito de:",
      "user_rights_description": " - Acessar e corrigir seus dados, não sendo aplicado ao apelido;\n - Cancelar sua conta; \n - Exercer seus direitos de acordo com a legislação aplicável;\n  - Mudanças nesta Política.\n\nNós nos reservamos o direito de fazer alterações nesta política de privacidade a qualquer momento, mediante comunicação aos nossos usuários.",
      "contact_title": "Contato",
      "contact_description": "Se você tiver alguma dúvida ou preocupação sobre esta política de privacidade, por favor entre em contato conosco em spendaware@gmail.com.",
      "last_update_title": "Última Atualização ",
      "last_update_description": "Esta política de privacidade foi atualizada em 20 de Novembro de 2024.",
      "copywrite": "&copy; 2024 Mantra Tech. Todos os direitos reservados.",
      "language_select": {
        "options": ["Inglês", "Português", "Espanhol"]
      }
    },
    "en-US": {
      "title": "Privacy Policies",
      "introduction_title": "Introduction",
      "introduction_description": "Our app is committed to protecting the privacy and security of our users' data. This privacy policy describes how we collect, use, and protect our users' data.",
      "data_collection_title": "Coleta de Dados",
      "data_collection_description": "The application uses the user's iCloud so that it can access its data on all its devices.\n\nAll data is recorded in your iCloud.\n\nWe do not collect data from our users. We protect our users' data with appropriate security measures, including:\n\n - User authentication Access control \n - Data sharing in our users' iCloud.\n\nWe do not share our users' data with third parties, only in the user's iCloud.",
      "user_rights_title": "User Rights",
      "user_rights_subtitle": "Users have the right to:",
      "user_rights_description": " - Access and correct your data, not being applied to the nickname;\n - Cancel your account;\n - Exercise your rights in accordance with applicable legislation;\n - Changes to this Policy.\n\nWe reserve the right to make changes to this privacy policy at any time, by communicating this to our users.",
      "contact_title": "Contact",
      "contact_description": "If you have any questions or concerns about this privacy policy, please contact us at spendaware@gmail.com.",
      "last_update_title": "Last Update",
      "last_update_description": "This privacy policy was last updated on November 20, 2024.",
      "copywrite": "&copy; 2024 Mantra Tech. All rights reserved.",
      "language_select": {
        "options": ["English", "Portuguese", "Spanish"]
      }
    },
    "es-ES": {
      "title": "Políticas de Privacidad",
      "introduction_title": "Introducción",
      "introduction_description": "Nuestra aplicación se compromete a proteger la privacidad y la seguridad de los datos de nuestros usuarios. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos los datos de nuestros usuarios.",
      "data_collection_title": "Recopilación de datos",
      "data_collection_description": "La aplicación utiliza iCloud del usuario para que pueda acceder a sus datos en todos sus dispositivos.\n\nTodos los datos se registran en su iCloud.\n\nNo recopilamos datos de nuestros usuarios. Protegemos los datos de nuestros usuarios con medidas de seguridad adecuadas, que incluyen:\n\n - Autenticación de usuario Control de acceso \n - Intercambio de datos en el iCloud de nuestros usuarios.\n\nNo compartimos los datos de nuestros usuarios con terceros, solo en el iCloud del usuario.\n",
      "user_rights_title": "Derechos de usuario",
      "user_rights_subtitle": "Los usuarios tienen derecho a:",
      "user_rights_description": " - Acceder y corregir sus datos, no siendo aplicados al apodo;\n - Cancelar su cuenta; \n - Ejercer sus derechos de acuerdo con la legislación aplicable;\n - Cambios a esta Política.\n\nNos reservamos el derecho de realizar cambios a esta política de privacidad en cualquier momento, comunicándolos a nuestros usuarios.",
      "contact_title": "Contacto",
      "contact_description": "Si tiene alguna pregunta o inquietud sobre esta política de privacidad, contáctenos en saveaware@gmail.com.",
      "last_update_title": "Última actualización",
      "last_update_description": "Esta política de privacidad fue actualizada el 20 de noviembre de 2024.",
      "copywrite": "&copy; 2024 Mantra Tech. Reservados todos los derechos.",
      "language_select": {
        "options": ["Inglés", "Portugués", "Español"]
      }
    }
  };
  
  // Define um objeto que mapeia os IDs dos elementos de texto no HTML para as traduções
  const textElements = {
      "title": document.getElementById("title"),
      "introduction_title": document.getElementById("introduction_title"),
      "introduction_description":  document.getElementById("introduction_description"),
      "data_collection_title": document.getElementById("data_collection_title"),
      "data_collection_description": document.getElementById("data_collection_description"),
      "user_rights_title": document.getElementById("user_rights_title"),
      "user_rights_subtitle": document.getElementById("user_rights_subtitle"),
      "user_rights_description": document.getElementById("user_rights_description"),
      "contact_title": document.getElementById("contact_title"),
      "contact_description": document.getElementById("contact_description"),
      "last_update_title": document.getElementById("last_update_title"),
      "last_update_description": document.getElementById("last_update_description"),
  };
  
  // Função para alterar o idioma da página
  function changeLanguage(lang) {
    Object.keys(textElements).forEach((key) => {
      textElements[key].innerText = translations[lang][key];
    });

    // Atualiza as opções do select
    const options = document.getElementById('lang-select').options;
    for (let i = 0; i < options.length; i++) {
      options[i].text = translations[lang]['language_select']['options'][i];
    }
  }

  // Inicializa a página com o idioma inglês como padrão
  changeLanguage('en-US');
  
  // Adiciona um evento de mudança ao seletor de idioma
  document.getElementById('lang-select').addEventListener('change', function() {
    const selectedLang = this.value;
    changeLanguage(selectedLang);
  });
  
