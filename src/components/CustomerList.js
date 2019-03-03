import React, {Component} from 'react';
import { makeCustomer } from '../customers';
import { alphabetizer } from '../alpahbetizer'




class CustomerList extends Component {
    constructor(){
        super()
        this.state = {
            customers: ['No customers . . .']
        }
    }
    generateList(max){
        this.setState({
            customers: makeCustomer(max)
        })
    }
    convertToListItem(){
        var stateCopy = this.state.customers
        var newArray = []
        for(var i = 0; i < stateCopy.length; i++){
            newArray.push(<li>{stateCopy[i]}</li>)
        }
        return newArray 
    }
    abcOrder(){
        var stateCopy = this.state.customers
        var newArray = []
        for(var i = 0; i < stateCopy.length; i++){
            console.log('Constant is ' + stateCopy[i])

            for(var x = 0; x < stateCopy.length; x++){
                console.log('Comparison is ' + stateCopy[x])
            }
        }
    }
    chronoOrder(){

    }
    
	render() {
		return (
			<div>
                <div> 
                   <button onClick={()=>alphabetizer(this.state.customers)} >ABC</button>
                   <button>Date</button> 
                </div>
                
				<input id="test-quant" placeholder="Enter quantity" />
				<button onClick={() => this.generateList(document.getElementById('test-quant').value )}>Load Customers</button>
				<ul id="list" >
                    {this.convertToListItem()}
                </ul>
			</div>
		);
	}
}

export default CustomerList;
