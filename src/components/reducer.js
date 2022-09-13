
const reducer = (state,action) => {
    if(action.type === "Api_Get"){
        return{...state , carts: action.payload}
    }
    if(action.type === "Delete"){
        return{...state,carts: state.carts.filter(cart=> cart.id !== action.payload) } 
    }
    if(action.type === "update"){
        const tempCart = state.carts.map(elem=>elem.id === action.payload.id ? {...elem, amount: parseInt(action.payload.value)}: elem)
        return{...state,carts: tempCart}
    }
    if(action.type === "total"){
        let initial = 0
        let total = state.carts.reduce((total,item)=> total + parseFloat(item.price)*item.amount,initial )
        total = parseFloat(total).toFixed(2)
        return{...state,total}
    }
    if(action.type === "empty"){
        let res = state.carts.length === 0
        if (res) {
            return{...state , empty:true}
        }
        return{...state, empty:false}
    }
}

export default reducer