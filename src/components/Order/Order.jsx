import { Wrap, List } from './Order.styled';
import { OrderItem } from 'components/OrderItem/OrderItem';
import { useState, useEffect } from 'react';

export const Order = ({ data, setStorage }) => {
  const [add, setAdd] = useState(null);
  const [remove, setRemove] = useState(null);

  useEffect(() => {
    if (!data) return;
    const storedValue = JSON.parse(localStorage.getItem('order'));

    const newOrder = data?.food?.find((i) => i._id === add || remove);

    if (!storedValue && add) {
      addLS(newOrder, data);

      setAdd(null);
    }
    if (storedValue && add) {
      updateLS(newOrder, storedValue);
      setAdd(null);
    }
    if (storedValue && remove) {
      removeLS(storedValue);
      setRemove(null);
    }
  }, [add, remove]);

  const addLS = (obj, firm) => {
    const order = {
      company: firm.company,
      address: firm.address,
      orders: [
        {
          name: obj.name,
          price: obj.price,
          _id: obj._id,
          picture: obj.picture,
          count: 1,
        },
      ],
    };
    setStorage(true);
    localStorage.setItem('order', JSON.stringify(order));
  };

  const updateLS = (obj, stor) => {
    const newData = stor;

    const newArrayValue = {
      name: obj.name,
      price: obj.price,
      _id: obj._id,
      picture: obj.picture,
      count: 1,
    };
    setStorage(true);
    newData.orders.push(newArrayValue);
    localStorage.setItem('order', JSON.stringify(newData));
  };

  const removeLS = (stor) => {
    const newData = stor;
    const indx = newData.orders.findIndex((i) => {
      return i._id === remove;
    });
    if (newData.orders.length === 1) {
      setStorage(false);
      localStorage.clear();
    } else {
      newData.orders.splice(indx, 1);

      localStorage.setItem('order', JSON.stringify(newData));
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
