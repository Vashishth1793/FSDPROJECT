import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
export default function AdminUsers(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{ setUsers([{ _id:'u1', name:'alice', email:'alice@teacher', role:'teacher' }]); },[]);
  return (<div className="p-6 flex gap-6"><Sidebar /><div className="flex-1"><h2 className="text-xl">Users</h2><div className="mt-4 grid gap-2">{users.map(u=> <div key={u._id} className="p-2 border rounded flex justify-between"><div>{u.name}<div className="text-sm text-gray-600">{u.email} • {u.role}</div></div><div><button className="btn">Change role</button></div></div>)}</div></div></div>);
}
