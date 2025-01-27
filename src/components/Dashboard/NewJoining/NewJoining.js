import React, { useState,useEffect } from 'react';
import './NewJoining.css';
import profilePlaceholder from '../../../Assets/ImageAvtar.jpg'; // Placeholder image

const profiles = [
  {
    name: 'Mr. Vishal Chaudhari',
    role: 'Jr. Software Engineer',
    date: '📅 22 Jul 2024',
    location: '📍 Pune - Product Engineering & Innovations',
    image: profilePlaceholder,
  },
  {
    name: 'Ms. Priya Sharma',
    role: 'Sr. UX Designer',
    date: '📅 15 Aug 2024',
    location: '📍 Bangalore - Design Team',
    image: profilePlaceholder,
  },
  {
    name: 'Mr. Rahul Mehta',
    role: 'Software Developer',
    date: '📅 10 Sep 2024',
    location: '📍 Hyderabad - Backend Team',
    image: profilePlaceholder,
  },
];

const NewJoining = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + profiles.length) % profiles.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
    //=> clearInterval(interval);
    //return interval
  }, []);
  const currentProfile = profiles[currentIndex];

  return (
    <div className="new-joining-container">
      <div className="newjoinings-divider-line">
        <h3>New Joinings</h3>
        <button className="joining-slider-btn-left" onClick={handlePrevious}>◀</button>
        <button className="joining-slider-btn-rgt" onClick={handleNext}>▶</button>
      </div>
      <div className="slider">
        <div className="new-joining-content">
          <div className="welcome-text">
            <h2>Welcome!</h2>
          </div>
          <img
            src={currentProfile.image}
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-details">
            <strong>{currentProfile.name}</strong>
            <small>({currentProfile.role})</small>
            <div className="date-location">
              <p>{currentProfile.date}</p>
              <p>{currentProfile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewJoining;
