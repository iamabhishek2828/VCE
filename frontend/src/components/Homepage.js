import React from "react";
import "./Homepage.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Homepage() {
  const stats = [
    { number: "10,000+", label: "Images Analyzed", icon: "📊" },
    { number: "95%", label: "Accuracy Rate", icon: "🎯" },
    { number: "500+", label: "Healthcare Providers", icon: "🏥" },
    { number: "24/7", label: "Support Available", icon: "🕒" },
  ];

  const features = [
    {
      title: "Real-time Analysis",
      description: "Get instant results with our advanced AI processing",
      icon: "⚡",
      color: "#28a745",
    },
    {
      title: "Medical Grade Security",
      description: "HIPAA compliant and secure data handling",
      icon: "🔒",
      color: "#17a2b8",
    },
    {
      title: "Expert Validation",
      description: "Results reviewed by certified medical professionals",
      icon: "👨‍⚕️",
      color: "#6f42c1",
    },
    {
      title: "Comprehensive Reports",
      description: "Detailed analysis with visual annotations",
      icon: "📋",
      color: "#fd7e14",
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
              marginBottom: "25px",
              fontFamily: "'Fanwood Text', serif",
              letterSpacing: "-0.02em",
            }}
          >
            Welcome to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #28a745, #145a32)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CureTech
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              color: "#2c5530",
              opacity: "0.9",
              maxWidth: "700px",
              margin: "0 auto 40px",
              lineHeight: "1.6",
            }}
          >
            Revolutionizing medical diagnostics with AI-powered Video Capsule
            Endoscopy analysis for faster, more accurate healthcare decisions
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/services" style={{ textDecoration: "none" }}>
              <Button
                size="lg"
                style={{
                  background: "linear-gradient(135deg, #28a745, #145a32)",
                  border: "none",
                  borderRadius: "50px",
                  padding: "15px 35px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  boxShadow: "0 8px 25px rgba(40, 167, 69, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 12px 35px rgba(40, 167, 69, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 8px 25px rgba(40, 167, 69, 0.3)";
                }}
              >
                🚀 Start Analysis
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button
                variant="outline-success"
                size="lg"
                style={{
                  borderRadius: "50px",
                  padding: "15px 35px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  borderWidth: "2px",
                  borderColor: "#28a745",
                  color: "#145a32",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#28a745";
                  e.target.style.color = "white";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
                  e.target.style.color = "#145a32";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                📖 Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <Row className="mb-5 g-4">
          {stats.map((stat, index) => (
            <Col lg={3} md={6} key={index}>
              <div
                style={{
                  padding: "30px 20px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 15px 35px rgba(20, 90, 50, 0.12)",
                  textAlign: "center",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 45px rgba(20, 90, 50, 0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(20, 90, 50, 0.12)";
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                  {stat.icon}
                </div>
                <h3
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    color: "#145a32",
                    marginBottom: "10px",
                    fontFamily: "'Fanwood Text', serif",
                  }}
                >
                  {stat.number}
                </h3>
                <p
                  style={{
                    color: "#2c5530",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    margin: 0,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Features Section */}
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
            Why Choose CureTech?
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
            Advanced AI technology meets medical expertise for unparalleled
            diagnostic accuracy
          </p>
        </div>

        <Row className="g-4 mb-5">
          {features.map((feature, index) => (
            <Col lg={3} md={6} key={index}>
              <Card
                style={{
                  border: "none",
                  borderRadius: "18px",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 15px 35px rgba(20, 90, 50, 0.12)",
                  height: "100%",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 45px rgba(20, 90, 50, 0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(20, 90, 50, 0.12)";
                }}
              >
                <div
                  style={{
                    height: "4px",
                    background: `linear-gradient(135deg, ${feature.color}, ${feature.color}99)`,
                  }}
                />
                <Card.Body
                  style={{ padding: "30px 25px", textAlign: "center" }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: `linear-gradient(135deg, ${feature.color}, ${feature.color}CC)`,
                      borderRadius: "50%",
                      margin: "0 auto 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.8rem",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h5
                    style={{
                      color: "#145a32",
                      fontWeight: "600",
                      marginBottom: "15px",
                      fontSize: "1.2rem",
                    }}
                  >
                    {feature.title}
                  </h5>
                  <p
                    style={{
                      color: "#2c5530",
                      opacity: "0.8",
                      lineHeight: "1.5",
                      fontSize: "0.95rem",
                    }}
                  >
                    {feature.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* CTA Section */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <div
              style={{
                padding: "50px 40px",
                borderRadius: "25px",
                background:
                  "linear-gradient(135deg, rgba(40, 167, 69, 0.1), rgba(20, 90, 50, 0.05))",
                border: "2px solid rgba(40, 167, 69, 0.2)",
                textAlign: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  color: "#145a32",
                  marginBottom: "20px",
                  fontFamily: "'Fanwood Text', serif",
                }}
              >
                Ready to Transform Your Diagnostics?
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#2c5530",
                  marginBottom: "30px",
                  opacity: "0.9",
                }}
              >
                Join hundreds of healthcare providers who trust CureTech for
                accurate, fast, and reliable AI-powered medical analysis
              </p>
              <Link to="/services" style={{ textDecoration: "none" }}>
                <Button
                  size="lg"
                  style={{
                    background: "linear-gradient(135deg, #28a745, #145a32)",
                    border: "none",
                    borderRadius: "50px",
                    padding: "18px 45px",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    boxShadow: "0 10px 30px rgba(40, 167, 69, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow =
                      "0 15px 40px rgba(40, 167, 69, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0 10px 30px rgba(40, 167, 69, 0.3)";
                  }}
                >
                  🔬 Start Free Analysis
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
