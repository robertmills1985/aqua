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
	var longest = 0;
	if (a.length < b.length) {
		shortest = a.length;
		longest = b.length
	} else {
		shortest = b.length;
		longest = a.length;
	}
	var aValue = 0;
	var bValue = 0;
	for (var i = 0; i < longest; i++) {
		//console.log(letterValue(a[i]));
		//console.log(letterValue(b[i]));
		aValue = aValue + letterValue(a[i]);
		bValue = bValue + letterValue(b[i]);
		if (aValue > bValue) {
			//console.log('false on iterations ' + i);
			console.log('names OUT of order', i)
			return false;
		}
		else if(i === longest-1 && aValue <= bValue) {
			console.log('names IN order', i)
			if(aValue === bValue){
				console.log('SAME values')
			}
			return true
		}
		
	}
}
compareNames('piss', 'shit');
compareNames('alma','arizona')
compareNames('hello','hello')
