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
	'67th',
	'75th',
	'59th',
	'55th',
	'53rd',
	'43rd',
	'35th',
	'27th',
	'19th',
	'7th',
	'Happey Valley Rd',
	'Deer Valley Rd',
	'Union Hills Rd',
	'Bell Rd',
	'Greenway Rd',
	'Thunderbird Rd',
	'Cactus Rd',
	'Peoria Rd',
	'Olive Rd',
	'Northern Rd'
];
var dir = [ 'N', 'S' ];
var dir2 = [ 'W', 'E' ];
var road = [ 'Ave', 'St', 'Dr' ];

/* This function takes in a number and generates a random number between 1 and whatever number was inputed. */
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

/* This functions takes in a single digit or character string and 
 determines if it is a number or letter in that string. Returns a boolean. */
function numLet(input) {
	var isNum = false;
	var nums = [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
	for (var i = 0; i < nums.length; i++) {
		if (input == nums[i]) {
			isNum = true;
		}
	}
	return isNum;
}

/* This function will generate a random street. Example: W Thunderbird Rd, or N 67th Ave */
function getRandomStreet(input) {
	var newStreet = [];
	/*This below determines the direction of the road based on the roads name. A named street will generate W or E.
	 A numbered road will generate N or S*/
	if (numLet(input[0]) != false) {
		newStreet.push(dir[getRandomInt(dir.length)]);
	} else {
		newStreet.push(dir2[getRandomInt(dir2.length)]);
	}
	//Pushes the name of the street.
	newStreet.push(input);
	/* This below determines the type of road based. Example: Ave, St, Dr  */
	if (newStreet[0] == 'N' || newStreet[0] == 'S') {
		newStreet.push(road[getRandomInt(road.length)]);
	}
	newStreet = newStreet.join(' ');
	return newStreet;
}
/* This below is what randomly generates customers names and addresses. It takes in a number that is the
 desired amount to be generated. It returns an array with string values
 in each index */
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
				customer.push(getRandomStreet(address[getRandomInt(address.length)]));
				var format = customer.join(' ');
				totalCustomer.push(format);
			}
		}
	}
	return totalCustomer;
}

export { generate };
