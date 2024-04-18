import { Outlet } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const user = useSelector((store) => store.user);

  const cart = useSelector((store) => store.cart.cart);

  const dispatch = useDispatch();

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="px-4 py-3">
      {/* <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-700 hover:underline"
      >
        &larr; Back to menu
      </Link> */}
      <LinkButton to="/menu"> &larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold ">
        Your cart, {user.username}
      </h2>
      <Outlet />
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button type="small" to="/order/new">
          Order pizzas
        </Button>
        {/* <Link to="/order/new">Order pizzas</Link> */}
        {/* <button>Clear cart</button> */}
        <Button type="small" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
