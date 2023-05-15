import React from 'react';
import './RowCard.css';

const RowCard = ({ user }) => {
  return (
    <div className="row-card">
      <div className="profile-photo">
        <img src={user.photoUrl} alt="Profile" />
      </div>
      <div className="qualifications">
        <h2>{user.name}</h2>
        <p>{user.qualification}</p>
      </div>
      <div className="bio">
        <p>{user.bio}</p>
      </div>
      <div className="consult-button">
        <button>View</button>
      </div>
    </div>
  );
};

export default RowCard;
