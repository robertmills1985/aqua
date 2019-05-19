var first = [
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
	'Stevenson',
	'Bruchetta',
	'Namerson',
	'Lanskey'
];
var address = [
	'E Joan De Arc',
	'S Olive',
	'E Norther',
	'Meyer',
	'W Baker St',
	'W Lemon St',
	'W Norther Rd',
	'W Mary Jane Ln',
	'N Bethany Rd',
	'N Cactus Rd',
	'N Thunder Bird',
	'N 67th Ave',
	'N 71st Ave',
	'N 75th Ave',
	'S 32nd St',
	'S 7th St',
	'S 12th Ave'
];

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
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
	console.log(arg);
	testing(arg[0], arg[1], arg[2], arg[3]);
}
//console.log('THE FOLLOWING IS WITHOUT abcOrder()')
//failCheck(3,2,'on')
//failCheck(3,5,'on')
//failCheck(3,7,'off')
//console.log('THE FOLLOWING IS WITH abcOrder()')
//testing(3,2,'on')
//testing(3,5,'on')
//testing(3,7,'off')
//console.log('THE FOLLOWING IS WITH abcOrder() DOING 5 ROUNDS WITH A 1000 SETS EACH AND VIEW SET TO OFF')
//testing(5, 1000, 'off')
export { runTest };
