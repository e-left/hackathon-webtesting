const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nugb51",
  e2e: {
    baseUrl: 'https://rahulshettyacademy.com/seleniumPractise/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
