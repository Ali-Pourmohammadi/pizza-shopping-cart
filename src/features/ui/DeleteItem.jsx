import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteItem } from "../cart/cartSlice";

export default function DeleteItem({id}){
    const dispatch = useDispatch()
    return <Button type="small" onClick={()=>dispatch(deleteItem(id))}>Delete</Button>
}