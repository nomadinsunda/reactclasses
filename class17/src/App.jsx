import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout';
import NotFound from './pages/NotFound';


// import Home from './pages/Home';
// import Users from './pages/Users';
// import UserDetail from './pages/UserDetail';
// import Search from './pages/Search';
// import UserProfile from './pages/UserProfile';
// import UserSettings from './pages/UserSettings';

const Home = lazy(() => import('./pages/Home'));
const Users = lazy(() => import('./pages/Users'));
const UserDetail = lazy(() => import('./pages/UserDetail'));
const Search = lazy(() => import('./pages/Search'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const UserSettings = lazy(() => import('./pages/UserSettings'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>   
          <Route index element={<Home />} />
          <Route path="users" element={<Users />}>
            <Route path=":id" element={<UserDetail />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="settings" element={<UserSettings />} />
          </Route>
          <Route path="search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
