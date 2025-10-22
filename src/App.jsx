import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import TopNav from './components/TopNav';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ClassesList from './pages/Classes/ClassesList';
import ClassPage from './pages/Classes/ClassesPage';
import AssignmentDetail from './pages/Assignments/AssignmentDetail';
import SubmissionsQueue from './pages/Assignments/SubmissionsQueue';
import SubmissionDetail from './pages/Submissions/SubmissionDetail';
import AdminUsers from './pages/Admin/Users';


export default function App(){
return (
<AuthProvider>
<div className="min-h-screen bg-gray-50">
<TopNav />
<Routes>
<Route path="/login" element={<Login/>} />
<Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />


<Route path="/classes" element={<ProtectedRoute><ClassesList/></ProtectedRoute>} />
<Route path="/class/:id" element={<ProtectedRoute><ClassPage/></ProtectedRoute>} />
<Route path="/assignment/:aid" element={<ProtectedRoute><AssignmentDetail/></ProtectedRoute>} />


<Route path="/assignment/:aid/submissions" element={<ProtectedRoute roles={["teacher","admin"]}><SubmissionsQueue/></ProtectedRoute>} />
<Route path="/submission/:sid" element={<ProtectedRoute roles={["teacher","admin"]}><SubmissionDetail/></ProtectedRoute>} />


<Route path="/admin/users" element={<ProtectedRoute roles={["admin"]}><AdminUsers/></ProtectedRoute>} />
</Routes>
</div>
</AuthProvider>
);
}