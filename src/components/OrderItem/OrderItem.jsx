import { useState } from 'react';
import { Item, Add, Remove } from './OrderItem.styled';

export const OrderItem = ({ data, setAdd, setRemove }) => {
  const [change, setChange] = useState(false);

  return (
    <>
      {data && (
        <Item>
          <img src={data.picture} alt="burger"></img>
          {change ? (
            <Remove
              onClick={() => {
                setChange((prev) => !prev);
                setRemove(data._id);
              }}
              type="button"
            >
              Remove from cart
            </Remove>
          ) : (
            <Add
              onClick={() => {
                setChange((prev) => !prev);
                setAdd(data._id);
              }}
              type="button"
            >
              Add to cart
            </Add>
          )}
        </Item>
      )}
    </>
  );
};
