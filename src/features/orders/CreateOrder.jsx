/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unreachable */
import { useState } from "react";
import { Form, json, redirect, useActionData, useFormAction, useNavigation } from "react-router-dom";
import { createOrder } from "../services/apiRestaurant";
import {fetchAddress} from "../user/userSlice"
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../cart/Cart";
import { clearCart, getCart, getTotalPrice } from "../cart/cartSlice";
import store from "../../store"
import { formatCurrency } from "../utils/helpers";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    id: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    id: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    id: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {userName , address , position  , status , error  }= useSelector(state => state.user);
  const addressStatus = status === "loading";
  const  CartTotalPrice = useSelector(getTotalPrice);

  const orderPrice = withPriority ? CartTotalPrice * 0.2:0
  const totalPrice = CartTotalPrice + orderPrice
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";
  const formErrors = useActionData();
  const details = useSelector(getCart);
  const dispatch = useDispatch();
  const cart = details.map(item => {
    const { id, ...rest } = item;
  
    return {
      pizzaId: id,
      ...rest 
    };
  });
  return (
    <div className=" bg-slate-100 py-2 px-3 mt-5 border-2  border-stone-400">
      <h2 className="my-4 text-xl font-semibold">Ready to order? Lets go!</h2>
<Form method="POST">
        <div className="mb-5  flex space-y-2 flex-col">
          <label>First Name</label>
          <input type="text" name="customer" required className="input" defaultValue={`${userName}`} />
        </div>

        <div className="mb-5  flex space-y-2 flex-col">
          <label>Phone number</label>
          <input type="tel" name="phone" required  className="input" />
            {formErrors?.phone && <p className="text-s p-3 rounded-l bg-slate-200 text-red-600">{formErrors.phone}</p>}
          <div>
         
          </div>
        </div>

        <div className="mb-5  flex space-y-2 flex-col relative">
          <label>Address</label>
          <input type="text" 
          defaultValue={address}
            name="address" required
            disabled = {addressStatus} 
            className="input w-full" />


            <span className="absolute right-1 top-[1rem] z-50">
             <Button             disabled = {addressStatus} 
 type="small"  onClick={()=> dispatch(fetchAddress())}>{`${addressStatus ? `geting your address ...`:"get position"}`}</Button>
            </span>

        </div>

        <div className="mb-5  flex gap-3  items-center">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="focus:ring-2 focus:ring-stone-500 
            transition-all duration-300 w-6 h-6 accent-stone-500  focus:ring-offset-2"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            />
          <label className="font-medium" htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <Button type="small" disabled = {isLoading}>{isLoading ? `placing order `:  `order now from ${formatCurrency(totalPrice)}`}</Button>

        </div>
        </Form>
    </div>
  );
}
export async function action({request}){
  const  formData = await  request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart : JSON.parse(data.cart),
    priority: data.priority === "true"
  }

const errors = {};
  if(!isValidPhone(order. phone)) errors.phone = "please give us your correct phone number,we need it to contact you";
  if(Object.keys(errors).length > 0) return errors;
  const  newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
