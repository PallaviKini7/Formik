import React, { useEffect, useState } from 'react'
import './home.css'
import { Formik, useFormik } from 'formik'
import { signupSchema } from '../../schema'

const Home = () => {

const [formError, setformError] = useState(false)
  const {values,errors,handleChange,touched,handleBlur,handleSubmit} = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmpassword: ""
    },
    validationSchema:signupSchema,
    onSubmit:(values,action) =>
    {
      console.log(values)
      action.resetForm()
    }
  })
  // console.log(errors)
  return (
    <div className='home'><h2>Welcome To Web store</h2>
      <h3>Login Here</h3>
      <div className='input-box'>
        <form onSubmit={handleSubmit} >
          <div className='user-name'>
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              id='email'
              name='email'
              placeholder='User Email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
               />
               {errors.email && touched.email ?(<p className='form-error'>{errors.email}</p> ):null}
            <label htmlFor="email">Name</label>
            <input
              type="text"
              id='email'
              name='name'
              placeholder='User Name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
               />
               {errors.name && touched.name ? (<p className='form-error'>{errors.name}</p>) :null}
            <label htmlFor="email">Password</label>
            <input
              type="password"
              id='email'
              name='password'
              placeholder='Password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>):null}
            <label htmlFor="email">Confirm Password</label>
            <input
              type="password"
              id='email'
              name='confirmpassword'
              placeholder='Confirm Password'
              value={values.confirmpassword}
              onChange={handleChange} 
              onBlur={handleBlur}
             />
             {errors.confirmpassword && touched.confirmpassword ? (<p className='form-error'>{errors.confirmpassword}</p>):null}
            <button className='btn' type='submit'>Submit</button>
          </div>
        </form>

      </div>
    </div>


  )
}

export default Home