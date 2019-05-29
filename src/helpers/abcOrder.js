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
/* takes in a single letter string value and loops over an array to deterime the 
inputed letters numerical value, then returns that value*/
function letterValue(input) {
	var keyValue = 0;
	for (var i = 0; i < key.length; i++) {
		if (input === key[i] || input === capKey[i]) {
			keyValue = i + 1;
		}
	}
	return keyValue;
}
/* Takes two string values and loops over each one to determine 
if "a" does come before "b", or not, returns a boolean */
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
		if (fir > sec) {
			answer = false;
			break;
		} else if (fir < sec) {
			break;
		}
	}
	return answer;
}
/* Takes in an index with a string value, splits it and then returns index[1] */
function getLastName(input) {
	var lastName = input.split(' ')[1];
	return lastName;
}
/* Loops over an array of string values and returns them in alphabetical order
 based off of the second word in each index */
function abcOrder(input) {
	var inputCopy = input;
	for (var i = 0; i < input.length; i++) {
		for (var x = i; x < input.length; x++) {
			var con = getLastName(inputCopy[i]);
			var com = getLastName(inputCopy[x]);
			if (compareNames(con, com) === false) {
				var a = inputCopy[i];
				var b = inputCopy[x];
				inputCopy[i] = b;
				inputCopy[x] = a;
			}
		}
	}
	return inputCopy;
}

export { abcOrder };
