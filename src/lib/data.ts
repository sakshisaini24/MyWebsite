export const personalInfo = {
  name: "Sakshi Saini",
  tagline:
    "A Software Engineer & QA specialist by day, and an avid solo traveler & social science enthusiast by heart. As they say, 'Jack of all trades, master of none, but oftentimes better than a master of one.'",
  github: "https://github.com/sakshisaini24",
  linkedin: "https://www.linkedin.com/in/sakshisaini2482/",
  instagram: "https://www.instagram.com/sakshisaini_9/",
  location: "Jalandhar, India",
};

export type Project = {
  title: string;
  description: string;
  tags: { label: string; color: "peach" | "rose" | "sage" | "lavender" }[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "RiskRadar AI",
    description:
      "Escalation intelligence for insurance claims — predicting when a dispute will escalate using ML, vector search, and citation-grounded GenAI briefs.",
    tags: [
      { label: "Python", color: "sage" },
      { label: "GenAI", color: "lavender" },
      { label: "ML", color: "peach" },
      { label: "Vector DB", color: "rose" },
      { label: "RAG", color: "lavender" },
    ],
    githubUrl: "https://github.com/sakshisaini24/RiskRadar",
  },
  {
    title: "Corporate Time Manager Tool",
    description:
      "A Salesforce-integrated timesheet manager with GenAI-powered chatbot assistance, built to streamline corporate time tracking and reporting.",
    tags: [
      { label: "Python", color: "sage" },
      { label: "Salesforce", color: "peach" },
      { label: "GenAI", color: "lavender" },
      { label: "LangChain", color: "rose" },
    ],
    githubUrl: "https://github.com/sakshisaini24/Timesheet",
  },
  {
    title: "E2E Test Automation Suite",
    description:
      "Salesforce Financial Services Cloud test automation using Cypress — covering end-to-end flows with reusable specs and headless CI runs.",
    tags: [
      { label: "Cypress", color: "sage" },
      { label: "JavaScript", color: "peach" },
      { label: "Salesforce", color: "lavender" },
    ],
    githubUrl:
      "https://github.com/sakshisaini24/Salesforce-Automation-using-Cypress",
  },
];

export type Experience = {
  year: string;
  title: string;
  company: string;
  description: string;
};

export const experience: Experience[] = [
  {
    year: "July 2024 – Present",
    title: "Software Engineer",
    company: "Myridius, Pune, Maharashtra, India",
    description:
      "Working on Salesforce Administration, Development, QA automation, AI, GenAI, RAGs, deployments, and more.",
  },
  {
    year: "July 2023 – June 2024",
    title: "Software Engineer Intern",
    company: "Aethereus Consulting Pvt. Ltd., Pune, Maharashtra, India",
    description:
      "Worked on Salesforce admin and QA automations across Education Cloud and Service Cloud.",
  },
  {
    year: "January 2023 – May 2023",
    title: "Subject Matter Expert",
    company: "Contentrix, Remote",
    description:
      "Helped students from classes 9 to 12 solve doubts in Physics, Mathematics, and Chemistry.",
  },
  {
    year: "August 2020 – June 2023",
    title: "Private Tutor",
    company: "Independent",
    description:
      "Taught students with a passion for helping them learn — and earned my own little money along the way.",
  },
];

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/images/krabi.jpeg",
    alt: "Phi Phi Islands, Thailand",
    caption: "Phi Phi Islands — turquoise water & island vibes 🏝️",
  },
  {
    src: "/images/hampi.jpeg",
    alt: "Limsetone",
    caption: "Limestone cliffs at Hampi over the Tungabhadra River ✨",
  },
  {
    src: "/images/tourist-bangkok.jpeg",
    alt: "Thailand",
    caption: "Thailand — the land of smiles 🌺",
  },
  {
    src: "/images/kayaking-backwaters.jpeg",
    alt: "Krabi",
    caption: "Kayaking in the backwaters of Goa 🌊",
  },
  {
    src: "/images/lonavala.jpeg",
    alt: "Lonavala trek",
    caption: "Lonavala treks through the misty Western Ghats 🏔️",
  },
  {
    src: "/images/bangkok-sky.jpeg",
    alt: "Bangkok skyline",
    caption: "Lost in the lights of Bangkok ✨",
  },
  {
    src: "/images/scuba-krabi.jpeg",
    alt: "Scuba diving in Krabi",
    caption: "Scuba diving in Krabi — where I felt most alive 🤿",
  },
  {
    src: "/images/bunjee-rishikesh.jpeg",
    alt: "Rishikesh by the Ganga",
    caption: "Bunjee Jumping in Rishikesh - Heart pounding, wind rushing, and zero regrets.",
  },
  {
    src: "/images/goa.jpeg",
    alt: "Gokarna beach",
    caption: "Sunsets at Gokarna 🌊",
  },
  {
    src: "/images/neer-manali.jpeg",
    alt: "Manali by the Himalayas",
    caption: "Neer Waterfall Manali 🌄",
  },
  {
    src: "/images/jodhpur.jpeg",
    alt: "Jodhpur blue city",
    caption: "Wandering the Blue City of Jodhpur 🏰",
  },
  {
    src: "/images/goa-2.jpeg",
    alt: "Goa beaches",
    caption: "Goa — sand, sea & good vibes 🏖️",
  },
  { 
    src: "/images/rohtang-pass.jpeg",
    alt: "Manali by the Himalayas",
    caption: "Rohtang Pass Manali 🌄",
  }
];

