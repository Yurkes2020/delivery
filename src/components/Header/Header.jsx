import { Link } from 'react-router-dom';
import { List } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <nav>
        <List>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Shopping cart</Link>
          </li>
        </List>
      </nav>
    </header>
  );
};
