import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { useParams } from 'react-router-dom';
export default function SubmissionDetail(){
  const { sid } = useParams();
  const [sub,setSub] = useState(null);
  useEffect(()=>{ setSub({ _id:sid, studentName:'john', links:['https://github.com/john/repo'], status:'submitted', submittedAt: new Date().toISOString(), grade: null }); },[sid]);
  if(!sub) return <div>Loading...</div>;
  return (<div className="p-6 flex gap-6"><Sidebar /><div className="flex-1"><h2 className="text-xl">Submission — {sub.studentName}</h2><div className="mt-4">{sub.links.map(l=> <div key={l}><a href={l} target="_blank" rel="noreferrer">{l}</a></div>)}</div><div className="mt-6"><GradeForm submission={sub} /></div></div></div>);
}
