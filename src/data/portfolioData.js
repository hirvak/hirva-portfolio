export const personalInfo = {
  name: "Hirva Kansara",
  universityTag: "PDEU · B.Tech CSBS · SEM 5",
  heroSubheading: "Backend Developer · AI/ML & Computer Vision Enthusiast",
  shortIntro: "Building backend systems with FastAPI and PostgreSQL, experimenting with computer vision, and learning by shipping.",
  heroPlayfulTagline: "Currently building backend APIs and learning computer vision.",
  email: "hirvakansara36@gmail.com",
  phone: "9904314468",
  linkedin: "https://linkedin.com/in/hirva-kansara-b901392b2",
  github: "https://github.com/hirvak",
  resumePath: "/resume/Hirva_Kansara_Resume.pdf"
};

export const quickStats = [
  { value: "9.27", label: "Current CGPA" },
  { value: "9.53", label: "Diploma" },
  { value: "02", label: "Internships" },
  { value: "06", label: "Projects" }
];

export const aboutContent = {
  title: "About Me",
  quote: "I focus on building reliable backends, experimenting with ML models, and writing clean code.",
  blocks: [
    { number: "01", title: "BACKEND", tags: "FastAPI · PostgreSQL · REST" },
    { number: "02", title: "AI / ML", tags: "Computer Vision · YOLOv8 · TensorFlow" },
    { number: "03", title: "BUILDING", tags: "Projects · APIs · Open Source" }
  ],
  education: [
    { degree: "PDEU (B.Tech CSBS)", detail: "3rd Year · Semester 5" },
    { degree: "R.C. Technical Institute", detail: "Diploma in Engineering" }
  ]
};

export const experiences = [
  {
    year: "2026",
    company: "TECHIFY SOLUTIONS",
    role: "AI/ML INTERN",
    duration: "02 MONTHS",
    tech: "FastAPI · Backend APIs · AI/ML",
    bullets: [
      "Built async FastAPI REST endpoints for backend services.",
      "Automated Python data processing pipelines for model inputs."
    ]
  },
  {
    year: "2025",
    company: "BRAINYBEAM TECHNOLOGIES",
    role: "DATA SCIENCE & ML INTERN",
    duration: "45 DAYS",
    tech: "Python · Pandas · EDA · ML",
    bullets: [
      "Cleaned raw datasets and prepared feature pipelines for ML models.",
      "Trained and evaluated baseline regression models for trend predictions."
    ]
  }
];

export const allProjects = [
  {
    id: "nutrilens",
    title: "NutriLens",
    category: "AI/ML · COMPUTER VISION",
    subtitle: "Real-time food item recognition and calorie estimation.",
    technologies: ["FastAPI", "React", "PostgreSQL", "YOLOv8"],
    keyHighlight: "Computer vision pipeline using fine-tuned YOLOv8 weights to detect food items and return macro breakdowns.",
    github: "https://github.com/hirvak/NutriLens",
    hasModal: true,
    visualType: "computer-vision",
    overview: "NutriLens uses computer vision to identify food items in photos and calculate instant nutritional breakdowns.",
    objective: "Automate meal logging using camera captures instead of manual entries.",
    technicalApproach: "YOLOv8 object detection paired with a FastAPI backend and PostgreSQL database.",
    keyFeatures: [
      "Real-time food item detection using YOLOv8 model weights.",
      "FastAPI inference endpoint returning calorie & macro breakdowns.",
      "PostgreSQL user history tracking & React analytics visualizer."
    ],
    challenges: "Handling dish clutter and uneven lighting during meal captures.",
    solutions: "Optimized model weights, added image pre-filters, and async FastAPI caching."
  },
  {
    id: "ticket-management-system",
    title: "Ticket Management System",
    category: "BACKEND & SYSTEMS",
    subtitle: "Support ticket platform with role-based access and authentication.",
    technologies: ["FastAPI", "React", "TypeScript", "PostgreSQL", "JWT"],
    keyHighlight: "Role-based ticket tracking system with Passlib password hashing and server pagination.",
    github: "https://github.com/hirvak/Ticket-Management-System",
    hasModal: true,
    visualType: "backend-system",
    overview: "Support ticket platform built with role-based access control for Admins, Agents, and Customers.",
    objective: "Track and resolve support issues with clear audit logs.",
    technicalApproach: "FastAPI with Pydantic validation, React TypeScript frontend, and JWT authentication.",
    keyFeatures: [
      "JWT Authentication & Passlib password hashing.",
      "Role-Based Access Control (Admin, Agent, User).",
      "Dynamic filtering, full-text search, and server pagination."
    ],
    challenges: "Maintaining fast queries under growing ticket volume across nested roles.",
    solutions: "FastAPI dependency guards and indexed PostgreSQL join keys."
  },
  {
    id: "transitops",
    title: "TransitOps",
    category: "BACKEND & LOGISTICS",
    subtitle: "Transport operations platform for managing fleet vehicles and logs.",
    technologies: ["FastAPI", "PostgreSQL", "JWT", "SQLAlchemy"],
    keyHighlight: "Fleet tracking system managing vehicle status, fuel logs, and maintenance alerts.",
    github: "https://github.com/hirvak/TransitOps",
    hasModal: false,
    visualType: "operations-logistics"
  },
  {
    id: "top-50-indian-companies-ml",
    title: "Top-50 Indian Companies ML",
    category: "DATA SCIENCE & ANALYTICS",
    subtitle: "Data analysis modeling growth metrics for top Indian firms.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    keyHighlight: "Exploratory data analysis predicting valuation metrics and revenue trends.",
    github: "https://github.com/hirvak/Top-50-Indian-Companies-ML",
    hasModal: false,
    visualType: "data-ml"
  },
  {
    id: "titanic-api",
    title: "Titanic API",
    category: "REST API & ML SERVING",
    subtitle: "Python REST API serving machine learning predictions.",
    technologies: ["FastAPI", "Scikit-Learn", "REST API", "Pydantic"],
    keyHighlight: "FastAPI microservice serving trained binary classification models.",
    github: "https://github.com/hirvak/Titanic-API",
    hasModal: false,
    visualType: "api-service"
  },
  {
    id: "ai-research-agent",
    title: "AI Research Agent",
    category: "AGENTIC AI & LLMS",
    subtitle: "Autonomous agent project exploring multi-step research workflows.",
    technologies: ["Python", "Agentic AI", "LLMs", "LangChain"],
    keyHighlight: "Autonomous agent loops synthesizing web search results into structured summaries.",
    github: "https://github.com/hirvak/AI-Research-Agent",
    hasModal: false,
    visualType: "agentic-ai"
  }
];

