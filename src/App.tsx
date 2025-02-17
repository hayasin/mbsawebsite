import { useState, FormEvent } from "react";
import TextInput from "./components/TextInput";
import logo from "./assets/images/logo.png";
import "./App.css";
import TeamMember from "./components/TeamMember";
import AnimatedCounter from "./components/AnimatedCounter";
import { submitForm } from "./utils/formSubmission";
import ImageCarousel from "./components/ImageCarousel";
import Navbar from "./components/Navbar";
import Ross from "./assets/images/ross.jpg";
import InstagramFeed from "./components/InstagramFeed";

function App() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const boardMembers = [
    { name: "President", role: "Leadership", major: "Computer Science" },
    {
      name: "Vice President",
      role: "Operations",
      major: "Business Administration",
    },
    { name: "Secretary", role: "Administration", major: "BBA" },
    { name: "Treasurer", role: "Finance", major: "BBA" },
    { name: "Marketing Director", role: "Marketing", major: "BBA" },
    { name: "Events Coordinator", role: "Events", major: "BBA" },
    { name: "Community Manager", role: "Community", major: "BBA" },
    { name: "Technical Lead", role: "Technology", major: "BBA" },
    { name: "Outreach Coordinator", role: "Outreach", major: "BBA" },
    { name: "Content Manager", role: "Content", major: "BBA" },
  ];

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!value) {
      setEmailError("Email is required");
    } else if (!value.endsWith("@umich.edu")) {
      setEmailError("Please enter a valid @umich.edu email");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email.endsWith("@umich.edu")) {
      setEmailError("Please enter a valid @umich.edu email");
      return;
    }

    const success = await submitForm(email);

    if (success) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="landing-page">
      <Navbar />

      <section id="hero" className="hero-section">
        <div className="hero-content-wrapper">
          <div className="hero-left">
            <div className="hero-text">
              <h1 className="hero-title">Join Our Community</h1>
              <p className="hero-subtitle">
                Connect with fellow Michigan students
              </p>
            </div>

            {!isSubmitted ? (
              <form className="form" onSubmit={handleSubmit}>
                <h1 className="form-title">Welcome</h1>
                <p className="form-subtitle">
                  Enter your University of Michigan email to join our groupchat
                </p>

                <TextInput
                  label="Email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  error={emailError}
                  placeholder="uniqname@umich.edu"
                />

                <button type="submit" className="submit-btn">
                  Continue
                </button>
              </form>
            ) : (
              <div className="form success-form">
                <div className="success-icon">✓</div>
                <h1 className="form-title">Thank You!</h1>
                <p className="form-subtitle">
                  An invite link has been sent to your email
                </p>
                <div className="email-display">{email}</div>
                <button
                  className="reset-btn"
                  onClick={() => {
                    setIsSubmitted(false);
                    setEmail("");
                  }}
                >
                  Use Different Email
                </button>
              </div>
            )}
          </div>

          <div className="hero-image-container">
            <ImageCarousel />
          </div>
        </div>
      </section>

      {/* About Section (Why Join Us) */}
      <section id="about" className="about-section">
        <h2 className="section-title">Why Join Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Connect</h3>
            <p>
              Meet students with similar interests and build meaningful
              relationships
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✦</div>
            <h3>Learn</h3>
            <p>Share knowledge, experiences, and grow together academically</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">◎</div>
            <h3>Network</h3>
            <p>
              Build valuable connections for your academic and professional
              journey
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">🎓</div>
            <div className="stat-number">
              <AnimatedCounter end={2000} suffix="" />
            </div>
            <div className="stat-label">Year Founded</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">👥</div>
            <div className="stat-number">
              <AnimatedCounter end={400} suffix="+" />
            </div>
            <div className="stat-label">Alumni Network</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">🤝</div>
            <div className="stat-number">
              <AnimatedCounter end={14} suffix="+" />
            </div>
            <div className="stat-label">Industry Partners</div>
          </div>
        </div>
      </section>

      {/* Club Showcase Section */}
      <section
        className="showcase-section"
        style={{ backgroundImage: `url(${Ross})` }}
      ></section>

      {/* Community Highlights */}
      <section className="highlights-section">
        <h2 className="section-title" style={{ color: "white" }}>
          Community Highlights
        </h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="highlight-icon">✧</div>
            <h3>Study Groups</h3>
            <p>
              Join subject-specific study groups and ace your classes together
            </p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">△</div>
            <h3>Career Support</h3>
            <p>Get resume reviews and interview tips from experienced peers</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">⬡</div>
            <h3>Social Events</h3>
            <p>Participate in virtual and in-person community meetups</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">◇</div>
            <h3>Resource Sharing</h3>
            <p>Access a wealth of academic and career resources</p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section id="team" className="team-section">
        <div className="team-intro">
          <h2 className="section-title" style={{ color: "white" }}>
            Meet Our Team
          </h2>
          <p className="team-description">
            Our board members are dedicated to fostering a vibrant community and
            creating valuable opportunities for all Michigan students.
          </p>
        </div>

        <div className="team-grid">
          {boardMembers.map((member, index) => (
            <div key={index}>
              <TeamMember
                name={member.name}
                major={member.major}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Add this after the team section */}
      <section id="connect" className="connect-section">
        <div className="connect-container">
          <div className="connect-content">
            <h2 className="connect-title">Stay Connected</h2>
            <div className="connect-info">
              <div className="instagram-container">
                <div className="instagram-header">
                  <i className="fab fa-instagram"></i>
                  <h3>Follow Our Journey</h3>
                </div>
                <p className="instagram-handle">@michigan_bsa</p>
                <p className="instagram-description">
                  Join our community and stay updated with the latest events,
                  member spotlights, and announcements.
                </p>
              </div>
              <div className="newsletter-container">
                <div className="newsletter-header">
                  <i className="far fa-envelope"></i>
                  <h3>Newsletter</h3>
                </div>
                <p className="newsletter-description">
                  Get weekly updates directly in your inbox
                </p>
                <form className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Your @umich.edu email"
                    className="newsletter-input"
                  />
                  <button type="submit" className="newsletter-button">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div>
            <InstagramFeed></InstagramFeed>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <img src={logo} alt="MBSA Logo" className="footer-logo" />
            <p>Connecting students, building futures.</p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Questions? Reach out to us at support@michiganstudents.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 MBSA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
