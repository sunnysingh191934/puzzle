import React from "react";
import '../wordpuzzle.css';
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaHeartbeat,
  FaSync,
  FaRecycle,
  FaArrowCircleUp,
} from "react-icons/fa";

import heart from '../assets/heart1.png'
import loop from '../assets/cardiac.png'
import recycle from '../assets/helix.png'
import pacemaker from '../assets/machine.png'

export default function SaveDate() {

    const handleDownloadICS = () => {
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:AVEIR™ DR Launch Event
DTSTART:20251003T090000
DTEND:20251003T180000
LOCATION:New Delhi
DESCRIPTION:Introducing the World’s First Dual-Chamber Leadless Pacemaker AVEIR™ DR
END:VEVENT
END:VCALENDAR
    `.trim();

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "SaveTheDate-AVEIRDR.ics";
    a.click();

    URL.revokeObjectURL(url);
  };
  return (
    <div className="save-container">
      {/* Hero Section */}
      <header className="save-hero">
        <h1 className="heading"> <i> Finally the wait is over... </i></h1>
        
        <p className="subtitle"> <strong> LAUNCHING THE WORLD'S FIRST DUAL CHAMBER LEADLESS PACEMAKER AVEIR™ DR IN INDIA</strong></p>
      </header>
      {/* Event Details */}
      <section className="save-details">
        <div className="detail-box">
          <FaMapMarkerAlt className="icon" />
          <p>New Delhi</p>
        </div>
        <div className="detail-box">
          <FaCalendarAlt className="icon" />
          <p>3rd October 2025</p>
        </div>
        <div className="detail-box">
          <FaClock className="icon" />
          <p>9:00 AM - 6:00 PM</p>
        </div>
         <button
        onClick={handleDownloadICS}
        style={{
          background: "#2b6cb0",
          color: "#fff",
          border: "none",
          padding: "12px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <FaCalendarAlt /> Save to Calendar
      </button>
      </section>


      <div className="poweredby">
        <p className="tagline">Powered by i2i™ Communication, AVIER™ DR Offers:</p>
      </div>

      
      {/* Highlights */}
      <section className="save-highlights">
        
        <div className="highlight-grid">
          <div className="highlight-card">
            <img src={heart} alt="" width={100} />
            <p>Beat-to-beat synchrony</p>
          </div>
          <div className="highlight-card">
            <img src={loop} alt="" width={100} />
            <p>Longer life</p>
          </div>
          <div className="highlight-card">
            <img src={recycle} alt="" width={100} />
            <p>Retrievability</p>
          </div>
          <div className="highlight-card">
            <img src={pacemaker} alt="" width={100} />
            <p>Upgradability</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="save-footer">
      
        <p>For internal use only</p>
      </footer>
    </div>
  );
}
