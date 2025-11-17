import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Home() {
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
        <Row className="align-items-center h-100 g-5">
          <Col lg={6} md={12}>
            <div
              style={{
                padding: "60px 40px",
                borderRadius: "24px",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 20px 40px rgba(20, 90, 50, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: "700",
                  marginBottom: "30px",
                  fontFamily: "'Fanwood Text', serif",
                  color: "#145a32",
                  lineHeight: "1.2",
                  letterSpacing: "-0.02em",
                }}
              >
                Keep your stomach & intestine in check using{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #28a745, #145a32)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  AI
                </span>
                !
              </h1>

              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  marginBottom: "40px",
                  lineHeight: "1.6",
                  color: "#2c5530",
                  opacity: "0.9",
                }}
              >
                Upload Video Capsule Endoscopy frames and get your diagnosis in
                seconds along with a detailed report powered by advanced AI
                technology
              </p>

              <Link to="/services" style={{ textDecoration: "none" }}>
                <Button
                  size="lg"
                  style={{
                    background: "linear-gradient(135deg, #28a745, #145a32)",
                    border: "none",
                    borderRadius: "50px",
                    padding: "15px 40px",
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
                  Start Diagnosis
                </Button>
              </Link>
            </div>
          </Col>

          <Col lg={6} md={12} className="text-center">
            <div
              style={{
                position: "relative",
                display: "inline-block",
              }}
            >
              <div
                style={{
                  width: "400px",
                  height: "400px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "8px solid rgba(20, 90, 50, 0.1)",
                  boxShadow: "0 25px 50px rgba(20, 90, 50, 0.2)",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Floating elements for decoration */}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "30px",
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(135deg, #28a745, #20c997)",
                    borderRadius: "50%",
                    opacity: "0.3",
                    animation: "float 3s ease-in-out infinite",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "40px",
                    left: "40px",
                    width: "40px",
                    height: "40px",
                    background: "linear-gradient(135deg, #145a32, #28a745)",
                    borderRadius: "50%",
                    opacity: "0.4",
                    animation: "float 2s ease-in-out infinite reverse",
                  }}
                />

                <Image
                  src="https://img.freepik.com/free-vector/abdominal-pain-concept-illustration_114360-17516.jpg?w=740&t=st=1712947783~exp=1712948383~hmac=b8148fae57d3bea79078bf0ff7891b128d1808e8535d90a21b79d41f8da48fd1"
                  style={{
                    borderRadius: "50%",
                    width: "85%",
                    height: "85%",
                    objectFit: "cover",
                    filter: "brightness(1.1) contrast(1.05)",
                  }}
                  alt="Medical illustration"
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* Features section */}
        <Row className="mt-5 pt-5">
          <Col md={4} className="text-center mb-4">
            <div
              style={{
                padding: "30px 20px",
                borderRadius: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0 10px 30px rgba(20, 90, 50, 0.1)",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, #28a745, #145a32)",
                  borderRadius: "50%",
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  color: "white",
                }}
              >
                🤖
              </div>
              <h5
                style={{
                  color: "#145a32",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                AI-Powered Analysis
              </h5>
              <p style={{ color: "#2c5530", opacity: "0.8" }}>
                Advanced machine learning algorithms for accurate diagnosis
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center mb-4">
            <div
              style={{
                padding: "30px 20px",
                borderRadius: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0 10px 30px rgba(20, 90, 50, 0.1)",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, #28a745, #145a32)",
                  borderRadius: "50%",
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  color: "white",
                }}
              >
                ⚡
              </div>
              <h5
                style={{
                  color: "#145a32",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                Instant Results
              </h5>
              <p style={{ color: "#2c5530", opacity: "0.8" }}>
                Get your diagnosis results in seconds, not hours
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center mb-4">
            <div
              style={{
                padding: "30px 20px",
                borderRadius: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0 10px 30px rgba(20, 90, 50, 0.1)",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, #28a745, #145a32)",
                  borderRadius: "50%",
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  color: "white",
                }}
              >
                📊
              </div>
              <h5
                style={{
                  color: "#145a32",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                Detailed Reports
              </h5>
              <p style={{ color: "#2c5530", opacity: "0.8" }}>
                Comprehensive analysis with visual insights and recommendations
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
