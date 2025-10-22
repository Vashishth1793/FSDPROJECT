import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Login(){
  const [email,setEmail] = useState('student@example.com');
  const [password,setPassword] = useState('pass');
  const { login } = useAuth();
  const navigate = useNavigate();
  const submit = async (e) =>{ e.preventDefault(); const r = await login(email,password); if(r.ok) navigate('/'); };
  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Sign in</h2>
      <form onSubmit={submit} className="flex flex-col gap-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} className="border p-2" />
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className="border p-2" />
        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
}
