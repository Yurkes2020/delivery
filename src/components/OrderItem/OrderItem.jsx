import { useState } from 'react';

export const OrderItem = () => {
  const [change, setChange] = useState(false);

  const handleClick = (id) => {
    setChange(true);
    let storedData = localStorage.getItem('order');

    const { name, price, picture } = data.food.find((i) => i._id === id);

    let order = {};

    if (storedData) {
      try {
        order = JSON.parse(storedData);
        const newArrayValue = { name, price, id, picture, count: 1 };
        order.orders.push(newArrayValue);
      } catch (error) {
        console.error(error);
      }
    } else {
      order = {
        company: data.company,
        address: data.address,
        orders: [{ name, price, id, picture, count: 1 }],
      };
    }
    localStorage.setItem('order', JSON.stringify(order));
  };

  const handleChange = () => {
    setChange(false);
  };
  return (
    <>
      <Item key={_id}>
        <img src={picture} alt="burger"></img>
        {name}
        {change ? (
          <Remove onClick={handleChange} type="button">
            Remove from cart
          </Remove>
        ) : (
          <Add onClick={() => handleClick(_id)} type="button">
            Add to cart
          </Add>
        )}
      </Item>
    </>
  );
};
