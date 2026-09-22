export const profile = {
  name: "Aditeya Varma Kalidindi",
  firstLine: "ADITEYA VARMA",
  secondLine: "KALIDINDI",
  location: "Los Angeles, CA",
  status: "Open to full-time Software Engineering roles",
  tagline:
    "I build software that solves real problems: real-time telemetry pipelines at Amazon, concurrency fixes in open-source Go internals, and agentic AI systems for domain-specific reasoning.",
  email: "aditeya.varma@gmail.com",
  github: "https://github.com/aditeya08varma",
  linkedin: "https://linkedin.com/in/aditeyavarma08",
};

export const terminalLines = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "Software Engineer, MS in CS @ USC" },
  { prompt: true, text: "cat current_focus.txt" },
  { prompt: false, text: "Open Source Contributor @ sageox/ox" },
  { prompt: true, text: "ls skills/" },
  { prompt: false, text: "python go typescript c++ kubernetes aws react" },
  { prompt: true, text: "grep -i status availability.log" },
  { prompt: false, text: "[OPEN] Full-time Software Engineering roles", accent: true },
];

export const tagPills = [
  { plus: true, text: "Software Engineer" },
  { plus: false, text: "Systems & Backend" },
  { plus: true, text: "USC MS in CS" },
  { plus: false, text: "Open Source Contributor" },
];

export const about = [
  "I'm a Software Engineer with a Master's in Computer Science from the University of Southern California. I recently completed a Software Development Engineer internship at Amazon in San Diego, where I built telemetry and testing infrastructure on AWS for a backend engineering team.",
  "I'm an active open-source contributor to sageox/ox, a Go CLI used across coding agents, where I've fixed concurrency races, database corruption bugs, and git-internals edge cases through several merged pull requests.",
  "My personal projects span backend systems, networking, and applied AI: a multi-threaded TCP proxy and DNS resolver built directly on raw POSIX sockets, and Janus, an agentic RAG system that reasons over Formula 1 technical regulations using LangGraph and Pinecone.",
  "I'm passionate about systems programming, distributed infrastructure, and building tools other engineers actually rely on, and I'm always looking to learn, build, and improve.",
];

export const education = [
  {
    school: "University of Southern California",
    degree: "Master of Science in Computer Science",
    meta: "GPA: 3.9 · Los Angeles, CA",
    dates: "Aug 2024 – May 2026",
  },
  {
    school: "D Y Patil University",
    degree: "B.Tech in Computer Engineering",
    meta: "India",
    dates: "2020 – 2024",
  },
  {
    school: "IIT Madras",
    degree: "Diploma in Programming and Data Science",
    meta: "India",
    dates: "2020 – 2023",
  },
];

export const publications = [
  {
    title: "Multi-modal Morse Code Translator",
    venue: "ICICBDA 2024 · Springer CCIS vol. 2234 · First online Dec 2024",
    description:
      "Sensory Morse interpretation using light input: Arduino UNO, photoresistors, and modular signal processing for more inclusive communication.",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-74682-6_2",
  },
  {
    title: "Comparative Analysis of CNN Models For Insect Detection System",
    venue: "ICICBDA 2024 · Springer CCIS vol. 2234 · First online Dec 2024",
    description:
      "Benchmarks CNN architectures for agricultural insect detection to support sustainable farming and IPM-style pest control.",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-74682-6_15",
  },
  {
    title: "Peer-reviewed journal article",
    venue: "IJAET · Vol. 5, Issue 4 · Dec 2023",
    description: "Engineering research, open access PDF.",
    link: "https://romanpub.com/resources/ijaet20v5-4-2023-57.pdf",
  },
];

