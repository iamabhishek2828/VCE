import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import "./Service.css";

function Service() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePath, setImagePath] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [uploadedImagePreview, setUploadedImagePreview] = useState(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const fileInputRef = useRef(null);

  // Get backend URL from environment variables
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:5000";

  const handleDownloadResult = async () => {
    if (imagePath) {
      try {
        setIsDownloading(true);
        const response = await fetch(`${API_BASE_URL}/uploads/${imagePath}`);
        if (!response.ok) throw new Error("Download failed");

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `analysis_result_${Date.now()}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        setSuccessMessage("Image downloaded successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
      } catch (error) {
        setErrorMessage("Failed to download image. Please try again.");
        setTimeout(() => setErrorMessage(""), 3000);
      } finally {
        setIsDownloading(false);
      }
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setErrorMessage("");
    setSuccessMessage("");
    setImagePath("");
    setShowResult(false);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setUploadedImagePreview(null);
    }
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();

    if (!selectedImage) {
      setErrorMessage("Please select an image to upload");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      setIsPredicting(true);
      setErrorMessage("");

      const response = await fetch(`${API_BASE_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const responseData = await response.json();
      const newPath = responseData.file_name;

      setImagePath(newPath);
      setSuccessMessage("Image processed successfully!");
      setShowResult(true);
      setSelectedImage(null);
    } catch (error) {
      console.error(error);
      setErrorMessage("Error uploading image. Please try again.");
    } finally {
      setIsPredicting(false);
    }
  };

  const handleSelectNewFile = () => {
    setShowResult(false);
    setImagePath("");
    setUploadedImagePreview(null);
    setSelectedImage(null);
    setErrorMessage("");
    setSuccessMessage("");
    fileInputRef.current.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("image/")) {
        setSelectedImage(file);
        setErrorMessage("");
        setSuccessMessage("");
        setImagePath("");
        setShowResult(false);

        const reader = new FileReader();
        reader.onload = () => {
          setUploadedImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setErrorMessage("Please select a valid image file");
      }
    }
  };

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
        <div className="text-center mb-5">
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "700",
              color: "#145a32",
              marginBottom: "20px",
              fontFamily: "'Fanwood Text', serif",
              letterSpacing: "-0.02em",
            }}
          >
            AI-Powered Medical Diagnosis
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              color: "#2c5530",
              opacity: "0.8",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Upload Video Capsule Endoscopy frames for instant AI analysis
          </p>
        </div>

        {errorMessage && (
          <Alert variant="danger" className="mb-4">
            {errorMessage}
          </Alert>
        )}

        {successMessage && (
          <Alert variant="success" className="mb-4">
            {successMessage}
          </Alert>
        )}

        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <Card
              style={{
                border: "none",
                borderRadius: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 20px 40px rgba(20, 90, 50, 0.15)",
                overflow: "hidden",
              }}
            >
              {/* Main Content Area */}
              <div style={{ padding: "40px" }}>
                {!showResult ? (
                  /* Upload Section */
                  <div>
                    <div
                      style={{
                        minHeight: "400px",
                        border: uploadedImagePreview
                          ? "none"
                          : "3px dashed #28a745",
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        background: uploadedImagePreview
                          ? "transparent"
                          : "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      onClick={handleSelectNewFile}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      onMouseEnter={(e) => {
                        if (!uploadedImagePreview) {
                          e.target.style.borderColor = "#145a32";
                          e.target.style.background =
                            "linear-gradient(135deg, #f0f8f0 0%, #e6f3e6 100%)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!uploadedImagePreview) {
                          e.target.style.borderColor = "#28a745";
                          e.target.style.background =
                            "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)";
                        }
                      }}
                    >
                      {!uploadedImagePreview ? (
                        <div className="text-center">
                          <div
                            style={{
                              fontSize: "4rem",
                              color: "#28a745",
                              marginBottom: "20px",
                              animation: "float 3s ease-in-out infinite",
                            }}
                          >
                            📁
                          </div>
                          <h4
                            style={{ color: "#145a32", marginBottom: "15px" }}
                          >
                            Drop your medical image here
                          </h4>
                          <p style={{ color: "#6c757d", fontSize: "1.1rem" }}>
                            or click to browse files
                          </p>
                          <p
                            style={{
                              color: "#6c757d",
                              fontSize: "0.9rem",
                              marginTop: "10px",
                            }}
                          >
                            Supports: JPG, PNG, JPEG
                          </p>
                        </div>
                      ) : (
                        <>
                          <img
                            src={uploadedImagePreview}
                            alt="Selected medical image"
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              width: "auto",
                              height: "auto",
                              objectFit: "contain",
                              borderRadius: "12px",
                            }}
                            onError={(e) => {
                              setErrorMessage("Invalid image file selected");
                              setUploadedImagePreview(null);
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "15px",
                              right: "15px",
                              background: "rgba(0,0,0,0.7)",
                              color: "white",
                              padding: "8px 15px",
                              borderRadius: "20px",
                              fontSize: "0.9rem",
                              fontWeight: "500",
                            }}
                          >
                            Click to change image
                          </div>
                        </>
                      )}
                    </div>

                    <Form.Control
                      type="file"
                      onChange={handleImageChange}
                      accept="image/*"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                    />

                    {uploadedImagePreview && (
                      <div className="text-center mt-4">
                        <h5 style={{ color: "#145a32", marginBottom: "20px" }}>
                          Image Ready for Analysis
                        </h5>
                        <Button
                          size="lg"
                          onClick={handleImageUpload}
                          disabled={isPredicting}
                          style={{
                            borderRadius: "50px",
                            padding: "15px 40px",
                            fontWeight: "600",
                            border: "none",
                            background: isPredicting
                              ? "linear-gradient(135deg, #6c757d, #495057)"
                              : "linear-gradient(135deg, #28a745, #145a32)",
                            boxShadow: "0 8px 25px rgba(40, 167, 69, 0.3)",
                            transition: "all 0.3s ease",
                            fontSize: "1.1rem",
                          }}
                        >
                          {isPredicting ? (
                            <>
                              <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                style={{ marginRight: "10px" }}
                              />
                              Analyzing Image...
                            </>
                          ) : (
                            "🔍 Start AI Analysis"
                          )}
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Results Section */
                  <div>
                    <div className="text-center mb-4">
                      <h3
                        style={{
                          color: "#145a32",
                          fontWeight: "600",
                          marginBottom: "10px",
                        }}
                      >
                        ✅ Analysis Complete
                      </h3>
                      <p style={{ color: "#2c5530", opacity: "0.8" }}>
                        Your medical image has been successfully analyzed
                      </p>
                    </div>

                    <div
                      style={{
                        minHeight: "400px",
                        borderRadius: "16px",
                        background: imagePath
                          ? "transparent"
                          : "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                        border: "2px solid #28a745",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      {imagePath ? (
                        <img
                          src={`${API_BASE_URL}/uploads/${imagePath}`}
                          alt="Analysis result"
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            width: "auto",
                            height: "auto",
                            objectFit: "contain",
                            borderRadius: "12px",
                          }}
                          onError={(e) => {
                            setErrorMessage("Failed to load analysis result");
                            e.target.style.display = "none";
                          }}
                          onLoad={() => {
                            setSuccessMessage("");
                          }}
                        />
                      ) : (
                        <div className="text-center">
                          <Spinner
                            animation="border"
                            variant="success"
                            style={{ width: "3rem", height: "3rem" }}
                          />
                          <p style={{ color: "#145a32", marginTop: "20px" }}>
                            Processing results...
                          </p>
                        </div>
                      )}
                    </div>

                    {imagePath && (
                      <div
                        style={{
                          marginTop: "30px",
                          padding: "20px",
                          background:
                            "linear-gradient(135deg, #d4edda, #c3e6cb)",
                          borderRadius: "12px",
                          border: "1px solid #c3e6cb",
                        }}
                      >
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                          <div className="mb-2 mb-md-0">
                            <h6
                              style={{
                                color: "#155724",
                                fontWeight: "600",
                                marginBottom: "5px",
                              }}
                            >
                              Diagnosis Report Ready
                            </h6>
                            <small style={{ color: "#155724", opacity: "0.8" }}>
                              Analysis completed with high confidence
                            </small>
                          </div>
                          <div className="d-flex gap-2 flex-wrap">
                            <Button
                              variant="success"
                              size="sm"
                              onClick={handleDownloadResult}
                              disabled={isDownloading}
                              style={{
                                borderRadius: "25px",
                                padding: "8px 20px",
                                fontWeight: "500",
                                background: isDownloading
                                  ? "linear-gradient(135deg, #6c757d, #495057)"
                                  : "linear-gradient(135deg, #28a745, #145a32)",
                                border: "none",
                              }}
                            >
                              {isDownloading ? (
                                <>
                                  <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Downloading...
                                </>
                              ) : (
                                "📥 Download Result"
                              )}
                            </Button>
                            <Button
                              variant="outline-success"
                              size="sm"
                              onClick={handleSelectNewFile}
                              style={{
                                borderRadius: "25px",
                                padding: "8px 20px",
                                fontWeight: "500",
                              }}
                            >
                              📁 Upload New Image
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Card>
          </Col>
        </Row>

        {/* Feature Cards */}
        <Row className="mt-5 pt-4">
          <Col md={4} className="text-center mb-4">
            <div
              style={{
                padding: "25px",
                borderRadius: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0 10px 25px rgba(20, 90, 50, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(20, 90, 50, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(20, 90, 50, 0.1)";
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>🎯</div>
              <h6 style={{ color: "#145a32", fontWeight: "600" }}>
                Accurate Detection
              </h6>
              <p style={{ color: "#6c757d", fontSize: "0.9rem", margin: 0 }}>
                Advanced AI algorithms for precise medical analysis
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center mb-4">
            <div
              style={{
                padding: "25px",
                borderRadius: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0 10px 25px rgba(20, 90, 50, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(20, 90, 50, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(20, 90, 50, 0.1)";
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>🔒</div>
              <h6 style={{ color: "#145a32", fontWeight: "600" }}>
                Secure & Private
              </h6>
              <p style={{ color: "#6c757d", fontSize: "0.9rem", margin: 0 }}>
                Your medical data is processed securely and privately
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center mb-4">
            <div
              style={{
                padding: "25px",
                borderRadius: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0 10px 25px rgba(20, 90, 50, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(20, 90, 50, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(20, 90, 50, 0.1)";
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>📋</div>
              <h6 style={{ color: "#145a32", fontWeight: "600" }}>
                Detailed Reports
              </h6>
              <p style={{ color: "#6c757d", fontSize: "0.9rem", margin: 0 }}>
                Comprehensive analysis with actionable insights
              </p>
            </div>
          </Col>
        </Row>

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
      </Container>
    </div>
  );
}

export default Service;
