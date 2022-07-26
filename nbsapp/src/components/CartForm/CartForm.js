import { useState } from "react"
import { getFirestore,addDoc,collection,doc,writeBatch } from 'firebase/firestore'
import Swal from 'sweetalert2'
import { UseCart } from "../../store/CartContext"
import { useNavigate } from "react-router-dom"


function CartForm(){

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const contexto = UseCart()
    const navigate = useNavigate();

    function nameHandler(event){
        setName(event.target.value)
    }

    function emailHandler(event){
        setEmail(event.target.value)
    }

    function phoneHandler(event){
        setPhone(event.target.value)
    }
    
    function newOrder(event){
        event.preventDefault();

        let date = new Date();

        const newBuyer = {
            name : name,
            email : email,
            phone : phone
        }

        const order = {
            buyer: newBuyer ,
            items : contexto.cart,
            date : date.toLocaleDateString(),
            total : contexto.total
        };

        const db = getFirestore();
        const ordersCollection = collection(db,"orders");

        contexto.cart.forEach((p) => {
            const batch = writeBatch(db);
            const itemRef = doc(db,"items", p.producto.dbId);

            batch.update(itemRef,{"stock": p.producto.stock - p.quantity});
            batch.commit();
        });

        addDoc(ordersCollection,order).then((doc) => Swal.fire({
            customClass: {
                popup : 'd-flex flex-column',
            },
            title:`Orden generada con exito! `,
            text: `Su id de compra es ${doc.id}`
         }))
        .then(contexto.clear())

    };

    return (
    <div className='formContainer'>
        <form onSubmit={newOrder} className='formStyle'>
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label formLaber" >Nombre</label>
            <div class="form-group">
                <input type="text" className="form-control" onChange={ nameHandler } value={name} placeholder="Ingrese su nombre"></input> 
            </div>
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label formLaber" >Email</label>
            <div class="form-group">
                <input type="email" className="form-control" onChange={ emailHandler } value={email} placeholder="Ingrese su email"></input> 
            </div>
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label formLaber" >Telefono</label>
            <div class="form-group">
                <input type="text" className="form-control" onChange={ phoneHandler } value={phone} placeholder="Ingrese su telefono"></input> 
            </div>
            <input type="submit" className="btn btn-outline-primary botonAgregar" />
        </form>
    </div>)    
}

export default CartForm