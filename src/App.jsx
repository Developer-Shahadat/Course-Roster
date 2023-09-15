import Header from "./components/Header/Header"
import Card from "./components/Card/Card"
import { useState } from "react";
import Carts from "./components/Cart/Carts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  // Set Card 
  const [cartAdd,setCardAdd] = useState([]);
  // Set Credit
  const[totalCredit,setTotalCredit] = useState([0]);
  // Set Remaining
  const [remaining,setRemaining] = useState([0]);
  // Set Price
  const [totalPrice,setTotalPrice] = useState([0]);
  // Button OnClick handle
      const handleSelect = (cartItem) => {
      const newCardItem = [...cartAdd,cartItem];
      const isExist = cartAdd.find((card)=> card.id === cartItem.id )
      let credit = cartItem.credit;
      let price = cartItem.price;
        if(isExist){
          // toast Use
          toast.error('Course already added to the cart');
        }
        else{
          cartAdd.forEach(creditAdd => {
            credit = credit + creditAdd.credit;
            price = price + creditAdd.price
          });
          const totalRemaining = 20 - credit
          if(credit > 20 ){
             // toast Use
            toast.warn("Can't be more than 20hr");
          }
          else{
            // Set element
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
