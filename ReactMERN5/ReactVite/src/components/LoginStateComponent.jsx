//import axios from "axios";
import { useState } from "react"

const LoginStateComponent = () => {

    // State
    const [loginData,setLoginData]=useState({email:"", password:""});

    const InputOnChange=(e)=>{
        setLoginData(loginData =>({
            ...loginData,
            [e.target.name]: e.target.value
        }))
    }

    const SaveData= async (e)=>{
        e.preventDefault()

        alert(JSON.stringify(loginData))

       // await axios.post("http://localhost:300/api/login",loginData);
    }

    // View
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h1>Login</h1><br />
                    <form onSubmit={SaveData}>
                        <input name="email" className="form-control" onChange={(e)=>{InputOnChange(e)}} type="text" placeholder="email" /><br/>
                        <input name="password" className="form-control" onChange={(e)=>{InputOnChange(e)}} type="password" placeholder="password" /><br/>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
     
      
      
    </div>
  )
}

export default LoginStateComponent
