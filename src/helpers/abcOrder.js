
import {compareNames} from '../helpers/compareNames'

var example = ['John Stuart','Arron Mason','Zack Effron','Art Masona', 'Rob Arizona', 'Gavin Belson', 'Chew Charleston']

function getLastName(input){
    var lastName = input.split(' ')[1]
    return lastName
}

function abcOrder(input){
    var inputCopy = input
    //console.log(inputCopy)
    for(var i = 0; i < input.length; i++){
        //console.log(constant)
        for(var x = 0; x < input.length; x++){
            var constant = getLastName(inputCopy[i])
            var comparison = getLastName(inputCopy[x])
            var a = inputCopy[i]
            var b = inputCopy[x]
            if(compareNames(constant,comparison) != true){
                console.log(constant + ' ' + comparison + ' = false')
            }
            else {
                console.log(constant + ' ' + comparison + ' = true')
            }
        }
    }
    
    //console.log('new array is ' + inputCopy)
}

export {abcOrder}