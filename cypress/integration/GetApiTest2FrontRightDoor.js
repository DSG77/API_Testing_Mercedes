/// <reference types ="Cypress" />


describe('get api test for front right door resource', function() {

    let accessToken = '4c4c444c-v123-4123-s123-4c4c444c4c44' //here I assigned token as variable
    it('GET-read', function() {
        cy.request({
            method: 'GET',
            url: 'https://api.mercedes-benz.com/vehicledata_tryout/v2/vehicles/WDB111111ZZZ22222/resources/doorstatusfrontright',
            headers: {
                'authorization': "Bearer " + accessToken // concatenating here variable as token
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.doorstatusfrontright.value).to.eq("false")
            expect(res.body.doorstatusfrontright.timestamp).to.eq(1541080800000)

        })
    })
})