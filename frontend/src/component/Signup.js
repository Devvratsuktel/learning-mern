import React from 'react'

const Signup = () => {
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
              <form>

                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                      <input type="text" name="name" id="name" placeholder="First Name" />
                </div>
                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                  <input type="email" name="email" id="email"  placeholder="Email" required />
                </div>
                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                  <input type="number" name="phone"  id="phone" placeholder="phone" required />
                </div>
                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                  <input type="text" name="work"  id="work" placeholder="your profession" required />
                </div>
                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                  <input type="password" name="password"  id="password" placeholder="Password" required />
                </div>
                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                  <input type="password" name="cpassword" id="cpassword" placeholder="Re-type Password" required />
                </div>
                
                  
                    
                  
                  
                <input class="button" type="submit" value="Register" id="Signup" />
              </form>
            </div>
          </div>
        </div>
</div>

    </section>
    </>
  )
}

export default Signup