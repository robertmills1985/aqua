
var test = ['Jennifer Robinson', 'Robert Mills', 'Kendra Geare']

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

function getLastName(input) {
	var lastName = input.split(' ')[1];
	return lastName;
}
function compareNames(a, b) {
	var answer = true;
	var shortest = 0;
	if (a.length < b.length) {
		shortest = a.length;
	} else {
		shortest = b.length;
	}
	var first = a.split('');
	var second = b.split('');
	for (var i = 0; i < shortest; i++) {
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
	return answer;
}

function abcOrder(input) {
    var inputCopy = input;
    console.log('Before = ' + inputCopy)
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
    console.log('After =' + inputCopy)
	//return something
}
abcOrder(test)
