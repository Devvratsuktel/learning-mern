import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <>
        <div id='not found '>
            <div className='not found'>
            <div className='not found-404'>
            <h1>404</h1>
            <div>
                <h2>sorry page not found</h2>
            </div>
            <div>
               
                <NavLink to='/' >Back to homepage</NavLink>

            </div>

            </div>

                 
            </div>
        </div>
    </>
  )
}

export default Error