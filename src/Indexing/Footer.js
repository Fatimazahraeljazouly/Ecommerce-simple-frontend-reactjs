import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-thi py-6 mt-8">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold">Developed by ELJAZOULY</h2>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} ENSAB. All rights reserved.
        </p>
        <ul className="flex justify-center gap-6 mt-4">
          <li>
            <a
              href="https://github.com/Fatimazahraeljazouly" className="text-2xl hover:text-primary">
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/fatima-zahra-el-jazouly-91114723b/" className="text-2xl hover:text-primary">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
