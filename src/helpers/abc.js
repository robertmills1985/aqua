
var key = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//gives all leters a numerical value. example: a = 1 or z = 26
function letterValue(input){
    console.log('lettervalue input is ' +  input)
    for(var i = 0; i < key.length; i++){
        var keyValue = 0
        if(input === key[i]){
            keyValue = i + 1
            console.log(key[i])
        }
    }
    //console.log(keyValue)
    return keyValue
}
//grabs the last name out an array
function lastNamer(input){
    console.log(input.split(' ')[1])
    return input.split(' ')[1]
}
//this will be invoked to arrange the accounts in alphabetical order.
function alphatize(input){
    var inputCopy = input
    //console.log('input is ' + inputCopy)
    for(var i = 0; i < input.length; i++){
        var lastName = lastNamer(input[i])
        var firstLetter = lastName[0]
        //console.log('iteration is ' + i, 'first letter is ' + firstLetter, 'letter value is ' + letterValue(firstLetter))
        for(var x = 0; x < input.length; x++){
            var compLastName = lastNamer(input[x])
            var compFirstLetter = compLastName[0]
            var constant = firstLetter
            var comparison = compFirstLetter
            if(firstLetter < compFirstLetter){
                var a = inputCopy[i]
                var b = inputCopy[x]
                inputCopy[i] = b
                inputCopy[x] = a
            }
        }
        //console.log(firstLetter)
        //console.log(lastName)
    }
    //console.log(inputCopy)
    return inputCopy
}
export {alphatize}

