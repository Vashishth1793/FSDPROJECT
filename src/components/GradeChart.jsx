import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
export default function GradeChart({ data }){
  return (
    <div style={{ height:240 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}><XAxis dataKey="bucket" /><YAxis /><Tooltip /><Bar dataKey="count" /></BarChart>
      </ResponsiveContainer>
    </div>
  );
}
