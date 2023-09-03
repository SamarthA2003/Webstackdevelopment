const btn = document.getElementById('btn');
const toggler = document.getElementById('toggler');
const full_Name = document.getElementById('fname');
const email = document.getElementById("email");
const full_Name_Error = document.querySelector('.error');
const email_Error = document.querySelector('.error2');
const password_Error = document.querySelector('.error3');
const cpassword_Error = document.querySelector('.error4');
const emailAddress = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('cpassword');
const submitBtn = document.getElementById('btn');
const dob = document.getElementById('dob');
const date = new Date();
const year = date.getFullYear();
dob.addEventListener('input',(()=>{
    console.log(dob.value)
    const getYear = dob.value.split("-")[0];

    //console.log(dob.value.split("/"))
   
    const presentYear = year - getYear;
    console.log(presentYear);
    if(presentYear < 18){
        submitBtn.disabled = true;
        submitBtn.classList.add('btn-disabled')
    }else{
        submitBtn.disabled = false;
        submitBtn.classList.remove('btn-disabled')
    }

}))

// Validation of Password Both are same and Password Security using REGEX
password.addEventListener('input',(()=>{
    if(!isValidPassword(password.value)){
        password_Error.hidden = false;
        password_Error.textContent = 'Must be at least 8 characters long and contain a mix of letters and numbers'
    }else{
        password_Error.textContent = '√ Strong Password'
    }
}))

// Checking confirmPassword isValid compare to enteredPassword
confirmPassword.addEventListener('input',(()=>{
    console.log(password.value);
    if(password.value !== confirmPassword.value){
        cpassword_Error.hidden = false;
        cpassword_Error.textContent = 'Enter Same password as Entered Password';
    }else{
        cpassword_Error.textContent = '√ password matching with password';
    }
}))

// Checking Validity of Password
function isValidPassword(Password_Value){
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    return passwordRegex.test(Password_Value);
}
// Validation of email using Regex
email.addEventListener('input',(()=>{
    if(!isValidEmail(email.value)){
        email_Error.hidden = false;
        email_Error.textContent = 'Should be a valid email format (e.g., "user@example.com").'
    }else{
        email_Error.hidden = true;
        email_Error.textContent = '';
    }
}))

function isValidEmail(Email_Value){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(Email_Value);
}

full_Name.addEventListener('input',()=>{
  
    if(!isValidFullName(full_Name.value)){
        full_Name_Error.hidden = false;
        full_Name_Error.textContent = 'Accepts alphabetic characters and spaces only, with a minimum length of 3 characters'
    }else{
        full_Name_Error.hidden = true;
        full_Name_Error.textContent = ' '
    }
})
// Validation of Full Name using Regex
function isValidFullName(full_Name){
    // Regular expression to validate the full name
    const fullNameRegex = /^[a-zA-Z ]{3,}$/;
    return fullNameRegex.test(full_Name);
}
toggler.addEventListener('click',showHidePassword);
submitBtn.addEventListener('submit',(()=>{
    console.log('its working');
}))
