import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Link to="/menu">&larr; Back to menu</Link>

        <p className="py-7 font-semibold">
          Your cart is still empty. Start adding some pizzas :)
        </p>
      </div>
    </div>
  );
}

export default EmptyCart;
