import React from "react";

function About() {
  const skills = [
    { name: "HTML", level: 8 },
    { name: "CSS", level: 8 },
    { name: "JavaScript", level: 6 },
    { name: "React", level: 5 },
    { name: "C#", level: 8 },
    { name: "Java", level: 6 },
  ];

  function getLevelLabel(level) {
    if (level >= 8) {
      return "Expert";
    } else if (level >= 6) {
      return "Intermediate";
    } else {
      return "Beginner";
    }
  }


  let highlightText = "You're still growing — keep learning and improving!";
  const hasExpertSkill = skills.some((skill) => skill.level >= 8);

  if (hasExpertSkill) {
    highlightText = "You have strong skills! Keep pushing your knowledge.";
  }

  return (
    <div className="about-page">
      <h1 className="about-title">About Me</h1>

      <div className="about-content">
        <div className="about-text">
          <p>
            My name is <strong>Enes Aydogan</strong>, a software development
            student at Techniek College.
          </p>
          <p>
            I am very passionate about working out because that is where I
            found myself at my best and at my worst.
          </p>
          <p>
            When it comes to programming, I enjoy solving problems and turning
            ideas into real, working applications. I like learning new
            technologies and improving my skills step by step.
          </p>
        </div>

      
        <div className="about-photo">  
          <img src="/me.jpeg" alt="Enes Aydogan" />
        </div>


        <div className="about-skills">
          <h2 className="skills-title">My Skills</h2>

          <div className="skills-list">
            {skills.map((skill) => (
              <p key={skill.name} className="skill-item">
                {skill.name} – {getLevelLabel(skill.level)}
              </p>
            ))}
          </div>

          <p className="highlight">
            <strong>{highlightText}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;