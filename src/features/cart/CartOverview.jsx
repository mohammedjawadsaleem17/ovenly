import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utility/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartPrice);
  const totalCartPrice = useSelector(getTotalCartQuantity);

  if (!totalCartQuantity) {
    return null;
  }

  return (
    <div className=" flex items-center justify-between bg-yellow-500 p-4 px-4 py-4 uppercase text-stone-100 sm:bg-green-300  md:bg-stone-800">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>${formatCurrency(totalCartPrice)}</span>
      </p>

      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
