import React from 'react'

function createCustomer(a, b){
    console.log(a, b)
}

const Input = props => (
    <div>
        <div>
            <label>Enter name</label>
            <input id='name-input'></input>
        </div>
        <div>
            <label>Enter address</label>
            <input id='address-input' ></input>
        </div>
        <div>
            <button  
            onClick={()=>createCustomer(document.getElementById('name-input').value, 
            document.getElementById('address-input').value)} >
            Submit
            </button>
        </div>
    </div>
)

export default Input