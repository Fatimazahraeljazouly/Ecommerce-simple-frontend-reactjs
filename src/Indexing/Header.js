
///users-management
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarMenu = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Articles', link: '/article-management' },
  { id: 3, title: 'Commands', link: '/commands-management' },
  { id: 4, title: 'Payment', link: '/payment-management' },
  { id: 5, title: 'Users', link: '/users-management', subMenu: [
    { id: 1, title: 'Add User', link: '/add-user' },
    { id: 2, title: 'List Users', link: '/list-users' },
    { id: 3, title: 'Search User', link: '/search-user' },
  ]},
];

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();  

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const closeUserMenu = () => {
    setIsUserMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl flex items-end gap-2 font-bold uppercase">
          <p className="text-primary">E-</p>
          <p className="text-secondary">Commerce</p>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center gap-6 text-gray-600">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="relative">
                {menu.subMenu ? (
                  <button
                    className={`inline-block py-1 px-3 font-semibold ${
                      isActive(menu.link) ? 'border-b-2 border-primary' : 'hover:text-primary hover:shadow-[0_3px_0_-1px_#F75D59]'
                    }`}
                    onClick={toggleUserMenu}
                  >
                    {menu.title}
                  </button>
                ) : (
                  <Link
                    className={`inline-block py-1 px-3 font-semibold ${
                      isActive(menu.link) ? 'border-b-2 border-primary' : 'hover:text-primary hover:shadow-[0_3px_0_-1px_#F75D59]'
                    }`}
                    to={menu.link}
                  >
                    {menu.title}
                  </Link>
                )}
                
                {menu.subMenu && isUserMenuOpen && (
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg">
                    <ul>
                      {menu.subMenu.map((subMenu) => (
                        <li key={subMenu.id}>
                          <Link
                            className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
                            to={subMenu.link}
                            onClick={closeUserMenu} 
                          >
                            {subMenu.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
