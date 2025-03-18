// src/config/profile.js
import profileImage from "@/assets/images/profile.jpeg";
import dawha from "@/assets/images/dawha.jpeg";
import AIU from "@/assets/images/AIU.jpg";
import bba from "@/assets/images/baa.png";
export default {
  // Basic info
  name: "Yassin Tomeh",
  title: "Frontend Developer",
  image: profileImage,
  bio: "Front-End Web Developer, My toolkit includes proficiency in Vue.js and Nuxt.js frameworks, pinia for stat managements, axios for handling API's, sass and bootstrap, and gitlab.",
  languages: [
    {
      name: "Arabic",
      level: "Native",
      proficiency: 100,
      icon: "fas fa-language",
      description:
        "Native language with excellent reading, writing, and speaking skills.",
    },
    {
      name: "English",
      level: "Fluent",
      proficiency: 90,
      icon: "fas fa-language",
      description:
        "Professional working proficiency in reading, writing, and speaking.",
    },
  ],

  // Contact info
  contact: {
    email: "yassintoumeh2002@gmail.com",
    phone: "+963 959 620 719",
    location: "Damascus, Syria",
  },

  // Social links
  social: [
    {
      name: "GitHub",
      url: "https://github.com/yassino15",
      icon: "fa-brands fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yassin-tomeh",
      icon: "fa-brands fa-linkedin",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/15fofrTrEt",
      icon: "fa-brands fa-facebook",
    },
  ],

  // Education
  educations: [
    {
      degree: "Middle school",
      institution: "Aldawha private school",
      location: "Sharja, UAE",
      period: "2015 - 2017",
      description:
        "Engaged in a broad curriculum covering subjects such as mathematics, science, history, and literature. Actively participated in sports and various cultural activities, developing teamwork and leadership skills.",
      logo: dawha,
    },
    {
      degree: "High school",
      institution: "Bunat al-ajial private school",
      location: "Damascus, Syria",
      period: "2017 - 2020",
      description:
        "Completed a comprehensive academic program with a strong emphasis on science and mathematics. Engaged in various school events and projects that enhanced teamwork and communication skills.",
      logo: bba,
    },
    {
      degree: "Bachelors Degree",
      institution: "Arab International University",
      location: "Damascus, Syria",
      period: "2020 - 2025",
      description:
        "Pursued a Bachelor's Degree in Information Technology at AIU with a specialization in Software Development. Developed strong skills in programming, system design, and problem-solving. Participated in projects that enhanced technical expertise, teamwork, and analytical thinking.",
      logo: AIU,
    },
  ],

  // Skills
  // programming: ["JavaScript", "HTML", "CSS", "Vue.js", "React", "Node.js"],
  // tools: ["Git", "Webpack", "Docker", "Figma"],
  // languages: ["English (Fluent)", "Arabic (Native)"],
  skills: [
    {
      name: "HTML",
      icon: "fab fa-html5",
    },
    {
      name: "CSS",
      icon: "fab fa-css3-alt",
    },
    {
      name: "JavaScript",
      icon: "fab fa-js",
    },
    {
      name: "Vue.js",
      icon: "fab fa-vuejs",
    },
    {
      name: "Vuex",
      icon: "fab fa-vuejs",
    },
    {
      name: "Pinia",
      icon: "fab fa-vuejs",
    },
    {
      name: "Nuxt.js",
      icon: "fab fa-vuejs",
    },
    {
      name: "React.js",
      icon: "fab fa-react",
    },
    {
      name: "Bootstrap",
      icon: "fab fa-bootstrap",
    },
    {
      name: "Git",
      icon: "fab fa-git-alt",
    },
    {
      name: "Vuetify",
      icon: "fab fa-vuejs",
    },
    {
      name: "Teamwork",
      icon: "fas fa-users",
    },
  ],

  // Experience
  experience: [
    {
      title: "Frontend Developer",
      company: "Company Name",
      location: "City, Country",
      period: "Jan 2021 - Present",
      description:
        "Developed and maintained responsive web applications using Vue.js.",
    },
  ],

  // Portfolio projects
  portfolio: [
    {
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce platform built with Vue.js and Node.js.",
      // image: require("@/assets/images/projects/project1.jpg"),
      link: "https://project-url.com",
      technologies: ["Vue.js", "Node.js", "MongoDB"],
    },
  ],

  // Achievements
  achievements: [
    {
      title: "Best Web Developer Award",
      date: "2022",
      description:
        "Awarded for outstanding contributions to web development projects.",
    },
  ],
};
