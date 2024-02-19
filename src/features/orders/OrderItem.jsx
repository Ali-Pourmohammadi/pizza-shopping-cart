/* eslint-disable react/prop-types */
import { formatCurrency } from "../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="p-1 mt-3 ">
      <div className="flex justify-between items-center gap-4">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="capitalize text-sm text-stone-500 italic my-1 px-2 space-x-3">{isLoadingIngredients? "loading":ingredients.join(",")??[]}</p>
    </li>
  );
}

export default OrderItem;
