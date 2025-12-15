import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>MockMingle</h2>
          <p>
            Your smart mock interview platform to practice, analyze, and
            succeed in interviews.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/attempts">Attempts</a>
          <a href="/signup">Signup</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: support@mockmingle.com</p>
          <p>Made with ❤️ for students</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MockMingle. All rights reserved.
      </div>
    </footer>
  );
}
