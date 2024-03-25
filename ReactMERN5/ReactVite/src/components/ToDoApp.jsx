import { useRef, useState } from "react"

const ToDoApp = () => {

    const [list, setList] = useState([]);
    const [itemValue,setItemValue] = useState("");
    const inputRef = useRef(null)

    const InputOnChange=(e)=>{
        setItemValue(e.target.value);
    }

    const AddToList=()=>{
        if(itemValue!==''){
            list.push(itemValue)
            setList([...list]);
            setItemValue('');
            if (inputRef.current) {
                inputRef.current.focus(); // Set focus only if the ref is available
            }
        }else{
            alert('Todo item required')
        }
    }

    const RemoveItem = (index)=>{
        list.splice(index,1);
        setList([...list]);
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="col-12 border border-1 rounded mt-3 p-3">
                            <h3>Add To Do</h3>

                            <div className="input-group mb-3">
                                <input value={itemValue} onChange={InputOnChange} type="text" className="form-control" placeholder="Enter your task" ref={inputRef}aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <div className="input-group-text"><button onClick={AddToList} className="btn btn-success btn-sm">Add ToDo</button></div>
                            </div>
                        </div>

                        {/* <input className="form-control" value={itemValue} onChange={InputOnChange} type="text" placeholder="Add to do" />
                        <br />
                        <button onClick={AddToList} className="btn btn-success" >Add To Do</button>
                        <br />
                        <br /> */}

                        <div className="col-12 border border-1 rounded mt-3 p-3">
                            <h3>To Do List</h3>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ToDo</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        list.length!==0?(
                                            list.map((element,index)=>{
                                                return(
                                                    <tr key={index}>
                                                        <td className="col-md-10">{element}</td>
                                                        <td className="col-md-2">
                                                            <button onClick={()=>{RemoveItem(index)}} className="btn btn-danger btn-sm">Remove</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        ):(<tr></tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoApp;