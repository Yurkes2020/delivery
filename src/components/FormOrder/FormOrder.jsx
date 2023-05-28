import { Form, Wrapper, List, Item, Submit, Input } from './FormOrder.styled';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const FormOrder = () => {
  const [data, setData] = useState({});
  const [total, setTotal] = useState();
  const formRef = useRef(null);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('order')));
  }, []);

  useEffect(() => {
    if (!data) return;
    setTotal(
      data?.orders?.reduce((acc, { price, count }) => acc + price * count, 0)
    );
  }, [data]);

  const send = (res) => {
    return axios
      .post('http://localhost:3030/cart', res)
      .then()
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  };

  const handleChange = (e) => {
    const count = e.target.value;
    const idOrder = e.target.name;

    setData((prevData) => {
      const updatedObjects = prevData.orders.map((obj) => {
        return obj._id === idOrder ? { ...obj, count } : obj;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, address } = e.target.elements;
    const info = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
    };

    const myOrder = { info, data, totalPrice: total };

    send(myOrder);
    reset();
  };

  const reset = () => {
    setData({});
    formRef.current.reset();
    localStorage.clear();
  };

  return (
    <Wrapper>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" />
        </label>
        <label>
          Email:
          <input name="email" type="email" />
        </label>
        <label>
          Phone:
          <input name="phone" type="tel" />
        </label>
        <label>
          Address:
          <input name="address" type="text" />
        </label>
        <Submit type="submit">Submit</Submit>
      </Form>
      <List>
        {data?.orders?.map(({ price, name, _id, picture }) => (
          <Item key={_id}>
            <img src={picture} alt={name} />
            <div>
              <p>{name}</p>
              <p>Price:{price}</p>
              <Input
                min={1}
                name={_id}
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
