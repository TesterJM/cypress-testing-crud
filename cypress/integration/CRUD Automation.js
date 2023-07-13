it('Create to-do',function()
{
    cy.visit('https://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type('Tech Exam{enter}')
    cy.get('.new-todo').type('Tech Interview{enter}')
})  

it('Read to-do', function()
{
    cy.contains('Active').click()
    cy.contains('Completed').click()
    cy.contains('All').click()
})

it('Update to-do', function()
{
    cy.get(':nth-child(1) > .view > label').dblclick()
    cy.focused().clear().type('Technical Exam{enter}')
    cy.get(':nth-child(2) > .view > label').dblclick()
    cy.focused().clear().type('Technical Exam{enter}')
})

it('Delete to-do', function()
{
    cy.get(':nth-child(1) > .view > .toggle').click()
    cy.contains('Clear completed').click()

})