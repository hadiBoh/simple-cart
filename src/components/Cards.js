import { useContext } from "react"
import { Data } from "../context/Data"
import Delete from "./Delete"

const Cards = () => {
    const {handlechange, carts} = useContext(Data)
    return(
        carts.map(cart=>
            <article className="card" key={cart.id} id={cart.id}>
                <figure>
                    <section>
                        <img src={cart.img} alt={cart.title}/>
                    </section>
                    <div>
                        <h4 style={{color:"steelblue"}}>{cart.title}</h4>
                        <h3>{cart.price}</h3>
                        <Delete id={cart.id}/>
                    </div>
                </figure>
                <input type="number" id={cart.id} name="quantity" min="1" max="99" value={cart.amount} onChange={(e)=>handlechange(e.target)}/>
            </article>
        )
    )
}

export default Cards