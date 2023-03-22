import React, {useState} from 'react'
//using usehistory instead of useNavigate --> supported
import { useNavigate} from 'react-router-dom';

const Signup = () => {
    const [credentials,setCredentials] = useState({name: "", email: "", password: "", cpassword: ""})
    let history = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {name, email, password}  = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            //   "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxMmRmNmIzNzUxMGNkZTgzNzY4ZDYzIn0sImlhdCI6MTY3OTAyNzU2N30.hWfEymsqsoikLXRvb1sPgYZ-wWH7UBeMe2BK8g4ozdU"
            },
            body: JSON.stringify({ name, email, password})
          });
          const json = await response.json()
          console.log(json);
          if(json.success){
            //Save the auth-Token and Redirect
            localStorage.setItem('token', json.authtoken);
            //using usehistory instead of useNavigate --> supported
            history("/");

          }
          else{
            alert("invalid");
          }
    }

    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    } 

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
