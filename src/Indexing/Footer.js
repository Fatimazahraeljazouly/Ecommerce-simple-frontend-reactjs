import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-thi py-10 mt-8">
      <div className="container mx-auto text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <h2 className="text-lg font-semibold">Developed by ELJAZOULY</h2>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} ENSAB. All rights reserved.
        </p>
        <ul className="flex flex-1 justify-center content-center gap-6 mt-4">
          <li>
            <a
              href="https://github.com/Fatimazahraeljazouly"
              aria-label="GitHub"
              className="text-2xl hover:text-primary"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/fatima-zahra-el-jazouly-91114723b/"
              aria-label="LinkedIn"
              className="text-2xl hover:text-primary"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
