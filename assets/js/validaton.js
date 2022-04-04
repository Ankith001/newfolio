
   


const form = document.querySelector('#formName');
const usernameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const numberInput = document.querySelector('#number');
const messageInput = document.querySelector('#message');
const scriptURL = 'https://script.google.com/macros/s/AKfycbz4exKGEGWcEYxlqo_q1Z3tZVUbyFrAlCfmUf5f/exec'

form.addEventListener('submit', (event)=>{
   
    validateForm(); 

    
    if(Boolean(isFormValid())){

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .catch(error => console.error('Error!', error.message))
    alert("Message sent succesfully")
    event.preventDefault();
    window.location.reload();

}

else{

    event.preventDefault();

}

}); 

function isFormValid(){
    const inputContainers = form.querySelectorAll('.form-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}



function validateForm() {

    
    //USERNAME
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Name cannot be empty');
       
    }else if(usernameInput.value.trim().length <5 || usernameInput.value.trim().length > 15){
        setError(usernameInput, 'Enter valid name');
        
    }else if(!usernameInput.value.trim().match(/[A-Za-z]$/) ){
        setError(usernameInput, 'Enter valid name');
        
    }else {
        setSuccess(usernameInput);
      
    }


           
    


    //Phone Number
     if(numberInput.value.trim()==''){
        setError(numberInput, 'Contact number cannot be empty');
        
    }else if(!numberInput.value.trim().match(/^\d{10}$/) ){
        setError(numberInput, 'Enter valid contact number');
        
    }else {
        setSuccess(numberInput);
       

                                                                                                                                     
    }

    //EMAIL
     if(emailInput.value.trim()==''){
        setError(emailInput, ' email address cannot be empty');
        
    }else if(!isEmailValid(emailInput.value)){
        setError(emailInput, 'Provide valid email address');
        
        
    }else{
        setSuccess(emailInput);
        

        
    } 

    //MESSAGE
    if(messageInput.value.trim()==''){
        setError(messageInput, 'Message cannot be empty');
    }else if(messageInput.value.trim().length <=15){
        setError(messageInput, 'Message cannot be less than 15');
        
    }else {

        
        setSuccess(messageInput);
      
    }

}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const small = parent.querySelector('small');
    small.textContent = errorMessage;
    return false;
}

function setSuccess(element){
    


    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
    return true;
    
}

function isEmailValid(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/.test(email);
}




