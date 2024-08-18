import axios from "axios";
import { remeras } from "../database/data.js";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";


initMercadoPago('APP_USR-8bbdb623-3827-433f-b9bf-3f2192db0154')



export const Card = () => {
   
    const payment = async(element)=> {
console.log(element.precio)

        const res = await axios.post('http://localhost:3000/pay-order', {
            nombre: element.nombre,
            precio: element.precio
        })
        console.log(res)
    }
  return (
    <div>
        {remeras.map((items, index) => (
            <article key={index} style={{border:'1px solid red', margin:'8px'}} >
                <p>FOto Producto</p>
                <p>{items.nombre}</p>
                <strong>{items.precio}</strong>
                <button onClick={()=> payment(items)}>Comprar</button>
                <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} customization={{ texts:{ valueProp: 'smart_option'}}} />
            </article>
        ))}
    </div>
  )
}
