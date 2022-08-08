import React from 'react'
import Navbar from '../../components/Navbar';


const index = () => {
  return (
    <div>
         <Navbar/>
         <section className='form_container'>
            <div className='form_content'>
                <h1 className='Heading'>SignUp</h1>
                <form action='/' method='get' className='main_form'>
                    <div className='input_field' >
                        <p className='sub_heading'>Username</p>
                        <input type='text' placeholder="Leo John" className='input'/>
                    </div>

                    <div className='input_field' >
                        <p className='sub_heading'>E-mail</p>
                        <input type='email' placeholder="email@gmail.com" className='input'/>
                    </div>

                    <div className='input_field' >
                        <p className='sub_heading'>Password</p>
                        <input type='password' placeholder="at least 8 characters" className='input'/>
                    </div>

                    <div className="checkbox-field">
                        <input type="checkbox" name="agreement"/>
                        <label for="agreement">I agree to term and conditions</label>
                    </div>

                    <div className='button_field'>
                       <button>Sign Up</button>
                    </div>

                    <div className='form_link'>
                            <span>Already have an account? <a href='/' className='sign_in'/>Sign in</span>
                    </div>

                </form>
            </div>
         </section>
    </div>
   
  )
}

export default index;