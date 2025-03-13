// Preloaded flashcard data
const deck = [
    {
        question: "What is a ServiceNow instance?",
        answer: "A ServiceNow instance is a single installation of the ServiceNow platform, hosted on the cloud or on-premises, that allows users to manage IT services, workflows, and business processes."
      },
      {
        question: "What is the purpose of the System Definition > Applications module?",
        answer: "The Applications module is used to manage and configure applications, modules, and plugins in a ServiceNow instance."
      },
      {
        question: "What is a table in ServiceNow?",
        answer: "A table in ServiceNow is a database structure that stores records for a specific type of data, such as incidents, users, or tasks."
      },
      {
        question: "What is a business rule in ServiceNow?",
        answer: "A business rule in ServiceNow is server-side script that executes when a record is displayed, inserted, updated, or deleted, or when a table is queried."
      },
      {
        question: "What is the difference between a UI Policy and a Data Policy?",
        answer: "A UI Policy controls the visibility, mandatoriness, and read-only state of fields on a form, while a Data Policy enforces data integrity rules at the database level."
      },
      {
        question: "What are system properties in ServiceNow?",
        answer: "System properties are configuration settings that control the behavior of a ServiceNow instance. They can be accessed via System Properties > Properties in the application navigator."
      },
      {
        question: "How do you personalize a ServiceNow instance?",
        answer: "Instance personalization can be done by configuring system properties, UI policies, business rules, and client scripts to tailor the platform to specific business needs."
      },
      {
        question: "What is a plugin in ServiceNow?",
        answer: "A plugin is a modular component that adds specific functionality to a ServiceNow instance. Plugins can be activated or deactivated as needed."
      },
      {
        question: "How do you activate a plugin in ServiceNow?",
        answer: "Plugins can be activated via System Definition > Plugins in the application navigator. Search for the plugin and click 'Activate'."
      },
      {
        question: "What is the purpose of the 'sys_properties' table?",
        answer: "The 'sys_properties' table stores all system properties and their values for a ServiceNow instance."
      },
      {
        question: "What is a dictionary entry in ServiceNow?",
        answer: "A dictionary entry defines the metadata for a field in a table, such as its data type, label, and default value."
      },
      {
        question: "What is the difference between a global application and a scoped application?",
        answer: "A global application has access to all data and features in the instance, while a scoped application is restricted to its own data and functionality for better security and modularity."
      },
      {
        question: "What is the 'sys_scope' table used for?",
        answer: "The 'sys_scope' table stores information about applications and their scope in a ServiceNow instance."
      },
      {
        question: "What is the purpose of the 'sys_plugin' table?",
        answer: "The 'sys_plugin' table stores information about all plugins installed in a ServiceNow instance."
      },
      {
        question: "How do you configure a new system property?",
        answer: "To configure a new system property, navigate to System Properties > Properties, click 'New', and fill in the required fields such as name, type, and value."
      },
      {
        question: "What is the 'sys_properties_domain' table used for?",
        answer: "The 'sys_properties_domain' table links system properties to specific domains for multi-domain instances."
      },
      {
        question: "What is the difference between a global business rule and a scoped business rule?",
        answer: "A global business rule applies to all tables in the instance, while a scoped business rule applies only to tables within a specific application scope."
      },
      {
        question: "What is the purpose of the 'sys_ui_policy' table?",
        answer: "The 'sys_ui_policy' table stores all UI policies defined in a ServiceNow instance."
      },
      {
        question: "What is the 'sys_script' table used for?",
        answer: "The 'sys_script' table stores all business rules, client scripts, and script includes in a ServiceNow instance."
      },
      {
        question: "What is the purpose of the 'sys_ui_action' table?",
        answer: "The 'sys_ui_action' table stores all UI actions (buttons, links, etc.) defined in a ServiceNow instance."
      },
      {
        question: "What is the difference between a client script and a business rule?",
        answer: "A client script runs in the user's browser and affects the UI, while a business rule runs on the server and affects data processing."
      },
      {
        question: "What is the purpose of the 'sys_ui_page' table?",
        answer: "The 'sys_ui_page' table stores all custom UI pages created in a ServiceNow instance."
      },
      {
        question: "What is the 'sys_ui_script' table used for?",
        answer: "The 'sys_ui_script' table stores all client scripts and UI scripts in a ServiceNow instance."
      },
      {
        question: "What is the purpose of the 'sys_ui_macro' table?",
        answer: "The 'sys_ui_macro' table stores all UI macros defined in a ServiceNow instance."
      },
      {
        question: "What is the 'sys_ui_list_control' table used for?",
        answer: "The 'sys_ui_list_control' table stores all list controls (e.g., filters, buttons) defined in a ServiceNow instance."
      }
  ];
  
  // DOM Elements
  const questionElement = document.getElementById("question");
  const answerElement = document.getElementById("answer");
  const showAnswerButton = document.getElementById("show-answer");
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const currentCardElement = document.getElementById("current-card");
  const totalCardsElement = document.getElementById("total-cards");
  
  let currentCardIndex = 0;
  
  // Initialize the app
  function init() {
    totalCardsElement.textContent = deck.length;
    updateCard();
  }
  
  // Update the card display
  function updateCard() {
    const currentCard = deck[currentCardIndex];
    questionElement.textContent = currentCard.question;
    answerElement.textContent = currentCard.answer;
    answerElement.classList.add("hidden");
    currentCardElement.textContent = currentCardIndex + 1;
  }
  
  // Event Listeners
  showAnswerButton.addEventListener("click", () => {
    answerElement.classList.toggle("hidden");
  });
  
  previousButton.addEventListener("click", () => {
    currentCardIndex = (currentCardIndex - 1 + deck.length) % deck.length;
    updateCard();
  });
  
  nextButton.addEventListener("click", () => {
    currentCardIndex = (currentCardIndex + 1) % deck.length;
    updateCard();
  });
  
  // Start the app
  init();