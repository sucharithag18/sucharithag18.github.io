/* =====================================================
   projects.js — All 22 portfolio projects
   ===================================================== */


/* ── PROJECTS DATA ── */

const P = [

  {
    t: "Autonomous AI Code Repair Platform",
    c: "ai",
    m: "Issue-to-patch · sandbox validation",
    icon: "🤖",

    d:
      "LangGraph-based multi-agent system that ingests GitHub issues, generates search/replace patches, and validates changes in isolated Docker sandboxes using pytest, Ruff, and Mypy with retry loops and SQLite checkpointing.",

    s: [
      "LangGraph",
      "LiteLLM",
      "Docker",
      "GitHub API",
      "Pytest",
      "Ruff",
      "SQLite"
    ],

    u:
      "https://github.com/sucharithag18/autonomous-ai-code-repair-platform"
  },


  {
    t: "RAG Document Intelligence Platform",
    c: "ai",
    m: "PDF ingestion · semantic Q&A",
    icon: "📄",

    d:
      "Full-stack RAG system for PDF ingestion and semantic question answering using FastAPI, LlamaIndex, Pinecone, Hugging Face embeddings, LangChain text chunking, and configurable Mistral/OpenAI LLMs.",

    s: [
      "FastAPI",
      "LlamaIndex",
      "Pinecone",
      "HuggingFace",
      "LangChain",
      "Mistral/OpenAI"
    ],

    u:
      "https://github.com/sucharithag18/rag-document-intelligence-platform"
  },


  {
    t: "Agentic Research Workflow Platform",
    c: "ai",
    m: "Multi-agent · self-correcting",
    icon: "🔍",

    d:
      "Self-correcting LangGraph workflow that decomposes queries, retrieves web evidence through Tavily, verifies confidence, retries weak results, and synthesizes citation-grounded answers.",

    s: [
      "LangGraph",
      "FastAPI",
      "React",
      "Ollama",
      "Tavily"
    ],

    u:
      "https://github.com/sucharithag18/agentic-research-workflow-platform"
  },


  {
    t: "Context-Aware Browser Assistant",
    c: "ai",
    m: "100% local · zero API calls",
    icon: "🌐",

    d:
      "Privacy-first Chrome extension using local Llama 3.2 inference for webpage summarization, contextual Q&A, and right-click text explanation on-device.",

    s: [
      "React",
      "TypeScript",
      "Chrome MV3",
      "Ollama",
      "Llama 3.2"
    ],

    u:
      "https://github.com/sucharithag18/context-aware-browser-assistant"
  },


  {
    t: "Multimodal Audio Generation Platform",
    c: "ai",
    m: "~40% CLAPScore improvement at n=5",
    icon: "🎵",

    d:
      "Generates multiple audio candidates per text prompt using AudioLDM, scores them with CLAP text-audio alignment, and returns the strongest candidate without retraining.",

    s: [
      "PyTorch",
      "AudioLDM",
      "CLAP",
      "Diffusers",
      "HuggingFace"
    ],

    u:
      "https://github.com/sucharithag18/multimodal-audio-generation-platform"
  },


  {
    t: "Real-Time IoT Air Quality Pipeline",
    c: "de",
    m: "1,000+ events/min · <5s latency",
    icon: "⚡",

    d:
      "Kafka and Spark Structured Streaming pipeline with MongoDB for high-frequency IoT sensor processing, pollutant metrics, and real-time alerting.",

    s: [
      "Kafka",
      "Spark",
      "MongoDB",
      "Python",
      "Docker"
    ],

    u:
      "https://github.com/sucharithag18/real-time-iot-air-quality-pipeline"
  },


  {
    t: "Formula 1 Predictive Analytics Platform",
    c: "de",
    m: "API ingestion → BI dashboards",
    icon: "🏎️",

    d:
      "End-to-end analytics workflow with API ingestion, PostgreSQL warehousing, dbt feature marts, XGBoost prediction, Airflow orchestration, and BI dashboards.",

    s: [
      "PostgreSQL",
      "dbt",
      "Airflow",
      "XGBoost",
      "Power BI",
      "Tableau"
    ],

    u:
      "https://github.com/sucharithag18/formula1-predictive-analytics-platform"
  },


  {
    t: "MovieLens Data Warehouse",
    c: "de",
    m: "Star schema · 1 fact, 3 dims",
    icon: "🎬",

    d:
      "PostgreSQL star-schema warehouse with Python ETL, staging tables, dimensional modeling, analytical SQL, and Tableau dashboards for ratings and user behavior.",

    s: [
      "PostgreSQL",
      "Python",
      "SQL",
      "Tableau",
      "ETL"
    ],

    u:
      "https://github.com/sucharithag18/movielens-data-warehouse"
  },


  {
    t: "StreamFlix DB Performance Optimization",
    c: "de",
    m: "Up to 96.4% query improvement",
    icon: "📺",

    d:
      "PostgreSQL query optimization project using indexing, partitioning, EXPLAIN ANALYZE profiling, and Docker-based benchmarking.",

    s: [
      "PostgreSQL",
      "Indexing",
      "Partitioning",
      "Docker"
    ],

    u:
      "https://github.com/sucharithag18/streamflix-db-performance-optimization"
  },


  {
    t: "Hadoop E-Commerce Analytics",
    c: "de",
    m: "Dockerized cluster · MapReduce",
    icon: "🛒",

    d:
      "Dockerized Hadoop cluster using HDFS and YARN with MRJob MapReduce workflows for transaction analysis and high-value customer identification.",

    s: [
      "Hadoop",
      "HDFS",
      "YARN",
      "MRJob",
      "Docker"
    ],

    u:
      "https://github.com/sucharithag18/hadoop-ecommerce-analytics"
  },


  {
    t: "AI Retail Demand Forecasting",
    c: "ds",
    m: "10,000+ training timesteps",
    icon: "📈",

    d:
      "Temporal Fusion Transformer forecasting with PPO reinforcement learning for demand prediction, pricing simulation, revenue optimization, and SHAP-based explainability.",

    s: [
      "PyTorch",
      "TFT",
      "PPO",
      "Reinforcement Learning",
      "SHAP"
    ],

    u:
      "https://github.com/sucharithag18/ai-retail-demand-forecasting-dynamic-pricing"
  },


  {
    t: "ECG Anomaly Detection VAE",
    c: "ds",
    m: "0.96 AUC",
    icon: "🫀",

    d:
      "Unsupervised ECG anomaly detection using a Variational Autoencoder and reconstruction-error classification on cardiac time-series data.",

    s: [
      "PyTorch",
      "VAE",
      "Reconstruction Error",
      "ROC-AUC"
    ],

    u:
      "https://github.com/sucharithag18/ecg-anomaly-detection-vae"
  },


  {
    t: "Mental Health Risk Prediction",
    c: "ds",
    m: "83.3% validation recall",
    icon: "🧠",

    d:
      "XGBoost-based risk classification exposed through a containerized Flask REST API for real-time prediction.",

    s: [
      "XGBoost",
      "Flask",
      "Docker",
      "Scikit-learn"
    ],

    u:
      "https://github.com/sucharithag18/mental-health-risk-prediction-system"
  },


  {
    t: "Obesity Classification ML",
    c: "ds",
    m: "91.8% SVM accuracy",
    icon: "⚕️",

    d:
      "Multi-class lifestyle obesity classification using SVM with feature-selection experiments through RFE and SelectKBest.",

    s: [
      "Scikit-learn",
      "SVM",
      "Random Forest",
      "RFE"
    ],

    u:
      "https://github.com/sucharithag18/obesity-classification-ml"
  },


  {
    t: "Sign Language Recognition CNN",
    c: "ds",
    m: "98.93% accuracy · 24 ASL classes",
    icon: "🤟",

    d:
      "Custom PyTorch CNN for classification across 24 ASL gesture classes using the Sign Language MNIST dataset.",

    s: [
      "PyTorch",
      "CNN",
      "Computer Vision"
    ],

    u:
      "https://github.com/sucharithag18/sign-language-recognition-cnn"
  },


  {
    t: "Air Pollution & Life Expectancy",
    c: "bi",
    m: "4 global datasets integrated",
    icon: "🌍",

    d:
      "Interactive Tableau analysis connecting PM2.5, GDP per capita, life expectancy, and public-health expenditure across global datasets.",

    s: [
      "Tableau",
      "Data Visualization",
      "EDA"
    ],

    u:
      "https://github.com/sucharithag18/air-pollution-life-expectancy-analysis"
  },


  {
    t: "Advertising Campaign Analysis",
    c: "bi",
    m: "A/B test + regression",
    icon: "📣",

    d:
      "Retargeting campaign analysis using treatment/control comparison, conversion analysis, cross-tabulation, and regression to evaluate campaign lift.",

    s: [
      "R",
      "A/B Testing",
      "Regression"
    ],

    u:
      "https://github.com/sucharithag18/advertising-campaign-analysis"
  },


  {
    t: "Fake News Detection ML",
    c: "nlp",
    m: "93.4% accuracy",
    icon: "📰",

    d:
      "TF-IDF classification pipeline comparing SVM, Logistic Regression, and Naive Bayes on the WELFake dataset.",

    s: [
      "NLP",
      "TF-IDF",
      "SVM",
      "Scikit-learn"
    ],

    u:
      "https://github.com/sucharithag18/fake-news-detection-ml"
  },


  {
    t: "AI-Generated Text Detection",
    c: "nlp",
    m: "BERT + perplexity scoring",
    icon: "🔎",

    d:
      "Uses BERT embeddings, cosine similarity, readability metrics, and perplexity/burstiness signals to distinguish human and AI-generated text.",

    s: [
      "BERT",
      "Pinecone",
      "Streamlit"
    ],

    u:
      "https://github.com/sucharithag18/ai-generated-text-detection-system"
  },


  {
    t: "Multi-Region Fleet IoT DB",
    c: "db",
    m: "3-node geo-partitioned cluster",
    icon: "🌐",

    d:
      "Three-node CockroachDB project exploring geo-partitioned regional data, distributed joins, and EXPLAIN DISTSQL analysis.",

    s: [
      "CockroachDB",
      "Docker",
      "SQL"
    ],

    u:
      "https://github.com/sucharithag18/multi-region-fleet-iot-database-architecture"
  },


  {
    t: "Fleet Telemetry Cassandra Platform",
    c: "db",
    m: "Query-first schema design",
    icon: "🗄️",

    d:
      "Query-first Cassandra schema for fleet IoT telemetry with CAP-theorem comparison against CockroachDB.",

    s: [
      "Cassandra",
      "CQL",
      "Docker"
    ],

    u:
      "https://github.com/sucharithag18/fleet-telemetry-cassandra-platform"
  },


  {
    t: "Fleet Telemetry MongoDB Platform",
    c: "db",
    m: "Aggregation pipelines + indexing",
    icon: "📦",

    d:
      "Document-oriented MongoDB redesign using aggregation pipelines, indexing strategies, and consistency-propagation demonstrations.",

    s: [
      "MongoDB",
      "JavaScript",
      "Docker"
    ],

    u:
      "https://github.com/sucharithag18/fleet-telemetry-mongodb-platform"
  }

];


