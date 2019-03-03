function wordValue(input) {
	var value = 0;
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
	for (var i = 0; i < input.length; i++) {
        //console.log('constant is ' + input[i] + '. i equals ' + i)
		for (var x = 0; x < key.length; x++) {
            //console.log('comparison is ' + key[x] + '. x equals ' + x)
			if (input[i] === key[x]) {
				value = value + x + 1;
			}
		}
	}
    //console.log(value);
    return value
}
function lastNamer(input){
    var inputCopy = input
    for(var i = 0; i < inputCopy.length; i++){
        console.log(inputCopy[i].split(' ')[1])
    }
}
function alphabetizer(input) {
    lastNamer(input)
}

export { alphabetizer };
