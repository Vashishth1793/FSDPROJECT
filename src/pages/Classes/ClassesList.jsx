import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';

export default function ClassesList() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    setClasses([{ _id: 'c1', title: 'Math 101', code: 'M101' }]);
  }, []);

  return (
    <div className="p-6 flex gap-6">
      <Sidebar />
      <div className="flex-1">
        <h2 className="text-xl">Classes</h2>
        <div className="mt-4 grid gap-3">
          {classes.map(c => (
            <div
              key={c._id}
              className="p-4 border rounded flex justify-between"
            >
              <div>
                <Link to={`/class/${c._id}`} className="font-bold">
                  {c.title}
                </Link>
                <div className="text-sm">{c.code}</div>
              </div>
              <Link to={`/class/${c._id}`} className="btn">
                Open
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
