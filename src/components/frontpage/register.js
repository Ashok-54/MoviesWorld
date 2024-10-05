import React, { useState } from "react";
import "./site.css"
import { useNavigate} from "react-router-dom"

    const Register = () => {
    const navigate = useNavigate()
    const [input,setInput] = useState({
        name:"",
        email:"",
        password:"",
    })

const handleSubmit = (e) =>{
    e.preventDefault()
    localStorage.setItem("user",JSON.stringify(input))
    navigate("/login")
}

    return (
        <>
        <div className="container-fluid  d-flex flex-column align-items-center justify-content-center ">
        
        <div className="col-md-4 mt-5  p-5">
        <h3 className="justify-content-center text-center" >CREATE AN ACCOUNT</h3>
        <form className="card p-4 " onSubmit={handleSubmit}>
            
            <div >
            <label>Name</label>
            <input 
            name="name"
            value={input.name}
            onChange={(e)=> setInput({...input,[e.target.name] : e.target.value})}
            type="text" placeholder="Name" className="form-control"></input>
            </div>
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
            <button className="btn btn-danger mt-3"> Register</button><br></br>
           <div className="d-flex  justify-content-center"><p>Have an Already account?</p> &nbsp;&nbsp;<a href="/login" className="text-danger">login</a></div> 
        </form>
        </div>
        </div>
        </>
    )
}
export default Register