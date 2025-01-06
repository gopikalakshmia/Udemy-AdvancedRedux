import { useDispatch, useSelector } from "react-redux";
import classes from "./CartItem.module.css";
import { cartAction } from "../../store";

const CartItem = (props) => {


const items=useSelector(state=>state.cart.items);


  const dispatch = useDispatch();
  const handleAddToCart = (title,price,description) => {
    dispatch(cartAction.addTocart({ title,price,description }));
  };
  const handleRemoveFromCart = (title) => {
    dispatch(cartAction.removeFromCart({ title }));
  };

  
  return (
items.map(product=><li className={classes.item} key={product.title}>
  <header>
    <h3>{product.title}</h3>
    <div className={classes.price}>
      ${(product.price * product.Qty).toFixed(2)}{" "}
      <span className={classes.itemprice}>(${product.price.toFixed(2)}/item)</span>
    </div>
  </header>
  <div className={classes.details}>
    <div className={classes.quantity}>
      x <span>{product.Qty}</span>
    </div>
    <div className={classes.actions}>
      <button onClick={() => handleRemoveFromCart(product.title,product.price,product.description)}>-</button>
      <button onClick={() => handleAddToCart(product.title)}>+</button>
    </div>
  </div>
</li>)

    
  );
};

export default CartItem;
