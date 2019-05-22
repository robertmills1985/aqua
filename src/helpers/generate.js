var first = [
	'Mildred',
	'Scott',
	'Jerimiah',
	'Chris',
	'Bruce',
	'Christina',
	'Kaitlyn',
	'Kat',
	'Ben',
	'Benjamin',
	'Mathew',
	'Seth',
	'Cole',
	'America',
	'Don',
	'Donald',
	'Liz',
	'Elizebeth',
	'Arron',
	'Erin',
	'Antonio',
	'Mildred',
	'David',
	'Olive',
	'April',
	'Summer',
	'Dani',
	'Danny',
	'Matt',
	'Ben',
	'Dave',
	'John',
	'Sheree',
	'Hannah',
	'Bob',
	'Mason',
	'Olivia',
	'Tonya',
	'Andrew',
	'Mary',
	'Steve',
	'Georgina',
	'Lucy',
	'Jake',
	'Justin',
	'Jessica',
	'Jennifer',
	'Breanna',
	'Robert'
];
var last = [
	'Roth',
	'Kroeger',
	'Jeter',
	'Smith',
	'Lamar',
	'Patel',
	'Feurgenson',
	'Godbold',
	'Bailey',
	'McDonald',
	'McCray',
	'Goldberg',
	'Cruz',
	'Tyler',
	'Aneston',
	'Perry',
	'LeBlanc',
	'Matheson',
	'Laurence',
	'Mills',
	'Rupe',
	'Warner',
	'Robinson',
	'Stevenson',
	'Stevens',
	'Bruchetta',
	'Namerson',
	'Lanskey',
	'Sherberger',
	'Stone',
	'Parker',
	'Martinez',
	'Odeh',
	'Tadessess',
	'Gomez',
	'Hernandez',
	'Glurpenburg',
	'Carmichael',
	'Barro',
	'Catalina',
	'Ambock',
	'Berathian',
	'Cortez',
	'Dinklage',
	'Emerson',
	'Fugal',
	'Gacy',
	'Himachi',
	'Jamerson',
	'Keller',
	'Lougherton',
	'Mueller',
	'Nunez',
	'Oprinicus',
	'Phinnerman',
	'Rubeo',
	'Tammerton',
	'Samerson',
	'Vickerton',
	'Wideman',
	'Zimmerman'
];
var address = [
	'Happey Valley Rd',
	'Deer Valley Rd',
	'Union Hills Rd',
	'Bell Rd',
	'Greenway Rd',
	'Thunderbird Rd',
	'Cactus Rd',
	'Peoria Rd',
	'Olive Rd',
	'Northern Rd',
];

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

 function getRandomStreet(){

 }

function generate(max) {
	var totalCustomer = [];
	for (var x = 0; x < max; x++) {
		var customer = [];
		for (var i = 0; i < 4; i++) {
			if (i === 0) {
				customer.push(first[getRandomInt(first.length)]);
			}
			if (i === 1) {
				customer.push(last[getRandomInt(last.length)]);
			}
			if (i === 2) {
				customer.push(getRandomInt(4000));
			}
			if (i === 3) {
				customer.push(address[getRandomInt(address.length)]);
				var format = customer.join(' ');
				totalCustomer.push(format);
			}
		}
	}
	return totalCustomer;
}

export {generate}