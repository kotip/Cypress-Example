import user from "./Details";

describe("login to the portal", ()=>{
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
        cy.Click_on_Signin();
        cy.Login(user[0].email, user[0].Password)
      })

      it('Add the products to the checkout', ()=>{
        cy.get(".sf-menu > :nth-child(3)").click();
        cy.get(".ajax_add_to_cart_button").click();
        cy.get('[title="Proceed to checkout"]').click();
        cy.get('.cart_navigation > .button').click();
        cy.get('.cart_navigation > .button').click();
        cy.get('#cgv').check();
        cy.get('.cart_navigation > .button').click();
      })
})