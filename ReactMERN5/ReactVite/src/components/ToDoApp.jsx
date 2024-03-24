import { useState } from "react"

const ToDoApp = () => {

    const [list, setList] = useState([]);
    const [item,setItem] = useState("");

    const AddToList=()=>{
        list.push(item)
        setList([...list]);
    }

    const RemoveItem = (index)=>{
        list.splice(index,1);
        setList([...list]);
    }

    return (
        <div>
            <div className="content">
                <div className="row">
                    <div className="col-6">

                        <h1>To Do List</h1>
                        <table className="table table-stripe">
                            <tbody>
                                {
                                    list.length!==0?(
                                        list.map((element,index)=>{
                                            return(
                                                <tr key={index}>
                                                    <td>{element}</td>
                                                    <td><button onClick={()=>{RemoveItem(index)}} className="btn btn-danger btn-sm">Remove</button></td>
                                                </tr>
                                            )
                                        })
                                    ):(<tr></tr>)
                                }
                            </tbody>
                        </table>

                        <br />

                        <h1>Add To Do</h1>

                        <input className="form-control" onChange={(e)=>setItem(e.target.value)} type="text" placeholder="Add to do" />
                        <button onClick={AddToList} className="btn btn-primary" >Add To Do</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoApp;