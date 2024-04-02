import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
  
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              href="#home"
              className={activeLink === "home" ? styles.activeLink : ""}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeLink === "projects" ? styles.activeLink : ""}
              onClick={() => handleLinkClick("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeLink === "skills" ? styles.activeLink : ""}
              onClick={() => handleLinkClick("skills")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeLink === "experience" ? styles.activeLink : ""}
              onClick={() => handleLinkClick("experience")}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeLink === "about" ? styles.activeLink : ""}
              onClick={() => handleLinkClick("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === "contact" ? styles.activeLink : ""}
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
