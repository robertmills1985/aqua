
import {compareNames} from '../helpers/compareNames'


function getLastName(input){
    var lastName = input.split(' ')[1]
    return lastName
}

function abcOrder(input){
    var inputCopy = input
    for(var i = 0; i < input.length; i++){
        for(var x = i; x < input.length; x++){
            var con = getLastName(inputCopy[i])
            var com = getLastName(inputCopy[x])
            console.log(con + ' ' + com + ' = ' + compareNames(con,com))
            if(compareNames(con,com) === false){
                var a = inputCopy[i]
                var b = inputCopy[x]
                inputCopy[i] = b
                inputCopy[x] = a
                console.log(inputCopy)
            }
        }
        
    }
}

export {abcOrder}