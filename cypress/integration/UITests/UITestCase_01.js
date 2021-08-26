

describe('Test Suite', () => {
    it('Test Case DemoQA', () => {
        
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('FirstName')
        cy.get('#lastName').type('LastName')
        cy.get('#userEmail').type('FirstName@test.com')
        cy.get('#gender-radio-1').click({force: true})
        cy.get('#userNumber').type('1234567890')
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').select('January')
        cy.get('.react-datepicker__year-select').select('1992')
        cy.get('.react-datepicker__day--015').click()
        cy.get('#subjectsInput').type('a').then(()=>{
            cy.contains('Maths').click({force: true})
        })
        cy.contains('Sports').click()
        const fileName = '1002.pdf'
        cy.fixture(fileName).then(fileContent => {
            cy.get('#uploadPicture').attachFile({ fileContent, fileName, mimeType: 'application/pdf' }, { subjectType: 'input' });
        });
        cy.get('#currentAddress').type('Dummy Address')
        cy.contains('Select State').click()
        cy.get('#react-select-3-option-0').click()
        cy.contains('Select City').click()
        cy.get('#react-select-4-option-0').click()
        cy.get('#submit').click()
    });

    it('Test Case - DemoQA Validation', () => {
        cy.get('.modal-body').then(()=>{
            cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain','FirstName LastName')
        })
        cy.get('.modal-body').then(()=>{
            cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain','FirstName@test.com')
        })
        cy.get('.modal-body').then(()=>{
            cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain','Male')
        })
        cy.get('.modal-body').then(()=>{
            cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain','1234567890')
        })
        cy.get('.modal-body').then(()=>{
            cy.get('tbody > :nth-child(5) > :nth-child(2)').should('contain','15 January,1992')
        })
        cy.get('.modal-body').then(()=>{
            cy.get('tbody > :nth-child(6) > :nth-child(2)').should('contain','PCM')
        })
        cy.get('.modal-body').then(()=>{
            cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain','Sports')
        })
        cy.get('.modal-body').then(()=>{
            cy.get('tbody > :nth-child(8) > :nth-child(2)').should('contain','1002.pdf')
        })
        cy.get('.modal-body').then(()=>{
            cy.get('tbody > :nth-child(9) > :nth-child(2)').should('contain','Dummy Address')
        })
        cy.get('.modal-body').then(()=>{
            cy.get('tbody > :nth-child(10) > :nth-child(2)').should('contain','NCR Delhi')
        })
    })
});