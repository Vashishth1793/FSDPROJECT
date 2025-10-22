import React from 'react';
export default function Pagination({ page, pages, onChange }){
  return (
    <div className="flex gap-2 items-center">
      <button className="btn" disabled={page<=1} onClick={()=>onChange(page-1)}>Prev</button>
      <div>Page {page} / {pages}</div>
      <button className="btn" disabled={page>=pages} onClick={()=>onChange(page+1)}>Next</button>
    </div>
  );
}
