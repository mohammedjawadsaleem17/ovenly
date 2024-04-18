import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utility/helpers";
import PropTypes from "prop-types";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currQuant = useSelector(getCurrentQuantityById(id));
  console.log(currQuant);

  const isInCart = currQuant > 0;

  console.log(id);
  const backupURL =
    "https://png.pngtree.com/png-vector/20230331/ourmid/pngtree-gourmet-pizza-cartoon-png-image_6656160.png";
  console.log(
    `This is a Image URL`,
    imageUrl.status != 200 ? backupURL : imageUrl,
  );

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl.status == 200 ? backupURL : imageUrl}
        alt={name}
        width={300}
        className={`${soldOut ? "opacity-70 grayscale" : ""} w-24`}
      />
      <div className="flex  grow flex-col ">
        <p className="font-mono font-sans">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-4">
              <UpdateItemQuantity pizzaId={id} currentQuantity={currQuant} />
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

MenuItem.propTypes = {
  pizza: PropTypes.string.isRequired,
  pizzaId: PropTypes.string.isRequired,
};
