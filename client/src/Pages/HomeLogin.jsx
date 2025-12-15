import API from "../api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./HomeLogin.css";
import Footer from "./Footer";

export default function HomeLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      const res = await API.post("/auth/login", { email, password });
      if (res.data && res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/dashboard");
      } else {
        setError("Invalid response from server");
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Invalid email or password";
      setError(errorMessage);
      console.error("Login error:", err.response?.data || err.message);
    }
  };

  return (
    <>
      {/* HERO + LOGIN */}
      <div className="container">
        {/* LEFT SECTION */}
        <div className="left">
          <h1 className="title">Welcome to MockMingle</h1>
          <p className="subtitle">
            Practice mock interviews, assess your skills, and improve faster.
          </p>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Mock Interview"
            className="home-image"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="right">
          <h2 className="login-title">Login to Continue</h2>

          <form className="login-form" onSubmit={handleLogin}>
            {error && <p className="error">{error}</p>}

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="login-btn">Login</button>
          </form>

          <p className="signup-text">
            Don’t have an account? <a href="/signup">Signup</a>
          </p>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <h2 className="features-title">Why Choose MockMingle?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>📝 Real Interview Tests</h3>
            <p>
              Practice aptitude, technical, and HR questions designed for real
              interview scenarios.
            </p>
          </div>

          <div className="feature-card">
            <h3>⚡ Instant Evaluation</h3>
            <p>
              Get instant results with correct and incorrect answers highlighted.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Track Your Progress</h3>
            <p>
              View past attempts, scores, and performance improvement over time.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔐 Secure & Simple</h3>
            <p>
              Your data is safely stored with simple and secure authentication.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
      
    </>
  );
}
