export const personalInfo = {
  name: "Sakshi Saini",
  tagline:
    "A Software Engineer & QA specialist by day, and an avid solo traveler & social science enthusiast by heart. As they say, 'Jack of all trades, master of none, but oftentimes better than a master of one.'",
  github: "https://github.com/sakshisaini24",
  linkedin: "https://www.linkedin.com/in/sakshisaini2482/",
  instagram: "https://www.instagram.com/sakshisaini_9/",
  email: "sakshi.tech24@gmail.com",
  phone: "+(91)-8195803965",
  phoneHref: "tel:+918195803965",
  hometown: "Jalandhar, Punjab",
  currentCity: "Pune, Maharashtra",
  location: "Pune, Maharashtra",
};

export type Hobby = {
  name: string;
  emoji: string;
  description: string;
};

export const hobbies: Hobby[] = [
  {
    name: "Bhangra",
    emoji: "💃",
    description:
      "Dancing bhangra in my free time — energy, rhythm, and a little piece of Punjab wherever I am.",
  },
  {
    name: "Chess",
    emoji: "♟️",
    description:
      "Learning how to play chess — slowly building strategy, patience, and thinking three moves ahead.",
  },
  {
    name: "Animals & Pets",
    emoji: "🐾",
    description:
      "A deep love for animals and pets — whether it's a friendly stray on the street or cuddles with a furry friend at home, they always brighten my day.",
  },
];

export type MapPin = {
  id: string;
  name: string;
  emoji: string;
  places: string[];
  lat: number;
  lng: number;
  type: "home" | "current" | "visited" | "international";
};

export const mapPins: MapPin[] = [
  {
    id: "jalandhar",
    name: "Jalandhar, Punjab",
    emoji: "🏡",
    places: ["Where I belong — roots, family & Punjabi warmth"],
    lat: 31.326,
    lng: 75.576,
    type: "home",
  },
  {
    id: "amritsar",
    name: "Amritsar",
    emoji: "🪯",
    places: ["Golden Temple", "Punjab's spiritual heart"],
    lat: 31.634,
    lng: 74.872,
    type: "visited",
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    emoji: "🌳",
    places: ["The City Beautiful", "Planned gardens & calm"],
    lat: 30.733,
    lng: 76.779,
    type: "visited",
  },
  {
    id: "katra",
    name: "Katra",
    emoji: "🙏",
    places: ["Gateway to Vaishno Devi", "Jammu & Kashmir"],
    lat: 32.992,
    lng: 74.932,
    type: "visited",
  },
  {
    id: "pune",
    name: "Pune",
    emoji: "📍",
    places: ["Currently residing — building my career"],
    lat: 18.52,
    lng: 73.857,
    type: "current",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    emoji: "🌆",
    places: ["City lights & chaos"],
    lat: 19.076,
    lng: 72.877,
    type: "visited",
  },
  {
    id: "goa",
    name: "Goa",
    emoji: "🏖️",
    places: ["Beaches & sunsets"],
    lat: 15.299,
    lng: 74.124,
    type: "visited",
  },
  {
    id: "gokarna",
    name: "Gokarna",
    emoji: "🌊",
    places: ["Coastal trails"],
    lat: 14.547,
    lng: 74.319,
    type: "visited",
  },
  {
    id: "hampi",
    name: "Hampi",
    emoji: "🛕",
    places: ["Ancient ruins & boulder landscapes", "Tungabhadra River"],
    lat: 15.335,
    lng: 76.46,
    type: "visited",
  },
  {
    id: "lonavala",
    name: "Lonavala",
    emoji: "⛰️",
    places: ["Western Ghats treks"],
    lat: 18.751,
    lng: 73.407,
    type: "visited",
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    emoji: "🧘",
    places: ["Yoga capital & the Ganges", "Bungee jumping!"],
    lat: 30.087,
    lng: 78.268,
    type: "visited",
  },
  {
    id: "jodhpur",
    name: "Jodhpur",
    emoji: "🏰",
    places: ["The Blue City"],
    lat: 26.239,
    lng: 73.024,
    type: "visited",
  },
  {
    id: "jaipur",
    name: "Jaipur",
    emoji: "🏛️",
    places: ["The Pink City"],
    lat: 26.912,
    lng: 75.787,
    type: "visited",
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    emoji: "🕌",
    places: ["The Textile City", "Gujarat vibes"],
    lat: 23.023,
    lng: 72.571,
    type: "visited",
  },
  {
    id: "malvan",
    name: "Malvan, Maharashtra",
    emoji: "🐠",
    places: ["Coastal Konkan", "Scuba & sea forts"],
    lat: 16.063,
    lng: 73.47,
    type: "visited",
  },
  {
    id: "nashik",
    name: "Nashik",
    emoji: "🍇",
    places: ["Wine country & ancient ghats"],
    lat: 19.998,
    lng: 73.79,
    type: "visited",
  },
  {
    id: "aurangabad",
    name: "Aurangabad",
    emoji: "🗿",
    places: ["Ajanta & Ellora caves"],
    lat: 19.876,
    lng: 75.343,
    type: "visited",
  },
  {
    id: "agra",
    name: "Agra",
    emoji: "✨",
    places: ["Home of the Taj Mahal"],
    lat: 27.177,
    lng: 78.008,
    type: "visited",
  },
  {
    id: "mathura",
    name: "Mathura",
    emoji: "🪷",
    places: ["Land of Krishna", "Spiritual heartland"],
    lat: 27.492,
    lng: 77.674,
    type: "visited",
  },
  {
    id: "shimla",
    name: "Shimla",
    emoji: "🌲",
    places: ["Queen of the Hills", "Colonial charm & mountain air"],
    lat: 31.105,
    lng: 77.174,
    type: "visited",
  },
  {
    id: "delhi",
    name: "Delhi",
    emoji: "🏛️",
    places: ["The capital city"],
    lat: 28.704,
    lng: 77.102,
    type: "visited",
  },
  {
    id: "manali",
    name: "Manali",
    emoji: "🏔️",
    places: ["Himalayan beauty", "Rohtang Pass", "Neer Waterfall"],
    lat: 32.243,
    lng: 77.189,
    type: "visited",
  },
  {
    id: "thailand",
    name: "Thailand",
    emoji: "🇹🇭",
    places: ["Bangkok", "Krabi", "Phi Phi"],
    lat: 13.756,
    lng: 100.502,
    type: "international",
  },
];

