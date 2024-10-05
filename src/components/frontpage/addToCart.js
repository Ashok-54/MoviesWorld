import "./site.css"
import React,{ useEffect, useState} from "react"
const Addtocart = ({cart, setCart, handleChange}) => {
    const [price,setPrice] = useState(0)
const handlePrice =()=>{
    let ans=0
    cart.map((data)=>(
     ans += (data.__v + 1) * data.ticketprice  
     ))
     setPrice(ans)
      }
    const handleRemove =(_id) =>{
    const arr =cart.filter((data)=>data._id !==_id)
    setCart(arr)
}
useEffect(()=>{
    handlePrice()
})
    return(
<div className="container">

    
        {
            cart.map((data)=>{
                return(
                    
                    <div className="row align-items-center text-center p-2">
                    <div className="col-md-2">
                        <img src={data.image} alt="altt" width={100}height={100} ></img>
                        </div> 
                        <div className="col-md-2">
                            
                            <p><strong>{data.title}</strong></p>
                            </div>
                            <div className="col-md-4 text-center">
                               <button className="b1" onClick={()=>handleChange(data,+1)}>+</button>&nbsp;
                               <button className="b">{data.__v + 1}</button>&nbsp;
                                <button className="b2" onClick={()=>handleChange(data,-1)} >-</button>
                            </div>
                            <div className="col-md-2">
                                <p><strong>Rs.{data.ticketprice}</strong></p> 
                            </div>
                            <div className="col-md-2">
                                <button className="rem" onClick={()=>handleRemove(data._id)}>Remove</button>
                            </div>
                            
                            </div>
                        
                )
            })
        }
    <div className="d-flex gap-3 justify-content-center">
    <span className="tp "><strong>Total Price of Your Cart -</strong></span>
    <span className="h"><strong>Rs:{price}</strong></span>
    </div>
</div>

    )
}
export default Addtocart