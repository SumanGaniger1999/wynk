function validateRegister()
{
    var name=document.getElementById("name").value;
    var lastName=document.getElementById("lastName").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(name !="")
    {
     if(name.length>2)
     {
            
              
        if(lastName!=""){
          if(lastName.length>3){
              
            
            
            if(email!=""){
                if(email.length>4 &&email.length<16){

                if(password!=""){
                    if(password.length>8 && password.length<18){
                        document.getElementById("resp").innerHTML="Account created";
                    }
                    else{
                        document.getElementById("resp").innerHTML="Invalid password";
                    }
                }
                else{
                    document.getElementById("resp").innerHTML="password cannot be empty";
                }
            }
            else{
                document.getElementById("resp").innerHTML="Invalid Email";
                }
            } 
        else{
            document.getElementById("resp").innerHTML="Email cannot be empty";
        }
 
        
    }
        else{
         document.getElementById("resp").innerHTML="Invalid lastName";
    }

    }
   
    else{
        document.getElementById("resp").innerHTML="lastName cannot be empty";
     }

    }  
    else{
        document.getElementById("resp").innerHTML="Invalid name";
    }
  
    }
    else{
            document.getElementById("resp").innerHTML="name cannot be empty";
        }       

}


                
            
        
            

