import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>MockMingle</h2>

      <nav style={styles.navLinks}>
      
        <Link style={styles.link} to="/dashboard">Dashboard</Link>
        <Link style={styles.link} to="/attempts">Attempts</Link>
        <Link style={styles.link} to="/mentorship">Mentorship</Link>
        <Link style={styles.link} to="/login">Login</Link>
        <Link style={styles.link} to="/signup">Signup</Link>

        {/* <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button> */}
      </nav>
    </header>
  );
}

export default Navbar;
const styles = {
  header: {
    background: "#0d0d0d",
    color: "#fff",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
    position: "sticky",
    top: 0,
    zIndex: 999
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "1px",
    margin: 0,
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500"
  },
  logoutBtn: {
    background: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
  }
};
