import { useSelector } from "react-redux";
import CreateUser from "../user/CreateUser"
import Button from "./Button";
function Home() {
  const userName = useSelector(state => state.user.userName);

  return (
    <div  className="text-center py-3 px-4 my-8 sm:my-10">
      <h1 className="text-xl text-stone-700 font-semibold text-center p-1 mb-8">
        The best pizza.
        <br />
        <span className="text-yellow-500">
        Straight out of the oven, straight to you.
        </span>
      </h1>
    {!userName?<CreateUser/>:<Button type="primary" to="/menu"> {`continue Ordering , ${userName}`}</Button>}
    </div>
  );
}

export default Home;
