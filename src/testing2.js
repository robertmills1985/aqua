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
	console.log(newStreet);
	return newStreet;
}
for (var x = 0; x < 20; x++) {
	getRandomStreet(address[getRandomInt(address.length)]);
}
