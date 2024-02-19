import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { decreaseQuantity, getCurrentQuantity, increaseQuantity } from "../cart/cartSlice";
export default function UpdateQuantity({id}){
    const dispatch = useDispatch();
    const currentQuantity = useSelector(getCurrentQuantity(id));

    return<div className="space-x-10">
        <Button type='small' onClick={()=>dispatch(decreaseQuantity(id))}>-</Button>
        <span>{currentQuantity}</span>
        <Button type='small' onClick={()=>dispatch(increaseQuantity(id))} >+</Button>

    </div>
}