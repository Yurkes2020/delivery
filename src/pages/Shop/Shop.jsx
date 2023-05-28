import { SideBar } from 'components/SideBar/SideBar';
import { Order } from 'components/Order/Order';
import { Main } from './Shop.styled';
import { useState, useEffect } from 'react';

const Shop = () => {
  const [shops, setShops] = useState([]);
  const [id, setId] = useState(null);
  const [storage, setStorage] = useState(false);

  const foodId = shops.find((item) => item._id === id);

  useEffect(() => {
    fetch('http://localhost:3030/shop')
      .then((responce) => responce.json())
      .then(({ data }) => {
        setShops(data.shops);
        setId(data.shops[0]._id);
      });
  }, []);

  return (
    <Main>
      <SideBar storage={storage} data={shops} shopId={setId}></SideBar>
      <Order setStorage={setStorage} data={foodId}></Order>
    </Main>
  );
};

export default Shop;
