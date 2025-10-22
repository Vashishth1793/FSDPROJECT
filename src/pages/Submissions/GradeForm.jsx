import React, { useState } from 'react';
export default function GradeForm({ submission }){
  const [score,setScore] = useState('');
  const [feedback,setFeedback] = useState('');
  const [msg,setMsg] = useState(null);
  const save = async ()=>{ console.log('grade', submission._id, score, feedback); setMsg('Saved (demo)'); };
  return (<div className="p-4 border rounded max-w-md"><h3 className="font-bold">Grade</h3><div className="mt-2 flex gap-2"><input value={score} onChange={e=>setScore(e.target.value)} placeholder="Score" className="border p-2" /><input placeholder="Max" className="border p-2" /></div><textarea value={feedback} onChange={e=>setFeedback(e.target.value)} className="border p-2 mt-2 w-full" placeholder="Feedback (optional)" /><div className="mt-2 flex gap-2"><button className="btn" onClick={save}>Save Grade</button>{msg && <div className="text-sm text-green-600">{msg}</div>}</div></div>);
}

