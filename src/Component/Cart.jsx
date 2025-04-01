import { useContext } from "react"
import { DataContext } from "../App"
import { useNavigate } from "react-router-dom"

function Cart() {
  let navigate = useNavigate()

  let {selectProduct, setSelectProduct} = useContext(DataContext)

  function removeCart(id){
        setSelectProduct({type : "REMOVE_CART", payload : id})
  }
  function completeOrder(){
    if(selectProduct.length === 0)return;
    navigate("/orderdetails")
  }
  return (
    <>
    <div>
      <h1 style={{textAlign:"center", marginTop:"60px"}}>Your Orders</h1>
    </div>
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"20px"}}>
          {selectProduct.map((value) => (
            <div key={value.id} style={{boxShadow:"0px 0px 10px grey", width:"350px", display:"flex", justifyContent:"center", flexDirection:"column",  padding:"20px"}}>
                <div key={value.id} style={{display:"flex", justifyContent:"center"}}>
                  <img style={{width:"250px", height:"250px"}} src={value.thumbnail}/>
                </div>
                <div>
                  <h3 style={{textAlign:"center"}}>{value.title}</h3>
                </div>
                <div>
                <h2 style={{textAlign:"center"}}>Price : $ {value.price}</h2>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                <button onClick={() => removeCart(value.id)} style={{backgroundColor:"red", color:"white", borderRadius:"5px", outline:"none", padding:"5px 10px",border:"none", cursor:"pointer"}}>Remove From Cart</button>
                </div>
            </div>
          ))}
      </div>
      <div style={{marginTop:"20px"}}>
        <div style={{textAlign:"center"}}>
        <h2>Total Price : £ <span style={{fontWeight:"revert", color:"blue"}}>{selectProduct.reduce((a, b) => (a +  Number(b.price)), 0 )}</span></h2>
        </div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"20px", marginBottom:"20px"}}>
        <button onClick={completeOrder} style={{backgroundColor:"blue", padding:"15px 25px", borderRadius:"5px", border:"none", color:"white", fontWeight:"bolder", cursor:"pointer"}}>Place Order</button>
        </div>
      </div>
      {console.log(selectProduct)}
    </>
  )
}

export default Cart