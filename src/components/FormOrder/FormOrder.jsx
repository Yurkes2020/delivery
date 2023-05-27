import { Form, Wrapper, List, Item, Submit } from './FormOrder.styled';
import { useState, useEffect } from 'react';

export const FormOrder = () => {
  const [data, setData] = useState({});
  const [total, setTotal] = useState();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('order')));
  }, []);

  useEffect(() => {
    setTotal(
      data?.orders?.reduce((acc, { price, count }) => acc + price * count, 0)
    );
  }, [data]);

  const handleChange = (e) => {
    const count = e.target.value;
    const idOrder = e.target.name;

    setData((prevData) => {
      const updatedObjects = prevData.orders.map((obj) => {
        if (obj.id === idOrder) {
          return { ...obj, count };
        }
        return obj;
      });

      return { ...prevData, orders: updatedObjects };
    });
  };

  return (
    <Wrapper>
      <Form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Phone:
          <input type="tel" />
        </label>
        <label>
          Address:
          <input type="text" />
        </label>
        <Submit type="submit">Submit</Submit>
      </Form>
      <List>
        {data?.orders?.map(({ price, name, id, picture }) => (
          <Item key={id}>
            <img src={picture} alt={name} />
            <div>
              <p>{name}</p>
              <p>Price:{price}</p>
              <input
                name={id}
                onChange={handleChange}
                defaultValue={1}
                type="number"
              />
            </div>
          </Item>
        ))}
      </List>
      <p>Total price:{total}</p>
    </Wrapper>
  );
};
