import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import SubmissionForm from '../../pages/Assignments/SubmissionForm';
export default function AssignmentDetail(){
  const { aid } = useParams();
  const [assignment,setAssignment] = useState(null);
  useEffect(()=>{ setAssignment({ _id:aid, title:'HW1', description:'Do problems', dueAt: new Date(Date.now()+3*86400000).toISOString() }); },[aid]);
  if(!assignment) return <div>Loading...</div>;
  return (<div className="p-6 flex gap-6"><Sidebar /><div className="flex-1"><h2 className="text-2xl">{assignment.title}</h2><div className="text-sm">Due {new Date(assignment.dueAt).toLocaleString()}</div><p className="mt-4">{assignment.description}</p><div className="mt-6"><SubmissionForm assignment={assignment} /></div></div></div>);
}
