import React from "react";
class Register extends React.Component{
    state={
     "Name":"",
      "Email":"",
      "Mobile":"",
      "password":"",
    }
    Register_list(){

        if(this.state.Email===' ')
        {
            alert("please enter email");
        }
            
    else if(this.state.Password===' ')
      {
    alert("please enter password");
        }
        else
        {
            let props={
                "Name":this.state.Name,
                "Email":this.state.Email,
                "Mobile":this.state.Mobile,
                "Password":this.state.Password,
    
            }
    
           fetch("http://localhost:8080/register",{
            
           headers:{ "content-Type":"application/json"},
                method:"post",body:JSON.stringify(props)
            })
                .then(serverRes=>serverRes.json())
           .then(res=>{
            console.log(res);
           })
          
    }}
    render(){
    return(
        <>
        {/* <Header/> */}
<div className="reg">  
        <label>Name</label>
        <input type="text" placeholder="eg.sathish"onChange={(e)=>this.setState({"Name":e.target.value})}/><br/><br/>
        <label>Email</label>
        <input type="email" placeholder="xyz@qqq.com"onChange={(e)=>this.setState({"Email":e.target.value})}/><br/><br/>
        <label>Mobile</label>
        <input type="text" placeholder="+1234567890"onChange={(e)=>this.setState({"Mobile":e.target.value})}/><br/><br/>
        <label>Password</label>
        <input type="Password" placeholder=" enter the Password" minLength={"8"}onChange={(e)=>this.setState({"Password":e.target.value})}/><br/><br/>
        <button  onClick={()=>this.Register_list()} value="button">Register</button>
        </div>
</>
    )};
}
export default Register;