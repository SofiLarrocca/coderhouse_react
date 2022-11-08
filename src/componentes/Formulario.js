import '../css/formulario.css'
import { useState } from "react";
import { useCartContext } from "./CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { ItemCart } from "./ItemCart";


export const Formulario = () => {
  const { cart, totalPrice } = useCartContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const order = {
    buyer: {
      name: name,
      email: email,
      phone: phone,
      address: address,
    },
    items: cart,
    total: totalPrice(),
  };
  const orderCompra = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order);
  };
  return (
    <form>
      <label>
        Nombre y Apellido:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>
      <label>
        Dirección:
        <input
          type="text"
          name="dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
      </label>
      <label>
        Numero Teléfono:
        <input
          type="number"
          name="telefono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
      </label>

      <div>
        Detalle compra
        {cart.map((prod) => (
          <ItemCart key={prod.id} item={prod} />
        ))}
      </div>
      <button className='bntFormulario' onClick={orderCompra}>siguiente</button>
    </form>
  );
};




