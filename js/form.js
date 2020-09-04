

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

//add event
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validate();
})
const sendData = (usernameval, sRate , count)=>{
    if(sRate === count){
        alert('Registration Successfull');
        swal("Welcome!" +usernameval , "Registration Sucsessfull", "success");
    }
}

//for final data validation
const successmsg = (usernameval) =>{
    let formCon = document.getElementsByClassName('form-control');
    var count=formCon.length -1;
    for(var i=0; i<formCon.length;i++){
        if(formCon[i].className ==="form-control success") {
            var sRate = 0+i;
            
            sendData(usernameval, sRate , count);
        }else {
            return false;
        }
    }
}
//more validation email
const isemail = (emailval) => {
    var atsymbol = emailval.indexOf("@");
    if (atsymbol < 1) return false;
    var dot = emailval.lastIndexOf('.');
    if (dot <= atsymbol + 2) return false;
    if (dot === emailval.length - 1) return false;
    return true;

}
//defining the validate function
const validate = () => {

     
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const phoneval = phone.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();





    //validate username
    if (usernameval === "") {
        seterrormsg(username, 'username cannot be blank');
    } else if (usernameval.length <= 3) {
        seterrormsg(username, 'Username min  3 char ')
    } else {
        setsuccessmsg(username);
    }

    //email validation
    if (emailval === "") {
        seterrormsg(email, 'email cannot be blank');
    } else if (!isemail(emailval)) {
        seterrormsg(emailval, 'not a valid email id')
    } else {
        setsuccessmsg(email)
    }


    //phone validation
    if (phoneval === "") {
        seterrormsg(phone, 'phone number cannot be blank');
    } else if (phoneval.length!=10) {
        seterrormsg(phone, 'not a valid phone number');
    } else {
        setsuccessmsg(phone)
    }

    //password validation
    if (passwordval === "") {
        seterrormsg(password, 'password cannot be blank');
    } else if (passwordval.length<=5) {
        seterrormsg(password, 'password should contain atleast 8 character');
    } else {
        setsuccessmsg(password)
    }
    
    //conform password validation
    if (cpasswordval === "") {
        seterrormsg(cpassword, 'conform password cannot be blank');
    } else if (passwordval !=cpasswordval) {
        seterrormsg(cpassword, 'both are not same');
    } else {
        setsuccessmsg(cpassword)
    }
    successmsg(usernameval);



}
function seterrormsg(input, errormsgs) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.className = "form-control error";
    small.innerText = errormsgs;

}
function setsuccessmsg(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";

}
