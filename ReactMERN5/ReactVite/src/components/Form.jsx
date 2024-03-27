import { useEffect, useState } from "react";

const Form = () => {

    let [FormValue, SetFormValue] = useState({fName:"", lName:"", city:"", gender: ""})
    let [UserData,SetUserData] = useState([]);

    useEffect(()=>{
        // // using promise
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(res => res.json())
        // .then(json => SetUserData(json))

        // We can not use async method 
        // we need to use self invocable function

        (async()=>{
            let res = await fetch('https://jsonplaceholder.typicode.com/users');
            let result = await res.json();
            //let {address} = result.address;
            SetUserData(result);
            console.log(JSON.stringify(result));
        })()

    },[]);

    const InputOnChange = (InputName, InputValue)=>{
        SetFormValue(FormValue =>({
            ...FormValue,
            [InputName]: InputValue
        }))
    }

    const FormSubmit=(e)=>{
        e.preventDefault();
        alert(JSON.stringify(FormValue));
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <div className="col-12 border border-1 rounded mt-3 p-3">
                            <h3>Registration Form</h3>

                            <form onSubmit={FormSubmit}>
                                <input value={FormValue.fName} onChange={(e)=>{InputOnChange('fName',e.target.value)}} type="text" placeholder="First Name" className="form-control" />
                                <br/>
                                <input value={FormValue.lName} onChange={(e)=>{InputOnChange('lName',e.target.value)}} type="text" placeholder="Last Name" className="form-control" />
                                <br/>
                                <select className="form-select" value={FormValue.city} onChange={(e)=>      {InputOnChange('city',e.target.value)}}>
                                    <option value="">Select City</option>
                                    {/* <option value="Dhaka">Dhaka</option>
                                    <option value="Bogura">Bogura</option> */}
                                    {UserData.map((option) => (
                                        <option key={option.id || option.address.city} value={option.id || option.address.city}>
                                            {option.name || option.label}
                                        </option>
                                    ))}

                                </select>
                                <br/>
                                    <input checked={FormValue.gender === "Male"} onChange={()=>{InputOnChange('gender','Male')}} type="radio" name="gender" value="Male"  /> Male 
                                    <input checked={FormValue.gender === "Female"} onChange={()=>{InputOnChange('gender','Female')}} type="radio" name="gender" value="Female"  /> Female 

                                <br/>

                                <br/>
                                <button type="submit" className="btn btn-primary">Submit</button>

                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;