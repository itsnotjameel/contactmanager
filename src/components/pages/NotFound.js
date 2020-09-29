import React from "react";

const NotFound = () => {
  return (
    <div style={{ display: "flex" }}>
      <img
        className="fas fa-exclamation-circle"
        src=""
        alt=""
        width=""
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          padding: "20px",
          fontSize: "150px",
        }}
      ></img>
      <div style={{ marginTop: "auto", marginBottom: "auto" }}>
        <h1 className="display-4">404 Page Not Found</h1>
        <p className="lead">Sorry, that page doesn't exist</p>
      </div>
    </div>
  );
};
export default NotFound;
