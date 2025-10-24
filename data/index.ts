export const DATA = {
  home: {
    hero: {
      name: "Shwetank Singh",
      title: "I code things. I teach people. I build communities.",
      subtitle:
        "Building software that’s fast, thoughtful, and kind to its users — and sharing the journey along the way.",
      ctaPrimaryLabel: "Explore My Work",
      ctaPrimaryHref: "/projects",
      ctaSecondaryLabel: "Connect on LinkedIn",
      ctaSecondaryHref: "https://www.linkedin.com/in/iamshwetanksingh/",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        "Specialized in building scalable systems, beautiful interfaces, and empowering developer communities.",
      overview: [
        {
          name: "Programming Languages (C, C++, Python, Java, JavaScript)",
          icon: "lucide:code-2",
          color: "primary",
        },
        {
          name: "Backend & APIs (Node, Flask, Spring Boot)",
          icon: "lucide:server",
          color: "secondary",
        },
        {
          name: "Frontend & Mobile (React, Flutter, Tailwind)",
          icon: "lucide:layout-dashboard",
          color: "primary",
        },
        {
          name: "Blockchain (Solidity, Web3.js, Truffle)",
          icon: "lucide:shield-check",
          color: "warning",
        },
        {
          name: "Observability (Zipkin, Jaeger, OTel)",
          icon: "lucide:activity",
          color: "success",
        },
        {
          name: "Data Structures & Algorithms",
          icon: "lucide:brain",
          color: "secondary",
        },
        {
          name: "Methods (Agile, Scrum, PDLC, XFN Collaboration)",
          icon: "lucide:workflow",
          color: "primary",
        },
        {
          name: "Cloud & DevOps (GCP, Docker, GitHub Actions)",
          icon: "lucide:cloud",
          color: "secondary",
        },
      ],
    },
    testimonials: {
      sectionTitle: "What People Say",
      sectionDescription:
        "Recommendations from colleagues and mentors.",
      items: [
        {
          id: "li-reco-pegah",
          name: "Pegah Nikitash",
          role: "Senior Technical Recruiter at Dialpad",
          content: `I had the pleasure of working with Shwetank during the Dialership program at Dialpad, and I was consistently impressed by his technical curiosity, problem-solving skills, and collaborative mindset.

Throughout the program, Shwetank demonstrated a strong aptitude for software development, quickly picking up new concepts and applying them to real-world projects. He was proactive in seeking feedback, thoughtful in his approach to challenges, and always willing to support his peers.

Shwetank would be a fantastic addition to any engineering team. He brings not only technical ability but also a positive attitude and a genuine enthusiasm for learning and building great products. I’m excited to see where his career takes him and would highly recommend him to any company looking for a talented and driven software developer.`,
          avatar:
            "https://media.licdn.com/dms/image/D4E03AQHnDgib1P3i4A/profile-displayphoto-shrink_200_200/0/1692124472641?e=2147483647&v=beta&t=bP8DNwYjQWzjOBfM1p6sWj5btFghUBwnOavGH2RyefI",
          source: "LinkedIn",
          url: "https://www.linkedin.com/in/pegah-nikitash/details/recommendations/",
        },
      ],
    },
  },

  about: {
    profile: {
      name: "Shwetank Singh",
      title: "Software Developer",
      image: "https://img.heroui.chat/image/avatar?w=320&h=320&u=shwetank",
      description: [
        "Hi, I’m Shwetank — a developer driven by curiosity, creativity, and clarity of thought. I believe great engineering begins with empathy — understanding how technology touches people’s lives and how elegant systems can make complex problems beautifully simple.",
  "I’m currently pursuing my Master’s in Computer Science at California State University, Fullerton, and will be graduating in May 2026. Alongside my studies, I teach Compilers & Languages as a Teaching Associate, lead the Google Developer Group on campus, and work on projects that merge research, teaching, and real-world engineering.",
  "Right now, I’m actively seeking Full-Time Software Developer roles in the United States — opportunities where I can design meaningful products, learn from exceptional teams, and continue building technology that connects ideas, systems, and people.",,
      ],
    },
    education: [
      {
        title: "M.S. in Computer Science — California State University, Fullerton",
        date: "Aug 2024 – May 2026",
        icon: "mdi:school",
        description:
          "Graduate coursework and teaching; focused on systems, distributed computing, and developer tools.",
      },
      {
        title: "B.Tech in Computer Science & Engineering — IIIT Vadodara",
        date: "Aug 2019 – Aug 2023",
        icon: "mdi:school-outline",
        description:
          "Strong foundation in algorithms, systems, and full-stack engineering.",
      },
    ],
    experience: [
      {
        title: "Software Developer — We Win Limited",
        date: "Aug 2023 – Jul 2024 • Bhopal, India",
        icon: "mdi:briefcase",
        description:
          "Built distributed tracing for Spring Boot & Flask microservices (Zipkin + Google Cloud Trace) covering 10+ request flows; shipped an Appsmith + TypeScript internal dashboard backed by MongoDB & SQL; reduced dev time/costs via proactive bug-fixing.",
      },
      {
        title: "Software Developer Intern — We Win Limited",
        date: "Jan 2023 – Jul 2023 • Bhopal, India",
        icon: "mdi:code-tags",
        description:
          "Implemented 20+ CRUD APIs for dense datasets; optimized latency; partnered with clients and internal teams to triage and resolve issues.",
      },
      {
        title: "Software Developer Intern — Voldemort with a Nose LLP",
        date: "May 2022 – Jul 2022 • Hyderabad, India",
        icon: "mdi:filmstrip",
        description:
          "Built an in-house video editor in Python/Tkinter; delivered feature demos to 500+ students and faculty.",
      },
      {
        title: "Teaching Associate — California State University, Fullerton",
        date: "Aug 2025 – Present • Fullerton, USA",
        icon: "mdi:teach",
        description:
          "Lecture support for Compilers & Languages; designed and delivered technical explanations and session materials.",
      },
      {
        title: "GDG Organizer — Google Developer Group On Campus Fullerton",
        date: "Aug 2025 – Present • Fullerton, USA",
        icon: "mdi:account-group",
        description:
          "Leading the Google Developer Group community at CSUF to foster collaboration and developer learning.",
      },
    ],
    technologies: {
  programming: {
    description: "Languages I use to build systems and ship features.",
    tools: [
      { name: "C", icon: "simple-icons:c" },
      { name: "C++", icon: "devicon:cplusplus" },
      { name: "Python", icon: "logos:python" },
      { name: "Java", icon: "logos:java" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
    ],
  },

  backend: {
    description: "APIs, microservices, and data layers.",
    tools: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express", icon: "simple-icons:express" },
      { name: "Flask", icon: "logos:python" },
      { name: "Spring Boot", icon: "logos:spring-icon" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "Firebase", icon: "logos:firebase" },
    ],
  },

  frontend: {
    description: "Interfaces that are responsive, fast, and accessible.",
    tools: [
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "skill-icons:nextjs-dark" },
      { name: "Flutter", icon: "logos:flutter" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
    ],
  },

  blockchain: {
    description: "Smart contracts and verifiable identity.",
    tools: [
      { name: "Solidity", icon: "simple-icons:solidity" },
      { name: "Web3.js", icon: "simple-icons:web3dotjs" },
      { name: "Truffle", icon: "simple-icons:trufflesuite" },
      { name: "Ganache", icon: "simple-icons:trufflesuite" },
      { name: "Hardhat", icon: "simple-icons:hardhat" },
      { name: "IPFS", icon: "simple-icons:ipfs" },
    ],
  },

  observability: {
    description: "Tracing, metrics, and logs across services.",
    tools: [
      { name: "Zipkin", icon: "simple-icons:apache" },
      { name: "Jaeger", icon: "simple-icons:jaegertracing" },
      { name: "OpenTelemetry", icon: "simple-icons:opentelemetry" },
      { name: "GCP", icon: "logos:google-cloud" },
    ],
  },

  dsa: {
    description: "Problem-solving with data structures & algorithms.",
    tools: [
      { name: "Arrays", icon: "mdi:array" },
      { name: "Trees", icon: "mdi:file-tree" },
      { name: "Graphs", icon: "mdi:graph" },
      { name: "DP", icon: "mdi:math-integral" },
      { name: "Greedy", icon: "mdi:progress-check" },
      { name: "Heaps", icon: "mdi:triangle" },
    ],
  },

  methods: {
    description: "How I work with teams and ship reliably.",
    tools: [
      { name: "Agile", icon: "mdi:run" },
      { name: "Scrum", icon: "mdi:checkbox-multiple-marked" },
      { name: "PDLC", icon: "mdi:cog" },
      { name: "XFN Collaboration", icon: "mdi:account-group" },
    ],
  },

  cloudDevops: {
    description: "Cloud, containers, and CI/CD.",
    tools: [
      { name: "GCP", icon: "logos:google-cloud" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
    ],
  },
},
  },

  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription:
      "A few builds that reflect my interests.",
    work: [
      {
        id: 1,
        title: "TrustID — Blockchain-Based Digital Identity Verification",
        description:
          "A DApp for resume/credential verification without centralized authorities. Role-based flows for Applicants and Verifiers with on-chain proofs and IPFS storage.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=trustid",
        category: "Web3 / DApp",
        details:
          "Engineered Solidity smart contracts and end-to-end flow: requirements → design → implementation. Focused on integrity, low-friction UX, and verifiable attestations.",
        github: "https://github.com/Shwetankkk/TrustID",
        tech: [
          { name: "Solidity", icon: "simple-icons:solidity" },
          { name: "React", icon: "logos:react" },
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "MongoDB", icon: "logos:mongodb-icon" },
          { name: "IPFS", icon: "simple-icons:ipfs" },
          { name: "Web3.js", icon: "simple-icons:web3dotjs" },
        ],
      },
      {
        id: 2,
        title: "Butterfly Identification App",
        description:
          "Mobile + ML pipeline that classifies 500+ species in real-time using transfer learning (VGG16).",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=butterfly",
        category: "Mobile / ML",
        details:
          "Trained on a large dataset, built the Flutter UI, and optimized inference performance. Delivered end-to-end ML + app integration.",
        tech: [
          { name: "TensorFlow", icon: "logos:tensorflow" },
          { name: "Python", icon: "logos:python" },
          { name: "Flutter", icon: "logos:flutter" },
        ],
      },
      {
        id: 3,
        title: "Bangalore House Price Predictor",
        description:
          "End-to-end ML app that predicts house prices in Bengaluru using cleaned features and a trained regression model. Simple web UI for entering locality, area, and BHK.",
        image:
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=blr-house-price",
        category: "Machine Learning",
        details:
          "Built a data pipeline (cleaning, feature engineering, one-hot encoding) and trained a regression model (e.g., Linear/RandomForest). Exposed predictions via a lightweight web server with a clean UI.",
        github:
          "https://github.com/Shwetankkk/Bangalore-House-Price-Predictor-App-",
        tech: [
          { name: "Python", icon: "logos:python" },
          { name: "scikit-learn", icon: "simple-icons:scikitlearn" },
          { name: "Pandas", icon: "simple-icons:pandas" },
          { name: "NumPy", icon: "logos:numpy" },
          { name: "Flask", icon: "simple-icons:flask" },
        ],
      },
    ],
  },

  contact: {
    heading:
      "Have a project in mind? Let’s connect and create something meaningful together.",
    location: {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13383.232!2d-117.938952!3d33.870365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sFullerton%2C%20CA!5e0!3m2!1sen!2sus!4v1715701234567",
      address: "Fullerton, CA",
    },
  },

  morphingTexts: {
    about: ["Organizer", "Mentor", "Developer"] as const,
    projects: ["Blockchain", "ML", "Android"] as const,
    contact: ["Let's", "Build", "Together"] as const,
  },

  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Blogs", href: "/articles", icon: "lucide:pen" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],

  footer: {
    name: "Shwetank Singh",
    description:
      "Open to Full Time software roles (2026). I enjoy building thoughtful systems and helping others learn.",
    contact: {
      email: "shwetankbpl26@gmail.com",
      phone: "+1 (657) 681-8939",
      location: "San Francisco, CA",
    },
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/Shwetankkk",
        icon: "mdi:github",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/iamshwetanksingh/",
        icon: "mdi:linkedin",
      },
      {
        platform: "Medium",
        url: "https://medium.com/@shwedank",
        icon: "mdi:medium",
      },
    ],
    services: [
      "Backend & APIs",
      "Frontend & Mobile",
      "Web3 & DApps",
      "Observability & Dashboards",
    ],
  },
} as const;
