describe('Get Details of Luke Skywalker', () => {
    it('Test Case - Get Basic Details of Luke Skywalker', () => {
        cy.request({
        method:'GET',
        url: 'https://swapi.dev/api/people'
    }).then((response)=>{
        expect(response.body.results[0].name).to.equal('Luke Skywalker')
        expect(response.body.results[0].height).to.equal('172')
        expect(response.body.results[0].mass).to.equal('77')
        expect(response.body.results[0].hair_color).to.equal('blond')
        expect(response.body.results[0].skin_color).to.equal('fair')
        expect(response.body.results[0].eye_color).to.equal('blue')
        expect(response.body.results[0].birth_year).to.equal('19BBY')
        expect(response.body.results[0].gender).to.equal('male')
        expect(response.body.results[0].homeworld).to.equal('https://swapi.dev/api/planets/1/')
        cy.request({
            method:'GET',
            url: 'https://swapi.dev/api/planets/1/'
        }).then((response)=>{
            expect(response.body.name).to.equal('Tatooine')
            cy.request({
                method:'GET',
                url: 'https://swapi.dev/api/people/1/'
            }).then((response)=>{
                expect(response.body.name).to.equal('Luke Skywalker')
            })
        })
    })
    });
});