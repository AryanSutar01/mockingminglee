import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import API from '../api';

function Attempts(){
  const [attempts, setAttempts] = useState([]);
  const stored = JSON.parse(localStorage.getItem("user"));
  const user = stored?.user || stored;


  useEffect(()=>{
    if(!user) return;
    API.get(`/attempts?userId=${user._id}`).then(res=>setAttempts(res.data)).catch(err=>console.error(err));
  },[user]);

  return (
    <div>
      <h2>Your Attempts</h2>
      {attempts.length===0 && <p>No attempts yet.</p>}
      {attempts.map(a=>(
        <div key={a._id} style={{border:'1px solid #ddd', padding:10, marginBottom:10}}>
          <p>Score: {a.score}/{a.totalQuestions}</p>
          <p>Date: {new Date(a.createdAt).toLocaleString()}</p>
          <Link to={`/attempts/${a._id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}

export default Attempts;
