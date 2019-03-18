
var first = ['Danny', 'Matt', 'Ben', 'Dave','John', 'Sheree','Hannah', 'Bob', 'Mason', 'Olivia', 'Tonya', 'Andrew', 'Mary', 'Steve', 'Georgina', 'Lucy', 'Jake', 'Justin', 'Jessica', 'Jennifer', 'Breanna', 'Robert']
var last = ['Roth', 'Kroeger', 'Jeter', 'Smith', 'Lamar', 'Patel','Feurgenson', 'Godbold', 'Bailey', 'McDonald', 'McCray', 'Goldberg', 'Cruz', 'Tyler', ' Aneston', 'Perry', 'LeBlanc', 'Matheson', 'Laurence', 'Mills', 'Rupe', 'Warner', 'Robinson', 'Stevenson', 'Stevenson', 'Bruchetta', 'Namerson', 'Lanskey']
var address = ['E Joan De Arc', 'S Olive', 'E Norther', 'Meyer','W Baker St','W Lemon St','W Norther Rd', 'W Mary Jane Ln','N Bethany Rd','N Cactus Rd','N Thunder Bird', 'N 67th Ave',
            'N 71st Ave', 'N 75th Ave', 'S 32nd St','S 7th St','S 12th Ave']


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function makeCustomer(max){
    var totalCustomer = []
    for(var x = 0; x < max; x++){
    var customer = []
    for(var i = 0; i < 4; i++){
        if(i === 0){
            customer.push(first[getRandomInt(first.length)])
        }
        if(i === 1){
            customer.push(last[getRandomInt(last.length)])
        }
        if(i === 2){
            customer.push(getRandomInt(4000))
        }
        if(i === 3){
            customer.push(address[getRandomInt(address.length)])
            var format = customer.join(' ')
            totalCustomer.push(format)
            //console.log(customer)
            //console.log('Format is ' + format)
            //console.log('Total customer is ' + totalCustomer)
        }
    }
    //totalCustomer.push(format)
    //console.log(totalCustomer)
    //console.log(customer.join(' '))
}
//console.log(totalCustomer)
return totalCustomer
}

export {makeCustomer}
