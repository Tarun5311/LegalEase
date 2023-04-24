import React, { useState } from 'react';
import './ProfilePage.css';
import SideBar from './SideBar';
import NavBar from './NavBar';

const ProfilePage = () => {
  const [name, setName] = useState('John Doe');
  const [phone, setPhone] = useState('123-456-7890');
  const [email, setEmail] = useState('john.doe@example.com');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <SideBar/>
      <NavBar/>

      <div className='content1'>
        <div className="profile-page">
          <div className="profile-info">
            <div className="profile-field">
              <label>Name:</label>
              {isEditing ? (
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              ) : (
                <span>{name}</span>
              )}
            </div>
            <div className="profile-field">
              <label>Phone:</label>
              {isEditing ? (
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
              ) : (
                <span>{phone}</span>
              )}
            </div>
            <div className="profile-field">
              <label>Email:</label>
              {isEditing ? (
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              ) : (
                <span>{email}</span>
              )}
            </div>
          </div>
          <div className="profile-buttons">
            {isEditing ? (
              <button onClick={handleSave}>Save</button>
            ) : (
              <button onClick={handleEdit}>Edit</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
