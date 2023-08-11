import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to our Game Portal</h1>
      <p>Please login to continue</p>
      <Link href="/login">
        <a className={styles.link}>Login</a>
      </Link>
    </div>
  );
};

export default Home;