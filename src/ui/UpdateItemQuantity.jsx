import { useDispatch } from 'react-redux';
import Button from './Button';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../features/cart/cartSlice';

function UpdateItemQuantity({ pizzaId, quantity = 1 }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        type="round"
      >
        -
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type="round"
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
