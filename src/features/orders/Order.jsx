// Test ID: IIDSAT

import { useLoaderData } from "react-router";
import { getOrder } from "../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../utils/helpers";
import OrderItem from "./OrderItem";
import { useSelector } from "react-redux";
const order = {
  id: "ABCDEF",
  customer: "Jonas",
  phone: "123456789",
  address: "Arroios, Lisbon , Portugal",
  priority: true,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: "Diavola",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: "Romana",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: "-9.000,38.000",
  orderPrice: 95,
  priorityPrice: 19,
};

function Order() {
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="py-2 px-3">
      <div className="flex flex-wrap justify-between">
        <h2 className="text-2xl font-semibold">  Order #{order.id} Status</h2>

        <div className="flex space-x-3 mb-3">
          {priority && <span className="bg-red-500 px-4 py-1 text-white  text-sm uppercase font-semibold">Priority</span>}
          <span className="bg-green-500 px-4 py-1 text-sm uppercase font-semibold text-white tracking-wide">{status} order</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 my-7 py-5 px-2 bg-stone-200">
        <p >
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
        <ul className="divide-y  my-5">
          {cart.map(item=> <OrderItem item={item} key={item.id}/>)}
        </ul>
      <div className="bg-stone-200 space-y-2 px-6 py-5">
        <p className="text-s font-semibold text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p  className="text-s font-semibold text-stone-600"> Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({params}){
  console.log(params);
  const order = await getOrder(params.orderId);
  return order
}
export default Order;