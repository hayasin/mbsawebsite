import './TeamMember.css';

interface TeamMemberProps {
  name: string;
  role: string;
  major: string;
  year: string;
  linkedin: string;
  email: string;
  photoUrl?: string;
}

const TeamMember = ({ 
  name, 
  role, 
  major, 
  linkedin,
  email,
  photoUrl 
}: TeamMemberProps) => {
  return (
    <div className="team-member-container">
      <div className="team-member">
        <div className="member-content">
          <div className="member-photo">
            {photoUrl && <img src={photoUrl} alt={name} />}
          </div>
          <div className="member-major">{major}</div>
          <h3 className="member-name">{name}</h3>
        </div>
        
        <div className="member-contact">
          <div className="contact-links">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
            <a href={`mailto:${email}`} className="contact-link">
              <i className="fas fa-envelope"></i>
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember; 