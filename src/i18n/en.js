// src/i18n/en.js
import dawha from "@/assets/images/dawha.jpeg";
import AIU from "@/assets/images/AIU.jpg";
import bba from "@/assets/images/baa.png";
import sharfto from "@/assets/images/logo.png";
export default {
  sidebar: {
    name: "Yassin Tomeh",
    title: "Frontend Developer",
    bio: "Passionate Front-End developer crafting responsive, high-performance web apps.",
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
    greeting: "Hi, my name is",
    greetingg: "Yassin Tomeh",
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
    items: [
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
    viewProject: "view Project",
    description:
      "A collection of my recent projects, showcasing my skills in creating responsive and dynamic web applications.",
  },
  achievements: {
    title: "Achievements",
    date: "Date",
  },
  contact: {
    title: "Contact",
    description:
      "Have a question or want to work together? I'd love to hear from you!",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourSubject: "Subject",
    yourMessage: "Your Message",
    success: "Your message has been sent successfully!",
    error:
      "An error occurred while sending your message. Please try again later.",
  },
};
