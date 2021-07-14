describe('Appointments', () => {
  beforeEach(() => {
    cy.request("GET", "http://localhost:8001/api/debug/reset")

    cy.visit('/');

    cy.get("li").contains("[data-testid=day]", "Monday")
    .click()
  })

  it("should book an interview", () => {
 
    cy.get(".appointment__add-button").first()
    .click()

    cy.get("[data-testid=student-name-input]").type('David Bryne')

    cy.get("[alt='Sylvia Palmer']")
    .click()

    cy.contains('Save')
    .click()
    .then(() => {
      cy.contains(".appointment__card--show", "David Bryne");
      cy.contains(".appointment__card--show", "Sylvia Palmer");
    })
    
  });

  it("should edit an interview", () => {
 
    cy.get("[alt='Edit']")
    .click({force: true})

    cy.get("[data-testid=student-name-input]").clear().type('Gandalf')

    cy.get("[alt='Tori Malcolm']")
    .click()

    cy.contains('Save')
    .click()
    .then(() => {
      cy.contains(".appointment__card--show", 'Gandalf');
      cy.contains(".appointment__card--show", "Tori Malcolm");
    })
  })

  it("should delete an interview", () => {

    cy.get("[alt='Delete']")
    .click({force: true})

    cy.get('button').contains('Confirm')
    .click()
    
    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");
  
    cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist");
    
  })
})
