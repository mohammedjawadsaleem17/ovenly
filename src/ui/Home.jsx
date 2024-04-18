import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const user = useSelector((store) => store.user);
  console.log(`----------------------------------`, user);

  return (
    <div className=" px- sm:my-164 my-10 text-center">
      <h1 className="mb-8 text-center text-xl font-semibold text-stone-700">
        The best pizza.
        <br />
        <span className="text-indigo-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {user.username === " " ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Explore Pizzas, {user.username}
        </Button>
      )}
    </div>
  );
}

export default Home;
