import classes from './CartButton.module.css';
import { cartAction } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const handleCartVisibility=()=>{
    console.log("hello");
    dispatch(cartAction.cartVisibility());
  };
  return (
    <button className={classes.button}  onClick={handleCartVisibility}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};



export default CartButton;
