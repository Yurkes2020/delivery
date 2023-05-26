import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const Shop = lazy(() => import('pages/Shop/Shop'));
const ShoppingCart = lazy(() => import('pages/Cart/Cart'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Shop />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
