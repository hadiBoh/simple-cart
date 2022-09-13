import { useContext } from "react"
import { Data } from "../context/Data"

const Delete = ({id}) => {
  const {deleteItem} = useContext(Data)
  return (
    <button className="del-btn" onClick={()=>deleteItem(id)} id={id}>Delete</button>
  )
}

export default Delete