export const cloudSkillsList = [
  // Row 1
  { id: "python", name: "Python", category: "Backend", priority: "primary", description: "Building backend systems, automated workflows, and AI scripts", pos: { top: "10%", left: "14%" }, floatClass: "animate-float-1" },
  { id: "fastapi", name: "FastAPI", category: "Backend", priority: "primary", description: "Async REST APIs with Pydantic schema validation", pos: { top: "10%", left: "32%" }, floatClass: "animate-float-2" },
  { id: "postgresql", name: "PostgreSQL", category: "Databases", priority: "primary", description: "Relational database design, indexing, and query tuning", pos: { top: "10%", left: "52%" }, floatClass: "animate-float-1" },
  { id: "react", name: "React", category: "Frontend", priority: "primary", description: "Component-driven web interfaces and state management", pos: { top: "10%", left: "72%" }, floatClass: "animate-float-3" },
  { id: "docker", name: "Docker", category: "Tools", priority: "medium", description: "Containerizing backend services for consistent deployment", pos: { top: "10%", left: "89%" }, floatClass: "animate-float-2" },

  // Row 2
  { id: "cpp", name: "C++", category: "Programming", priority: "medium", description: "Algorithm optimization and data structures", pos: { top: "25%", left: "8%" }, floatClass: "animate-float-3" },
  { id: "flask", name: "Flask", category: "Backend", priority: "medium", description: "Lightweight Python REST microservices", pos: { top: "25%", left: "22%" }, floatClass: "animate-float-1" },
  { id: "mongodb", name: "MongoDB", category: "Databases", priority: "medium", description: "NoSQL document storage for flexible JSON payloads", pos: { top: "25%", left: "38%" }, floatClass: "animate-float-2" },
  { id: "sql", name: "SQL", category: "Databases", priority: "medium", isBadge: true, description: "Relational queries, aggregations, and performance tuning", pos: { top: "25%", left: "54%" }, floatClass: "animate-float-3" },
  { id: "typescript", name: "TypeScript", category: "Frontend", priority: "medium", description: "Type-safe frontend development and interfaces", pos: { top: "25%", left: "70%" }, floatClass: "animate-float-1" },
  { id: "aws", name: "AWS", category: "Cloud", priority: "medium", description: "S3 storage and cloud service deployment", pos: { top: "25%", left: "86%" }, floatClass: "animate-float-2" },

  // Row 3
  { id: "tensorflow", name: "TensorFlow", category: "AI / ML", priority: "primary", description: "Training deep learning models and neural networks", pos: { top: "40%", left: "12%" }, floatClass: "animate-float-2" },
  { id: "numpy", name: "NumPy", category: "Data", priority: "medium", description: "Vector computing and matrix operations", pos: { top: "40%", left: "28%" }, floatClass: "animate-float-1" },
  { id: "pandas", name: "Pandas", category: "Data", priority: "medium", description: "Data manipulation, cleaning, and analysis", pos: { top: "40%", left: "44%" }, floatClass: "animate-float-3" },
  { id: "scikitlearn", name: "Scikit-learn", category: "AI / ML", priority: "medium", description: "Machine learning regression, classification, and metrics", pos: { top: "40%", left: "60%" }, floatClass: "animate-float-2" },
  { id: "github", name: "GitHub", category: "Tools", priority: "primary", description: "Version control, code reviews, and PR workflows", pos: { top: "40%", left: "78%" }, floatClass: "animate-float-1" },
  { id: "vscode", name: "VS Code", category: "Tools", priority: "medium", description: "Primary development IDE configured for Python and React", pos: { top: "40%", left: "92%" }, floatClass: "animate-float-3" },

  // Row 4
  { id: "opencv", name: "OpenCV", category: "AI / ML", priority: "primary", description: "Computer vision filters, pre-processing, and image streams", pos: { top: "55%", left: "10%" }, floatClass: "animate-float-1" },
  { id: "seaborn", name: "Seaborn", category: "Data", priority: "medium", description: "Statistical data visualizations and correlation plots", pos: { top: "55%", left: "26%" }, floatClass: "animate-float-3" },
  { id: "javascript", name: "JavaScript", category: "Frontend", priority: "medium", description: "ES6+ web scripting and dynamic UI logic", pos: { top: "55%", left: "44%" }, floatClass: "animate-float-1" },
  { id: "mernstack", name: "MERN Stack", category: "Frontend", priority: "medium", isBadge: true, description: "Full-stack development with MongoDB, Express, React, Node", pos: { top: "55%", left: "64%" }, floatClass: "animate-float-2" },
  { id: "postman", name: "Postman", category: "Tools", priority: "medium", description: "REST API testing and endpoint verification", pos: { top: "55%", left: "84%" }, floatClass: "animate-float-3" },

  // Row 5
  { id: "yolov8", name: "YOLOv8", category: "AI / ML", priority: "primary", description: "Real-time object detection for vision applications", pos: { top: "70%", left: "12%" }, floatClass: "animate-float-3" },
  { id: "matplotlib", name: "Matplotlib", category: "Data", priority: "medium", description: "Data plots, subplots, and visualization charts", pos: { top: "70%", left: "28%" }, floatClass: "animate-float-1" },
  { id: "html", name: "HTML", category: "Frontend", priority: "medium", description: "Semantic web markup and accessibility standards", pos: { top: "70%", left: "44%" }, floatClass: "animate-float-2" },
  { id: "css", name: "CSS", category: "Frontend", priority: "medium", description: "Tailwind CSS styling and responsive layouts", pos: { top: "70%", left: "58%" }, floatClass: "animate-float-3" },
  { id: "git", name: "Git", category: "Tools", priority: "medium", description: "Version control branching, commits, and repository history", pos: { top: "70%", left: "73%" }, floatClass: "animate-float-1" },
  { id: "azure", name: "Azure", category: "Cloud", priority: "medium", description: "Cloud application hosting and deployment", pos: { top: "70%", left: "88%" }, floatClass: "animate-float-2" },

  // Row 6
  { id: "c", name: "C", category: "Programming", priority: "medium", description: "Memory management, pointers, and CS fundamentals", pos: { top: "85%", left: "10%" }, floatClass: "animate-float-2" },
  { id: "streamlit", name: "Streamlit", category: "Data", priority: "medium", description: "Interactive Python web apps for data science demos", pos: { top: "85%", left: "25%" }, floatClass: "animate-float-1" },
  { id: "jupyternotebook", name: "Jupyter Notebook", category: "Tools", priority: "medium", description: "Exploratory data analysis and ML experiments", pos: { top: "85%", left: "44%" }, floatClass: "animate-float-3" },
  { id: "jwt", name: "JWT", category: "Backend", priority: "medium", isBadge: true, description: "Stateless authentication tokens for user sessions", pos: { top: "85%", left: "66%" }, floatClass: "animate-float-1" },
  { id: "restapis", name: "REST APIs", category: "Backend", priority: "medium", isBadge: true, description: "Resource-oriented HTTP endpoints with JSON payload schemas", pos: { top: "85%", left: "85%" }, floatClass: "animate-float-3" }
];

