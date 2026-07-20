import React from 'react';
import { FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { teamInfo, businessInfo } from '../data/siteData';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>About Kreata Designs</h1>
                    <p>Professional design, graphics, and printing services for Nairobi businesses and individuals.</p>
                </div>
            </section>

            {/* Company Story */}
            <section className="section about-story">
                <div className="section-header">
                    <h2>Our Story</h2>
                </div>
                <div className="story-content">
                    <p>
                        Kreata Designs was built on a simple idea: bring professional design and printing services
                        to businesses and individuals in Nairobi, without the hassle. We combine creative expertise
                        with reliable execution to deliver quality results every time.
                    </p>
                    <p>
                        Whether you need a bold new logo, eye-catching marketing materials, or crisp prints,
                        our team works closely with you to bring your vision to life.
                    </p>
                </div>
            </section>

            {/* Leadership & Team */}
            <section className="section about-team">
                <div className="section-header">
                    <h2>Our Leadership</h2>
                </div>

                {/* Directors */}
                <div className="team-category">
                    <h3>Directors</h3>
                    <div className="team-grid">
                        {teamInfo.directors.map((director, idx) => (
                            <div key={idx} className="team-card director-card">
                                <div className="team-avatar director-avatar">
                                    {director.name.charAt(0)}
                                </div>
                                <h4>{director.name}</h4>
                                <p className="team-title">{director.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Staff */}
                <div className="team-category">
                    <h3>Key Staff</h3>
                    <div className="team-grid">
                        {teamInfo.keyStaff.map((staff, idx) => (
                            <div key={idx} className="team-card">
                                <div className="team-avatar">
                                    {staff.name.charAt(0)}
                                </div>
                                <h4>{staff.name}</h4>
                                <p className="team-title">{staff.title}</p>
                                <div className="team-contact">
                                    <a
                                        href={staff.phoneLink}
                                        className="contact-link phone-link"
                                        title={`Call ${staff.name}`}
                                    >
                                        <FaPhone /> {staff.phone}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section section-alt about-values">
                <div className="section-header">
                    <h2>Our Values</h2>
                </div>
                <div className="values-grid">
                    <div className="value-card">
                        <h4>Quality</h4>
                        <p>Every project gets our full attention and best work, from concept to final delivery.</p>
                    </div>
                    <div className="value-card">
                        <h4>Reliability</h4>
                        <p>We meet deadlines, communicate clearly, and deliver what we promise — every time.</p>
                    </div>
                    <div className="value-card">
                        <h4>Creativity</h4>
                        <p>We push boundaries to create designs that stand out and capture your brand's essence.</p>
                    </div>
                    <div className="value-card">
                        <h4>Accessibility</h4>
                        <p>Professional design doesn't have to be expensive. We offer transparent, affordable pricing.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-banner">
                <h2>Ready to Work With Us?</h2>
                <p>Let's create something amazing for your brand. Get in touch today.</p>
                <div className="cta-actions">
                    <a
                        href={businessInfo.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        <FaWhatsapp /> Chat on WhatsApp
                    </a>
                    <a href={businessInfo.phoneLink} className="btn btn-outline">
                        <FaPhone /> Call Us
                    </a>
                </div>
            </section>

            <style jsx>{`
        .about-page {
          width: 100%;
        }

        /* Hero Section */
        .about-hero {
          background: linear-gradient(135deg, rgba(255, 192, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%);
          padding: 80px 20px;
          text-align: center;
          border-bottom: 2px solid #FFC000;
        }

        .about-hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 15px;
          color: var(--text-primary);
        }

        .about-hero-content p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Story Section */
        .about-story {
          max-width: 700px;
          margin: 0 auto;
        }

        .story-content p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .story-content p:last-child {
          margin-bottom: 0;
        }

        /* Team Section */
        .about-team {
          max-width: 1000px;
          margin: 0 auto;
        }

        .team-category {
          margin-bottom: 50px;
        }

        .team-category h3 {
          font-size: 1.5rem;
          margin-bottom: 30px;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 1px;
          border-bottom: 2px solid #FFC000;
          padding-bottom: 10px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 20px;
        }

        /* Team Card */
        .team-card {
          background: var(--bg-secondary);
          border: 1px solid rgba(255, 192, 0, 0.2);
          border-radius: 12px;
          padding: 30px 20px;
          text-align: center;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .team-card:hover {
          border-color: #FFC000;
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(255, 192, 0, 0.2);
        }

        .team-avatar {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #FFC000 0%, #FFD700 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: 700;
          color: #000;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .director-avatar {
          background: linear-gradient(135deg, #666 0%, #333 100%);
          color: #FFC000;
        }

        .team-card h4 {
          font-size: 1.3rem;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .team-title {
          font-size: 0.95rem;
          color: #FFC000;
          font-weight: 600;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .team-contact {
          margin-top: auto;
          width: 100%;
        }

        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #FFC000;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 8px 12px;
          border: 1px solid #FFC000;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .contact-link:hover {
          background: #FFC000;
          color: #000;
        }

        .phone-link {
          border-color: #FFC000;
        }

        /* Values Section */
        .about-values {
          max-width: 1000px;
          margin: 0 auto;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
        }

        .value-card {
          background: var(--bg-secondary);
          padding: 25px;
          border-radius: 10px;
          border-left: 4px solid #FFC000;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateX(5px);
          box-shadow: 0 4px 12px rgba(255, 192, 0, 0.15);
        }

        .value-card h4 {
          font-size: 1.2rem;
          margin-bottom: 12px;
          color: #FFC000;
        }

        .value-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* CTA Banner */
        .cta-banner {
          background: linear-gradient(135deg, rgba(255, 192, 0, 0.15) 0%, rgba(0, 0, 0, 0.3) 100%);
          padding: 60px 20px;
          text-align: center;
          border-top: 2px solid #FFC000;
        }

        .cta-banner h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: var(--text-primary);
        }

        .cta-banner p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 30px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .about-hero-content h1 {
            font-size: 2.5rem;
          }

          .about-hero-content p {
            font-size: 1rem;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

          .cta-banner h2 {
            font-size: 2rem;
          }

          .cta-actions {
            flex-direction: column;
          }

          .cta-actions .btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .about-hero {
            padding: 50px 15px;
          }

          .about-hero-content h1 {
            font-size: 1.8rem;
          }

          .team-category h3 {
            font-size: 1.2rem;
          }

          .team-grid {
            gap: 20px;
          }

          .team-card {
            padding: 20px 15px;
          }

          .cta-banner {
            padding: 40px 15px;
          }
        }
      `}</style>
        </div>
    );
};

export default About;