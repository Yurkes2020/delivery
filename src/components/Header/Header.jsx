import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link>Shop</Link>
          </li>
          <li>
            <Link>Shopping cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
