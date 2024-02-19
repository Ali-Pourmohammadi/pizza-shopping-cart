import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Button({children , disabled , to , type , onClick , id}){
    const  base ="font-semibold bg-yellow-300 my-3 hover:bg-yellow-400  duration-300 hover:text-stone-900   transition-colors  focus:outline-none  focus:bg-yellow-500 active:bg-red-200 active: border-[#111] rounded-l"
    if(id)  return <button onClick={onClick} disabled ={disabled}  className={style[type]}></button>
   const style = {
    primary : base + ' py-3 px-3 m-3',
    small : base + 'py-2 px-3 md:px-5 md:py-2 rounded-lg',
    secondary:'font-semibold  my-3 hover:bg-slate-300  duration-300 hover:text-stone-900   transition-colors  focus:outline-none  focus:bg-yellow-500 active:bg-red-200 active: border-[#111] border-2 px-4 py-2 rounded-l disabled:cursor-not-allowed'
   }
    if(to) return <Link className={style[type]}  to={to}>{children}</Link>
    ;
    if(onClick)    return <button onClick={onClick} disabled ={disabled}  className={style[type]}>
    {children}
</button>
    return <button disabled ={disabled}  className={style[type]}>
        {children}
    </button>
}