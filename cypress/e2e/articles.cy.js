describe('Test articles', () => {
    it('Find at least one article', () => {
        cy.visit('/blog/');
        cy.get('[data-cy="articles"] > li').as('articles');
        cy.get('@articles').should('have.length.greaterThan', 0);
        cy.get('@articles').last().find('[data-cy="article-link-image"]').click();
    });
})