import { use } from "react";
import Card from "../Card/card";
import { useCart } from "../../context/cartContext";

export default function ProductCard({productItem}) {

    const {addToCart,items,removeItem}=useCart();
    const btntext=items.find(item=>item.id===productItem.id)?"Remove item":"Add to Cart";
  return (
    <Card> 
      <img
        src={productItem.img}
        alt={productItem.title}
        className="card-img-top"
        style={{ height: "200px" }}
      />

  
      <div className="card-body">
        <h6 className="card-title mb-2">{productItem.title}</h6>

        <div className="mb-2 text-warning">
          {"★".repeat(productItem.rating)}{"☆".repeat(5 - productItem.rating)}
        </div>

        <p className="fw-bold fs-5 mb-2">₹{productItem.price}</p>

       { btntext==="Add to Cart" ? (
        <button
          className="btn btn-primary w-100"
          onClick={() => addToCart(productItem)}
        >
          {btntext}
        </button>
         ):(
            <button className="btn btn-danger w-100" onClick={() => removeItem(productItem.id)}>
              {btntext}
            </button>
            )}
        
       
      </div>
    </Card>
  );
}