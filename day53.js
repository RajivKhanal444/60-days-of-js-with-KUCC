import { useState, useEffect } from 'react';
import './App.css';
import { json } from 'react-router-dom';
function App() {
  const initialValues ={username:"", email:"",password:""}
  const [formValues,setFormValues]=useState(initialValues)
  const [formErrors,setFormErrors]=useState({})
  const[isSubmit, setIsSubmit]=useState(false)
  const handleChange=(e)=>{
    const {name, value}=e.target
    setFormValues({...formValues, [name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  useEffect(()=>{
    if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(formValues)
    }
  }, [formErrors])
  const validate=(value)=>{
    const errors={}
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!value.username){
      errors.username="Username is required!"
    }
    if (!value.email){
      errors.email="Email is required!"
    } else if(!regex.test(value.email)){
      errors.email="Enter valid email"
    }
    if (!value.password){
      errors.password="Password is required!"
    }else if(value.password.length < 8){
      errors.password= "Password length must be more than 8 characters"
    }else if(value.password.length > 15){
      errors.password="Password length cannot be less than 15 characters"
    }
    return errors
  }
  return (
    <>
    <div className='App'>
      <div className='container'>
        {Object.keys(formErrors).length===0 && isSubmit?(
          <div>Signed in sucessfully</div>):
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>}
      {/* <prev></prev> */}
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className=''></div>
        <div className=''>
          <div className='field'>
            <label>Username</label>
            <input type='text' name='username' placeholder='Username' value={formValues.username} onChange={handleChange}/>
          </div>
          <p>{formErrors.username}</p>
          <div className='field'>
            <label>Email</label>
            <input 
            type="email" 
            name="email" 
            placeholder='Email' 
            value={formValues.email}
            onChange={handleChange}
            />
            <p>{formErrors.password}</p>
          </div>
          <div className='field'>
            <label>Password</label>
            <input type="password" name='password' placeholder='Password' value={formValues.password} onChange={handleChange}/>
          </div>
          <button className=''>Submit</button>
        </div>
      </form>
      </div>
    </div>
    </>
  );
}

export default App;
