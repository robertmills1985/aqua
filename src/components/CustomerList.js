import React, {Component} from 'react';
import { makeCustomer } from '../customers';



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
	render() {
		return (
			<div>
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
