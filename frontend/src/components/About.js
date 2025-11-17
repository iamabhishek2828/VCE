import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Homepage.css";

function About() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image:
        "https://img.freepik.com/free-photo/confident-female-doctor-posing-office_23-2148336275.jpg",
      description: "15+ years in gastroenterology and medical AI research",
      expertise: "Gastroenterology, AI in Medicine",
    },
    {
      name: "Alex Chen",
      role: "Lead AI Engineer",
      image:
        "https://img.freepik.com/free-photo/portrait-young-businessman-formal-suit_273609-17350.jpg",
      description:
        "Expert in machine learning and computer vision for medical applications",
      expertise: "AI, Machine Learning, Computer Vision",
    },
    {
      name: "Maria Rodriguez",
      role: "Medical Data Scientist",
      image:
        "https://img.freepik.com/free-photo/attractive-young-female-scientist-standing-laboratory_23-2148142188.jpg",
      description:
        "Specialized in medical image analysis and diagnostic algorithms",
      expertise: "Data Science, Medical Imaging, Research",
    },
  ];

  return (
    <div
      className="no-scroll-override"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, rgb(194, 239, 212) 0%, rgb(164, 229, 192) 100%)",
        paddingTop: "100px",
        paddingBottom: "80px",
        overflow: "visible",
        height: "auto",
      }}
    >
      <Container
        className="h-auto no-scroll-override"
        style={{ overflow: "visible", height: "auto" }}
      >
        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "700",
              color: "#145a32",
              marginBottom: "30px",
              fontFamily: "'Fanwood Text', serif",
              letterSpacing: "-0.02em",
            }}
          >
            About CureTech
          </h1>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: "40px",
              borderRadius: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 20px 40px rgba(20, 90, 50, 0.15)",
            }}
          >
            <p
              style={{
                fontSize: "1.3rem",
                color: "#2c5530",
                lineHeight: "1.7",
                marginBottom: "25px",
              }}
            >
              We are revolutionizing medical diagnostics through cutting-edge AI
              technology. Our platform specializes in Video Capsule Endoscopy
              analysis, providing healthcare professionals with instant,
              accurate diagnoses that save time and improve patient outcomes.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#145a32",
                opacity: "0.9",
                lineHeight: "1.6",
              }}
            >
              Founded by a team of medical professionals and AI experts,
              CureTech bridges the gap between advanced technology and practical
              medical applications, making sophisticated diagnostic tools
              accessible to healthcare providers worldwide.
            </p>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <Row className="mb-5 g-4">
          <Col md={6}>
            <div
              style={{
                padding: "40px 30px",
                borderRadius: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 15px 35px rgba(20, 90, 50, 0.12)",
                height: "100%",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "linear-gradient(135deg, #28a745, #145a32)",
                  borderRadius: "50%",
                  margin: "0 auto 25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                }}
              >
                🎯
              </div>
              <h3
                style={{
                  color: "#145a32",
                  fontWeight: "600",
                  marginBottom: "20px",
                  fontFamily: "'Fanwood Text', serif",
                }}
              >
                Our Mission
              </h3>
              <p
                style={{
                  color: "#2c5530",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  opacity: "0.9",
                }}
              >
                To democratize advanced medical diagnostics by making AI-powered
                analysis tools accessible, affordable, and reliable for
                healthcare providers globally, ultimately improving patient care
                and diagnostic accuracy.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div
              style={{
                padding: "40px 30px",
                borderRadius: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 15px 35px rgba(20, 90, 50, 0.12)",
                height: "100%",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "linear-gradient(135deg, #28a745, #145a32)",
                  borderRadius: "50%",
                  margin: "0 auto 25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                }}
              >
                🔮
              </div>
              <h3
                style={{
                  color: "#145a32",
                  fontWeight: "600",
                  marginBottom: "20px",
                  fontFamily: "'Fanwood Text', serif",
                }}
              >
                Our Vision
              </h3>
              <p
                style={{
                  color: "#2c5530",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  opacity: "0.9",
                }}
              >
                To become the leading platform for AI-assisted medical
                diagnostics, transforming healthcare delivery by providing
                instant, accurate, and comprehensive diagnostic insights that
                empower medical professionals worldwide.
              </p>
            </div>
          </Col>
        </Row>

        {/* Team Section */}
        <div className="text-center mb-4">
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              color: "#145a32",
              marginBottom: "20px",
              fontFamily: "'Fanwood Text', serif",
            }}
          >
            Meet Our Expert Team
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#2c5530",
              opacity: "0.8",
              maxWidth: "600px",
              margin: "0 auto 40px",
            }}
          >
            Our diverse team combines medical expertise with cutting-edge
            technology to deliver innovative solutions
          </p>
        </div>

        <Row className="g-4 mb-5">
          {teamMembers.map((member, index) => (
            <Col lg={4} md={6} key={index}>
              <Card
                style={{
                  border: "none",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 20px 40px rgba(20, 90, 50, 0.15)",
                  overflow: "hidden",
                  height: "100%",
                  transition: "all 0.3s ease",
                }}
                className="h-100"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 25px 50px rgba(20, 90, 50, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(20, 90, 50, 0.15)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: `url(${member.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(transparent, rgba(20, 90, 50, 0.9))",
                      padding: "20px",
                      color: "white",
                    }}
                  >
                    <h5 style={{ fontWeight: "600", marginBottom: "5px" }}>
                      {member.name}
                    </h5>
                    <p style={{ margin: 0, opacity: "0.9" }}>{member.role}</p>
                  </div>
                </div>
                <Card.Body style={{ padding: "25px" }}>
                  <p
                    style={{
                      color: "#2c5530",
                      marginBottom: "15px",
                      lineHeight: "1.5",
                    }}
                  >
                    {member.description}
                  </p>
                  <div
                    style={{
                      padding: "10px 15px",
                      background: "linear-gradient(135deg, #e8f5e8, #d4edda)",
                      borderRadius: "10px",
                      borderLeft: "4px solid #28a745",
                    }}
                  >
                    <small
                      style={{
                        color: "#145a32",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Expertise: {member.expertise}
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Technology & Innovation Section */}
        <Row className="g-4">
          <Col md={4} className="text-center">
            <div
              style={{
                padding: "30px 20px",
                borderRadius: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 10px 30px rgba(20, 90, 50, 0.1)",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  background: "linear-gradient(135deg, #28a745, #145a32)",
                  borderRadius: "50%",
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                🧠
              </div>
              <h5
                style={{
                  color: "#145a32",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                Advanced AI Technology
              </h5>
              <p
                style={{ color: "#2c5530", opacity: "0.8", lineHeight: "1.5" }}
              >
                State-of-the-art machine learning algorithms trained on
                thousands of medical images for accurate diagnosis
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div
              style={{
                padding: "30px 20px",
                borderRadius: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 10px 30px rgba(20, 90, 50, 0.1)",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  background: "linear-gradient(135deg, #28a745, #145a32)",
                  borderRadius: "50%",
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                🔬
              </div>
              <h5
                style={{
                  color: "#145a32",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                Clinical Validation
              </h5>
              <p
                style={{ color: "#2c5530", opacity: "0.8", lineHeight: "1.5" }}
              >
                Our AI models are rigorously tested and validated by medical
                professionals to ensure clinical accuracy
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div
              style={{
                padding: "30px 20px",
                borderRadius: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 10px 30px rgba(20, 90, 50, 0.1)",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  background: "linear-gradient(135deg, #28a745, #145a32)",
                  borderRadius: "50%",
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                🌍
              </div>
              <h5
                style={{
                  color: "#145a32",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                Global Impact
              </h5>
              <p
                style={{ color: "#2c5530", opacity: "0.8", lineHeight: "1.5" }}
              >
                Making advanced medical diagnostics accessible worldwide,
                improving healthcare outcomes for patients everywhere
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