export const visitedPlaces = [
  {
    name: "Thailand",
    places: ["Bangkok", "Krabi", "Phi Phi"],
    emoji: "🇹🇭",
  },
  { name: "Goa", places: ["Beaches & sunsets"], emoji: "🏖️" },
  { name: "Gokarna", places: ["Coastal trails"], emoji: "🌊" },
  { name: "Mumbai", places: ["City lights & chaos"], emoji: "🌆" },
  { name: "Jodhpur", places: ["The Blue City"], emoji: "🏰" },
  { name: "Jaipur", places: ["The Pink City"], emoji: "🏛️" },
  { name: "Delhi", places: ["The Capital City"], emoji: "🏛️" },
  { name: "Ahmedabad", places: ["The Textile City"], emoji: "🏛️" },
  { name: "Manali", places: ["The Himalayan beauty"], emoji: "🏛️" },
  { name: "Rishikesh", places: ["Yoga capital & the Ganges"], emoji: "🧘" },
  { name: "Lonavala", places: ["Western Ghats treks"], emoji: "⛰️" },
];

export type FunFact = {
  emoji: string;
  question: string;
  answer: string;
  color: "peach" | "rose" | "sage" | "lavender";
};

export const funFacts: FunFact[] = [
  {
    emoji: "🪂",
    question: "The craziest thing I've done?",
    answer: "Bungee jumping — heart pounding, wind rushing, and zero regrets.",
    color: "rose",
  },
  {
    emoji: "🤿",
    question: "When did I feel the most alive?",
    answer:
      "Scuba diving in Krabi — breathing underwater, surrounded by coral and complete silence.",
    color: "sage",
  },
  {
    emoji: "✈️",
    question: "My dream destination?",
    answer:
      "Iceland — northern lights, volcanic landscapes, and roads that feel like another planet.",
    color: "lavender",
  },
  {
    emoji: "🗺️",
    question: "What am I planning next?",
    answer:
      "More solo adventures — maybe Switzerland or Japan, another scuba trip, and every trek I can squeeze in.",
    color: "peach",
  },
  {
    emoji: "🌙",
    question: "A lesson I'll never forget?",
    answer:
      "My father told me when I was just a child: these are nights that never die. So I chase memories, not just destinations.",
    color: "lavender",
  },
  {
    emoji: "☕",
    question: "My travel ritual?",
    answer:
      "Finding a quiet café in every new city, journaling the day, and people-watching like it's a sport.",
    color: "peach",
  },
];

export const teachingHighlights = [
  { subject: "Physics", emoji: "⚛️" },
  { subject: "Mathematics", emoji: "📐" },
  { subject: "Chemistry", emoji: "🧪" },
];

export const tagColors = {
  peach: "bg-peach/40 text-warm-brown border-peach/60",
  rose: "bg-rose/40 text-warm-brown border-rose/60",
  sage: "bg-sage/40 text-warm-brown border-sage/60",
  lavender: "bg-lavender/40 text-warm-brown border-lavender/60",
} as const;

export const funFactColors = {
  peach: "from-peach/25 to-peach/5 border-peach/30",
  rose: "from-rose/25 to-rose/5 border-rose/30",
  sage: "from-sage/25 to-sage/5 border-sage/30",
  lavender: "from-lavender/25 to-lavender/5 border-lavender/30",
} as const;
