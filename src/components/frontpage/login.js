import React , { useState } from "react";
import "./site.css"
import { useNavigate} from "react-router-dom"
 const Login = () => {
    const navigate = useNavigate()
    const [input,setInput] = useState({
        
        email:"",
        password:"",
    })

    const handleLogin = (e) => {
        e.preventDefault()
        const loggeduser = JSON.parse(localStorage.getItem("user"))
        if (input.email === loggeduser.email &&
            input.password === loggeduser.password)
        {
            localStorage.setItem("loggedin", true)
            navigate("/")
        }
        else {
            alert ("Wrong Email or Password")
        }
    }
    return (
        <>
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center ">
        
        <div className="col-md-4 mt-5  p-5">
        <h3 className="justify-content-center text-center" >LOGIN</h3>
        <form className="card p-4" onSubmit={handleLogin}>
            
           
            <div >
            <label>Email</label>
            <input
            name="email"
            value={input.email}
            onChange={(e)=> setInput({...input,[e.target.name] : e.target.value})}
            type="email" placeholder="email" className="form-control" ></input>
            </div>
            <div >
            <label>Password</label>
            <input
             name="password"
             value={input.password}
             onChange={(e)=> setInput({...input,[e.target.name] : e.target.value})}
            type="password" placeholder="password" className="form-control"></input>
            </div>
            <button className="btn btn-danger mt-3"> Login</button><br></br>
           <div className="d-flex  justify-content-center"><p>Don't have an account?</p> &nbsp;&nbsp;<a href="/register" className="text-danger">Register Here</a></div> 
        </form>
        </div>
        </div>
        </>
    )
}
export default Login