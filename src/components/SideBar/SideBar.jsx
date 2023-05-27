import { Aside, Item, Button } from './SideBar.styled';
import { useState } from 'react';

export const SideBar = ({ data, shopId }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Aside>
      <p>Shops</p>
      <ul>
        {data.map(({ _id, company }, index) => (
          <Item key={_id}>
            <Button
              style={{
                backgroundColor: activeIndex === index ? 'yellow' : 'blue',
              }}
              onClick={() => {
                shopId(_id);
                setActiveIndex(index);
              }}
              type="button"
            >
              {company}
            </Button>
          </Item>
        ))}
      </ul>
    </Aside>
  );
};
