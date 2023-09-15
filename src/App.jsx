import Header from "./components/Header/Header"
import Card from "./components/Card/Card"
import { useState } from "react";
import Carts from "./components/Cart/Carts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [cartAdd,setCardAdd] = useState([]);
      const handleSelect = (cartItem) => {
      const newCardItem = [...cartAdd,cartItem];
      const isExist = cartAdd.find((card)=> card.id === cartItem.id )
        if(isExist){
          toast.error('Course already added to the cart');
        }
        else{
          setCardAdd(newCardItem);
        }
      }

  return (
    <>
      
      <div className="">
      <Header></Header>
        <div className="flex container mx-auto gap-10 ">
          <Card handleSelect={handleSelect}></Card>
          <Carts cartAdd={cartAdd}></Carts>
        </div>
      </div>
     
      <ToastContainer/>  
    </>
  )
}

export default App
