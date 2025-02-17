import React from 'react';
import './TeamMember.css';

interface TeamMemberProps {
  name: string;
  major: string;
  linkedin?: string;
  email?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, major, linkedin, email }) => {
  return (
    <div className="team-member-container">
      <div className="team-member">
        <div className="team-member-image-container">
          <div className="team-member-image"></div>
        </div>
        <div className="member-info">
          <h3 className="member-name">{name}</h3>
          <p className="member-major">{major}</p>
        </div>
        {/* team member info */}
        <div className="team-member-overlay">
          <div className="member-contact-box">
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
          </div>

          <div className="member-contact-box">
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                Email
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
