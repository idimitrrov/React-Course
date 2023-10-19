import React from 'react';

interface NavbarProps {
  title: string;
  icon: string;
}

const Navbar: React.FC<NavbarProps> = ({icon = 'fab fa-github', title = 'Gihub Finder'}) => {
        return (
          <nav className="navbar bg-primary">
            <h1>
              <i className={icon}/> {title}
              </h1>
          </nav>
        );
}

export default Navbar