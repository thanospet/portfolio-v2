import { Material } from "three";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mui,
  meta,
  starbucks,
  tesla,
  tripguide,
  threejs,
  boss,
  ihu,
  bse,
  pwd,
  snowgame,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React",
    icon: web,
    skill: 4,
  },
  {
    title: "Javascript",
    icon: mobile,
    skill: 2,
  },
  {
    title: "CSS",
    icon: backend,
    skill: 4,
  },
  {
    title: "GitHub",
    icon: creator,
    skill: 3,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "BOSS INFO",
    icon: boss,
    iconBg: "white",
    iconSize: "",
    date: "November 2022 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with team partners and other developers to create high-quality products.",
      "Implementing fully responsive designs.",
    ],
  },
  {
    title: "Computer Science Gradute",
    company_name: "International Hellenic University",
    icon: ihu,
    iconBg: "#383E56",
    date: "October 2017 - October 2022",
    points: [
      "Learned the basics almost in every field of computer science, from hardware to software.",
      "Member of a team specialized in machine learning and data analysis.",
    ],
  },
  {
    title: "Machine Learning Thesis",
    company_name: "International Hellenic University",
    icon: ihu,
    iconBg: "#383E56",
    date: "November 2021 - August 2022",
    points: [
      "Drone detection using Computer Vision and Machine Learning.",
      "A 70 page study comparing yolov5, yolov6, yolov7 in drone detection.",
      "Studied and cited countless studies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Business Solutions Eats",
    description:
      "Web-based application that simulates the functions of any online-delivery app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bse,
    source_code_link: "https://github.com/",
  },
  {
    name: "Snowball Game",
    description:
      "A code-along game from WebDevCody. I worked on it and added many more features like cheat codes, better collision, team options and more! Great Javascript practice.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "agora.io",
        color: "pink-text-gradient",
      },
    ],
    image: snowgame,
    source_code_link: "https://github.com/",
  },
  {
    name: "Password Strength Meter",
    description:
      "Something i made as a feature for a big project in my internship. Fully dynamic and customizable.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pwd,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
