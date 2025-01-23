import React, { useState, useEffect } from "react";
import attendanceService from "../../../services/attendanceService";
import "./AttendanceWidget.css";
import attendanceImage from "../../../Assets/attendance-image.jpg";

const AttendanceWidget = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedTime, setFormattedTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  
  useEffect(() => {
    const fetchAttendanceStatus = async () => {
      try {
        const response = await attendanceService.getAttendanceStatus();
        setIsCheckedIn(response?.isCheckedIn || false);
      } catch (err) {
        console.error("Failed to fetch attendance status:", err.message);
      }
    };

    fetchAttendanceStatus();
  }, []);

  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setFormattedDate(now.toLocaleDateString());
      setFormattedTime(now.toLocaleTimeString());
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

 
  const handleCheckIn = async () => {
    try {
      setLoading(true);
      await attendanceService.checkIn();
      setIsCheckedIn(true);
      alert("Check-in successful");
      setError(""); 
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "An unexpected error occurred.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };


  const handleCheckOut = async () => {
    try {
      setLoading(true);
      await attendanceService.checkOut();
      setIsCheckedIn(false);
      alert("Check-out successful");
      setError(""); // Clear any previous errors
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "An unexpected error occurred.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="attendance-widget-container">
      <div className="attendance-widget">
        <img src={attendanceImage} alt="Attendance" className="attendance-image" />
        <div className="attendance-info">
          <h3 className="attendance-title">Attendance</h3>
          <div className="attendance-box">
            <span className="attendance-date">{formattedDate}</span>
            <span className="attendance-clock">{formattedTime}</span>
          </div>
          <div className="attendance-actions">
            {!isCheckedIn ? (
              <button onClick={handleCheckIn} disabled={loading} className="check-in-button">
                {loading ? "Loading..." : "Check-In"}
              </button>
            ) : (
              <button onClick={handleCheckOut} disabled={loading} className="clock-out-button">
                {loading ? "Loading..." : "Clock Out"}
              </button>
            )}
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default AttendanceWidget;
