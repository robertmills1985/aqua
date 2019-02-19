import React from 'react'
import {makeCustomer} from '../customers'

var newArray = []
var customerArray = makeCustomer(3)
for(var i = 0; i < customerArray.length; i++){
    newArray.push(<li id={i}><button>Edit</button><button>x</button>{customerArray[i]}</li>)
}
function getCustomers(max){
    newArray = []
    customerArray = makeCustomer(max)
    console.log('New array is ' + customerArray)
    console.log(customerArray.length + ' long.')
    for(var i = 0; i < customerArray.length; i++){
        newArray.push(<li id={i}><button>Edit</button><button>x</button>{customerArray[i]}</li>)
    }
    render(newArray)
}

const CustomerList = props => (
    <div>
        <input id='test-quant' placeholder='Enter quantity'></input>
        <button onClick={()=>getCustomers(document.getElementById('test-quant').value )}>Load Customers</button>
        <ul id='list'>
            {newArray}
        </ul>
    </div>
)

export default CustomerList