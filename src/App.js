import { Routes, Route } from 'react-router-dom';
import React,{useState} from 'react';
import './App.css';
import Sitee from './components/frontpage/site';
import Sitedetails from './components/frontpage/sitedetails';
import Collapsiblenav from './components/navbar/navv';
import Addtocart from './components/frontpage/addToCart';
import Home from './components/frontpage/home';
import Login from './components/frontpage/login';
import Register from './components/frontpage/register';
import Protectedroutes from './services/ProtectedRoutes';





function App() {

const [cart , setCart]= useState([])
const [warning,setWarning] = useState(false)

const handleClick = (data) => { 
let isPresent = false;
cart.forEach((movie)=>{
  if (data._id === movie._id)
    isPresent = true;
})

if (isPresent){
  setWarning(true)
  setTimeout(()=>{
    setWarning(false)
  },2000)
  return
}
setCart([...cart, data]);
}
  const handleChange = (data,d) =>{
    let ind = -1
    cart.forEach((movie,index)=>{
      if (movie._id===data._id)
        ind = index
    })
    const tempArr = cart
    tempArr[ind].__v += d
    if (tempArr[ind].__v === -1)
      tempArr[ind].__v = 0
    setCart([...tempArr])
  }
  return (
    <div >
      <Collapsiblenav size={cart.length} />
      {
            warning && <div className='warning'>Item is already added.</div>
          }
      <Routes>
      <Route path="/login" element={<Login   />} />
      <Route path="/register" element={<Register  />} />
       <Route path='/' element={<Protectedroutes/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movie" element={<Sitee   />} />
          <Route path="/sitedetails/:_id" element={<Sitedetails handleClick={handleClick}/>} />
          <Route path="/addToCart" element={<Addtocart cart={cart} setCart={setCart} handleChange={handleChange}/>}></Route>
        </Route>
         </Routes>

    </div>
  );
}

export default App;
