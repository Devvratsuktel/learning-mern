import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='contact_info'>
      <div className='container_fluid'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
          {/* phone number */}
            <div className='contact_info_item d-flex justify-content-start align-items-center'>
            <img src='' alt=''></img>
                <div className='contact_info_contect'>
                <div className='contact_info_title'>
                  phone
                </div>
                <div className='contact_info_title'>
                  7895879564
                </div>
                  
                </div>
            </div>
             
              {/* email */}
            <div className='contact_info_item d-flex justify-content-start align-items-center'>
            <img src='' alt=''></img>
                <div className='contact_info_contect'>
                <div className='contact_info_title'>
                  email
                </div>
                <div className='contact_info_title'>
                  devvratsutktel@gmail.com
                </div>
                  
                </div>
            </div>


             {/* address */}
             <div className='contact_info_item d-flex justify-content-start align-items-center'>
            <img src='' alt=''></img>
                <div className='contact_info_contect'>
                <div className='contact_info_title'>
                address
                </div>
                <div className='contact_info_title'>
                  mumbai
                </div>
                  
                </div>
            </div>

            
          

            
          </div>

        </div>

      </div>
      
    </div>


    <div className='contact_form'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            <div className='contact_form_container py-5'>
              <div className='contact_form_title'>
                Get in touch
              </div>
              <form id='contact_form'>
                <div className='contact_form_name d-flex justify-content-between
                align-item-between'>
                  <input type="text" id='contact_form_name'
                  className='contact_form_name_input_field'
                  placeholder='Your name ' required="true" />

                  <input type="text" id='contact_form_name'
                                    className='contact_form_name_input_field'
                                    placeholder='Your name ' required="true" />

                  <input type="text" id='contact_form_name'
                                    className='contact_form_name_input_field'
                                    placeholder='Your name ' required="true" />
                </div>
                <div className='contact_form_text mt-5'>
                    <textarea className="text_field contact_form_message"
                    placeholder='message'  cols="30" rows="10"></textarea>

                </div>

                <div className='contact_form_button'>
                  <button type='submit' className='button_contact_submit_button'>Send Message</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>


    </>
  )
}

export default Contact