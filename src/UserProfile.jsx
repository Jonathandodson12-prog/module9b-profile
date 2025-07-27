import React from 'react';

function UserProfile() {
  const name = "Jonathan Dodson";
  const bio = "Front-end developer passionate about creating beautiful and user-friendly web applications.";
  
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '300px',
    margin: '50px auto',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  };

  const imageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px'
  };

  const nameStyle = {
    fontSize: '1.5em',
    margin: '0',
    color: '#333'
  };

  const bioStyle = {
    fontSize: '1em',
    color: '#666',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <img 
        style={imageStyle} 
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Profile" 
      />
      <h1 style={nameStyle}>{name}</h1>
      <p style={bioStyle}>{bio}</p>
    </div>
  );
}

export default UserProfile;
