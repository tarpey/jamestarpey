const projects = [
  {
    id: "avon-tennis",
    name: "Avon Tennis",
    description: [
      "WordPress website with custom theme and plugins.",
      "I started working with Avon Tennis in 2017. The website continues to evolve and now has integrations with payment and mapping services.",
      "I'm working on a separate native mobile app to integrate with WordPress as a headless CMS.",
    ],
    url: "https://avontennis.org.uk",
    figma:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FY7979L9P92OPodIjtExVDTIV%2FWireframes-v2%3Fnode-id%3D1%253A2",
    tags: ["PHP", "WordPress", "CSS Grid"],
  },
  {
    id: "teamsheet",
    name: "Teamsheet",
    description: [
      "Mobile app for scheduling five-a-side football matches.",
      "I'm using React Native to build an app that can hopefully end those long and difficult to follow WhatsApp Groups.",
      "Users create leagues and teams, then invite others to opt in or out of matches. The players on each team can be assigned automatically.",
      "Push notifications will be sent if someone drops out so that others players can take their space.",
    ],
    url: "https://teamsheet.app",
    figma:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FMA1TdS8Y35dANDNG4pPa1S%2FTeamsheet",
    tags: ["React Native", "Firebase"],
  },
  {
    id: "10x10",
    name: "10X10",
    description: [
      "Mathematical puzzle pattern recognition game.",
      "To sharpen my skills, I like to try and design and build something in a day.",
      "The aim is to complete the grid of 100 squares using two move types.",
      "1. If the next number is placed vertically or horizontally, then it must be placed exactly three squares away from the previous number - there must be a two square gap between the numbers.",
      "2. If the next number is placed diagonally, then it must be placed exactly two squares away from the previous number - there must be a one square gap between the numbers.",
      "Local storage is used to track your highest score. Mine is around 65.",
    ],
    url: "https://10x10-grid.vercel.app/",
    github: "https://github.com/tarpey/10x10",
    tags: ["React", "CSS Grid"],
  },
  {
    id: "bcc-gatsby",
    name: "BCC Gatsby",
    description: ["Bristol City Council website built using Gatsby."],
    url: "https://bcc.jamestarpey.com",
    github: "https://github.com/tarpey/bcc-gatsby",
    tags: ["React", "Gatsby"],
  },
  {
    id: "cards",
    name: "Cards",
    description: [
      "Card battle game for up to four players.",
      "I was looking for an excuse to build a game like UNO with Firebase.",
      "The first player starts a new game and shares the room code with others to join. Players then take it in turns to draw cards, some of which deal damage to the next player.",
      "Special cards are used to guarantee damage, protect and heal yourself, or reverse the direction of play. The last player standing wins.",
      "There are six different themes to choose from - animals, dogs, farming, landmarks, monsters and sea life.",
    ],
    url: "https://cards.jamestarpey.com",
    github: "https://github.com/tarpey/cards",
    tags: ["React", "Firebase"],
  },

  {
    id: "wedding",
    name: "Wedding",
    description: [
      "Website for invited wedding guests to RSVP.",
      "I typically use Firebase as a NoSQL database for my projects. For this I ventured further into Cloud Functions and Hosting.",
      "I wanted a slick user experience for our wedding guests, but I also wanted to simplify our lives by automating the background data processing.",
      "We included codes on printed invitations which gave each party access to a personalised webpage.",
      "Every time a party responds a cloud function triggers to synchronise the data to a spreadsheet and send us both an email notification.",
      "This meant we could just glance at a spreadsheet for numbers and filter the data for specific information, like the total number of adults or the number of guests with dietary requirements.",
    ],
    tags: ["React", "Firebase"],
  },
  {
    id: "personal-site",
    name: "Personal Site",
    description: [
      "This website - a place to share my projects and resume.",
      "My personal website has nearly always been static HTML and CSS.",
      "For this iteration I wanted to use Next.js with Typescript.",
    ],
    url: "https://jamestarpey.com",
    tags: ["Next.js", "Typescript", "CSS Grid"],
  },
  {
    id: "rocket-racer",
    name: "Rocket Racer",
    description: [
      "Race rockets in space, or just across the screen for fun.",
      "Remember those horse racing games at the fair?",
      "This project was an excuse to practice React and Firebase.",
      "Add two or more racers and watch as they battle it out for total glory.",
    ],
    url: "https://rocket-racer.vercel.app",
    github: "https://github.com/tarpey/rocketracer",
    tags: ["React", "Firebase"],
  },
  {
    id: "thornbury-ndp",
    name: "Thornbury NDP",
    description: [
      "Public consultation on the future of Thornbury.",
      "The draft Neighbourhood Plan was completed and signed off by Thornbury Town Council during October 2020.",
    ],
    url: "https://thornburyplan.co.uk",
    tags: ["PHP", "WordPress", "Bootstrap"],
  },
  {
    id: "south-glos-council",
    name: "South Glos Council",
    description: ["Website for South Gloucestershire Council."],
    url: "https://www.southglos.gov.uk",
    tags: ["PHP", "WordPress", "Bootstrap"],
  },
  {
    id: "edocs",
    name: "eDocs",
    description: [
      "Publish accessible and mobile optimised documents.",
      "The website covers safeguarding for both adults and children.",
    ],
    url: "https://edocs.southglos.gov.uk",
    tags: ["PHP", "WordPress", "Bootstrap"],
  },
  {
    id: "safeguarding",
    name: "Safeguarding",
    description: [
      "Website for South Gloucestershire Safeguarding.",
      "The website covers safeguarding for both adults and children.",
    ],
    url: "https://sites.southglos.gov.uk/safeguarding",
    tags: ["PHP", "WordPress", "Bootstrap"],
  },
  {
    id: "war-memorials",
    name: "War Memorials",
    description: [
      "War memorials across South Gloucestershire.",
      "The website has over 1500 names of the local people who lost their lives in both World Wars. Their details are recorded on more than 62 war memorials across South Gloucestershire.",
    ],
    url: "https://sites.southglos.gov.uk/war-memorials",
    tags: ["PHP", "WordPress", "Bootstrap"],
  },
  {
    id: "our-area-our-future",
    name: "Our Area Our Future",
    description: [
      "South Gloucestershire Partnership website.",
      "The Partnership is a non-statutory body made up of public, private, community and voluntary organisations which aims to work together to promote the economic, social and environmental well-being of the people in South Gloucestershire.",
    ],
    url: "https://sites.southglos.gov.uk/oaof",
    tags: ["PHP", "WordPress", "Bootstrap"],
  },
];

const getProject = (project: string) => {
  return projects.filter((p) => {
    return p.id === project;
  })[0];
};

export { projects, getProject };
