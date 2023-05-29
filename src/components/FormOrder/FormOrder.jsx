import {
  Form,
  Wrapper,
  List,
  Item,
  Submit,
  Input,
  User,
  Remove,
} from './FormOrder.styled';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const FormOrder = () => {
  const [data, setData] = useState({});
  const [total, setTotal] = useState();
  const [check, setCheck] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('order')));
  }, [check]);

  useEffect(() => {
    setTotal(
      data?.orders?.reduce((acc, { price, count }) => acc + price * count, 0)
    );
  }, [data]);

  const send = (res) => {
    return axios
      .post('https://delivery-beck.onrender.com/cart', res)
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

  const handleDelete = (id) => {
    const newData = data;
    const indx = newData.orders.findIndex((i) => {
      return i._id === id;
    });
    if (newData.orders.length === 1) {
      localStorage.clear();
    } else {
      newData.orders.splice(indx, 1);

      localStorage.setItem('order', JSON.stringify(newData));
    }
    setCheck((prev) => !prev);
  };
  return (
    <Wrapper>
      <Form autoComplete="on" ref={formRef} onSubmit={handleSubmit}>
        <label>
          Name:
          <User name="name" type="text" />
        </label>
        <label>
          Email:
          <User name="email" type="email" />
        </label>
        <label>
          Phone:
          <User name="phone" type="tel" />
        </label>
        <label>
          Address:
          <User name="address" type="text" />
        </label>
        <Submit type="submit">Submit</Submit>
      </Form>
      <List>
        {data &&
          data?.orders?.map(({ price, name, _id, picture }) => (
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
                <Remove onClick={() => handleDelete(_id)} type="button">
                  Remove
                </Remove>
              </div>
            </Item>
          ))}
      </List>
      <p>Total price:{total}</p>
    </Wrapper>
  );
};
