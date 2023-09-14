import HeitorIMG from "./me.jpg";
import XprimeProject from './assets/images/xprime.png'
import BroadfarmaProject from './assets/images/broadfarma.png'
import AgroibiProject from './assets/images/agroibi.png'

const logotext = "HeitorTheWizard";

const meta = {
  title: "Heitor The Wizard",
  description: "I'm Heitor, a technologist and cybersecurity enthuist.",
};

const introdata = {
  title: "Hi, I'm Heitor The Wizard",
  animated: {
    first: "Ethical Hacker",
    second: "Software Engineer",
    third: "Malware Developer",
    fourth: "Malware Analyst",
    fifth: "Visionary",
    // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
  },
  description:
    "Dedicated technology enthusiast with an insatiable curiosity for unraveling the complexities of our digital world.",
  your_img_url: HeitorIMG,
};

const dataabout = {
  title: "Who is Heitor?",
  aboutme:
    `Heitor is a modern wizard, weaving spells with zeros and ones! In 2020, captivated by the endless possibilities of computer programming, he embarked on a journey into the world of software development. With a laptop gifted to him during the pandemic, Heitor discovered the magic of coding—a realm where creativity meets science. He's a proactive and ambitious individual who follows the Stoic philosophy, believing in the power of self-improvement to make the world better. He views computers as magical tools, enabling us to create, connect, and transform lives. In the digital realm, Heitor sees himself as one of the wizards, crafting innovative solutions and shaping new worlds.`,
};
const worktimeline = [
  {
    jobtitle: "Freelancer",
    where: "Heitor The Wizard",
    date: "2023",
  },
  {
    jobtitle: "English Teacher",
    where: "Mundo HB",
    date: "2019",
  },
];

const skills = [
  {
    name: "Python",
  },

  {
    name: "C",
  },

  {
    name: "JavaScript",
  },

  {
    name: "Typescript",
  },

  {
    name: "Bash",
  },

  {
    name: "Linux",
  },

  {
    name: "Powershell",
  },

  {
    name: "Reverse Engineering",
  },

  {
    name: "Web-Exploitation",
  },

  {
    name: "Network Exploitation",
  },
];

const dataportfolio = [
  {
    img: XprimeProject,
    description: "A website that is focused on health and beauty products.",
    link: "https://github.com/xprimelife/xprime-life",
  },
  {
    img: BroadfarmaProject,
    description: "A drugstore website.",
    link: "https://github.com/broadfarma/broadfarma",
  },
  {
    img: AgroibiProject,
    description: "A agricultural marketplace website.",
    link: "https://github.com/heitorthewizard/agroibi-mvp",
  },
];

const contactConfig = {
  YOUR_EMAIL: "heitorthewizard@gmail.com",
  description: "Looking forward to hearing from you!",
//   creat an emailjs.com account
//   check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_p7gklxm",
  YOUR_TEMPLATE_ID: "template_hz5tqmk",
  YOUR_USER_ID: "ViSYxgX6naeZd_MPm", // USER_ID (PUBLIC_KEY)
};

const socialprofils = {
  github: "https://github.com/heitorthewizard",
  linkedin: "https://linkedin.com/heitorthewizard",
};
export { meta, dataabout, dataportfolio, worktimeline, skills, introdata, contactConfig, socialprofils, logotext };
