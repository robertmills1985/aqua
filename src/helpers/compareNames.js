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
		}
		else if(fir < sec){
			break;
		}
	}
	return answer;
}
//console.log(compareNames('aaac','aaab'))
//console.log(compareNames('aaaac','aaabbb'))
//console.log(compareNames('Aaron','Zack'))
//console.log(compareNames('Zack','Arron'))
export { compareNames }