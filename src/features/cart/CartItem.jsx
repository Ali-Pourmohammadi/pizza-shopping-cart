import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { formatCurrency } from "../utils/helpers";
import { deleteItem } from "./cartSlice";
import UpdateQuantity from "../ui/updateQuantity";

function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  return (
    <li className=" py-3 sm:flex justify-between">
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:px-2 sm:space-x-4">
        <p>{formatCurrency(totalPrice)}</p>
        
          <UpdateQuantity id={id}/>
        <Button type='small' onClick={()=> dispatch(deleteItem(id))}>Delete</Button>
        </div>
    </li>
  );
}

export default CartItem;