export const secondarySkillsList = {
  csFundamentals: [
    "Data Structures & Algorithms (DSA)",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems (OS)",
    "Computer Organization & Architecture (COA)",
    "Design & Analysis of Algorithms (DAA)"
  ],
  secondaryStack: [
    "C", "HTML", "CSS", "JavaScript", "JWT", "MERN Stack", 
    "Seaborn", "Jupyter Notebook", "Machine Learning", 
    "AI Fundamentals", "Computer Vision"
  ]
};

export const openSourceContribution = {
  project: "DYNAVEC",
  subtitle: "Open-source serverless hybrid vector database for AWS",
  contributionTags: [
    "Hash determinism",
    "UTC timestamps",
    "Unicode handling",
    "Metadata validation",
    "Edge cases"
  ],
  githubUrl: "https://github.com/hirvak"
};

export const achievementsVisual = [
  { title: "Rank 45 in DDCET 2025", subtext: "Gujarat State Competitive Exam" },
  { title: "Odoo Hackathon", subtext: "National Finalist" },
  { title: "BREACH Hackathon", subtext: "Anirveda PDEU Technical Challenge Participant" },
  { title: "Open Source", subtext: "Dynavec AWS Vector Database Contributor" }
];

export const collaborationVisual = {
  headline: "Building software is better together.",
  items: [
    { title: "TEAMWORK", tags: "Hackathons · Internships" },
    { title: "COMMUNICATION", tags: "Code reviews · Technical discussions" },
    { title: "OPEN SOURCE", tags: "Issues · PRs · Testing" }
  ],
  playfulLine: "Build together. Test together. Fix together."
};

