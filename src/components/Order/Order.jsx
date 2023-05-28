import { Wrap, List } from './Order.styled';
import { OrderItem } from 'components/OrderItem/OrderItem';
import { useState, useEffect } from 'react';

export const Order = ({ data, setStorage }) => {
  const [add, setAdd] = useState(null);
  const [remove, setRemove] = useState(null);

  useEffect(() => {
    if (!data) return;

    let storedData = localStorage.getItem('order');
    console.log(storedData);

    const { name, price, picture, id } = data.food.find(
      (i) => i._id === add || remove
    );

    let order = {};

    if (storedData) {
      order = JSON.parse(storedData);
      if (remove) {
        const indx = order.orders.findIndex((i) => i.id === remove);

        order.orders.splice(indx, 1);
      } else {
        const newArrayValue = { name, price, id, picture, count: 1 };
        order.orders.push(newArrayValue);
      }
    } else {
      order = {
        company: data.company,
        address: data.address,
        orders: [{ name, price, id, picture, count: 1 }],
      };
    }

    localStorage.setItem('order', JSON.stringify(order));
    setStorage(true);
  }, [add, remove]);

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
