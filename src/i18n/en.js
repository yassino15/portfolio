// src/i18n/en.js
import dawha from "@/assets/images/dawha.jpeg";
import AIU from "@/assets/images/AIU.jpg";
import bba from "@/assets/images/baa.png";
import sharfto from "@/assets/images/logo.png";
export default {
  sidebar: {
    name: "Yassin Tomeh",
    title: "Frontend Developer",
    bio: "Front-End Web Developer, My toolkit includes proficiency in Vue.js and Nuxt.js frameworks, pinia for stat managements, axios for handling API's, sass and bootstrap, and gitlab.",
    sections: {
      intro: "About Me",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      experience: "Experience",
      portfolio: "Portfolio",
      achievements: "Achievements",
      contact: "Contact",
    },
  },
  intro: {
    greeting: "Welcome to my",
    greetingg: "Resume!",
    bio: "I'm a passionate frontend developer specializing in Vue.js and modern JavaScript frameworks. With a strong focus on creating responsive, user-friendly interfaces, I strive to build applications that are both functional and aesthetically pleasing.",
    contactMe: "Contact Me",
    viewWork: "View My Work",
  },
  educations: {
    title: "Education",
    items: [
      {
        id: 1,
        degree: "Middle school",
        institution: "Aldawha private school",
        location: "Sharja, UAE",
        period: "2015 - 2017",
        description:
          "Engaged in a broad curriculum covering subjects such as mathematics, science, history, and literature. Actively participated in sports and various cultural activities, developing teamwork and leadership skills.",
        logo: dawha,
      },
      {
        id: 2,
        degree: "High school",
        institution: "Bunat al-ajial private school",
        location: "Damascus, Syria",
        period: "2017 - 2020",
        description:
          "Completed a comprehensive academic program with a strong emphasis on science and mathematics. Engaged in various school events and projects that enhanced teamwork and communication skills.",
        logo: bba,
      },
      {
        id: 3,
        degree: "Bachelors Degree",
        institution: "Arab International University",
        location: "Damascus, Syria",
        period: "2020 - 2025",
        description:
          "Pursued a Bachelor's Degree in Information Technology at AIU with a specialization in Software Development. Developed strong skills in programming, system design, and problem-solving. Participated in projects that enhanced technical expertise, teamwork, and analytical thinking.",
        logo: AIU,
      },
    ],
  },

  skills: {
    title: "Skills",
    description:
      "Here are the technical skills I have acquired over the years, which enable me to build high-quality web applications and provide valuable services.",
    programming: "Programming Languages",
    tools: "Tools & Technologies",
    languages: "Languages",
  },
  languages: {
    title: "Languages",
    description: "Languages I speak fluently and use in my professional work.",
    native: "Native",
    fluent: "Fluent",
    professional: "Professional",
    intermediate: "Intermediate",
    basic: "Basic",
  },
  experience: {
    title: "Experience",
    items: [
      {
        degree: "Frontend Web Developer",
        institution: "Sharfto",
        description:
          "Designed and developed interactive web applications using a modern front-end framework, ensuring a seamless and intuitive user experience. Built a scalable front-end architecture that enhanced website performance. Optimized site efficiency by minimizing requests and improving page speed.",
        tags: [
          "Vue.js",
          "Nuxt.js",
          "vuex",
          "Pinia",
          "Sass",
          "Bootstrap",
          "Gitlab",
        ],
        period: "2023 - 2024",
        logo: sharfto,
      },
    ],
  },
  portfolio: {
    title: "Portfolio",
    viewProject: "View Project",
    technologies: "Technologies",
  },
  achievements: {
    title: "Achievements",
    date: "Date",
  },
  contact: {
    title: "Contact",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    getInTouch: "Get In Touch",
    location: "Location",
    phone: "Phone",
  },
};
