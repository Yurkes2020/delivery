import { Aside, Item, Button, Text } from './SideBar.styled';
import { useState } from 'react';

export const SideBar = ({ data, shopId, storage }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Aside>
      <Text>Shops</Text>
      <ul>
        {data.map(({ _id, company }, index) => (
          <Item key={_id}>
            <Button
              style={{
                backgroundColor: activeIndex === index ? '#29b913' : '#bfe018',
                pointerEvents:
                  activeIndex !== index && storage ? 'none' : 'auto',
                opacity: activeIndex !== index && storage ? '0.5' : '1',
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
