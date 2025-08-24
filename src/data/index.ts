import * as Icon from "../assets/icons";
import * as Images from "../assets/images";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const skills = [
  {
    name: "Python",
    icon: Icon.pythonPrimary,
  },
  {
    name: "Java",
    icon: Icon.javaPrimary,
  },
  {
    name: "C Programming",
    icon: Icon.cPrimary,
  },
  {
    name: "Javascript",
    icon: Icon.javascriptPrimary,
  },
  {
    name: "HTML",
    icon: Icon.htmlPrimary,
  },
  {
    name: "CSS",
    icon: Icon.cssPrimary,
  },
  {
    name: "React JS",
    icon: Icon.reactPrimary,
  },
  {
    name: "Typescript JS",
    icon: Icon.typescriptPrimary,
  },
  {
    name: "Tailwind CSS",
    icon: Icon.tailwindPrimary,
  },
  {
    name: "Node JS",
    icon: Icon.nodePrimary,
  },
  {
    name: "SQL",
    icon: Icon.sqlPrimary,
  },
  {
    name: "MongoDB",
    icon: Icon.mongodbPrimary,
  },
  {
    name: "Git",
    icon: Icon.gitPrimary,
  },
  {
    name: "Figma",
    icon: Icon.figmaPrimary,
  },
  {
    name: "Excel",
    icon: Icon.excelPrimary,
  },
];

export const socials = [
  {
    name: "LinkedIn",
    icon: Icon.linkedinBlack,
    href: "https://www.linkedin.com/in/btang22/",
  },
  {
    name: "Github",
    icon: Icon.githubBlack,
    href: "https://github.com/Benjam1n-Tang",
  },
  {
    name: "Twitter",
    icon: Icon.twitterBlack,
    href: "https://x.com/BenjaminTa1493",
  },
  {
    name: "Instagram",
    icon: Icon.instagramBlack,
    href: "https://www.instagram.com/benjamintang22/",
  },
];

export const projects = [
  {
    title: "Phreddit",
    description:
      "Phreddit is a mock Reddit application built with React for the frontend, Node.js for the backend, and MongoDB for data storage. This was built for my software development (CSE 316) course. ",
    date: "May 13, 2024",
    image: "",
    tags: ["React JS", "Node JS", "MongoDB"],
    repo: "https://github.com/Benjam1n-Tang/Phreddit",
    link: "",
  },
  {
    title: "Chess AI",
    description:
      "This chess app, built with TypeScript, features a custom-designed UI and allows players to compete against a friend or an AI-powered bot. It showcases skills in UI development, game logic, and AI integration. ",
    date: "Janurary 24, 2025",
    image: "",
    tags: ["Typescript JS"],
    repo: "https://github.com/Benjam1n-Tang/TypescriptChess",
    link: "",
  },
  {
    title: "Virtual Mouse",
    description:
      "Virtual Mouse enables users to control mouse movements and perform left and right clicks using intuitive finger gestures. It demonstrates gesture recognition and seamless interaction with the system cursor. ",
    date: "June 9, 2025",
    image: Images.virtualMouse,
    tags: ["Python"],
    repo: "https://github.com/Benjam1n-Tang/VirtualMouse",
    link: "",
  },
  {
    title: "Zoom Attendance Tracker",
    description:
      "A Python script that tracks Zoom meeting attendance by identifying who is present and who is absent. It automates attendance reporting to simplify participant monitoring.",
    date: "June 11, 2025",
    image: Images.attendanceTracker,
    tags: ["Python"],
    repo: "https://github.com/Benjam1n-Tang/AttendanceTracker",
    link: "",
  },
  {
    title: "Amazon Price Tracker",
    description:
      "A Python script that lets users save Amazon product links and notifies them when a sale or price drop occurs. It automates price monitoring to help users find the best deals.",
    date: "June 14, 2025",
    image: Images.priceTracker,
    tags: ["Python"],
    repo: "https://github.com/Benjam1n-Tang/AmazonPriceTracker",
    link: "",
  },

  {
    title: "AI Chat Bot",
    description:
      "A simple Python script implementing an AI chatbot using OpenAI’s API. It enables interactive, conversational experiences with natural language processing. ",
    date: "June 15, 2025",
    image: Images.chatBot,
    tags: ["Python"],
    repo: "https://github.com/Benjam1n-Tang/AIChatBot",
    link: "",
  },
  {
    title: "Nike Website",
    description:
      "A TypeScript-based frontend project that replicates the design and user experience of the official Nike website. It showcases skills in responsive UI development and modern web design. ",
    date: "June 18, 2025",
    image: Images.nike,
    tags: ["Typescript JS", "Tailwind CSS"],
    repo: "https://github.com/Benjam1n-Tang/MockNikeWebsite",
    link: "https://benjam1n-tang.github.io/MockNikeWebsite/",
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal developer portfolio built with React and TypeScript to showcase projects, skills, and experience. It features responsive design, smooth navigation, and professional presentation for potential collaborators or employers. ",
    date: "July 8, 2025",
    image: Images.portfolio,
    tags: ["Typescript JS", "Tailwind CSS"],
    repo: "https://github.com/Benjam1n-Tang/PersonalPortfolio",
    link: "https://benjam1n-tang.github.io/PersonalPortfolio/",
  },
];
