import React from 'react';

import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.homePage}>
      <div className={styles.welcomeMessage}>
        <h1>Welcome to the Educational Community Platform!</h1>
        <p>
          Our platform connects students (users) with tutors and universities
          through a collaborative environment. Each user has their own account
          for registration and login, but the tutor and university database is
          shared among all users. This creates a dynamic space where users can:
        </p>
        <ul>
          <li>
            Provide feedback on universities, with each comment tagged with the
            users name. Add, edit, or delete information about universities,
            ensuring an up-to-date and accurate database for everyone.
          </li>
          <li>
            Add or delete information about tutors, ensuring an up-to-date and
            accurate database for everyone.
          </li>
          <li>
            Collaborate and engage in discussions about the best tutors and
            educational programs.
          </li>
        </ul>
        <p>
          Join our educational community and help shape the future by
          contributing your insights and experiences!
        </p>
      </div>
    </section>
  );
}
