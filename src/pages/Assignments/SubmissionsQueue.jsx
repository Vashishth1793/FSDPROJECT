import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { Link, useParams } from 'react-router-dom';

export default function SubmissionsQueue() {
  const { aid } = useParams();
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    setSubs([
      {
        _id: 's1',
        studentName: 'john',
        links: ['https://github.com/john/repo'],
        status: 'submitted',
        submittedAt: new Date().toISOString()
      }
    ]);
  }, [aid]);

  return (
    <div className="p-6 flex gap-6">
      <Sidebar />
      <div className="flex-1">
        <h2 className="text-xl">Submissions for {aid}</h2>
        <div className="mt-4 grid gap-3">
          {subs.map(s => (
            <div
              key={s._id}
              className="p-4 border rounded flex justify-between items-center"
            >
              <div>
                <div className="font-bold">{s.studentName}</div>
                <div className="text-sm">
                  {s.links.map(l => (
                    <a key={l} href={l} target="_blank" rel="noreferrer">
                      {l}
                    </a>
                  ))}
                </div>
                <div className="text-sm text-gray-600">{s.status}</div>
              </div>
              <Link to={`/submission/${s._id}`} className="btn">
                Open
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
