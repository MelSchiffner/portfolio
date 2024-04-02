import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a
              href="#projects"
              className={activeLink === "projects" ? styles.activeLink : ""}
              onMouseEnter={() => setActiveLink("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeLink === "skills" ? styles.activeLink : ""}
              onMouseEnter={() => setActiveLink("skills")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeLink === "experience" ? styles.activeLink : ""}
              onMouseEnter={() => setActiveLink("experience")}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeLink === "about" ? styles.activeLink : ""}
              onMouseEnter={() => setActiveLink("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === "contact" ? styles.activeLink : ""}
              onMouseEnter={() => setActiveLink("contact")}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="../assets/resume/Melanie_Schiffner_Resume.pdf"
              className={styles.resume}
              download
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
