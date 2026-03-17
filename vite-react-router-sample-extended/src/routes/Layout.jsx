import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
  <div>
    <nav style={{ marginBottom: 20 }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/users">Users</Link> |{" "}
      <Link to="/search?query=test">Search</Link>
    </nav>
    <Outlet />
  </div>
);

export default Layout;
