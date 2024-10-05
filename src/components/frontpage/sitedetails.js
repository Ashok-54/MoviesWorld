import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Sitedetails({handleClick})

{
    const[data,setData] = useState({});
const {_id} = useParams()
    useEffect(() => {
        fetch(`https://backend-crud-one.vercel.app/product/${_id}`)
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => console.log(err));
        },[_id]);
        return(
            <div className="container mt-5 ">
                <div className='card '>
                <div className="row ">
                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-center p-3">
                         <img src={data.image} alt="altt" width="65%" ></img>
                    </div>
                    <div className="col-md-7 d-flex flex-column  justify-content-center p-3">
                    <h5 class="card-title text-danger">{data.title}</h5>
                    <p> Release Date : {data.releasedate}</p>
                    <p> Director : {data.director}</p>
                    <p>{data.description}</p>
                    <p className='text-warning'><span className='text-dark'> Price :</span> ${data.ticketprice}</p>
                   <div className='d-flex'> <button type='button' className='btn btn-danger  jk'onClick={()=>handleClick(data)}  >Add To Card <i class="fa-sharp fa-solid fa-cart-shopping fs-6"></i></button>
                   </div>
                    
                    </div>
                </div>
                </div>
            </div>
        )
}
export default Sitedetails