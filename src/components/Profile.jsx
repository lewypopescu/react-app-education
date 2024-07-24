import React from 'react';
import styles from './Profile.module.css';

function Profile({ username, location, avatar, tags, stats }) {
  return (
    <div className={styles.profile}>
      <div className="description">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className="avatar"
        />
        <p className="name">Petra Marica</p>
        <p className="tag">@pmarica</p>
        <p className="location">Salvador, Brasil</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">1000</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">2000</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
