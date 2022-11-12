import {SignIn} from "/firebase.js"


window.SignUP = function (){

const email = document.getElementById('input').value
const password = document.getElementById('input-2').value

SIGNUPFIREBASE( email, password)

}


window.SigIn = async function(){

    const email = document.getElementById('input').value
    const password = document.getElementById('input-2').value
  try{  
  await SignIn( email, password)
  alert('Login Successfull')
  window.location.href = 'classDetail.html'

  }
  catch(e){
    const errorElem = document.getElementById('error')
    errorElem.innerHTML = e.message 
  }

}

