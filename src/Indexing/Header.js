import React from 'react';
import { Link } from 'react-router-dom';

const NavbarMenu = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Articles', link: '/article-management' },
  { id: 3, title: 'Commands', link: '/commands-management' },
  { id: 4, title: 'Payment', link: '/payment-management' },
  { id: 5, title: 'Users', link: '/users-management' },
];

const Header = () => {
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4">
          {/* Logo section */}
          <div className="text-2xl flex items-end gap-2 font-bold uppercase">
            <p className="text-primary">E-</p>
            <p className="text-secondary">Commerce</p>
          </div>
          {/* Menus section */}
          <div className="hidden md:flex">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#F75D59] font-semibold"
                    to={menu.link}>
                    {menu.title}
                  </Link>
                </li>
              ))}
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
