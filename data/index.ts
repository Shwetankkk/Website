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
        "Hi, I’m Shwetank — a developer driven by curiosity, creativity, and clarity of thought. I believe great engineering begins with empathy — understanding how technology touches people's lives and how elegant systems can make complex problems beautifully simple.",
        "I recently graduated with a Master's in Computer Science from California State University, Fullerton. During my time there, I served as a Teaching Associate for Compilers & Languages, led the Google Developer Group on campus, and built projects spanning AI, distributed systems, and developer tools.", 
        "I'm currently seeking full-time Software Engineer opportunities in the United States, where I can build thoughtful products, solve meaningful engineering challenges, and grow alongside exceptional teams."
      ],
    },

        certifications: [
      {
        title: "AI Fluency Framework & Foundations",
        issuer: "Anthropic",
        date: "Jun 2026",
        credentialUrl: "https://verify.skilljar.com/c/t53matvh5iox",
      },
      {
        title: "Claude 101",
        issuer: "Anthropic",
        date: "Jun 2026",
        credentialUrl: "https://verify.skilljar.com/c/5i7tk7uy4uer",
      },
      {
        title: "Working as a Software Engineer at a Startup",
        issuer: "Y Combinator",
        date: "Jun 2026",
        credentialUrl: "https://www.theforage.com/completion-certificates/3rjEZnibAFydi6noa/oRMogWRHeewqHzA7u_3rjEZnibAFydi6d_6a20dc7f90849691f83346a7_1780540476225_completion_certificate.pdf",
      },
      {
        title: "Advanced Software Engineering Job Simulation",
        issuer: "Walmart Global Tech",
        date: "Jun 2026",
        credentialUrl: "https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_6a20dc7f90849691f83346a7_1780539585941_completion_certificate.pdf",
      },
      {
        title: "Introduction to Kubernetes",
        issuer: "The Linux Foundation",
        date: "Jun 2026",
        credentialUrl: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/c004fd83-a1be-4681-af3e-0657feaaa784-shwetank-singh-bc5683a3-52e7-480e-943f-bf07855327cb-certificate.pdf",
      },
      {
        title: "Google Cloud Data Analytics Professional Certificate",
        issuer: "Google",
        date: "Jun 2026",
        credentialUrl: "https://www.credly.com/badges/d193ec3b-d642-40a4-8128-a26ce614390a/public_url",
      },
      {
        title: "Fundamentals of Predictive Project Management",
        issuer: "Project Management Institute",
        date: "Jun 2026",
        credentialUrl: "https://www.credly.com/badges/85cddea7-9222-4545-88c8-48aaa1b113d3/public_url",
      },
      {
        title: "Fundamentals of Deep Learning",
        issuer: "NVIDIA",
        date: "2022",
        credentialUrl: "https://learn.nvidia.com/certificates?id=c56747a2430b435c8414372876634a02",
      },
],
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
          "Designed and maintained backend services, REST APIs, and data pipelines for structured business workflows. Improved SQL query performance, strengthened data validation, resolved production issues through debugging and monitoring, and collaborated across teams to deliver scalable, reliable backend systems.",
      },
      {
        title: "Software Developer Intern — We Win Limited",
        date: "Jan 2023 – Jul 2023 • Bhopal, India",
        icon: "mdi:code-tags",
        description:
          "Developed 20+ REST API endpoints, implemented request validation and data transformation logic, worked with relational databases, and built internal utilities for testing, debugging, and reliable backend processing.",
      },
      {
        title: "Software Developer Intern — Voldemort with a Nose LLP",
        date: "May 2022 – Jul 2022 • Hyderabad, India",
        icon: "mdi:filmstrip",
        description:
          "Built Python-based workflow automation tools, designed reusable data transformation logic, improved processing reliability, and documented backend workflows to simplify maintenance and troubleshooting.",
      },
      {
        title: "Teaching Associate — California State University, Fullerton",
        date: "Aug 2025 – Jan 2026 • Fullerton, USA",
        icon: "mdi:teach",
        description:
          "Taught Compilers & Languages to undergraduate students, designed instructional material, simplified complex computer science concepts, and mentored students through assignments, projects, and technical discussions.",
      },
      {
        title: "GDG Organizer — Google Developer Group On Campus Fullerton",
        date: "Aug 2025 – May 2026 • Fullerton, USA",
        icon: "mdi:account-group",
        description:
          "Led the Google Developer Group at CSUF by organizing technical events, fostering collaboration among student developers, and building an inclusive community around software engineering and emerging technologies.",
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
      "A few builds that Projects I've enjoyed building—from AI-powered developer tools to distributed systems. my interests.",
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
        title: "CodeGraph AI",
        description:
          "AI-powered developer tool that transforms complex repositories into interactive knowledge graphs for faster code understanding.",
        image:
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=codegraph-ai",
        category: "AI / ML",
        details:
          "Developed a code intelligence platform that parses repositories, builds dependency graphs, and visualizes relationships between files, classes, and functions. Designed to reduce onboarding time, simplify debugging, and improve developer productivity on large codebases",
        github:
          "https://github.com/Shwetankkk/CodeGraph-AI",
       tech: [
          { name: "React", icon: "logos:react" },
          { name: "Vite", icon: "logos:vitejs" },
          { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
          { name: "React Flow", icon: "simple-icons:reactflow" },
          { name: "Python", icon: "logos:python" },
          { name: "FastAPI", icon: "simple-icons:fastapi" },
          { name: "AI Repository Parsing", icon: "mdi:brain" },
          { name: "Dependency Analysis", icon: "mdi:graph" },
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
