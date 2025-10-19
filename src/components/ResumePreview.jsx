const sectionIcon = (key) => {
  switch (key) {
    case "summary":
      return "🧑‍💼";
    case "experience":
      return "💼";
    case "education":
      return "🎓";
    case "skills":
      return "🚀";
    case "projects":
      return "📁";
    default:
      return "";
  }
};

const ResumePreview = ({ resumeData }) => {
  const initials =
    resumeData.name
      ?.split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase() || "U";
  const colorAccent = "#4A90E2";

  return (
    <div className="resume-preview-container">
      <div className="resume-sidebar" style={{ background: colorAccent }}>
        <div className="avatar">{initials}</div>
        <div className="sidebar-contact">
          {/* Email */}
          {resumeData.email && <div>{resumeData.email}</div>}
          {/* Mobile */}
          {resumeData.mobile && <div>{resumeData.mobile}</div>}
          {/* LinkedIn */}
          {resumeData.linkedin && (
            <div>
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          )}
          {/* GitHub */}
          {resumeData.github && (
            <div>
              <a
                href={resumeData.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="resume-main">
        <div className="resume-name">{resumeData.name || "Your Name"}</div>
        <div className="resume-address">{resumeData.address}</div>
        {resumeData.summary && (
          <div className="resume-section">
            <span className="resume-section-title">
              {sectionIcon("summary")} Profile Summary
            </span>
            <div className="section-content">{resumeData.summary}</div>
          </div>
        )}
        {resumeData.experience && (
          <div className="resume-section">
            <span className="resume-section-title">
              {sectionIcon("experience")} Experience
            </span>
            {resumeData.experience
              .split("\n")
              .filter(Boolean)
              .map((exp, i) => (
                <div className="section-content exp-row" key={i}>
                  {exp}
                </div>
              ))}
          </div>
        )}
        {resumeData.education && (
          <div className="resume-section">
            <span className="resume-section-title">
              {sectionIcon("education")} Education
            </span>
            <div className="section-content">{resumeData.education}</div>
          </div>
        )}
        {resumeData.skills && (
          <div className="resume-section">
            <span className="resume-section-title">
              {sectionIcon("skills")} Skills
            </span>
            <div className="resume-skillset">
              {resumeData.skills.split(/,|\n/).map((skill, idx) =>
                skill.trim() ? (
                  <span className="skill-chip" key={idx}>
                    {skill.trim()}
                  </span>
                ) : null
              )}
            </div>
          </div>
        )}
        {resumeData.projects && (
          <div className="resume-section">
            <span className="resume-section-title">
              {sectionIcon("projects")} Projects
            </span>
            {resumeData.projects
              .split("\n")
              .filter(Boolean)
              .map((proj, i) => (
                <div className="section-content proj-row" key={i}>
                  {proj}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
