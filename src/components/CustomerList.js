import React, {Component} from 'react';
import { makeCustomer } from '../helpers/customers';
import { alphatize } from '../helpers/abc';



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
    abcOrder(input){
        var newOrder = alphatize(input)
        
        this.setState({
            customers: newOrder
        })
    }
    chronoOrder(){

    }
    
	render() {
		return (
			<div>
                <div> 
                   <button onClick={()=>this.abcOrder(this.state.customers)} >ABC</button>
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
