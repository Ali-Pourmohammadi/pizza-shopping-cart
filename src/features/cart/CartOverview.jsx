import { useSelector } from "react-redux";
import ButtonLink from "../ui/ButtonLink";
import { getTotalPrice, getTotalQuantity} from "./cartSlice";
import { formatCurrency } from "../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalQuantity);
  const totalCartPrice = useSelector(getTotalPrice)
  return (
    <div className="bg-stone-800 text-stone-200 uppercase text-center px-4 py-5 sm:px-6 text-sm md:text-base flex justify-between items-center">
      <p className="text-stone-300 space-x-4 sm:space-x-6 font-semibold">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <ButtonLink to={'/cart'}>open cart &rarr;</ButtonLink>
    </div>
  );
}

export default CartOverview;

