import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export default function TopNav(){
  const { user, logout } = useAuth();
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center gap-4"><Link to="/" className="font-bold">Classroom Portal</Link></div>
      <div>
        {user ? (
          <div className="flex items-center gap-4"><span className="text-sm">{user.name}</span><button className="btn" onClick={logout}>Logout</button></div>
        ) : (<Link to="/login" className="btn">Login</Link>)}
      </div>
    </div>
  );
}
