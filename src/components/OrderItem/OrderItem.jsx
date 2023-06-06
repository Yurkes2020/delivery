import { useState } from 'react';
import { Item, Text } from './OrderItem.styled';
import { Button } from '@mui/material';

export const OrderItem = ({ data, setAdd, setRemove }) => {
  const [change, setChange] = useState(false);

  return (
    <>
      {data && (
        <Item>
          <img src={data.picture} alt={data.name}></img>
          <Text>{data.name}</Text>
          {change ? (
            <Button
              sx={{ float: 'right' }}
              variant="contained"
              color="success"
              onClick={() => {
                setChange((prev) => !prev);
                setRemove(data._id);
              }}
              type="button"
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              sx={{ float: 'right' }}
              variant="contained"
              color="success"
              onClick={() => {
                setChange((prev) => !prev);
                setAdd(data._id);
              }}
              type="button"
            >
              Add to cart
            </Button>
          )}
        </Item>
      )}
    </>
  );
};
