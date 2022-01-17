/// <reference types="cypress" />
import user from "./Details";

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
  })

  it('Register', () => {
    let j=2;
    for(let i=0; i<=j; i++){
    cy.Click_on_Signin();
    cy.Enter_email(user[`${i}`].email);
    cy.Click_on_register_button();
    cy.Choose_Gender_option();
    cy.Enter_firstName(user[`${i}`].firstName);
    cy.Enter_Lastname(user[`${i}`].lastName);
    cy.Enter_Password(user[`${i}`].Password);
    cy.Select_Birth_Date(user[`${i}`].dob);
    cy.Select_Birth_Month(user[`${i}`].month);
    cy.Select_Birth_Year(user[`${i}`].Year);
    cy.Enter_Company(user[`${i}`].Company);
    cy.Enter_Address(user[`${i}`].address);
    cy.Enter_City(user[`${i}`].city);
    cy.Select_State(user[`${i}`].State);
    cy.Enter_Postcode(user[`${i}`].postalcode);
    cy.Enter_Mobile_Number(user[`${i}`].Phone);
    cy.Click_Register_button();
    cy.get('.logout').click();
    }
  })
})
