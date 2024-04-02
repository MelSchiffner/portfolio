import React from 'react';
import Timeline from './Timeline'; 
import history from '../../data/history.json';
import styles from "./Experience.module.css";

const Experience = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Experience</h2>
    {history.map((data, idx) => (
      <Timeline key={idx} data={data} />
    ))}
  </div>
);

export default Experience; 