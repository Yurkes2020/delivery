import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Shop />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
