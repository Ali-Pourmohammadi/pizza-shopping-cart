/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { formatCurrency } from "../utils/helpers";
import Button from "../ui/Button"
import { useDispatch } from "react-redux";
import { addItem, increaseQuantity } from "../cart/cartSlice";
import { useNavigate } from "react-router-dom";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const navigate = useNavigate();
  const dispatch = useDispatch();
function handleAddToCart(){
  const newItem = {
    id,
    name,
    quantity:1,
    unitPrice,
    totalPrice : unitPrice * 1
  }
dispatch(addItem(newItem));
}
  return (
    <li className="gap-4 flex py-2">
      <img src={imageUrl} alt={name} className= {`h-24 ${soldOut ? "opacity-70 grayscale" :""}`} />
      <div className="flex flex-col grow">
        <p>{name}</p>
        <p className="text-sm capitalize italic text-stone-500">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="">{formatCurrency(unitPrice)}</p> : <p className="text-sm font-medium uppercase text-stone-500">Sold out</p>}
           {!soldOut && <Button onClick={handleAddToCart}  type="primary">Add to cart</Button>} 

        </div>
      </div>
    </li>
  );
}

export default MenuItem;
  