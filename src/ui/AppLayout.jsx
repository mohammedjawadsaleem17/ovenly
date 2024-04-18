import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loading from './Loading';

export default function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);

  const isLoading = navigation.state === 'loading';
  console.log(isLoading);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]  ">
      {isLoading && <Loading />}
      <Header />
      <div className="lg:overflow-scroll  ">
        <main className="mx-auto max-w-3xl   ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
