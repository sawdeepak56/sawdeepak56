
function validateForm() {
    let name = document.forms["myform"]["fname"].value;
    if (name == '') {
        alert('name can not be empty')
        return false;
    }
    let phone = document.forms["myform"]['fphone'].value;
    if (phone == '') {
        alert('phone number can not be null')
        return false;
    }
    else if (phone.length!=10) {
        alert('phone number must be 10 digit')
        return false;
    }
    

    let email = document.forms["myform"]['mail'].value;
    if (email == '') {
        alert('email can not be empty')
        return false;


    }//password validate

    let pass = document.forms["myform"]['fpass'].value;
   
    if (pass == '') {
        alert("please fill the password")
        return false;

    } else if (pass.length < 5) {
        alert("password  must be 5 character")
        return false;
    
    }

    let cpass = document.forms["myform"]['cpass'].value;
    if (cpass==''){
        alert("please confirm password")
        return false;
    }
     else if(pass!=cpass){
        alert("password did't match")
        return false;
    }
    else if (pass==cpass){
        
        return true
    }






}


