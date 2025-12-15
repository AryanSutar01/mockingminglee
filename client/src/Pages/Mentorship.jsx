import "./Mentorship.css";

function Mentorship() {
  const mentors = [
    {
      company: "TCS",
      name: "Harshwardhan Shinde",
      role: "Software Engineer",
      phone: "+91 9689736172",
      email: "harshwardhanshinde5@gmail.com"
    },
    {
      company: "Cognizant",
      name: "Vighnesh Shinde",
      role: "Programmer Analyst",
      phone: "+91 9921642812",
      email: "vighneshshinde7@gmail.com"
    },
    {
      company: "Accenture",
      name: "Raj Kadam",
      role: "Associate Software Engineer",
      phone: "+91 ",
      email: "amit.acc@mockmingle.com"
    },
    {
      company: "Capgemini",
      name: "Atharv Borkar",
      role: "Software Engineer",
      phone: "+91 9834074550",
      email: "atharvborkar9@gmail.com"
    },
    {
      company: "Wipro",
      name: "Rohan Shinde",
      role: "Project Engineer",
      phone: "+91 9881661070",
      email: "rohanshinde5@gmail.com"
    }
  ];

  return (
    <div className="mentorship-container">
      <h1 className="mentorship-title">Mentorship & Guidance</h1>
      <p className="mentorship-subtitle">
        Connect with previously placed students for interview guidance and career advice.
      </p>

      <div className="mentor-grid">
        {mentors.map((mentor, index) => (
          <div key={index} className="mentor-card">
            <h2>{mentor.company}</h2>
            <p className="mentor-name">{mentor.name}</p>
            <p className="mentor-role">{mentor.role}</p>

            <div className="mentor-contact">
              <p>📞 {mentor.phone}</p>
              <p>📧 {mentor.email}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mentor-note">
        ⚠️ Contact mentors respectfully. This guidance is meant only for career support.
      </p>
    </div>
  );
}

export default Mentorship;