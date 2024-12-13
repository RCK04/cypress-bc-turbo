// funcionalidade
describe('Login', () => {

    beforeEach(() => {
        cy.visit('/login');
    })

    // cenários de teste
    // it são os cenários de teste
    it('Login com senha errada', () => {

        // Dado
        cy.get('#user').type('eduardo@qazando.com');
        cy.get('#password').type('123');
        cy.get('#materialUnchecked').check();

        // Quando
        cy.get('#btnLogin').click();

        // Então
        cy.get('.invalid_input')
        .should('have.text', 'Senha inválida.')
        .should('be.visible');

        // // pegar por elemento
        // cy.get('#user')

        // // pegar por texto
        // cy.get('#top_header').contains('especiais')

    })

    it('Login com email errada', () => {

        // Dado
        cy.get('#user').type('eduardoazando.com');
        cy.get('#password').type('123456');
        cy.get('#materialUnchecked').check();

        // Quando
        cy.get('#btnLogin').click();

        // Então
        cy.get('.invalid_input')
        .should('have.text', 'E-mail inválido.')
        .should('be.visible');

        // // pegar por elemento
        // cy.get('#user')

        // // pegar por texto
        // cy.get('#top_header').contains('especiais')

    })

})


