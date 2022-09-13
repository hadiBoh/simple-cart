import { useContext } from "react"
import { Data } from "../context/Data"

import Cards from "./Cards"

import Sum from "./Sum"
const Bag = () => {
    const {carts , empty} = useContext(Data)
    if (empty === true) {
      return(
        <div className="load">your cart is empty !!!</div>
      )
    }else{
      return (
        carts.length !== 0 ? (
            <div className="cards-result-container">
                <Cards/>
                <Sum/>
            </div>
        ):(
            <div className="load">Loading ...</div>
        )
    
      )
    }
}

export default Bag
