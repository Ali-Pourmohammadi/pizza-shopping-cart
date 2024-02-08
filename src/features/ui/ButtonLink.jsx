import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function ButtonLink({children , to}){
    const navigate = useNavigate();
    const className='text-blue-400 hover:text-blue-600';
    if(to === "-1") return  <button className={className} onClick={() => navigate(-1)}>{children}</button>

    return <Link to={to} className={className}>{children}</Link>
}