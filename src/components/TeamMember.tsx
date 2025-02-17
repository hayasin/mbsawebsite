import './TeamMember.css';

interface TeamMemberProps {
  name: string;
  role: string;
  major: string;
  year?: string;
  linkedin?: string;
  email?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  major
}) => {
  return (
    <div className="team-member">
      <div className="member-content">
        <div className="team-member-image"></div>
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
        <p className="member-major">{major}</p>
      </div>
    </div>
  );
};

export default TeamMember; 