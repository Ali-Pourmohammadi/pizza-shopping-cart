import Button from "../ui/Button";
import { formatCurrency } from "../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className=" py-3 sm:flex justify-between">
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:px-2 sm:space-x-4">
        <p>{formatCurrency(totalPrice)}</p>
        <Button type='small'>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
