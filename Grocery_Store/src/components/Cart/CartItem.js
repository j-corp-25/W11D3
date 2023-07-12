import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, addItem, subtractItem } from '../../store/cart';

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

  function handleSubtract(e) {
    e.preventDefault();
    dispatch(subtractItem(item.id))
    if (count === 0) {
      handleRemove(e)
    }
  }

  function handleAdd(e) {
    e.preventDefault();
    dispatch(addItem(item.id))
  }

  function handleCount(e) {
    
  }



  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={handleCount}
        />
        <button onClick={handleAdd}
          className="cart-item-button"
        >
          +
        </button>
        <button onClick={handleSubtract}
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
