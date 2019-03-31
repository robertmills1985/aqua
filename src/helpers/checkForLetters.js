var compare = [0,1,2,3,4,5,6,7,8,9,10]

function checkForLetters(input) {
    var format = input.toString().split('');
    var tally = 0
    //console.log(format)
	for (var i = 0; i < format.length; i++) {
		for(var x = 0; x < compare.length; x++){
            if(format[i] == compare[x]){
                //console.log('found number')
                tally = tally + 1
            }
        }
    }
    if(tally == format.length){
        console.log('all numbers')
        return false
    }
    else {
        console.log('found letters')
        return true
        
    }
}

export {checkForLetters}