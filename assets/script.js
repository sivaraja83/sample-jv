function check(){
    let mail = document.getElementById("email");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mail.value.match(validRegex)){
        mail.style.border="2px solid #32de84";
        mail.style.background="white";
    }else
    {
        mail.style.border="2px solid red";
        mail.style.color="red";
    }
}