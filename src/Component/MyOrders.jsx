import { useContext } from "react";
import { DataContext } from "../App";

function MyOrders() {
  let { orderData, selectProduct, count} = useContext(DataContext);
  console.log(count)
  let randomDeliveryData = Math.floor(Math.random() * 5 + 1)
  return (
    <>
    {orderData.user.name && count ? (
      <div style={{marginTop:"80px"}}>
      <h2 style={{textAlign:"center"}}>Customer Details</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Contact</th>
              <th scope="col">Price</th>
              <th scope="col">Delivery</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{orderData.user.name}</td>
              <td>{orderData.user.email}</td>
              <td>{orderData.user.address}</td>
              <td>{orderData.user.contact}</td>
              <td style={{color:"red", fontWeight:"bold"}}>$ {selectProduct.reduce((initialValue, value) => (initialValue + value.price), 0)}</td>
              <td>Within <span>{randomDeliveryData}</span> days</td>
            </tr>
          </tbody>
        </table>
        <table className="table" style={{marginTop:"40px"}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {selectProduct.map((value, index) => (
              <tr key={index}>
                 <td> <h5 style={{marginTop:"50px"}}>{index + 1}</h5></td>
                  <td><img style={{width:"150px", height:"150px"}} src={value.thumbnail}/></td>
                  <td> <h4 style={{marginTop:"50px"}}>{value.title}</h4></td>
                  <td> <h4  style={{marginTop:"50px"}}><span style={{color:"red"}}> $ {value.price}</span></h4></td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td><h4>Total</h4></td>
              <td><h4 style={{color:"red"}}>Price : $ {selectProduct.reduce((initialValue, value) => (initialValue + value.price), 0)}</h4></td>
            </tr>
          </tbody>
        </table>
      </div>
     ):
     <div style={{marginTop:"60px", textAlign:"center"}}>
          <h2>Please Order ... </h2>
          <h3>You Have Ordered <span style={{color:"red"}}>0</span> Products</h3>
     </div>
     }
    </>
  );
}

export default MyOrders;
