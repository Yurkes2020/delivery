import { Wrap, List, Item, Add } from './Order.styled';

export const Order = ({ data }) => {
  return (
    <Wrap>
      <List>
        {data &&
          data.map((item) => (
            <Item key={item._id}>
              <img src={item.picture} alt="burger"></img>
              {item.name}
              <Add type="button">Add to cart</Add>
            </Item>
          ))}
      </List>
    </Wrap>
  );
};
