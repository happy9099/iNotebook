import React, {useState} from 'react'
//using usehistory instead of useNavigate --> supported
import { useNavigate} from 'react-router-dom';

const Login = (props) => {
    const [credentials,setCredentials] = useState({email: "", password: ""})
    //using usehistory instead of useNavigate --> supported
    let history = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            //   "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxMmRmNmIzNzUxMGNkZTgzNzY4ZDYzIn0sImlhdCI6MTY3OTAyNzU2N30.hWfEymsqsoikLXRvb1sPgYZ-wWH7UBeMe2BK8g4ozdU"
            },
            body: JSON.stringify({ email:credentials.email, password:credentials.password})
          });
          const json = await response.json()
          console.log(json);
          if(json.success){
            //Save the auth-Token and Redirect
            localStorage.setItem('token', json.authtoken);
            //using usehistory instead of useNavigate --> supported
            history("/");
            props.showAlert("Logged in Successfully", "success")

          }
          else{
            props.showAlert("Invalid Credentials", "danger")
          }
    }

    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    } 

  return (
    <div>
   <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password"/>
  </div>
 
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login
