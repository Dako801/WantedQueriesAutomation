var WantedQueries
var addWarrant = (pageObjects, entries) => {
    pageObjects
        .setValue('@Header', entries.Header)
        .setValue('@MkE', entries.MkE)
        .setValue('@OAI', entries.OAI)
        .setValue('@Name', entries.Name)
        // .setValue('@Sex', entries.Sex)
        .click(entries.Sex)
        // .setValue('@Race', entries.Race)
        .click(entries.Race)
        .setValue('@Height', entries.Height)
        .setValue('@Weight', entries.Weight)
        .setValue('@Hair', entries.Hair)
        .setValue('@Offense', entries.Offense)
        .setValue('@DOW', entries.DOW)
        .setValue('@DL', entries.Dl)
        .setValue('@dLState', entries.dlState)
        .setValue('@dlExpiration', entries.dlExpiration)
        .setValue('@licensePlate', entries.licensePlate)
        .setValue('@licenseState', entries.licenseState)
        .setValue('@licenseExpiration', entries.licenseExpiration)
        .click('@submitBtn')
    pageObjects
        .expect.element('@queryBody').text.to.contain(entries.queryString).after(500)
}
var requiredWarrant = (pageObjects, entries) => {
    pageObjects
        .setValue('@Header', entries.Header)
        .setValue('@MkE', entries.MkE)
        .setValue('@OAI', entries.OAI)
        .setValue('@Name', entries.Name)
        // .setValue('@Sex', entries.Sex)
        .click(entries.Sex)
        // .setValue('@Race', entries.Race)
        .click(entries.Race)
        .setValue('@Height', entries.Height)
        .setValue('@Weight', entries.Weight)
        .setValue('@Hair', entries.Hair)
        .setValue('@Offense', entries.Offense)
        .setValue('@DOW', entries.DOW)
        .click('@submitBtn')
    pageObjects
        .expect.element('@queryBody').text.to.contain(entries.queryString).after(500)

}
var invalidWarrant = (pageObjects,entries) => {
    pageObjects
    .setValue('@Header', entries.Header)
        .setValue('@MkE', entries.MkE)
        .setValue('@OAI', entries.OAI)
        .setValue('@Name', entries.Name)
        // .setValue('@Sex', entries.Sex)
        .click(entries.Sex)
        // .setValue('@Race', entries.Race)
        .click(entries.Race)
        .setValue('@Height', entries.Height)
        .setValue('@Weight', entries.Weight)
        .setValue('@Hair', entries.Hair)
        .setValue('@Offense', entries.Offense)
        .setValue('@DOW', entries.DOW)
        .setValue('@DL', entries.Dl)
        .setValue('@dLState', entries.dlState)
        .setValue('@dlExpiration', entries.dlExpiration)
        .setValue('@licensePlate', entries.licensePlate)
        .setValue('@licenseState', entries.licenseState)
        .setValue('@licenseExpiration', entries.licenseExpiration)
        .click('@submitBtn')
    pageObjects
        .expect.element('@error').text.to.contain (entries.queryString).after(500)
    }

module.exports = {
    beforeEach: browser => {
        WantedQueries = browser.page.wantedObjects()
        WantedQueries.navigate()

    },
    after: browser => {
        browser.end()
    },
    // https://dmutah.atlassian.net/browse/Q7D-29
    'validRequiredOptional': browser => {
        addWarrant(WantedQueries,
            {
                Header: '123456789',
                MkE: 'ABC',
                OAI: 'OAI123456',
                Name: 'Harry Dresden',
                Sex: '@Female',
                Race: '@Black',
                Hair: 'Brown',
                Height: '607',
                Weight: '215',
                Offense: 'Arson',
                DOW: '10312016',
                Dl: 'A123456',
                dlState: 'IL',
                dlExpiration: '10312017',
                licensePlate: 'ABC123',
                licenseState: 'IL',
                licenseExpiration: '11282015',
                queryString: "123456789.ABC.OAI123456.Harry Dresden.F.B.607.215.Brown.Arson.2016-10-31.A123456.IL.2017-10-31.ABC123.IL.2015-11-28",
            })
        browser.refresh()

    },
    // https://dmutah.atlassian.net/browse/Q7D-32
    'validRequired': browser => {
        requiredWarrant(WantedQueries,
            {
                Header: '123456789',
                MkE: 'ABC',
                OAI: 'OAI123456',
                Name: 'Harry Dresden',
                Sex: '@Female',
                Race: '@Black',
                Hair: 'Brown',
                Height: '607',
                Weight: '215',
                Offense: 'Arson',
                DOW: '10312016',
                queryString: "123456789.ABC.OAI123456.Harry Dresden.F.B.607.215.Brown.Arson.",
            })
        browser.refresh()
    },
    // https://dmutah.atlassian.net/browse/Q7D-35
    'invalidTest': browser => {
        invalidWarrant(WantedQueries,
            {
                Header: '12345678',
                MkE: 'ABC',
                OAI: 'OAI123456',
                Name: 'Steve Maden',
                Sex: '@Female',
                Race: '@Black',
                Hair: 'Brown',
                Height: '507',
                Weight: '160',
                Offense: 'Murder',
                DOW: '10312016',
                Dl: 'A123456',
                dlState: 'CA',
                dlExpiration: '10312017',
                licensePlate: 'ABC123',
                licenseState: 'CA',
                licenseExpiration: '11282015',
                queryString:'The "Header" field should be between 9 and 19 characters long.',
              
            })
    },
}
