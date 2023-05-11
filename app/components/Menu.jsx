import {Link} from '@remix-run/react';

Link;
const Menu = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/landing">Landing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
