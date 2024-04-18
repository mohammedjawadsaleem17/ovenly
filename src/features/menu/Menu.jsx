import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 ">
      {menu.map((obj) => (
        <MenuItem key={obj.id} pizza={obj} />
      ))}
    </ul>
  );
}

export async function loader() {
  //Data Fetching and returning data
  console.log('I am getting called');
  const menu = await getMenu();
  return menu;
}
export default Menu;
