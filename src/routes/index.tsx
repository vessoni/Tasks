import { Route, Routes } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import { Home } from '../pages/Home';
import { Tasks } from '../pages/Tasks';
import { Users } from '../pages/Users';
import { UsersDetail } from '../pages/UsersDetail';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UsersDetail />} />
      </Route>
    </Routes>
  );
}
