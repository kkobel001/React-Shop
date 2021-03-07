import React from 'react';
import { FiShoppingCart, AiOutlineHeart, BiSearch } from 'react-icons/fa';

const icons = [
  { id: 0, name: FiShoppingCart },
  { id: 0, name: AiOutlineHeart },
  { id: 0, name: BiSearch },
];

const NavIconMenu = () => (
  <>
    <ul>
      {icons.map(icon => (
        <li>
          {icon.id},{icon.name}
        </li>
      ))}
    </ul>
  </>
);

export default NavIconMenu;
