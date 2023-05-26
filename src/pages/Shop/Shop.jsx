import { SideBar } from 'components/SideBar/SideBar';
import { Order } from 'components/Order/Order';
import { Main } from './Shop.styled';
import { useState, useEffect } from 'react';

const Shop = () => {
  const [shops, setShops] = useState();

  useEffect(() => {
    fetch('http://localhost:3030')
      .then((responce) => responce.json())
      .then((data) => setShops(data.data));
  }, []);

  console.log(shops);

  return (
    <Main>
      <SideBar></SideBar>
      <Order></Order>
    </Main>
  );
};

export default Shop;
