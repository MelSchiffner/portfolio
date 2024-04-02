import styles from "./Timeline.module.css";
import React, { useEffect, useRef } from 'react';
import { MdOutlineTask } from "react-icons/md";

const Timeline = ({ data }) => {
    const experienceListRef = useRef(null);

    useEffect(() => {
      if (experienceListRef.current) {
        const listItems = experienceListRef.current.querySelectorAll('li');
        let maxWidth = 0;
  
        listItems.forEach(item => {
          const width = item.offsetWidth;
          maxWidth = Math.max(maxWidth, width);
        });
  
        const bulletMargin = maxWidth + 0; 
  
        listItems.forEach(item => {
          item.style.marginRight = `${bulletMargin}px`;
        });
      }
    }, [data.experiences]);
  


return (
  <div className={styles.item}>
    <div className={styles.content}>
    <div className={styles.date}> {data.startDate} - {data.endDate}</div>
      <p className={styles.role} >{data.role}</p>
      <p className={styles.organisation}>{data.organisation}</p>
      <MdOutlineTask />
      <div className={styles.containerList}>
      <ul ref={experienceListRef} className={styles.experienceList}>
          {data.experiences.map((experience, idx) => (
            <li key={idx} className={styles.list}>{experience}</li>
          ))}
        </ul>
        </div>
      <span className={styles.circle} />
    </div>
  </div>
);
}
export default Timeline;
