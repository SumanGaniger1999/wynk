function validateLogin(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(email!=""){
        if(email.length>4&&email.length<16){
            if(password!=""){
                if(password.length>8&&password.length<18){
                    document.getElementById("resp").innerHTML="Login Success";
                }
                else{
                    document.getElementById("resp").innerHTML="Invalid password";
                }
            }else{
                document.getElementById("resp").innerHTML="password cannot be empty";
            }
        }else{
            document.getElementById("resp").innerHTML="Invalid Email";
        }
    }else{
        document.getElementById("resp").innerHTML="Email cannot be empty";
    }
}