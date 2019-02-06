import React from 'react'
import './LogIn.css'

//realized alot of these features are something that would apply more to an account creation.
//either some wording needs to be changed or keep it a log in component and cut and paste alot of the functionality to
//a account creation component



function checkSuffix(a){
    var suffix = a
    var minus = a.length - 4
    for(var i = 0; i < minus; i++){
        suffix.shift()
    }
    suffix = suffix.join('')
    if(suffix === '.com'){
        return true
    }else {
        return false
    }
}

function logIn(a, b){
    a = a
    b = b
    var aCheck = {
        first : a.split(''),
        second: false
    }    
    for(var i = 0; i < aCheck.first.length; i++){
        if(aCheck.first[i] === '@'){
            aCheck.second = true
        }
    }

    if(aCheck.second == true && checkSuffix(aCheck.first) == true && b.length > 5){
        console.log('log in was successful', aCheck.second, checkSuffix(aCheck.first), b.length)
    } else {
        console.log('log in has failed', aCheck.second, checkSuffix(aCheck.first), b.length)
    }
    //console.log('email is ' + a, 'password is ' + b)
    
  }
  
const SignUp = props => (
    <div id='log-in-panel'>
        <h5>Create account</h5>
        <input id='email' placeholder={props.email}/>
        <input id='password' placeholder={props.password} />
        <button onClick={() => logIn(document.getElementById('email').value, document.getElementById('password').value )} >
            Submit
        </button>
    </div>
)

export default SignUp