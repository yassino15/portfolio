// src/config/profile.js
import profileImage from "@/assets/images/profile.jpeg";
import dawha from "@/assets/images/dawha.jpeg";
import AIU from "@/assets/images/AIU.jpg";
import bba from "@/assets/images/baa.png";
import sharfto from "@/assets/images/logo.png";
import haf from "@/assets/images/haf.png";
import mut from "@/assets/images/mut.png";
import cm from "@/assets/images/cm.png";
export default {
  // Basic info
  name: "Yassin Tomeh",
  title: "Frontend Developer",
  image: profileImage,
  bio: "Front-End Web Developer, My toolkit includes proficiency in Vue.js and Nuxt.js frameworks, pinia for state management, axios for handling API's, sass and bootstrap, and GitLab.",
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
    { name: "HTML", icon: "simple-icons:html5", color: "#e34f26" },
    { name: "CSS", icon: "simple-icons:css3", color: "#1572b6" },
    { name: "JavaScript", icon: "simple-icons:javascript", color: "#f7df1e" },

    { name: "Vue.js", icon: "simple-icons:vuedotjs", color: "#42b883" },
    { name: "Vuex", icon: "simple-icons:vuedotjs", color: "#a071ff" },
    { name: "Pinia", icon: "simple-icons:pinia", color: "#ffd859" },
    { name: "Nuxt.js", icon: "simple-icons:nuxtdotjs", color: "#00dc82" },
    { name: "Vuetify", icon: "simple-icons:vuetify", color: "#1867c0" },

    { name: "React.js", icon: "simple-icons:react", color: "#00d8ff" },
    { name: "Next.js", icon: "simple-icons:nextdotjs", color: "#000000" },

    { name: "TypeScript", icon: "simple-icons:typescript", color: "#3178c6" },
    { name: "Tailwind", icon: "simple-icons:tailwindcss", color: "#38b2ac" },

    { name: "Bootstrap", icon: "simple-icons:bootstrap", color: "#7952b3" },
    { name: "Git", icon: "simple-icons:git", color: "#f05032" },

    { name: "Team work", icon: "mdi:account-group", color: "#d5c022" },
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
      title: "sharfto Dashboard",
      image: sharfto,
      link: "https://company.sh.sy",
    },
    {
      title: "Mutakamela library",
      image: mut,
      link: "https://web.mutakamela.org",
    },
    {
      title: "Connect Media",
      image: cm,
      link: "https://drive.google.com/file/d/1SyA9GVLBx8fyR-N1itQKwWBufNDoLC6x/view?usp=sharing",
    },
    {
      title: "HAFILTIE dashboard",
      image: haf,
      link: "https://drive.google.com/file/d/1o80SOViHmZ6nCFl2Yw64rTmBv7PlUDmb/view",
    },
    {
      title: "Sharfto sub domain",
      image: sharfto,
      link: "https://junina.sh.sy/",
    },
    {
      title: "Sharfto E-commerce",
      image: sharfto,
      link: "https://sh.sy/",
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
