import { Form, Wrapper, List, Item, Submit, Input } from './FormOrder.styled';
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
        return obj.id === idOrder ? { ...obj, count } : obj;
      });
      return { ...prevData, orders: updatedObjects };
    });
  };

  const handleWheel = (e) => {
    const delta = Math.max(-1, Math.min(1, e.deltaY));
    if (delta !== 0) {
      e.target.blur();
    }
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
              <Input
                name={id}
                onWheel={handleWheel}
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
