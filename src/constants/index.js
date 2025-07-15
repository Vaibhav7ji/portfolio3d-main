
import {

    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    
    mui,
    summiz,

    threads,




} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
      title: "Computer Science & Engineering Student",
      company_name: "Chandigarh University",
      icon: threads, // Make sure to import a relevant university icon
      iconBg: "#accbe1",
      date: "Aug 2021 - Present",
      points: [
        "Pursuing a Bachelor's degree in Computer Science & Engineering with a focus on full-stack web development, system design, and data science.",
        "Completed coursework in Data Structures, Algorithms, Operating Systems, Computer Networks, and Software Engineering.",
        "Actively participated in coding contests, hackathons, and open-source contributions.",
        "Built multiple portfolio-level projects including an event manager app, a learning platform, and a personalized skincare tool."
      ]
    },
    {
      title: "Frontend Development Intern",
      company_name: "Chichat1, Mohali",
      icon: mui, // Import or use a placeholder icon
      iconBg: "#fbc3bc",
      date: "June 2024 - Aug 2024",
      points: [
        "Worked on UI/UX design using Figma, Adobe XD, and Canva for multiple client projects.",
        "Created responsive layouts and visual assets using Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro).",
        "Collaborated with the development team to enhance product aesthetics and user engagement through design improvements."
      ]
    },
    {
      title: "Project Showcase",
      company_name: "Personal Portfolio",
      icon: summiz, // Import or use a custom icon representing personal projects
      iconBg: "#b7e4c7",
      date: "2024 - Present",
      points: [
        "Developed 'Event Manager' — a web app to streamline event planning and RSVP tracking with real-time updates.",
        "Created 'Codecaze' — an interactive learning platform offering coding tutorials, challenges, and performance tracking.",
        "Launched 'Baytalhusn' — a cosmetics brand platform featuring a personalized skincare quiz and dynamic product recommendations.",
        "Focused on responsive design, 3D model integrations, Tailwind CSS for styling, and smooth UX transitions."
      ]
    }
  ];
  

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Vaibhav7ji',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vaibhav-jain-a93b04230'
    }
];

