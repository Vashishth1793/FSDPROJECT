import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

export default function ClassPage() {
  const { id } = useParams();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    setAssignments([
      { _id: 'a1', title: 'HW1', dueAt: new Date(Date.now() + 3 * 86400000).toISOString() }
    ]);
  }, [id]);

  return (
    <div className="p-6 flex gap-6">
      <Sidebar />
      <div className="flex-1">
        <h2 className="text-xl">Class {id}</h2>
        <div className="mt-4 grid gap-3">
          {assignments.map(a => (
            <div
              key={a._id}
              className="p-4 border rounded flex justify-between"
            >
              <div>
                <Link to={`/assignment/${a._id}`} className="font-bold">
                  {a.title}
                </Link>
                <div className="text-sm">
                  Due {new Date(a.dueAt).toLocaleString()}
                </div>
              </div>
              <div className="flex gap-2">
                <Link to={`/assignment/${a._id}`} className="btn">
                  Open
                </Link>
                <Link to={`/assignment/${a._id}/submissions`} className="btn">
                  Submissions
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
