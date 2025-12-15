import { useEffect, useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";

function Dashboard() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    API.get("/tests").then((res) => setTests(res.data));
  }, []);

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Available Mock Tests</h1>

      <div style={styles.grid}>
        {tests.map(test => (
          <div key={test._id} style={styles.card}>
            <h3>{test.name}</h3>
            <p>{test.description}</p>
            <Link style={styles.button} to={`/tests/${test._id}`}>Start Test</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginTop: "30px"
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "10px 18px",
    background: "#2563EB",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
  }
};

export default Dashboard;
