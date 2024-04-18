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
    <>
      <div className=" flex items-center justify-between border-stone-200 border-stone-200 bg-indigo-500 bg-indigo-500 p-4 px-4 py-4 uppercase text-stone-200  md:bg-stone-800">
        <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
          <span>{totalCartQuantity} pizzas</span>
          <span>{formatCurrency(totalCartPrice)}</span>
        </p>

        <Link to="/cart">Open cart &rarr;</Link>
      </div>
      <p className="flex items-center justify-center border-stone-200 bg-center pb-1 text-sm text-slate-200 md:bg-stone-800">
        Beautifully Designed & Developed by &#160;
        <a
          href="https://mohammedjawadsaleem11.github.io/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Mohammed Jawad Saleem
        </a>
      </p>
    </>
  );
}

export default CartOverview;
