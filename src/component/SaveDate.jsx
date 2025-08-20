import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaHeartbeat,
  FaSync,
  FaRecycle,
  FaArrowCircleUp,
} from "react-icons/fa";

import heart from '../assets/heart.svg'
import loop from '../assets/cycle.svg'
import recycle from '../assets/recycling.svg'
import pacemaker from '../assets/pacemaker.svg'

export default function SaveDate() {

    const handleDownloadICS = () => {
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:AVEIR™ DR Launch Event
DTSTART:20250928T090000
DTEND:20250929T180000
LOCATION:Aerocity
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
        <h1>Save The Date</h1>
        <h2>AVEIR™ DR</h2>
        <p className="subtitle">The World’s First Dual-Chamber Leadless Pacemaker</p>
      </header>

      {/* Event Details */}
      <section className="save-details">
        <div className="detail-box">
          <FaMapMarkerAlt className="icon" />
          <p>Aerocity</p>
        </div>
        <div className="detail-box">
          <FaCalendarAlt className="icon" />
          <p>28th & 29th September 2025</p>
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

      {/* Highlights */}
      <section className="save-highlights">
        <h3>Key Highlights</h3>
        <div className="highlight-grid">
          <div className="highlight-card">
            <img src={heart} alt="" />
            <p>Beat-to-beat synchrony</p>
          </div>
          <div className="highlight-card">
            <img src={loop} alt="" />
            <p>Longer life</p>
          </div>
          <div className="highlight-card">
            <img src={recycle} alt="" width={150} />
            <p>Retrievability</p>
          </div>
          <div className="highlight-card">
            <img src={pacemaker} alt="" width={150} />
            <p>Upgradability</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="save-footer">
        <p className="tagline">Powered by i2i™ Communication</p>
        <p>For internal use only</p>
      </footer>
    </div>
  );
}