/* ── CATEGORY STYLES ── */

const CL = {

  de: "b-de",
  ai: "b-ai",
  ds: "b-ds",
  bi: "b-bi",
  db: "b-db",
  nlp: "b-nlp"

};


const CN = {

  de: "Data Eng",
  ai: "AI / GenAI",
  ds: "Data Science",
  bi: "Analytics & BI",
  db: "Databases",
  nlp: "NLP / CV"

};


const IB = {

  de: "rgba(91,184,245,.14)",
  ai: "rgba(212,168,67,.14)",
  ds: "rgba(155,123,255,.13)",
  bi: "rgba(62,203,176,.12)",
  db: "rgba(240,123,107,.12)",
  nlp: "rgba(244,114,182,.12)"

};


/* ── RENDER PROJECTS ── */

function render(cat) {

  const grid =
    document.getElementById("pgrid");


  const filtered =
    cat === "all"
      ? P
      : P.filter(project =>
          project.c === cat
        );


  document
    .getElementById("pcount")
    .textContent =
      filtered.length +
      (
        filtered.length === 1
          ? " repository"
          : " repositories"
      );


  grid.innerHTML =
    filtered
      .map(project => `

        <a
          class="pc"
          href="${project.u}"
          target="_blank"
          rel="noopener"
          data-c="${project.c}"
        >

          <div class="pc-inner">

            <div class="pc-top">

              <span
                class="pc-badge ${CL[project.c]}"
              >
                ${CN[project.c]}
              </span>


              <svg
                class="pc-ext"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                width="13"
                height="13"
              >

                <path
                  d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
                />

                <polyline
                  points="15 3 21 3 21 9"
                />

                <line
                  x1="10"
                  y1="14"
                  x2="21"
                  y2="3"
                />

              </svg>

            </div>


            <div
              class="pc-icon"
              style="
                background:${IB[project.c]}
              "
            >
              ${project.icon}
            </div>


            <div class="pc-title">
              ${project.t}
            </div>


            ${
              project.m
                ? `
                  <div class="pc-metric">
                    ${project.m}
                  </div>
                `
                : ""
            }


            <div class="pc-desc">
              ${project.d}
            </div>


            <div class="pc-stack">

              ${
                project.s
                  .map(
                    item =>
                      `
                        <span class="pc-tag">
                          ${item}
                        </span>
                      `
                  )
                  .join("")
              }

            </div>

          </div>

        </a>

      `)
      .join("");

}


/* ── FILTER BUTTONS ── */

document
  .getElementById("fbar")
  .addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(".fp");


      if (!button) {
        return;
      }


      document
        .querySelectorAll(".fp")
        .forEach(
          item =>
            item.classList.remove("on")
        );


      button.classList.add("on");


      render(
        button.dataset.c
      );

    }
  );


/* ── INITIAL RENDER ── */

render("all");
