/* So this is just a copy of all the javascript in one file with a extra function i use for testing and it console logs
out a bunch of stuff. At the bottom there you can invoke it. It takes in 4 parameters as a single string
I did this because for some reason my debugger doesnt recognize import or export syntax but i think i really like
doing it that way now
*/
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

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function numLet(input) {
	var isNum = false;
	var nums = [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
	for (var i = 0; i < nums.length; i++) {
		if (input == nums[i]) {
			isNum = true;
		}
	}
	return isNum;
	//console.log(`${input} = ${isNum}`)
}

function getRandomStreet(input) {
	var newStreet = [];
	if (numLet(input[0]) != false) {
		newStreet.push(dir[getRandomInt(dir.length)]);
	} else {
		newStreet.push(dir2[getRandomInt(dir2.length)]);
	}
	newStreet.push(input);
	if (newStreet[0] == 'N' || newStreet[0] == 'S') {
		newStreet.push(road[getRandomInt(road.length)]);
	}
	//console.log(newStreet)
	newStreet = newStreet.join(' ');
	return newStreet;
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
				customer.push(getRandomStreet(address[getRandomInt(address.length)]));
				var format = customer.join(' ');
				totalCustomer.push(format);
			}
		}
	}
	return totalCustomer;
}


var key = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];

var capKey = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];

function letterValue(input) {
	var keyValue = 0;
	for (var i = 0; i < key.length; i++) {
		if (input === key[i] || input === capKey[i]) {
			keyValue = i + 1;
		}
	}
	return keyValue;
}
function compareNames(a, b) {
	var answer = true;
	var shortest = 0;
	var longest = 0;
	if (a.length < b.length) {
		shortest = a.length;
		longest = b.length;
	} else {
		shortest = b.length;
		longest = a.length;
	}
	var first = a.split('');
	var second = b.split('');
	for (var i = 0; i < longest; i++) {
		var fir = letterValue(first[i]);
		var sec = letterValue(second[i]);
		//console.log(first[i] + ' ' + fir, second[i] + ' ' + sec);
		if (fir > sec) {
			answer = false;
			break;
		} else if (fir < sec) {
			break;
		}
	}
	//console.log(answer, fir, first.join(''), sec ,second.join(''))
	return answer;
}

function getLastName(input) {
	var lastName = input.split(' ')[1];
	return lastName;
}

function abcOrder(input) {
	var inputCopy = input;
	for (var i = 0; i < input.length; i++) {
		for (var x = i; x < input.length; x++) {
			var con = getLastName(inputCopy[i]);
			var com = getLastName(inputCopy[x]);
			//console.log(con + ' ' + com + ' = ' + compareNames(con, com));
			if (compareNames(con, com) === false) {
				var a = inputCopy[i];
				var b = inputCopy[x];
				inputCopy[i] = b;
				inputCopy[x] = a;
				//console.log(inputCopy);
			}
		}
	}
	return inputCopy;
}
function testing(maxRounds, maxSets, viewCustomers, abcActive) {
	for (var i = 0; i < maxRounds; i++) {
		var view = viewCustomers;
		//console.log(`view = ${view}`)
        var customers = generate(maxSets);
        if(abcActive === 'on'){
           customers = abcOrder(customers); 
        }
		
		if (view[2] === 'on') {
			console.log(x + 1 + '. ' + compareNames(index, comparison) + `. ${index} vs ${comparison}`);
		}
		var check = [];
		var passOrFail = `----------------------------------------------------------ROUND ${i + 1} PASSED ALL TESTS`;

		
		for (var x = 0; x <= customers.length; x++) {
			if (x === 0) {
				console.log(`ROUND ${i + 1} START. ${maxRounds} rounds, ${maxSets} sets each, view is set to ${viewCustomers}`);
				if(view === 'on'){
                    console.log(customers)
                }
			}
			if (customers[x + 1] != undefined) {
				var index = customers[x].split(' ')[1];
				var comparison = customers[x + 1].split(' ')[1];
				if (view === 'on') {
					console.log(x + 1 + '. ' + compareNames(index, comparison) + `. ${index} vs ${comparison}`);
				}
				if (compareNames(index, comparison) === true) {
					check.push('pass');
				} else {
					check.push('fail');
				}
			}
			for (var a = 0; a < check.length; a++) {
				if (check[a] != 'pass') {
					passOrFail = `-----------------------------------ROUND ${i + 1}-----------------FAILED CHECK`;
				}
			}
		}
		console.log(passOrFail);
	}
}

function runTest(input) {
	var arg = input.split(',');
	testing(arg[0], arg[1], arg[2], arg[3]);
}
/* runTest takes 4 parameters as a single string with commas seperating them.
First is how many rounds. Second is how many sets per round. Third is on or off and it console logs extra info
Fourth is on or off and it will toggle abcOrder function on or off*/
//EXAMPLE BELOW:
//runTest('2,5,on,on')
//runTest('3,50,off,on')
