import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";

const Item = ({ prod }) => {
  const [imgURL, setImgURL] = useState(null);
  const storage = getStorage();

  getDownloadURL(ref(storage, prod.img))
    .then(setImgURL)
    .catch((error) => console.log("error:", error));
    
  return (
    <div className="card-container">
      <img src={imgURL} className="img-prod" alt={"prod"} />

      <h2 className="card-titulo">{prod.marca}</h2>
      <h3>{prod.modelo}</h3>
      <h4>$ {prod.precio}</h4>
      <button className="button-item">Ver Más</button>
    </div>
  );
};

export default Item;