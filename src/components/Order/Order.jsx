import { Wrap, List } from './Order.styled';
import { OrderItem } from 'components/OrderItem/OrderItem';
import { useState, useEffect } from 'react';
import useLocalStorage from 'react-use-localstorage';

export const Order = ({ data, setStorage }) => {
  const [add, setAdd] = useState(null);
  const [remove, setRemove] = useState(null);
  const [myData, setMyData] = useLocalStorage('order', '');

  useEffect(() => {
    if (!data) return;

    const newOrder = data?.food?.find((i) => i._id === add || remove);

    if (!myData) {
      addLS(newOrder);
    }
    if (myData && add) {
      updateLS(newOrder);
    }
    if (myData && remove) {
      removeLS(newOrder);
    }
  }, [add, remove]);

  const addLS = (obj) => {
    const order = {
      company: data.company,
      address: data.address,
      orders: [
        {
          name: obj.name,
          price: obj.price,
          id: obj.id,
          picture: obj.picture,
          count: 1,
        },
      ],
    };

    const newData = JSON.stringify(order);
    setMyData(newData);
  };

  const updateLS = (obj) => {
    const newData = JSON.parse(myData);

    const newArrayValue = {
      name: obj.name,
      price: obj.price,
      id: obj.id,
      picture: obj.picture,
      count: 1,
    };
    newData.orders.push(newArrayValue);
    const update = JSON.stringify(newData);
    setMyData(update);
  };

  const removeLS = (obj) => {
    const newData = JSON.parse(myData);
    const indx = newData.orders.findIndex((i) => i.id === remove);
    if (newData.orders.length === 1) {
      setMyData('');
    } else {
      newData.orders.splice(indx, 1);

      const update = JSON.stringify(newData);
      setMyData(update);
    }
  };

  return (
    <Wrap>
      <List>
        {data &&
          data.food.map((item) => (
            <OrderItem
              setRemove={setRemove}
              data={item}
              setAdd={setAdd}
              key={item._id}
            ></OrderItem>
          ))}
      </List>
    </Wrap>
  );
};
