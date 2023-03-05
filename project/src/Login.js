import React from "react";
class Login extends React.Component{
    state={
    "Email":"",    
    "Password":"",
  }

  loginfile(){
    // let Email="smartsathish9199@gmail.com";
    // let Password="123456789";
    //result.length >=0
    
    
let props={
    "Email":this.state.Email,
    "Password":this.state.Password,

}

fetch("http://localhost:8080/login",{
headers:{ "content-Type":"application/json"},
    method:"POST",body:JSON.stringify(props)
})
    .then(serverRes=>serverRes.json())
.then(res=>{
console.log(res);
})

}
render(){
    return(
        <>
        {/* <Header/> */}
        <div className="box">
    
        
        <label className="n">Email</label>
    <input className="name" type="text" name="name"onChange={(e)=>this.setState({"Email":e.target.value})} required/><br/><br/>
    
    <label className="p">Password</label>
    <input className="password"type="password" name="password" onChange={(e)=>this.setState({"Password":e.target.value})}  required/><br/><br/>
    
    <button className="button1" type="button" onClick={()=>this.loginfile()} > log in</button>
    </div>
    </>
    );
    
}}
export default Login;