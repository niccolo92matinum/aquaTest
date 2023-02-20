describe('The Home Page', () => {
  it('on load page', () => {
    cy.visit('/')
    cy.get('nav').should('be.visible')
    cy.get('.card').should('be.visible')
    cy.get('.toggle').should('have.value', 'light')
  
  })

  it('check on button card', () =>{
   
  })

  it('fetch N items at time', () =>{
    cy.visit('/')
    cy.get('.divCard').should('have.length.greaterThan', 10)
    .then(divCard =>{
      cy.window().scrollTo('bottom')
      cy.get('.divCard').should('have.length', divCard.length * 2)

      cy.window().scrollTo('bottom')
      cy.get('.divCard').should('have.length', divCard.length * 3)
    })
  })
})