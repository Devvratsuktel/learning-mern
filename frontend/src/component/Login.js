import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
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
              <form>

                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                      <input type="email" name="email" id="email" placeholder="email" required />
                </div>
                
                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                  <input type="password" name="password"  id="password" placeholder="Password" required />
                </div>
                <input className="butttn btn-success" type="submit" value="Login" id="Signup" />
             
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