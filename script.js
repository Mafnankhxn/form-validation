const nameerror = document.getElementById('nameerror');
const phoneerror = document.getElementById('phoneerror');
const emailerror = document.getElementById('emailerror');
const messageerror = document.getElementById('messageerror');
const form = document.getElementById('form');
const submitbtn = document.getElementById('btn');

function namecheck(){
    const username = document.getElementById('name').value;
   if(username == ''){
    nameerror.innerHTML = 'name required';
    return false;
   }
   if(!username.match(/^[A-Z][a-z]+ [A-Z][a-z]+$/)){
    nameerror.innerHTML = ' fullname required';
    return false;
   }
   else{
       nameerror.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
       return true;
   }
}
function phonecheck(){
    const userphone = document.getElementById('phone').value;
    if(userphone == ''){
        phoneerror.innerHTML = 'phone number is required'
        return false;
    }
     else if(!userphone.match(/^[0-9]{11}$/)){
        phoneerror.innerHTML = 'phone number should be of 10 digits'
        return false;
    }
    else{
        phoneerror.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
        return true;
    }
}
function emailcheck(){
const useremail = document.getElementById('email').value;
if(!useremail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
    emailerror.innerHTML = 'Use correct format'
}
else{
    emailerror.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}
}
function messagecheck(){
    const usermessage = document.getElementById('message').value;
    console.log(usermessage)
    if(usermessage.length >= 30){
        messageerror.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    }
    else{
        messageerror.innerHTML = 'Message should be greater than 30 characters';
        return true;
    }
}
form.addEventListener('submit', (e) => {
    if(!namecheck() || !phonecheck() || !emailcheck() || !messagecheck()){
        e.preventDefault();
    }
    else{
        alert('form submitted successfully');
        form.submit();
    }
})
submitbtn.addEventListener('click', () => {
    console.log(submitbtn.innerHTML)
})