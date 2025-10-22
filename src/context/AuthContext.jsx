import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../api/client';
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export function AuthProvider({ children }){
  const [user,setUser] = useState(null);
  useEffect(()=>{
    const raw = localStorage.getItem('portal_user');
    if(raw) setUser(JSON.parse(raw));
  },[]);
  const login = async (email,password) => {
    const resp = await api.post('/auth/login',{ email, password });
    if(resp.ok){
      // demo: set role by email
      const demoUser = { name: email.split('@')[0], email, role: email.includes('teacher')? 'teacher' : email.includes('admin')? 'admin' : 'student' };
      localStorage.setItem('portal_user', JSON.stringify(demoUser));
      setUser(demoUser);
      return { ok:true };
    }
    return { ok:false };
  };
  const logout = ()=>{ localStorage.removeItem('portal_user'); setUser(null); };
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
