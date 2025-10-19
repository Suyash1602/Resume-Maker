import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [resumeData, setResumeData] = useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
    linkedin: "",
    github: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
    projects: "",
  });

  return (
    <div className="app-bg">
      <div className="app-container">
        <h1 className="heading-hero anim-fadein">Resume Builder</h1>
        <div className="resume-section anim-fadein">
          <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
          <div id="resume-preview-section" className="resume-card anim-fadein">
            <ResumePreview resumeData={resumeData} />
          </div>
        </div>
      </div>
      <Footer watermarkName="Created by Suyash Khandalkar" />
    </div>
  );
};

export default App;
