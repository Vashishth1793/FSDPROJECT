import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
export default function Dashboard(){
  const { user } = useAuth();
  if(user.role === 'student') return (
    <div className="p-6"><h2 className="text-2xl">Student Dashboard</h2><Link to="/classes" className="btn mt-4">My Classes</Link></div>
  );
  if(user.role === 'teacher') return (
    <div className="p-6"><h2 className="text-2xl">Teacher Dashboard</h2><Link to="/classes" className="btn mt-4">Manage Classes</Link></div>
  );n
  return <div className="p-6"><h2 className="text-2xl">Admin Dashboard</h2><Link to="/admin/users" className="btn mt-4">Manage Users</Link></div>;
}
