import React, { useState } from 'react';
export default function SubmissionForm({ assignment }){
  const [link,setLink] = useState('');
  const [msg,setMsg] = useState(null);
  const submit = async ()=>{
    try{ new URL(link); } catch(e){ setMsg('Invalid URL'); return; }
    // call API to submit
    setMsg('Submitted (demo)');
  };
  return (<div className="p-4 border rounded"><h3 className="font-bold">Submit your work</h3><div className="mt-2 flex gap-2"><input value={link} onChange={e=>setLink(e.target.value)} placeholder="https://..." className="flex-1 border p-2" /><button className="btn" onClick={submit}>Submit Link</button></div>{msg && <div className="mt-2 text-sm">{msg}</div>}</div>);
}
