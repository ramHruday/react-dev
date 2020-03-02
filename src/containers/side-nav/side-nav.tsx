import React from 'react';
import { Box, GitHub, Home, Linkedin, Play, User } from 'react-feather';
import { Link } from 'react-router-dom';

import './side-nav.scss';

const SideNavBar: React.FC = () => {
  return (
    <>
      <nav className="app-nav d-none d-md-flex flex-column justify-content-between ">
        <NavItemList />
        <SocialWebBox />
      </nav>
      <nav className="app-pill-nav d-md-none ">
        <NavItemList />
      </nav>
    </>
  );
};

const NavItemList: React.FC = () => {
  return (
    <div className="nav-list p-2 w-100 h-100 justify-content-around">
      <Link to="/">
        <Home key="home" className="cursor-pointer" />
      </Link>
      <Link to="/library">
        <Box key="library" className="cursor-pointer" />
      </Link>
      <Link to="/play">
        <Play key="play" className="cursor-pointer" />
      </Link>
      <Link to="/">
        <User key="user" className="cursor-pointer" />
      </Link>
    </div>
  );
};

const SocialWebBox: React.FC = () => {
  return (
    <div className="social-list d-flex p-2 w-100 flex-column justify-content-around">
      <GitHub key="git" className="cursor-pointer" />
      <Linkedin className="" />
    </div>
  );
};

export default SideNavBar;