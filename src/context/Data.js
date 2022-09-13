import { createContext , useState , useEffect, useReducer } from "react";
import reducer from "../components/reducer";

export const Data = createContext()

const DataProvider = (props)=>{
    const API_URL = 'https://course-api.com/react-useReducer-cart-project'
    const [cartData , setCartData] = useState([])
    const initial = {
        empty:false,
        total:0,
        amount:0,
        carts:[]
    }
    const [state,dispatch] = useReducer(reducer,initial)
    
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(API_URL)
            const result = await response.json()
            dispatch({type:"Api_Get" , payload:result})
            dispatch({type:"total"}) 
        }
         fetchData()  
    },[])

    function deleteItem(id){
        dispatch({type:"Delete" , payload:id})
        dispatch({type: "empty"})
    }

    function handlechange(id){  
        dispatch({type:"update" , payload:id})
        dispatch({type:"total"})
    }
   
    return(
        <Data.Provider value ={{cartData , setCartData,handlechange, deleteItem ,...state}}>
            {props.children}
        </Data.Provider>
    )
}
export default DataProvider