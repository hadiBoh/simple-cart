import { useContext } from "react"
import { Data } from "../context/Data"

const Sum = () => {
    const {total} = useContext(Data)
  return (
    <div className="total">
        <h2>total</h2>
        <h3>${total}</h3>
    </div>
  )
}

export default Sum