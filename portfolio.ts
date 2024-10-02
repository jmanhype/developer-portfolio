import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Straughter Guthrie",
  title: "Hi all, I'm Straughter",
  description:
    "Versatile and self-driven professional with extensive experience in AI architecture and full-stack software development. Expert in creating RAG pipelines, generative AI applications, and ETL pipelines for SMEs.",
  resumeLink: "https://bit.ly/4etYpMV",
};

export const openSource = {
  githubUserName: "jmanhype",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:straughterguthrie@quickcolbert.com",
  linkedin: "https://www.linkedin.com/in/straughter-guthrie-98ba0535/",
  github: "https://github.com/jmanhype",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  twitter: 'https://twitter.com/StraughterG',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "A PROFOUND DEVELOPER DEDICATED TO LEVERAGING AI AND FULL-STACK TECHNOLOGIES",
  data: [
    {
      title: "Programming & Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Develop highly interactive front-end/user interfaces for your web and mobile applications"),
        emoji("⚡ Integration of third-party services such as AWS/Azure"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "65", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Southern Illinois University",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2015 - April 2019",
    desc: "Focused on Advanced Machine Learning, Systems Architecture, Network Security, Data Structures and Algorithms.",
    grade: "3.7/4",
    descBullets: [
      "Advanced Machine Learning",
      "Systems Architecture",
      "Network Security",
      "Data Structures and Algorithms",
    ],
  },
  {
    schoolName: "Lewis and Clark Community College, USA",
    subHeader: "Associate in Computer Information Systems",
    duration: "2013 - 2015",
    grade: "3.8/4",
    desc: "Courses included Introduction to Programming, Database Management Systems, Web Development Fundamentals, Network Fundamentals.",
    descBullets: [
      "Introduction to Programming",
      "Database Management Systems",
      "Web Development Fundamentals",
      "Network Fundamentals",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Product Manager",
    company: "Plastic Minds",
    companyLogo: "/img/icons/common/plasticmind.png",
    date: "Jan 2024 - Present",
    desc: "Leading product development teams in the creation of AI-driven tools and applications, focusing on user-centered design and market fit.",
  },
  {
    role: "Solutions Architect",
    company: "Namastex Labs",
    companyLogo: "/img/icons/common/namastex.png",
    date: "Jan 2022 - Present",
    desc: "Designed scalable solutions integrating cloud services, AI, and full-stack development across various platforms to drive business solutions and innovation.",
  },
  {
    role: "Data Engineer",
    company: "Agora",
    companyLogo: "/img/icons/common/agora.png",
    date: "Jan 2023 - Feb 2024",
    desc: "Developed and optimized ETL pipelines for SMEs, enhancing data accessibility and integrity, and supporting advanced data analysis capabilities.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "dspy-self-discover-framework",
    desc: "Extended and improved an existing self-discovery framework using DSPy, FastAPI, and the Groq platform, focusing on structured reasoning and dynamic code execution.",
    github: "https://github.com/jmanhype/dspy-self-discover-framework",
    link: "https://github.com/jmanhype/dspy-self-discover-framework",
  },
  {
    name: "Storm",
    desc: "Created a sophisticated content generation and question-answering system integrating DSPy framework, Groq, GPT-4, Weaviate, and Zep.",
    link: "https://github.com/jmanhype/Storm",
  },
  {
    name: "Proto",
    desc: "Built an end-to-end conversational AI system integrating STT, TTS, VAD, and LLM components for real-time audio processing and interactive conversations.",
    link: "https://github.com/jmanhype/Proto",
  },
  {
    name: "WebEnhancer",
    desc: "Designed a web scraping and automation tool using Selenium and BeautifulSoup, integrating AI to improve web interaction accuracy.",
    link: "https://github.com/jmanhype/WebEnhancer",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Cezar Vasconcelos",
    role: "CTO at Namastex Labs",
    feedback:
      "Straughter has been a key player in our team, architecting scalable solutions that integrate seamlessly across diverse platforms. His expertise in AI and cloud technologies has significantly driven our projects forward, making critical improvements in both efficiency and innovation.",
  },
  {
    name: "Phillipe Kung",
    role: "Director of Technology at Plastic Minds",
    feedback:
      "Straughter is a visionary in AI-driven application development. His leadership and deep understanding of full-stack technologies have been fundamental in developing cutting-edge products that position our company at the forefront of technological innovation. His ability to lead and inspire our development teams has been remarkable."
  }
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Straughter Guthrie",
  description: "Versatile and self-driven professional with extensive experience in AI architecture and full-stack software development.",
  author: "Straughter Guthrie",
  image: "https://avatars.githubusercontent.com/u/jmanhype?v=4", // Replace 'yourGithubProfileID' with actual GitHub profile ID if different
  url: "https://developer-portfolio-yourdomain.com", // Update with actual portfolio URL
  keywords: [
    "Straughter Guthrie",
    "Full-Stack Developer",
    "AI Architect",
    "Data Engineer",
    "Solutions Architect",
    "Product Manager",
  ],
};

