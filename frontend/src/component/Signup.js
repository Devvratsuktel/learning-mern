import React, { useState } from 'react';
import { NavLink ,useNavigate  } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/home');

const Signup = () => {
  const navigate=useNavigate ();
  
  const [User,setUser]=useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  })

  let name,value;

  // const handleInputs =(e)=>{
  //   console.log(e);
    // name=e.target.name;
    // value=e.target.value; 

  //   setUser=({...User,[name]:value});
  // }

  const handleInputs = (e) => {
    console.log(e);
    // const { name, value } = e.target;
    name=e.target.name;
    value=e.target.value; 

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const postData=async(e)=>{
    e.preventDefault();
    const{name,email,phone,work,password,cpassword}=User;
    const res=await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    })
    const data=await res.json();
    if(data.status===422||!data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else{
      window.alert(" Registration sucessfull");
      console.log(" Registration sucessfull");
      navigate("/login", { replace: true });

    }

  }

  return (
    <>




    <section>
      
    <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2>Registration Form</h2>
          </div>
          <div class="row clearfix">
            <div class="">
              <form method='POST'>

                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                      <input type="text" name="name" id="name" value={User.name} onChange={handleInputs}  placeholder="First Name" required />
                </div>
                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                  <input type="email" name="email" id="email"  value={User.email} onChange={handleInputs} placeholder="Email" required />
                </div>
                <div className="input_field"> <span><i aria-hidden="true" className="form group"></i></span>
                  <input type="number" name="phone"  id="phone" value={User.phone} onChange={handleInputs} placeholder=" phone" required />
                </div>
                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                  <input type="text" name="work"  id="work" value={User.work} onChange={handleInputs} placeholder="your profession" required />
                </div>
                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                  <input type="password" name="password"  id="password" value={User.password} onChange={handleInputs} placeholder="Password" required />
                </div>
                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                  <input type="password" name="cpassword" id="cpassword" value={User.cpassword} onChange={handleInputs} placeholder="Re-type Password" required />
                </div>
                <input className="butttn btn-success" type="submit" value="Register" onClick={postData} id="Signup" />
              </form>
              <div>
               <NavLink  to='/Login'>if already registered click here
              </NavLink> 
              </div>

            </div>
          </div>
        </div>
</div>

    </section>
    </>
  )
}

export default Signup