export const experience = [
  {
    role: "Software Development Engineer Intern",
    org: "Amazon",
    location: "San Diego, CA",
    dates: "May 2025 – Aug 2025",
    bullets: [
      "Accelerated data processing as measured by a 22% reduction in ETL pipeline latency, by refactoring Scala-based query generation templates for Neo4j.",
      "Prevented production defects as measured by intercepting 98% of performance regressions prior to release, by building a serverless log analysis pipeline using AWS EMR and DynamoDB.",
      "Achieved high-fidelity system observability as measured by zero data ingestion loss for critical metrics, by architecting a distributed telemetry pipeline using AWS SQS and CloudWatch.",
      "Shortened deployment validation cycles as measured by a reduction in debugging time from days to minutes, by developing a scalable testing framework using AWS CDK and TypeScript.",
    ],
    tags: ["Scala", "Neo4j", "AWS EMR", "DynamoDB", "SQS", "CloudWatch", "AWS CDK", "TypeScript"],
  },
  {
    role: "Open Source Contributor",
    org: "sageox/ox",
    location: "Remote",
    dates: "2026 – Present",
    bullets: [
      "Eliminated silent database corruption as measured by zero concurrent ALTER TABLE crashes, by implementing an idempotent SQLite schema migration pattern to handle check-then-act race conditions.",
      "Guaranteed deterministic concurrency testing as measured by the reliable reproduction of microsecond-wide race windows, by engineering a two-phase Go channel barrier to synchronize and release goroutines.",
      "Closed a data-loss gap in git stash pop as measured by intercepting 100% of unresolved conflicts, by validating staged index blobs instead of working-tree state.",
      "Hardened version control safety as measured by the accurate resolution of staged file renames and ambiguous path syntaxes, by parsing NUL-delimited git diff outputs across daemon and CLI paths.",
    ],
    tags: ["Go", "SQLite", "Git Internals", "Concurrency"],
  },
  {
    role: "Data Science Intern",
    org: "Homecentre, Landmark Group",
    location: "Bengaluru, India",
    dates: "Jan 2024 – May 2024",
    bullets: [
      "Scaled competitor pricing intelligence as measured by 99.5% data consistency across 1,000+ SKUs, by building a JavaScript web-scraping engine featuring custom retry logic and proxy rotation.",
      "Drove category revenue growth as measured by a 7.6% uplift, by analyzing 500k+ weekly transactions across 95+ locations to identify attribute-based purchasing correlations.",
      "Streamlined inventory operations as measured by the consolidation of 95 individual store pipelines into 4 unified streams, by implementing an attribute-based clustering framework.",
    ],
    tags: ["JavaScript", "Data Engineering", "Clustering"],
  },
];

export const featuredProjects = [
  {
    name: "Janus 2.0",
    subtitle: "Agentic AI Regulation System",
    description:
      "An AI system that reasons over complex FIA technical regulations, with a metadata-filtered retrieval pipeline, thread-isolated multi-agent memory, and a streaming interface.",
    bullets: [
      "Resolved reasoning conflicts across complex FIA technical frameworks as measured by a 90% Answer Relevancy score on 20-query evaluation benchmarks, by architecting a metadata-filtered retrieval pipeline and automating tests via the Ragas framework.",
      "Enabled durable, long-term multi-agent reasoning as measured by accurate thread-isolated session memory across distributed users, by engineering a stateful agentic system using LangGraph and an external Redis (RedisSaver) persistence layer.",
      "Reduced perceived LLM latency and improved execution transparency as measured by low-latency state updates of tool calls and reasoning graphs, by developing a streaming React 19 interface powered by Server-Sent Events (SSE).",
    ],
    tags: ["Python", "LangGraph", "RAG", "Pinecone", "Redis", "React"],
    repo: "https://github.com/aditeya08varma/Janus",
    live: "https://janus-frontend-ncie.onrender.com/",
  },
  {
    name: "Media Partner Ingestion Validator",
    subtitle: "TV/Media Partner Feed Validation",
    description:
      "A self-service tool that validates TV/media partner schedule metadata and manifests against platform ingestion standards before they go live.",
    bullets: [
      "Cut manual partner-feed review errors to zero as measured by the automated enforcement of 51 structural and semantic compliance rules with line-numbered reporting, by engineering dual-schema validators for metadata and HLS/DASH manifests in Python.",
      "Validated real-time media availability against Apple and Akamai CDNs as measured by the concurrent verification of rendition ladders, by building an asynchronous network probing engine using FastAPI and httpx.",
      "Delivered deterministic defect detection prior to partner onboarding as measured by a 100% pass rate (22/22) on the integration test suite, by authoring tests utilizing in-process ASGI transport.",
    ],
    tags: ["Python", "FastAPI", "HLS/DASH", "Validation"],
    repo: "https://github.com/aditeya08varma/tv-partner-ingestion-validator",
  },
  {
    name: "Traffic Analyzer & Caching DNS Proxy",
    subtitle: "Multi-Threaded Network Tooling",
    description:
      "A multi-threaded forward/transparent TCP proxy and caching DNS resolver built directly on raw POSIX socket primitives, with a Scapy + pytest fault-injection harness.",
    bullets: [
      "Supported highly concurrent network stream inspection as measured by resilient handling of client resets and graceful teardowns (SHUT_RDWR), by engineering a multi-threaded TCP proxy utilizing select()-based bidirectional I/O and POSIX sockets.",
      "Decreased repeat domain resolution latency as measured by accelerated downstream cache hits, by implementing a zero-dependency RFC 1035 DNS wire-parser featuring a thread-safe LRU/TTL cache.",
      "Ensured proxy resilience against network anomalies as measured by a 36-test deterministic suite (34 passing unprivileged, 2 requiring root), by authoring automated fault-injection pipelines using PyTest and Scapy.",
    ],
    tags: ["Python", "POSIX Sockets", "DNS", "Scapy", "PyTest"],
    repo: "https://github.com/aditeya08varma/traffic-analyzer-proxy",
  },
];

