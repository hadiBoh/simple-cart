import { useContext } from "react"
import { Data } from "../context/Data"

const Nav = () => {
    const { carts} = useContext(Data)
    const initialValue = 0;
    const quantity = carts.reduce(
        (previousValue, currentValue) => previousValue + currentValue.amount,
        initialValue
    );

    return (
        <div className="nav">
            <h2>cart</h2>
            <i className='bx bx-shopping-bag'><span className="quantity-circle">{quantity}</span></i>
        </div>
    )
}

export default Nav