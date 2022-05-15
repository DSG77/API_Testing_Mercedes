/// <reference types ="Cypress" />


describe('get api test for resources/decklidstatus', function() {

    it('GET-read', function() {
        cy.request({
            method: 'GET',
            url: 'https://api.mercedes-benz.com/vehicledata_tryout/v2/vehicles/WDB111111ZZZ22222/resources/decklidstatus',
            headers: {
                'authorization': "Bearer 4c4c444c-v123-4123-s123-4c4c444c4c44"
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.decklidstatus.value).to.eq("false")
            expect(res.body.decklidstatus.timestamp).to.eq(1541080800000)
        })
    });
});