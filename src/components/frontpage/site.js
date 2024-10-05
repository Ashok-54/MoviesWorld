import { useState, useEffect } from "react";
import App11 from "./siteui";
import { Link } from "react-router-dom";

function Sitee({handleClick}){
    const [data, setData] = useState([]);
     useEffect(() => {
        fetch('https://backend-crud-one.vercel.app/product')
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => console.log(err));
        },[]);
return (
        <div className="container ">
            <div className="row">
               {
                data.map((list)=>{
                    return(
                        <div className="col-md-3 p-3 ">
                           <Link to={`/sitedetails/${list._id}`} className="text-decoration-none" list={list} key={list._id}   >
                           <App11
                          onClick={handleClick}
                            image={list.image}
                            title={list.title}
                            name={list.name}
                           
                            />
                           </Link>
                            
                            
                        </div>
                    )
                })
               }
            </div>
        </div>

                )
}
export default Sitee

