import Header from "./components/Header/Header"
import Card from "./components/Card/Card"
import { useState } from "react";
import Carts from "./components/Cart/Carts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [cartAdd,setCardAdd] = useState([]);
  const[totalCredit,setTotalCredit] = useState([0]);
  const [remaining,setRemaining] = useState([0]);
  const [totalPrice,setTotalPrice] = useState([0]);
      const handleSelect = (cartItem) => {
      const newCardItem = [...cartAdd,cartItem];
      const isExist = cartAdd.find((card)=> card.id === cartItem.id )
      let credit = cartItem.credit;
      let price = cartItem.price;
        if(isExist){
          toast.error('Course already added to the cart');
        }
        else{
          cartAdd.forEach(creditAdd => {
            credit = credit + creditAdd.credit;
            price = price + creditAdd.price
          });
          const totalRemaining = 20 - credit
          if(credit > 20 ){
            toast.error("Can't be more than 20hr added" );
          }
          else{
            setTotalCredit(credit);
            setRemaining(totalRemaining);
            setCardAdd(newCardItem);
            setTotalPrice(price);
          }
       }
      }

  return (
    <>
      
      <div className="">
      <Header></Header>
        <div className="flex container mx-auto gap-10 ">
          <Card handleSelect={handleSelect}></Card>
          <Carts cartAdd={cartAdd} totalCredit={totalCredit} remaining={remaining} totalPrice ={totalPrice}></Carts>
        </div>
      </div>
     
      <ToastContainer/>  
    </>
  )
}

export default App
