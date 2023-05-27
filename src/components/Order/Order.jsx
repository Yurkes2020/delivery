import { Wrap, List, Item, Add } from './Order.styled';

export const Order = ({ data }) => {
  const handleClick = (id) => {
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

  return (
    <Wrap>
      <List>
        {data &&
          data.food.map(({ _id, picture, name }) => (
            <Item key={_id}>
              <img src={picture} alt="burger"></img>
              {name}
              <Add onClick={() => handleClick(_id)} type="button">
                Add to cart
              </Add>
            </Item>
          ))}
      </List>
    </Wrap>
  );
};
