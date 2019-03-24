var test = [
	'Mills',
	'Alba',
	'Miller',
	'Codsworth',
	'Cod',
	'Zeta',
	'Bannana',
	'Bank',
	'Shit',
	'Shite',
	'Mariner',
	'Aardvark'
];

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

function letterValue(input) {
	var keyValue = 0;
	for (var i = 0; i < key.length; i++) {
		if (input === key[i]) {
			keyValue = i + 1;
		}
	}
	return keyValue;
}

function compareNames(a, b) {
	var shortest = 0;
	if (a.length < b.length) {
		shortest = a.length;
	} else {
		shortest = b.length;
	}
	var aValue = 0;
	var bValue = 0;
	for (var i = 0; i < shortest; i++) {
		console.log(letterValue(a[i]));
		console.log(letterValue(b[i]));
		aValue = aValue + letterValue(a[i]);
		bValue = bValue + letterValue(b[i]);
		if (aValue > bValue) {
			console.log('false on iterations ' + i);
			console.log('names out of order')
			return false;
		}
		else if( i === shortest - 1){
			console.log('names are in order')
			return true
		}
	}
}
compareNames('aaaad', 'aaaac');
