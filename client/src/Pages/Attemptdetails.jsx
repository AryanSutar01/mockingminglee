import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import API from '../api';

function AttemptDetails(){
  const { attemptId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(()=>{
    API.get(`/attempts/${attemptId}`).then(res=>setDetails(res.data)).catch(err=>console.error(err));
  },[attemptId]);

  if(!details) return <p>Loading...</p>;

  return (
    <div>
      <h2>Attempt Details</h2>
      <p>Score: {details.score}/{details.totalQuestions}</p>
      {details.questions && details.questions.map(q=>(
        <div key={q._id} style={{marginBottom:10}}>
          <p><b>{q.text}</b></p>
          <p>Your answer: { (details.answers && details.answers[q._id] !== undefined) ? q.options[details.answers[q._id]] : 'No answer' }</p>
          <p>Correct: {q.options[q.correctOptionIndex]}</p>
        </div>
      ))}
    </div>
  );
}

export default AttemptDetails;