import classes from './CartButton.module.css';
import { cartAction, showCartAction } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const handleCartVisibility=()=>{
    dispatch(showCartAction.cartVisibility());
  };
  return (
    <button className={classes.button}  onClick={handleCartVisibility}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};



export default CartButton;
