const fields = [
  ["name", "Full Name"],
  ["address", "Address"],
  ["email", "Email"],
  ["mobile", "Mobile Number"],
  ["linkedin", "LinkedIn URL"],
  ["github", "GitHub URL"],
];

const ResumeForm = ({ resumeData, setResumeData }) => {
  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  return (
    <form className="resume-form glass-card anim-fadein">
      <h2 className="form-title">Enter Details</h2>
      {/* Inputs */}
      {fields.map(([fld, label]) => (
        <div className="form-group" key={fld}>
          <input
            type="text"
            name={fld}
            placeholder=" "
            value={resumeData[fld]}
            onChange={handleChange}
            autoComplete="off"
            className="floating-input"
          />
          <label className="floating-label">{label}</label>
        </div>
      ))}
      {/* Multiline fields with label */}
      <div className="form-group">
        <textarea
          name="summary"
          placeholder=" "
          rows={2}
          value={resumeData.summary}
          onChange={handleChange}
          className="floating-input"
        />
        <label className="floating-label">Profile Summary</label>
      </div>
      <div className="form-group">
        <textarea
          name="experience"
          placeholder=" "
          rows={3}
          value={resumeData.experience}
          onChange={handleChange}
          className="floating-input"
        />
        <label className="floating-label">Experience (one per line)</label>
      </div>
      <div className="form-group">
        <textarea
          name="education"
          placeholder=" "
          rows={2}
          value={resumeData.education}
          onChange={handleChange}
          className="floating-input"
        />
        <label className="floating-label">Education</label>
      </div>
      <div className="form-group">
        <textarea
          name="skills"
          placeholder=" "
          rows={2}
          value={resumeData.skills}
          onChange={handleChange}
          className="floating-input"
        />
        <label className="floating-label">
          Skills (comma or newline separated)
        </label>
      </div>
      <div className="form-group">
        <textarea
          name="projects"
          placeholder=" "
          rows={2}
          value={resumeData.projects}
          onChange={handleChange}
          className="floating-input"
        />
        <label className="floating-label">Projects (one per line)</label>
      </div>
    </form>
  );
};

export default ResumeForm;
