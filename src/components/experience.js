import "./experience.css";
import { useState } from "react";
const ExperienceItem = ({ experience, aosData }) => {
  const {
    dateRange,
    title,
    company,
    companyUrl,
    location,
    description,
    externalLinks,
    technologies,
  } = experience;
  // const {
  //   dateRange,
  //   title,
  //   company,
  //   companyUrl,
  //   location,
  //   description,
  //   externalLinks,
  //   technologies,
  // } = {
  //   dateRange: "JULY — DEC 2017",
  //   title: "UI Evvvvvvvv",
  //   company: "Apple",
  //   companyUrl: "#",
  //   location: "japan",
  //   description:
  //     "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
  //   externalLinks: [
  //     { label: "MusicKit.js", url: "#" },
  //     { label: "9to5Mac", url: "#" },
  //     { label: "The Verge", url: "#" },
  //   ],
  //   technologies: ["Ember", "SCSS", "JavaScript", "MusicKit.js"],
  // };
  const [isHovered, setIsHovered] = useState(false);

  // Logic for truncation
  const shouldTruncate = description.length > 150;
  const displayDescription =
    isHovered || !shouldTruncate
      ? description
      : `${description.substring(0, 150)}...`;
  const displayTechnologies =
    !isHovered && technologies.length > 5
      ? [...technologies.slice(0, 5),"..."]
      : technologies;
  const displayExternalLinks =
    !isHovered && externalLinks.length > 5
      ? [...externalLinks.slice(0, 5), { label: "...", url: "" }]
      : externalLinks;

  return (
    <div
      className="ex-item-container"
      data-aos={aosData}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <aside className="ex-date">{dateRange}</aside>
      <div className="ex-content">
        <div className="ex-header">
          <h3 className="ex-title">{title}</h3>
          <a className="ex-company" href={companyUrl} target="_blank" >
            {company} · <span className="ex-location">{location}</span>{" "}
          </a>
        </div>
        <p className="ex-description">
          {displayDescription.split("\n").map((line, index) => (
            <>
              {line}
              {/* Add <br /> after every line except the very last one */}
              {index !== displayDescription.split("\n").length - 1 && <br />}
            </>
          ))}
        </p>
        <ul className="ex-links">
          {displayExternalLinks.map((link, index) => (
            <li className="ex-link-item" key={index}>
              <a
                className="ex-link-item-url"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="tags">
          {displayTechnologies.map((tech, index) => (
            <li className="tag-item" key={index}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceList = () => {
  const experiences = [
    {
      dateRange: "05/2021 - 01/2024",
      title: "JS/TS Software Developer",
      company: "Tecooli Service OÜ",
      companyUrl: "linkedin.com/company/tecooli-service?originalSubdomain=ee",
      location: "Estonia",
      description: `•  Acted as Technical Lead and primary client liaison of multiple concurrent projects, managing the full development lifecycle 
•  Led end-to-end development of immersive WebVR platforms using Mozilla Hubs and Three.js, delivering interactive 3D spaces for global clients.
•  Architected scalable backends with Node.js and RabbitMQ, implementing enterprise security via Keycloak, OAuth2, and AWS Cognito.
•  Orchestrated cloud infrastructure on AWS (EKS, EC2, Lambda, S3), achieving high-concurrency events.
•  Developed custom WordPress integrations (PHP/JS) to synchronize 2D CMS data with 3D VR environments, enhancing client content management. `,
      externalLinks: [
        // { label: "MusicKit.js", url: "#" },
        // { label: "9to5Mac", url: "#" },
        // { label: "The Verge", url: "#" },
      ],
      technologies: [
        "Docker",
        "Redis",
        "PostgreSQL",
        "AWS Lambda",
        "Nginx",
        "Three.js",
        "Next.js",
        "S3",
        " EKS",
        "EC2",
        "Mozilla hubs",
        "Keycloak",
        "Webrtc",
        "Elixir",
        "TypeScript",
        "WordPress",
        "RabbitMQ",
        "Leading Project ",
      ],
    },
    {
      dateRange: "12/2023 - 05/2025",
      title: "Software Engineer (Freelance) ",
      company: "imedu",
      companyUrl: "https://imedu.io/",
      location: "Netherlands",
      description: `•   Collaborated directly with the founder to build "KeyStone," an AI-powered WebVR platform utilized by university students for 3D prototyping and training using visual learning method`,
      externalLinks: [{ label: "KeyStone", url: "https://app.imedu.io/" }],
      technologies: [
        "OpenID",
        "SSO",
        "JavaScript",
        "Node.js",
        "React.js",
        "Django",
        "Azure",
      ],
    },
    {
      dateRange: "06/2024 --",
      title: "Full Stack Developer (Freelance)",
      company: "Vartique",
      companyUrl: "https://www.vartique.com/",
      location: "Japan",
      description: `•   Deployed and maintained the complete WebVR infrastructure and microservices system on AWS and DO, ensuring high availability.
•   Hardened platform security by re-architecting API integration layers to eliminate public API key exposure and critical vulnerabilities.
•   Built custom fetchers to optimize real-time data synchronization based on customer requirements.`,
      externalLinks: [
        // { label: "MusicKit.js", url: "#" },
        // { label: "9to5Mac", url: "#" },
        // { label: "The Verge", url: "#" },
      ],
      technologies: [
        "K8s",
        "AWS",
        "react",
        "JS",
        "Node.js",
        "Nginx",
        "EC2",
        "digitalOcean",
        "DOKS",
        "AWS Lambda",
        "etc",
      ],
    },
  ];
  return (
    <section className="container" id="Experience">
      <h2 data-aos="zoom-in" className="h2tag">
        {" "}
        <span> My Professional Journey </span> So Far
      </h2>
      <div className="list-container">
        {experiences.map((exp, index) => (
          <div className="list-wrapper" key={index}>
            <ExperienceItem
              experience={exp}
              aosData={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
// aosData={`${index % 2 === 0 ? "fade-right" :"fade-left" }`}
export default ExperienceList;
