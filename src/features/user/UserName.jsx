import { useSelector } from "react-redux"

export default function UserName(){
    const userName = useSelector(state=> state.user.userName);
    return(
        <p className="text-sm font-semibold hidden md:block">{userName}</p>
    )
}