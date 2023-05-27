import { Link } from 'react-router-dom';
import { List, Head } from './Header.styled';

export const Header = () => {
  return (
    <Head>
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
    </Head>
  );
};
