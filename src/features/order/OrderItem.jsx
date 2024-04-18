import { formatCurrency } from '../../utility/helpers';
import PropTypes from 'prop-types';
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  console.log(quantity, name, totalPrice, isLoadingIngredients, ingredients);
  return (
    <li className="    py-3">
      <div className="flex items-center justify-between text-sm font-normal">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTypes.node.isRequired, // children can be any renderable React node and is required
  isLoadingIngredients: PropTypes.bool.isRequired,
  ingredients: PropTypes.string.isRequired,
};

export default OrderItem;
