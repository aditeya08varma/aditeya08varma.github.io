export const profile = {
  name: "Aditeya Varma",
  firstLine: "ADITEYA",
  secondLine: "VARMA",
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
    meta: "GPA: 3.67 · Los Angeles, CA",
    dates: "Aug 2024 – May 2026",
  },
  {
    school: "D Y Patil University",
    degree: "B.Tech in Computer Engineering",
    meta: "GPA: 3.9 · India",
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
    role: "Open Source Contributor",
    org: "sageox/ox",
    location: "Remote",
    dates: "Aug 2026 – Present",
    bullets: [
      "Eliminated silent database corruption as measured by zero concurrent ALTER TABLE crashes, by implementing an idempotent SQLite schema migration pattern to handle check-then-act race conditions.",
      "Guaranteed deterministic concurrency testing as measured by the reliable reproduction of microsecond-wide race windows, by engineering a two-phase Go channel barrier to synchronize and release goroutines.",
      "Closed a data-loss gap in git stash pop as measured by intercepting 100% of unresolved conflicts, by validating staged index blobs instead of working-tree state.",
      "Hardened version control safety as measured by the accurate resolution of staged file renames and ambiguous path syntaxes, by parsing NUL-delimited git diff outputs across daemon and CLI paths.",
    ],
    tags: ["Go", "SQLite", "Git Internals", "Concurrency"],
  },
  {
    role: "Graduate Research Assistant",
    org: "USC School of Advanced Computing",
    location: "Los Angeles, CA",
    dates: "Jul 2026 – Present",
    bullets: [],
    tags: [],
  },
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
    subtitle: "Native macOS Process Isolation Runtime",
    description:
      "Native Darwin process isolation runtime for macOS. Seatbelt sandboxing, launchd-managed daemon, and Mach-level telemetry, built to avoid Docker's Linux VM overhead on Apple Silicon.",
    bullets: [
      "Slashed container overhead and startup latency as measured by a 55.4 ms cold-spawn (2.3x faster than Colima) and a 2.9 MB idle footprint (160x smaller than Docker), by engineering a native Darwin process isolation runtime in Swift and C using launchd and Seatbelt (sandbox-exec).",
      "Secured the image ingestion pipeline as measured by cryptographic verification of 100% of pulled bundles, by integrating libarchive path-traversal guards, Ed25519 manifest signatures, and a default-on Seatbelt sandbox for process execution.",
      "Instrumented real-time system observability for isolated workloads as measured by the accurate streaming of true process memory (phys_footprint) and CPU usage, by architecting a telemetry daemon that polls Mach task_info APIs and exports via OTLP/HTTP.",
    ],
    tags: ["Swift", "macOS", "Sandboxing", "launchd"],
    repo: "https://github.com/aditeya08varma/darwin-server-runtime",
  },
  {
    name: "voyager",
    subtitle: "Real-Time Video Processing Pipeline",
    description:
      "Real-time video frame processing pipeline with AI inference caching: Kafka, PyFlink, Redis, and MobileNetV2 embeddings, instrumented with Prometheus/Grafana.",
    bullets: [
      "Engineered real-time stream processing for multi-camera video feeds against a sub-50ms per-frame latency target across decode and inference stages, by building a distributed pipeline using a 6-partition Apache Kafka topic and PyFlink.",
      "Lowered redundant MobileNetV2 inference calls as measured by a 75% cache hit rate on a controlled repeat-frame benchmark, by engineering a perceptual dHash embedding cache with Redis and Hamming-distance fuzzy matching.",
      "Surfaced pipeline health as measured by real-time P50/P95/P99 latency and producer throughput dashboards, by building Prometheus and Grafana instrumentation alongside an automated stress-test suite.",
    ],
    tags: ["Kafka", "PyFlink", "Redis", "Computer Vision"],
    repo: "https://github.com/aditeya08varma/voyager",
  },
  {
    name: "nba-lineup-explorer",
    subtitle: "NBA Possession-Level Lineup Analytics",
    description:
      "NBA lineup analytics over real 2024-25 play-by-play data: Django/Postgres backend, Angular frontend.",
    bullets: [
      "Reconstructed full 2024-25 season play-by-play into possession-level lineup data as measured by exact agreement with the official box score for points, steals, and blocks on a validation game, by deriving on-court 5-man lineups from the NBA's GameRotation endpoint instead of parsing substitution text.",
      "Corrected home/away team labeling across all 1,230 games in the ingested season as measured by 5 games with identical matchup strings on both team-perspective rows, by resolving each game's home/away assignment from team-abbreviation lookups instead of the raw matchup string.",
      "Exposed 7 independently sortable lineup rankings computed live across 272,934 raw possessions, by streaming Postgres query results through Django's chunked iterator instead of materializing the season into memory.",
    ],
    tags: ["Django", "Angular", "PostgreSQL", "Sports Analytics"],
    repo: "https://github.com/aditeya08varma/nba-lineup-explorer",
  },
  {
    name: "readcoach",
    subtitle: "Live Voice AI Reading Tutor (Nerdy AI Hackathon)",
    description:
      "Live voice AI reading tutor for grades 1-3, built for the Nerdy AI Hackathon.",
    bullets: [
      "Diagnosed reading miscues as measured by 90.5% accuracy (95/105) on hand-labeled test cases, by building a custom Wagner-Fischer edit-distance alignment engine with self-correction detection requiring no LLM calls per word.",
      "Held per-call LLM response time to a P50 of 1.8s and P95 of 2.7s across pooled hint, question, and grading calls, by tiering Claude models: Haiku for hints and fast checks, Sonnet for questions and grading.",
      "Patched a confirmed lost-update race in per-skill mastery scoring as measured by results matching to six decimal places across 8 concurrent sessions, by replacing a read-then-write Python blend with a single atomic Postgres upsert.",
    ],
    tags: ["Voice AI", "Education", "Python"],
    repo: "https://github.com/aditeya08varma/readcoach",
  },
  {
    name: "network-topology-simulator",
    subtitle: "From-Scratch Virtual Network Lab",
    description:
      "Automated virtual network lab on Linux network namespaces and Open vSwitch, with a from-scratch DHCP state machine and link-state routing protocol.",
    bullets: [
      "Verified protocol correctness of a from-scratch DHCP handshake and wire codec as measured by 15 passing tests (3 requiring root, skipped here) with zero failures across Discover/Offer/Request/Ack and lease-expiration cases, by round-tripping hand-packed BOOTP frames through a custom parser over a loopback transport.",
      "Recomputed link-state routing tables after a simulated link failure as measured by a 1.92-microsecond median Dijkstra reconvergence time across 1,000 trials on a 4-router topology, by rerunning Dijkstra's algorithm over the topology graph inside a link-failure handler.",
      "Blocked double-allocation of a single DHCP lease across concurrent clients as measured by a database-enforced UNIQUE constraint violation on any conflicting insert, by committing lease writes as atomic SQLite transactions.",
    ],
    tags: ["Networking", "Linux", "DHCP", "Routing"],
    repo: "https://github.com/aditeya08varma/network-topology-simulator",
  },
];

