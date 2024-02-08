import Header from "./Header";
import CartOverView from "../cart/CartOverview"
import { Outlet, useNavigate, useNavigation } from "react-router";
import Loader from "./Loader";
export default function AppLayout(){
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (

        <div className="grid grid-rows-[auto_1fr_auto] h-screen">
            {isLoading && <Loader/>}
            <Header/>
            <div className="">

            <main className="max-w-5xl mx-auto">
                <Outlet/>
            </main>
            </div>
            <CartOverView/>

        </div>
    )
}