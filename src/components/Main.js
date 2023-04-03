
import { addToCart, removeFromCart, clearCart } from "../redux/action";
import { useDispatch } from "react-redux";


function Main() {
  const dispatch = useDispatch();

  const product = {
    name: "iPhone",
    color: "black",
    price: "70000",
    item: "phone",
  };

  return (
    <>
   
      <div className="app1">
        <button
          onClick={() => {
            dispatch(addToCart(product));
          }}
        >
          Add to Cart
        </button>

        <button
          onClick={() => {
            dispatch(removeFromCart(product.name));
          }}
        >
          Remove From Cart
        </button>

        <button
          onClick={() => {
            dispatch(clearCart(product));
          }}
        >
          Clear Cart
        </button>
       
      </div>
    </>
  );
}

export default Main;