export const openSource = {
  repo: "sageox/ox",
  repoUrl: "https://github.com/sageox/ox",
  description:
    "Active open-source contributor to sageox/ox, a Go CLI used across coding agents. Found and fixed real concurrency bugs, database corruption, and git-internals edge cases in a live, actively maintained codebase.",
  mergedPRs: 3,
  pullRequests: [
    {
      number: 792,
      title: "fix(codedb): tolerate concurrent schema migrations",
      url: "https://github.com/sageox/ox/pull/792",
      additions: 202,
      deletions: 9,
      story: "https://github.com/aditeya08varma/OSC/blob/master/OSC1.md",
    },
    {
      number: 811,
      title: "fix(ledger): refuse to auto-commit unresolved conflict markers",
      url: "https://github.com/sageox/ox/pull/811",
      additions: 600,
      deletions: 0,
      story: "https://github.com/aditeya08varma/OSC/blob/master/OSC2.md",
    },
    {
      number: 859,
      title: "fix(session): stop go test recursively re-invoking itself via inline prime",
      url: "https://github.com/sageox/ox/pull/859",
      additions: 90,
      deletions: 0,
      story: "https://github.com/aditeya08varma/OSC/blob/master/OSC3.md",
    },
  ],
};

export const skills = [
  { label: "Languages", items: ["Go", "TypeScript", "Python", "C++", "SQL", "Bash"] },
  { label: "AI & Automation", items: ["LangGraph", "LLM APIs", "Prompt Engineering", "GitHub Actions", "CI/CD"] },
  { label: "Infrastructure & Backend", items: ["Kubernetes", "Docker", "AWS (CDK, EMR, SQS)", "OpenTelemetry", "Redis"] },
  { label: "Networking & Testing", items: ["TCP/IP", "POSIX Sockets", "DNS", "PyTest", "Scapy"] },
];
