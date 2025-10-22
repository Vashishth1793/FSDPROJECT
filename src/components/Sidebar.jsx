import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export default function Sidebar(){
  const { user } = useAuth();
  return (
    <div className="w-64 p-4 border-r">
      <nav className="flex flex-col gap-2">
        <Link to="/">Dashboard</Link>
        {user?.role === 'student' && <Link to="/classes">My Classes</Link>}
        {(user?.role === 'teacher' || user?.role === 'admin') && <Link to="/classes">Classes</Link>}
        {user?.role === 'admin' && <Link to="/admin/users">Users</Link>}
      </nav>
    </div>
  );
}
