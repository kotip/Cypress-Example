// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('Click_on_Signin', () => {
    cy.get('.login').click();
})

Cypress.Commands.add('Enter_email', (email) => {
    cy.get('#email_create').type(email)
})

Cypress.Commands.add('Click_on_register_button', () => {
    cy.get('#SubmitCreate').click();
})

Cypress.Commands.add('Choose_Gender_option', () => {
    cy.get('#id_gender1').check();
})

Cypress.Commands.add('Enter_firstName', (FisrtName) => {
    cy.get('#customer_firstname').type(FisrtName);
})

Cypress.Commands.add('Enter_Lastname', (LastName) => {
    cy.get('#customer_lastname').type(LastName);
})

Cypress.Commands.add('Enter_Password', (Password) => {
    cy.get('#passwd').type(Password);
})

Cypress.Commands.add('Select_Birth_Date', (Day) => {
    cy.get('#uniform-days').within(()=>{
        cy.get('select').select(Day).should('have.value', Day)
    })
})

Cypress.Commands.add('Select_Birth_Month', (Month) => {
    cy.get('#uniform-months').within(()=>{
        cy.get('select').select(Month);
      })
})

Cypress.Commands.add('Select_Birth_Year', (Year) => {
    cy.get('#uniform-years').within(()=>{
        cy.get('select').select(Year).should('have.value', Year)
      })
})

Cypress.Commands.add('Enter_Company', (Comapny) => {
    cy.get('#company').type(Comapny);
})

Cypress.Commands.add('Enter_Address', (Address) => {
    cy.get('#address1').type(Address);
})

Cypress.Commands.add('Enter_City', (City) => {
    cy.get('#city').type(City);
})

Cypress.Commands.add('Select_State', (State) => {
    cy.get('#uniform-id_state').within(()=>{
        cy.get('select').select(State);
      })
})

Cypress.Commands.add('Enter_Postcode', (Postcode) => {
    cy.get('#postcode').type(Postcode)
})

Cypress.Commands.add('Enter_Mobile_Number', (PhNo) => {
    cy.get('#phone_mobile').type(PhNo);
})

Cypress.Commands.add('Click_Register_button', () => {
    cy.get('#submitAccount').click();
})

Cypress.Commands.add('Login', (email,password) => {
    cy.get('#email').type(email);
    cy.get('#passwd').type(password);
    cy.get('#SubmitLogin').click();
})