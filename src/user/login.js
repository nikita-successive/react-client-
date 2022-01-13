import React from 'react';
import { TextField,Button,Form,FormLayout} from '@shopify/polaris';
import { useState } from 'react';
import './AppCss.css'
const Login=()=>{
    const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [emailError,setEmailerror]=useState("");
  const[passwordError,setPassworderror]=useState("");
 const emailValidation = () => {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(regex)){
        return true;
    }
    return false;
}
const passwordValidation = () => {
  const passwordRegex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  if(password.match(passwordRegex)){
    return true;
  }
  else{
    return false;
  }
}
  const submitt=()=>{
    var result = emailValidation();
    var password = passwordValidation();
    if(!result){
      alert("email is not in proper format")
    }
    else if (!password){
      alert("password is not in proper format")
    }
    else{
    window.alert("Email:"+ email + "  Password:" + password);
    setEmail('');
    setPassword('');
  }
}
const emailErrorfunction = ()=>{
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(email===""){
    setEmailerror("email is required!");
  }
  
   else if(email.match(regex)){
        setEmailerror("");
    }
    else{
      setEmailerror("email is not valid")
    }
}
const passwordErrorfunction = ()=>{
  if(password ===""){
    setPassworderror("password is required!");
  }
  else{
    setPassworderror("");
  }
}
return(
    <div className = "form">
    <h1 className = "heading">Welcome to my Login Page</h1><br/>
      <Form onSubmit={submitt}> 
          <FormLayout>
            
            <div className = "textfield">
     <TextField label="Email"autoComplete="off" align="left" type="email" value= {email}
      onChange= { (newValue) => setEmail(newValue)}
     onBlur={emailErrorfunction}
    />
    <span className="error">{emailError}</span>
            <br/>
            <TextField label="Password"autoComplete="off" align="left" type="password" value = {password}
      onChange= { (newValue) => setPassword(newValue)}
      onBlur={passwordErrorfunction}
      />
      <span className="error">{passwordError}</span>
      </div>
      <div className="submit">
            <Button submit >Submit</Button>
            </div>
            </FormLayout>
        </Form>
      </div>
)
}
export default Login;
