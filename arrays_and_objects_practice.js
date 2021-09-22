/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}

let latitude = iss_location.iss_position.latitude
let longitude = iss_location.iss_position.longitude

console.log(latitude)
console.log(longitude)


/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// Add CHF to object
rates.CHF = 1.1787

// Retrieve AUD exchange rate, calculate value of 100 Euro in AUD, and log to console
let euroToAud = 100 * rates.AUD
console.log(euroToAud)

// Create array with only exchange rate values
let exchangeRateValues = Object.values(rates)

// Create array with only exchange rate keys
let exchangeRateKeys = Object.keys(rates)

// Find the highest value in the exchangeRateValues array and get the index of that value
let highestExchangeRate = 0.0
let highestExchangeRateIndex = 0
exchangeRateValues.forEach(function(rate){
    if (rate > highestExchangeRate) {
        highestExchangeRate = rate
        highestExchangeRateIndex = exchangeRateValues.indexOf(rate)
    }
})

// Retrieve currency symbol from exchangeRateValues array using index and log to console
let highestExchangeRateKey = exchangeRateKeys[highestExchangeRateIndex]
console.log('The highest exchange rate is: ' + highestExchangeRateKey)




/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]

// Go through each cat and owner pair until you find the pair with name Gary Oldman
cats_and_owners.forEach(function(cat_and_owner) {
    if (cat_and_owner.name == "Gary Oldman") {
        console.log(cat_and_owner.cat) // Once pair is located, log name of cat
    }
})

// Use push function to add Taylor Swift object to array
cats_and_owners.push({name: "Taylor Swift", cat: "Meredith"})

// Use forEach loop to go through each cat and owner pair
cats_and_owners.forEach(function(cat_and_owner) {
    // Separate owner and cat values and print out in template string
    console.log(`owner: ${cat_and_owner.name} | cat: ${cat_and_owner.cat}`)
})


/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
}


// Print names of literature laureates
// Nested forEach loop: loop through each prize until category 'literature' is found
// Then loop through group of laureates for that group and names
console.log('The literature laureates are:')
nobel_prize_winners_2017.prizes.forEach(function(prize) {
    if (prize.category == 'literature') {
        prize.laureates.forEach(function(laureate) {
            console.log(laureate.firstname + ' ' + laureate.surname)
        })
    }
})


// Print IDs of Physics laureates
// Nested forEach loop: loop through each prize until category 'physics' is found
// Then loop through group of laureates for that group and print ID
console.log('IDs of the Physics laureates:')
nobel_prize_winners_2017.prizes.forEach(function(prize) {
    if (prize.category == 'physics') {
        prize.laureates.forEach(function(laureate) {
            console.log(laureate.id)
        })
    }
})


// Print prize categories
// Loop through each prize and print category
console.log('The prize categories are:')
nobel_prize_winners_2017.prizes.forEach(function(prize) {
    console.log(prize.category)
})


// Print total number of categories
// Loop through each prize and add category to empty array. Use array length
let prizeCategories = []
nobel_prize_winners_2017.prizes.forEach(function(prize) {
    prizeCategories.push(prize.category)
})
console.log(`There are ${prizeCategories.length} prize categories`)

// Print total number of laureates
// Nested forEach loop: for each prize, loop through group of laureates and increment counter
let numberOfLaureates = 0
nobel_prize_winners_2017.prizes.forEach(function(prize) {
    prize.laureates.forEach(function(laureate) {
        numberOfLaureates++
    })
})
console.log(`There are a total of ${numberOfLaureates} Laureates`)



