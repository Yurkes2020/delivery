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
    let order = {};

    if (myData) {
      const as = JSON.parse(myData);
      order = as;
      if (remove) {
        const indx = order.orders.findIndex((i) => i.id === remove);

        order.orders.splice(indx, 1);
      } else {
        const newArrayValue = {
          name: newOrder.name,
          price: newOrder.price,
          id: newOrder.id,
          picture: newOrder.name,
          count: 1,
        };
        order.orders.push(newArrayValue);
      }
    } else {
      order = {
        company: data.company,
        address: data.address,
        orders: [
          {
            name: newOrder.name,
            price: newOrder.price,
            id: newOrder.id,
            picture: newOrder.name,
            count: 1,
          },
        ],
      };
    }

    const newData = JSON.stringify(order);

    setMyData(newData);
    setStorage(true);
  }, [add, remove]);

  // const addLS = (obj) => {
  //   const order = {
  //     company: data.company,
  //     address: data.address,
  //     orders: [
  //       {
  //         name: obj.name,
  //         price: obj.price,
  //         id: obj.id,
  //         picture: obj.name,
  //         count: 1,
  //       },
  //     ],
  //   };
  //   const newData = JSON.stringify(order);
  //   setMyData(newData);
  // };

  const removeLS = (obj) => {
    const indx = obj.orders.findIndex((i) => i.id === remove);

    obj.orders.splice(indx, 1);
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
