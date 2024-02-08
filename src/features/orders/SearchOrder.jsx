import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchOrder(){
    const [query , setQuery] = useState("");
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        if(!query)return;
        navigate(`order/${query}`);
        setQuery("");
    }
    return(
    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="search order id" 
        value={query}
         onChange={(e)=>setQuery(e.target.value)} 
        className="text-center py-2 px-4 rounded-xl text-sm text-stone-400 w-40  sm:focus:w-64 w-74 transition-all duration-300
         focus:outline-none
         focus:ring-4
         focus:ring-red-100
         focus:ring-opacity-50
         " />
    </form>)
}