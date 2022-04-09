import React, {useState} from 'react'
import axios from 'axios';
export const Register = () => {
    const baseUrl=`https://masai-api-mocker.herokuapp.com`;
    const[formData, setformData]=useState({
        name:'',
        password:'',
        username:'',
        email:'',
        mobile:'',
        description:''
    })
    const handleChange=(e)=>{
       const {id,value}=e.target;

console.log('id ', id)
        setformData({...formData, [id]:value})
        console.log('formData', formData)
    }
    const{name, password, username, email, mobile, description}=formData;
// asdfgh@123
    const postRegisterData=(e)=>{
            e.preventDefault();
            axios.post(`${baseUrl}/auth/register`, formData )
            .then((res)=>{
                console.log('registerData', res)
            })
            .catch((er)=>{
                console.log('registeruser err ', er)
            })
    }
  return (
    <div>
        <h1>Register</h1>
        <form>
            <p>Full name</p>
            <input type='text' value={name} onChange={handleChange} id='name'/>
            <p>Enter password</p>
            <input type='text' value={password} onChange={handleChange} id='password'/>
            <p>Enter username</p>
            <input type='text' value={username} onChange={handleChange} id='username'/>
            <p>Enter email</p>
            <input type='text' value={email} onChange={handleChange} id='email'/>
            <p>Enter mobile</p>
            <input type='text' value={mobile} onChange={handleChange} id='mobile'/>
            <p>Enter description</p>
            <input type='text' value={description} onChange={handleChange} id='description'/>
            <br/>
            {/* <input type='button' value='submit'/> */}

            <button onClick={postRegisterData}>submit data </button>
        </form>
    </div>
  )
}
