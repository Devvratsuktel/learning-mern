import React,{useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate();
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const loginUser=async(e)=>{
    e.preventDefault();
    const res=await fetch("/signin",{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify({
          email,password
      })
    });
    const data=await res.json();
    if(data.status===422||!data){
      window.alert("Invalid credentials");
      console.log("Invalid credentials");
    }
    else{
      window.alert(" Registration sucessfull");
      console.log(" Registration sucessfull");
      navigate("/", { replace: true });
    }

  }


  return (
    <>
      <section>

      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2>Login</h2>
          </div>
          <div class="row clearfix">
            <div class="">
              <form method='POST'>

                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                      <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email" placeholder="email" required />
                </div>
                
                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                  <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="password" placeholder="Password" required />
                </div>
                <input className="butttn btn-success" type="submit" onClick={loginUser} value="Login" id="Signup" />
             
               </form> 

               <NavLink  to='/Signup'>if not  registered click here</NavLink> 

             </div>  
             </div>  
             </div>  
             </div>  


      </section>



    </>
  )
}

export default Login