export const moreProjects = [
  {
    name: "darwin-server-runtime",
    description:
      "Native Darwin process isolation runtime for macOS. Seatbelt sandboxing, launchd-managed daemon, and Mach-level telemetry, built to avoid Docker's Linux VM overhead on Apple Silicon.",
    tags: ["Swift", "macOS", "Sandboxing", "launchd"],
    repo: "https://github.com/aditeya08varma/darwin-server-runtime",
  },
  {
    name: "voyager",
    description:
      "Real-time video frame processing pipeline with AI inference caching: Kafka, PyFlink, Redis, and MobileNetV2 embeddings, instrumented with Prometheus/Grafana.",
    tags: ["Kafka", "PyFlink", "Redis", "Computer Vision"],
    repo: "https://github.com/aditeya08varma/voyager",
  },
  {
    name: "nba-lineup-explorer",
    description:
      "NBA lineup analytics over real 2024-25 play-by-play data: Django/Postgres backend, Angular frontend.",
    tags: ["Django", "Angular", "PostgreSQL", "Sports Analytics"],
    repo: "https://github.com/aditeya08varma/nba-lineup-explorer",
  },
  {
    name: "readcoach",
    description:
      "Live voice AI reading tutor for grades 1-3, built for the Nerdy AI Hackathon.",
    tags: ["Voice AI", "Education", "Python"],
    repo: "https://github.com/aditeya08varma/readcoach",
  },
  {
    name: "network-topology-simulator",
    description:
      "Automated virtual network lab on Linux network namespaces and Open vSwitch, with a from-scratch DHCP state machine and link-state routing protocol.",
    tags: ["Networking", "Linux", "DHCP", "Routing"],
    repo: "https://github.com/aditeya08varma/network-topology-simulator",
  },
];

export const skills = [
  { label: "Languages", items: ["Go", "TypeScript", "Python", "C++", "SQL", "Bash"] },
  { label: "AI & Automation", items: ["LangGraph", "LLM APIs", "Prompt Engineering", "GitHub Actions", "CI/CD"] },
  { label: "Infrastructure & Backend", items: ["Kubernetes", "Docker", "AWS (CDK, EMR, SQS)", "OpenTelemetry", "Redis"] },
  { label: "Networking & Testing", items: ["TCP/IP", "POSIX Sockets", "DNS", "PyTest", "Scapy"] },
];