export type SkillGroup = {
  title: string;
  emoji: string;
  color: "peach" | "rose" | "sage" | "lavender";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Salesforce",
    emoji: "☁️",
    color: "sage",
    skills: [
      "Administration",
      "Development",
      "Flows",
      "Education Cloud",
      "Service Cloud",
      "Deployments",
    ],
  },
  {
    title: "QA & Automation",
    emoji: "🔍",
    color: "peach",
    skills: [
      "Cypress",
      "Robot Framework",
      "E2E Testing",
      "CI/CD",
      "Test Strategy",
      "Salesforce Testing",
    ],
  },
  {
    title: "AI & Data",
    emoji: "🤖",
    color: "lavender",
    skills: [
      "GenAI",
      "RAG",
      "LangChain",
      "Machine Learning",
      "Vector DB",
      "XGBoost",
    ],
  },
  {
    title: "Languages & Tools",
    emoji: "🛠️",
    color: "rose",
    skills: [
      "Python",
      "JavaScript",
      "Apex",
      "React",
      "Next.js",
      "Git",
      "Docker",
      "FastAPI",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  badge: string;
  hook: string;
  details: string[];
  techHighlights: string[];
  tags: { label: string; color: "peach" | "rose" | "sage" | "lavender" }[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "RiskRadar AI",
    description:
      "Escalation intelligence for insurance claims — predicting when a dispute will escalate using ML, vector search, and citation-grounded GenAI briefs.",
    badge: "🏆 Genius Hacks Hackathon Winner",
    hook: "The project that turned a hackathon pitch into production-grade AI.",
    details: [
      "RiskRadar was born at Myridius's Genius Hacks hackathon — and it won. The challenge: spot insurance claim escalations before they explode, and give adjusters answers they can actually trust.",
      "I built a full ML pipeline with XGBoost ensembles, SHAP explainability, and a time-to-escalation regressor (±37 days MAE). A sentence-transformer vector index surfaces the 5 most similar past claims — legal RAG, but make it defensible.",
      "GenAI briefs are citation-grounded via Indian Kanoon & CourtListener APIs — temperature=0, allowlist-only precedents, and a validator that flags hallucinated case law before it reaches the UI.",
      "From ideation to expansion: FastAPI backend, Next.js triage dashboard, fairness audits, drift monitoring, and Salesforce integration to bring intelligence where adjusters already work.",
    ],
    techHighlights: [
      "Predictive ML — XGBoost, isotonic calibration, SHAP",
      "Legal RAG — vector embeddings, cosine NN search, citation grounding",
      "GenAI — Groq Llama 3.1 & Gemini 2.5 Flash at temp=0",
      "Stack — Python, FastAPI, Next.js 16, SQLite, Docker",
      "Salesforce integration & full hackathon-to-product expansion",
    ],
    tags: [
      { label: "Python", color: "sage" },
      { label: "GenAI", color: "lavender" },
      { label: "ML", color: "peach" },
      { label: "Vector DB", color: "rose" },
      { label: "RAG", color: "lavender" },
      { label: "Salesforce", color: "sage" },
    ],
    githubUrl: "https://github.com/sakshisaini24/RiskRadar",
  },
  {
    title: "Corporate Time Manager AI",
    description:
      "A Salesforce-integrated timesheet manager with GenAI-powered chatbot assistance, built to streamline corporate time tracking and reporting.",
    badge: "🚀 First dive into real-world GenAI",
    hook: "Where I first made RAG and GenAI actually useful — not just a demo.",
    details: [
      "My first real attempt at building a corporate timesheet manager — and honestly, the project that kicked off my love affair with RAG and GenAI in production.",
      "Integrated directly with Salesforce so employees log time where they already work. No swivel-chairing between tools — data flows from SF objects into a Python backend that handles generation, validation, and reporting.",
      "The star? A LangChain-powered chatbot that answers timesheet questions in plain English — policy lookups, entry guidance, and smart nudges before submission deadlines hit.",
      "This was my introduction to making AI practical: prompt design, retrieval over company docs, and learning what breaks when real users (not just testers) start chatting.",
    ],
    techHighlights: [
      "Python backend with Salesforce API integration",
      "LangChain RAG pipeline for policy-aware chatbot",
      "GenAI for real-time user assistance & timesheet generation",
      "PDF reporting with custom fonts & branded output",
      "Deployed on Heroku with secure token auth",
    ],
    tags: [
      { label: "Python", color: "sage" },
      { label: "Salesforce", color: "peach" },
      { label: "GenAI", color: "lavender" },
      { label: "LangChain", color: "rose" },
      { label: "RAG", color: "lavender" },
    ],
    githubUrl: "https://github.com/sakshisaini24/Timesheet",
  },
  {
    title: "Automation Test Suites",
    description:
      "End-to-end Salesforce test automation with Cypress & Playwright — built, owned, and taught across the team.",
    badge: "🔍 QA ownership & mentorship",
    hook: "Not just writing tests — building frameworks and teaching others to ship with confidence.",
    details: [
      "This isn't a side project — it's how I took ownership of quality across Salesforce Financial Services Cloud, Education Cloud, and Service Cloud.",
      "Built reusable Cypress suites with custom commands, environment configs, and headless CI runs. Expanded into Playwright for cross-browser coverage and explored MCP integrations for smarter, AI-assisted test generation.",
      "The part I'm proudest of: teaching automation to juniors, peers, and seniors alike. From writing their first spec to reviewing PRs and setting CI standards — I believe good QA is a team sport.",
      "Every flow I automate, I own end-to-end: test design, flaky-test triage, reporting, and making sure releases ship without that 2 AM panic.",
    ],
    techHighlights: [
      "Cypress — custom commands, Page Object patterns, headless CI",
      "Playwright — cross-browser E2E expansion",
      "MCP — AI-assisted test exploration & generation",
      "Salesforce FSC, Education Cloud & Service Cloud coverage",
      "Mentorship — onboarding juniors & upskilling seniors",
    ],
    tags: [
      { label: "Cypress", color: "sage" },
      { label: "Playwright", color: "peach" },
      { label: "MCP", color: "lavender" },
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

export type Credential = {
  issuer: string;
  title: string;
  type: "achievement" | "certification";
  emoji: string;
  color: "peach" | "rose" | "sage" | "lavender";
  date?: string;
};

export const credentials: Credential[] = [
  {
    issuer: "Myridius",
    title: "Genius Hacks Hackathon — Winner",
    type: "achievement",
    emoji: "🏆",
    color: "rose",
    date: "June 2026",
  },
  {
    issuer: "Myridius",
    title: "Employee of the Month",
    type: "achievement",
    emoji: "⭐",
    color: "peach",
    date: "October 2025",
  },
  {
    issuer: "Salesforce",
    title: "Certified Administrator",
    type: "certification",
    emoji: "☁️",
    color: "sage",
  },
  {
    issuer: "ServiceNow",
    title: "Certified Administrator",
    type: "certification",
    emoji: "⚙️",
    color: "lavender",
  },
  {
    issuer: "Salesforce",
    title: "AI Specialist",
    type: "certification",
    emoji: "🤖",
    color: "sage",
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
    caption: "Bunjee Jumping in Rishikesh - Heart pounding, wind rushing, and zero regrets. 🤸‍♀️",
  },
  {
    src: "/images/goa.jpeg",
    alt: "Gokarna beach",
    caption: "Sunsets at Gokarna 🌊",
  },
  {
    src: "/images/neer-manali.jpeg",
    alt: "Manali by the Himalayas",
    caption: "Chasing Waterfalls 🌄",
  },
  {
    src: "/images/jodhpur.jpeg",
    alt: "Jodhpur Blue city",
    caption: "Wandering in the Blue streets of Jodhpur 🏰",
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
  },
  {
    src: "/images/jaipur.jpeg",
    alt: "Jaipur",
    caption: "Tourist pro max 💕",
  }
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
      "तुम्हारी जीतने की क्षमता इस बात पर निर्भर करती है कि तुम कितनी बार प्रयास करते हो",
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