export const debuggingQuotes = [
  "How do I make distributed systems behave on the first try?",
  "Works on my machine.",
  "It was the database query.",
  "One more print statement...",
  "Have you tried restarting the dev server?"
];

export const contactVisual = {
  title: "Let's Build Something",
  quote: "Have an idea, project, bug, or complex API to build?",
  ctaLine: "Let's talk."
};

export const futureGoalsVisual = {
  title: "Future Aspirations",
  badge: "FUTURE ASPIRATIONS & ROADMAP",
  domains: ["SYSTEMS ARCHITECTURE", "DISTRIBUTED BACKENDS", "AGENTIC AI"],
  timeline: [
    {
      stage: "NOW",
      title: "Current Foundation",
      status: "Active Focus",
      color: "emerald",
      tech: ["FastAPI", "PostgreSQL", "YOLOv8", "React"],
      description: "Building async REST APIs, relational schema models, and computer vision integration pipelines."
    },
    {
      stage: "NEXT",
      title: "Learning & Expanding",
      status: "In Progress",
      color: "amber",
      tech: ["Agentic Systems", "Distributed Data Stores", "Redis Caching"],
      description: "Exploring autonomous multi-step LLM agents, asynchronous worker queues, and caching layers."
    },
    {
      stage: "GOAL",
      title: "Career Aspirations",
      status: "Target Impact",
      color: "blue",
      tech: ["Production Systems Architecture", "Cloud Infrastructure", "Scalable AI Services"],
      description: "Architecting high-throughput backend infrastructure, fault-tolerant distributed services, and real-world AI applications."
    }
  ],
  github: {
    username: "hirvak",
    profileUrl: "https://github.com/hirvak",
    contributionsLabel: "Active Contributions on GitHub"
  },
  learningCertifications: [
    {
      name: "Deep Learning & Computer Vision",
      detail: "YOLOv8 custom weight fine-tuning, OpenCV image processing"
    },
    {
      name: "CI/CD & Jenkins",
      detail: "Build pipelines, automated testing, deployment workflows"
    }
  ]
};


export const advancedHighlights = [
  {
    title: "Backend API Engineering",
    stack: "FastAPI · Pydantic · REST",
    description: "Designing structured REST APIs with async execution, strict data validation, and clear status codes."
  },
  {
    title: "Computer Vision & ML",
    stack: "YOLOv8 · OpenCV · TensorFlow",
    description: "Building image processing workflows and object detection pipelines for real-world visual applications."
  },
  {
    title: "Relational Data Modeling",
    stack: "PostgreSQL · SQLAlchemy · SQL",
    description: "Structuring schema models, writing indexed SQL queries, and managing data integrity across backend tables."
  },
  {
    title: "System & Support Tooling",
    stack: "JWT · Passlib · React",
    description: "Implementing authentication, role-based access control (RBAC), and interactive management interfaces."
  }
];

export const codeSnippet = {
  filename: "app/api/v1/routes/tickets.py",
  title: "FastAPI Async Ticket Endpoint",
  code: `@router.post("/tickets", response_model=TicketResponse, status_code=status.HTTP_201_CREATED)
async def create_ticket(
    payload: TicketCreateSchema,
    db: AsyncSession = Depends(get_async_db),
    current_user: User = Depends(get_current_active_user)
):
    """
    Create a support ticket with role validation and audit logging.
    """
    new_ticket = Ticket(
        title=payload.title,
        description=payload.description,
        priority=payload.priority,
        created_by_id=current_user.id,
        status=TicketStatus.OPEN
    )
    db.add(new_ticket)
    await db.commit()
    await db.refresh(new_ticket)
    return new_ticket`
};




