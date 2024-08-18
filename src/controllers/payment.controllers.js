import { MercadoPagoConfig, Preference } from "mercadopago";


const client = new MercadoPagoConfig({ accessToken: 'APP_USR-1640851723532033-081209-4649082d7ab35fa373147d3be490c839-1940967055' });

export const metodPayment = async (req, res)=> {
    try{

        const {nombre, precio} = req.body
        

const preference = new Preference(client);

const res = await preference.create({
    body: {
        items: [
            {
                title: 'Remerita',
                description: 'Remera lisa manga corta detalle',
                quantity: 1,
                unit_price: 2310
            }
        ]
    }
})
console.log(res)

        console.log(nombre, precio)
    }catch(error){
        console.log(error)
    }
}