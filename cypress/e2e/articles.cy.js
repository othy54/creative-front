describe('Test articles', () => {
    it('Find at least an article', () => {
        cy.visit('https://localhost:4321/blog/');
        const article = cy.get('.articles > li');
        article.should('have.length.greaterThan', 0);
        article.last().find('a').first().click();
    })
})