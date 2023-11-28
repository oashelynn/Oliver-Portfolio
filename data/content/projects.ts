import { kebabCase } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Books Intro",
    desc: "With HTML, CSS, JavaScript, Bootstrap, and jQuery, I created 'Books Intro' to make your bookworm heart skip a byte!",
    img: "/static/projects/books.png",
    link: "https://book-new.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
  },
  {
    id: 1,
    title: "Maple",
    desc: "Peep into Maple where React, NextJS, NodeJS, and Scss are the real secret syrup!",
    img: "/static/projects/maple.png",
    link: "https://heatrow.vercel.app/",
    tags: ["React", "NextJS", "NodeJS", "Scss"],
  },
  {
    id: 2,
    title: "E-Commerce Template",
    desc: "Let's just say, E-Commerce Template is like an online shopping spree gone code wild!",
    img: "/static/projects/e-commerce-template.png",
    link: "https://alpine-html-bootstrap.vercel.app/",
    tags: ["Bootstrap", "SASS", "JSON"],
  },
  {
    id: 3,
    title: "EtherChannel",
    desc: "On EtherChannel, React, TailwindCSS, and Webpack make bits and bytes dance better than the Nutcracker ballet!",
    img: "/static/projects/etherChannel.png",
    link: "https://ether-channels-business.vercel.app/",
    tags: ["React", "TailwindCSS", "Webpack"],
  },
  {
    id: 4,
    title: "Casper",
    desc: "Coding up Casper was like Halloween - full of HTML, CSS, JavaScript, Bootstrap, jQuery treats with no tricks!",
    img: "/static/projects/casper.png",
    link: "https://casper-new.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
  },
  {
    id: 5,
    title: "Real Thread",
    desc: "Stitched together with HTML, CSS, JavaScript, Bootstrap, and jQuery, Real Thread is the real deal!",
    img: "/static/projects/realthread.png",
    link: "https://realthread-new.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
  },
  {
    id: 6,
    title: "Molla",
    desc: "To build Molla with React, MUI, and Firebase, I had to play role of a digital construction worker!",
    img: "/static/projects/molla.png",
    link: "https://molla-ecommerce-react.miladsdgh.ir/",
    tags: ["React", "MUI", "Firebase"],
  },
  {
    id: 7,
    title: "Budbo",
    desc: "Budbo, crafted with React, NextJS, and TailwindCSS - because being ordinary is too mainstream!",
    img: "/static/projects/budbo.png",
    link: "https://next-gsap-indol.vercel.app/",
    tags: ["React", "NextJS", "TailwindCSS", "GSAP"],
  },
  {
    id: 8,
    title: "OpenAI Landing Page",
    desc: "In OpenAI, React spun a web so interesting, even spiders got jealous!",
    img: "/static/projects/openai.png",
    link: "https://open-ai-landingpage.netlify.app/",
    tags: ["React", "CSS"],
  },
  {
    id: 9,
    title: "SGHEDA",
    desc: "SGHEDA is where React, NextJS, TailwindCSS, and Javascript come together for a digital party!",
    img: "/static/projects/sgheda.png",
    link: "https://slinkyghxdesign.com/",
    tags: ["React", "NextJS", "TailwindCSS", "Javascript"],
  },
  {
    id: 10,
    title: "MyGPT",
    desc: "Strap onto your seats, MyGPT is a coaster-ride of codes with React, NextJS, TypeScript, TailwindCSS, Prisma,and PostgreSQL!",
    img: "/static/projects/mygpt.png",
    link: "https://mygpt.fi",
    tags: ["React", "NextJS", "TypeScript", "TailwindCSS", "Prisma", "tRPC", "PostgreSQL"],
  },
  {
    id: 11,
    title: "WalletGPT",
    desc: "WalletGPT isn't just a digital wallet, powered by Angular, TailwindCSS, and Firebase, it’s where finance and fun rendezvous!",
    img: "/static/projects/walletgpt.png",
    link: "https://walletgpt.fi/",
    tags: ["Angular", "TailwindCSS", "Firebase"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects