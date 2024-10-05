import "./site.css"
import {  useNavigate } from "react-router-dom"
function Home(){
    const navigate = useNavigate()
    return(
<>
<div className="container-fluid con  ">
<div className="container   h-100 d-flex flex-column text-white  justify-content-center">
    <h2  >WELCOME TO MOVIES WORLD</h2><br></br>
    <p><strong>Cinema is the most beautiful Fraud in the world.</strong></p>
    <p><strong> Learning to make films is very easy.Learning what to make films<br></br> about is very hard.</strong></p>
   
</div>
</div>
</>
    )
}
export default Home