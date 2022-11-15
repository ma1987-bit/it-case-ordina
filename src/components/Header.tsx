import { Link } from "gatsby";
import React from "react";

import { container, nav, navLinks, navLinkItem, navLinkText } from './header.module.css'

interface HeaderProps {
  children: any;
}

const Header = (props: HeaderProps) => {
  return (
    <div>
        <div className={nav}>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/reports">
                Reports
              </Link>
            </li>
          </ul>
          <main>
            {props.children}
          </main>
        </div>
      </div>
  );
};

export default Header;
