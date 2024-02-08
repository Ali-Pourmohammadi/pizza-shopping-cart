import { Link } from "react-router-dom";
import SearchOrder from "../orders/SearchOrder";
import UserName from "../user/UserName";

export default function Header(){
    return <header className="bg-yellow-500 uppercase px-1 sm:px-4 py-4 flex justify-between">
        <Link to="/" className="tracking-[2px]  sm:tracking-[5px] font-semibold font-sans">Fast React Pizza Company.co</Link>
        <SearchOrder/>
        <UserName/>
    </header>
}