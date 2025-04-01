import { useContext } from "react";
import { useState } from "react"
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";

function OrderDetails() {
    let navigate = useNavigate()
    let {setOrderData, count, setCount} = useContext(DataContext)
    let [orderDetails, setOrderDetails] = useState({
       user : {
           name : "",
           email : "",
           address : "",
           contact : ""
       }
    })

    function changesData(e){
        setOrderDetails({...orderDetails, user :{ ...orderDetails.user , [e.target.name] : e.target.value}})
    }

    function handleSubmit(e){
            e.preventDefault();
            setCount(count + 1)
            setOrderData({type : "USER_DETAILS", payload : orderDetails})
            navigate("/myorders")
    }

    function cancelOrderFunction(){
        navigate("/")
    }
  return (
    <div style={{marginTop:"100px"}}>
        <div style={{boxShadow:"0px 0px 10px grey", width:"500px", padding:"30px", margin:"auto"}}>
        <div style={{textAlign:"center"}}>
            <h2>Order Details</h2>
        </div>
            <form onSubmit={handleSubmit}  style={{display:"flex", flexDirection:"column", marginLeft:"40px"}}>
            <div>
                    <label htmlFor="name" >Name : </label>
                    <input name="name" className="form-control" onChange={changesData} required id="name" type="text" placeholder="Enter your name..."/>
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input id="email" name="email" className="form-control" onChange={changesData} required type="email" placeholder="Enter your mail..."/>
            </div>
            <div>
                    <label htmlFor="address">Address : </label>
                    <div>
                    <textarea className="form-control" onChange={changesData} name="address" required style={{width:"300px", height:"150px"}}></textarea>
                    </div>
            </div>
            <div>
                <label htmlFor="contact">Contact : </label>
                <input className="form-control" name="contact" onChange={changesData} required  type="Number" placeholder="Contact Number..."/>
            </div>
            <div style={{display:"flex", gap:"90px", marginTop:"20px"}}>
            <button type="submit" className="btn btn-success">Complete Order</button>
            <button onClick={cancelOrderFunction} className="btn btn-danger">Cancel Order</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default OrderDetails