// Test ID: IIDSAT

import { useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utility/helpers';
import OrderItem from './OrderItem';

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  console.log(id, cart);
  console.log(order);
  return (
    <div className="space-y-8 px-4 py-6 ">
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="text-xl font-semibold">Order #{id} Status</h2>

        <div>
          {priority && (
            <span className="space-x-2 rounded-full bg-red-500 px-2 py-1 text-sm font-semibold uppercase text-slate-50">
              Priority
            </span>
          )}
          <span className="ml-3 space-x-2 rounded-full bg-green-500 px-2 py-1 text-sm font-semibold uppercase text-slate-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-3 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-sm text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  console.log(`This are PARAMS`, params);
  const order = await getOrder(params.test);
  return order;
}

export default Order;
