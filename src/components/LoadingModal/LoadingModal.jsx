import React from "react";

const LoadingModal = ({ message = "Loading..." }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div className="spinner" style={styles.spinner}></div>
        <p style={styles.text}>{message}</p>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 15px rgba(0,0,0,0.2)",
  },
  spinner: {
    margin: "0 auto 1rem",
    border: "5px solid #ccc",
    borderTop: "5px solid #007bff",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
  },
  text: {
    fontSize: "1.2rem",
    fontWeight: "500",
  },
};

const spinnerStyle = document.createElement("style");
spinnerStyle.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
document.head.appendChild(spinnerStyle);

export default LoadingModal;
