describe('Test - Get People List', () => {
    const responsebody = require('../../fixtures/ResBody.json')
    it('Test Case - Get People List', () => {
        cy.request({
            method:'GET',
            url: 'https://swapi.dev/api/people'
         }).then((response)=>{
            cy.writeFile('../../fixtures/ResBody.json', response.body)
            cy.fixture('ResBody.json').then((ResBody)=>{
                expect(ResBody.count).to.exist
                expect(ResBody.next).to.exist
                expect(ResBody.previous).to.not.exist
                expect(ResBody.results).to.exist
            })      
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('count').eq(82)
            expect(response.body).to.have.property('next').eq('https://swapi.dev/api/people/?page=2')
            expect(response.body).to.have.property('previous').eq(null)
            expect(response.body).to.have.property('results').to.have.length(10)
            expect(response).to.have.property('headers')
            expect(response.headers).to.have.property('server').eq('nginx/1.16.1')
            let responseDate = response.headers.date
            expect(response.headers).to.have.property('date').eq(responseDate)
            expect(response.headers).to.have.property('content-type').eq('application/json')
            expect(response.headers).to.have.property('transfer-encoding').eq('chunked')
            expect(response.headers).to.have.property('connection').eq('keep-alive')
            expect(response.headers).to.have.property('vary').eq('Accept, Cookie')
            expect(response.headers).to.have.property('x-frame-options').eq('SAMEORIGIN')
            expect(response.headers).to.have.property('etag').eq('"b493126da505af6fec015ec116fec193"')
            expect(response.headers).to.have.property('allow').eq('GET, HEAD, OPTIONS')
            expect(response.headers).to.have.property('strict-transport-security').eq('max-age=15768000')
         }) 
    });
});