import { useEffect, useState } from "react";
import API from "../api";
import { useParams, useNavigate } from "react-router-dom";

function TestPage() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    API.get(`/tests/${testId}/questions`).then(res => setQuestions(res.data));
  }, []);

  const submit = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await API.post("/attempts", {
      userId: user._id,
      testId,
      answers
    });
    navigate(`/attempts/${res.data._id}`);
  };

  return (
    <div>
      <h1>Test</h1>
      {questions.map((q, i) => (
        <div key={q._id}>
          <h4>{q.text}</h4>
          {q.options.map((opt, idx) => (
            <label key={idx}>
              <input
                type="radio"
                name={q._id}
                onChange={() => setAnswers({...answers, [q._id]: idx})}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default TestPage;