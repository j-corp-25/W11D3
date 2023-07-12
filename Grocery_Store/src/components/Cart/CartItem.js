import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();


  useEffect(() => {
    setCount(item.count);
  }, [item.count]);


  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeItem(item.id))
  }

  function handleChange(e) {
    setCount(count - 1)
    if (count === 0){
      handleRemove(e);
    }
  }



  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button onClick={()=>setCount(count + 1)}
          className="cart-item-button"
        >
          +
        </button>
        <button onClick={handleChange}
          className="cart-item-button"
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
