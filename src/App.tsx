import "./App.css";
import React from 'react';
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div id="welcome-page" className="container">
        <div className="center-content">
            <h1>Welcome</h1>
            <button id="get-started-button" onClick={() => navigate("/intro_page")}>Get Started <span className="arrow">→</span></button>
        </div>
    </div>
    
  );
}

export default WelcomePage;
