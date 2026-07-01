---
layout: default
title: "Curriculum Vitae"
sitemap: false
permalink: /resume/
body_class: page-standard
---

<div class="cv-actions">
  <a class="button-link" href="https://drive.google.com/uc?export=download&id=1BT4eewXo_28rMHoL2JbteReC_9Vmwcok"><i class="fas fa-download" aria-hidden="true"></i>Download PDF</a>
</div>

<article class="cv">
  <header class="cv-head">
    <h1 class="cv-name">Arunava Nag</h1>
    <p class="cv-contact">
      <span>Email: <a href="mailto:arunava.nag@bsd.uchicago.edu">arunava.nag@bsd.uchicago.edu</a></span>
      <span>Phone: <a href="tel:+17754378668">7754378668</a></span>
      <span>Linkedin: <a href="https://linkedin.com/in/arunavanag/" target="_blank" rel="noreferrer">arunavanag</a></span>
      <span>Github: <a href="https://github.com/arunavanag591" target="_blank" rel="noreferrer">arunavanag591</a></span>
    </p>
  </header>

  <section class="cv-section">
    <h2>Professional Summary</h2>
    <p class="cv-summary">Computational biologist with a strong foundation in quantitative methods and engineering, specializing in computational pathology and multimodal spatial biology — CODEX spatial proteomics, Xenium spatial transcriptomics, and H&amp;E imaging. My work focuses on immunology and inflammatory kidney disease, applying machine learning to high-dimensional imaging data and developing reproducible Python pipelines for annotation, segmentation, statistical modeling, and simulation to reconstruct disease trajectories in pseudotime.</p>
  </section>

  <section class="cv-section">
    <h2>Work Experience</h2>

    <div class="cv-entry">
      <div class="cv-entry-head">
        <h3 class="cv-entry-title">Postdoctoral Scholar, University of Chicago</h3>
        <span class="cv-entry-date">May 2025 – Current</span>
      </div>
      <ul class="cv-list">
        <li>Develop scalable analysis workflows for a 68-plex CODEX lupus nephritis cohort spanning ~80 patients, 269 kidney biopsies, and more than 1 million cells, integrating Xenium spatial transcriptomics and H&amp;E histopathology data.</li>
        <li>Built a transformer-based cell-phenotyping model that achieved 91% accuracy against pathologist-annotated ground truth, enabling quantitative analysis of cellular composition and spatial organization in kidney tissue.</li>
        <li>Build reproducible, Git-versioned pipelines for cell segmentation, phenotyping, spatial-neighborhood analysis, and tissue-network modeling; evaluate DINOv3, TIPSv2, and ResNet for histopathology feature extraction.</li>
        <li>Develop H&amp;E–CODEX image-registration methods and collaborate with nephrologists and renal pathologists to identify disease-associated cellular states, spatial biomarkers, and immune-microenvironment features linked to renal outcomes. <em class="cv-skills">Skills: CODEX, Spatial Omics, machine learning.</em></li>
      </ul>
    </div>

    <div class="cv-entry">
      <div class="cv-entry-head">
        <h3 class="cv-entry-title">Research Assistant, University of Nevada, Reno</h3>
        <span class="cv-entry-date">Jan 2020 – May 2025</span>
      </div>
      <ul class="cv-list">
        <li>Developed predictive and interpretable models for 15 million rows of noisy, multi-sensor time-series data using regression, Bayesian methods, machine learning, and Kalman-filter state-space modeling, achieving 82% prediction accuracy.</li>
        <li>Designed open-source probabilistic simulators using autoregressive, Gaussian-process, and Bayesian-optimization methods to generate realistic time series for reproducible, large-scale experiments (open-source: COSMOS).</li>
        <li>Integrated an odor simulator with a physics-enabled robotics simulator to build a framework for designing UAVs for outdoor odor-tracking challenges.</li>
      </ul>
    </div>

    <div class="cv-entry">
      <div class="cv-entry-head">
        <h3 class="cv-entry-title">Senior Research Engineer, ROS-I AP, ARTC</h3>
        <span class="cv-entry-date">Sep 2017 – Dec 2019</span>
      </div>
      <ul class="cv-list">
        <li>Built computer-vision / deep-learning (YOLO) and virtual-reality tools that mapped virtual to real-world space and delivered intuitive interfaces for non-technical operators, improving training efficiency 85%. <em class="cv-skills">Skills: Robotics, computer vision, deep learning, YOLO, virtual reality, Python, C++, C#.</em></li>
      </ul>
    </div>
  </section>

  <section class="cv-section">
    <h2>Technical Skills</h2>
    <ul class="cv-list">
      <li><strong>Machine Learning &amp; Statistics:</strong> PyTorch, TensorFlow, CUDA, vision foundation models (DINOv3, TIPSv2), CNNs (U-Net, ResNet), Bayesian inference and optimization, Kalman filtering, time-series modeling.</li>
      <li><strong>Computational Pathology &amp; Image Analysis:</strong> CODEX spatial proteomics, H&amp;E histopathology, cross-modality image registration, affine transformations, cell segmentation and phenotyping (Cellpose), spatial-neighborhood analysis, tissue-network analysis.</li>
      <li><strong>Spatial &amp; Single-Cell Biology:</strong> Xenium spatial transcriptomics, single-cell RNA-seq, Scanpy, scGPT embeddings, immune-microenvironment analysis, spatial biomarker discovery.</li>
      <li><strong>Programming &amp; Scientific Computing:</strong> Python, C++, NumPy, pandas, PySpark, SciPy.</li>
      <li><strong>Reproducibility &amp; Data Tools:</strong> Git.</li>
    </ul>
  </section>

  <section class="cv-section">
    <h2>Education</h2>
    <ul class="cv-list cv-edu">
      <li><span>University of Nevada, Reno — PhD, Computer Science (May 2025)</span><span class="cv-gpa">3.8/4.0</span></li>
      <li><span>North Carolina State University — MS, Electrical Engineering (2016)</span><span class="cv-gpa">3.2/4.0</span></li>
      <li><span>Visvesvaraya Technological University — BE, ECE (2013)</span><span class="cv-gpa">3.5/4.0</span></li>
    </ul>
  </section>

  <section class="cv-section">
    <h2>Relevant Publications</h2>
    <ul class="cv-list">
      <li>Hara S, Ai J, Cao T, Torcasso M, Walsh B, Nag A, Andrade M, Chang A, Clark M. “Spatial immune-cell profiling detects a disease-specific immune microenvironment in IgG4-related kidney disease.” <a href="https://www.kireports.org/article/S2468-0249(26)01601-3/fulltext" target="_blank" rel="noreferrer">Kidney International Reports</a> (2026). [Conference abstract, World Congress of Nephrology]</li>
      <li>Nag Arunava, and Floris Van Breugel. “COSMOS: A Data-Driven Approach to Simulating Odor Encounters for Agents Moving Through Chemical Plumes of Various Scales”, IEEE Open Access (2025)</li>
      <li>Nag Arunava, and Floris Van Breugel. “Odour source distance is predictable from a time history of odour statistics for large scale outdoor plumes”, Journal of Royal Society Interface (2024)</li>
      <li>Lingenfelter Bryson, Arunava Nag, and Floris van Breugel. “Insect inspired vision-based velocity estimation through spatial pooling of optic flow during linear motion.” Bioinspiration &amp; Biomimetics (2021)</li>
    </ul>
  </section>

  <section class="cv-section">
    <h2>Relevant Projects</h2>

    <div class="cv-entry">
      <h3 class="cv-entry-title">GPT based time series prediction for real world data</h3>
      <ul class="cv-list">
        <li>Replaced TIMEGAN (Time-series Generative Adversarial Networks) with GPT models, resulting in an 84% improvement in prediction accuracy for spatial forecasting of time series data from dynamic chemical sensors.</li>
      </ul>
    </div>

    <div class="cv-entry">
      <h3 class="cv-entry-title">Single cell CAR T response modeling</h3>
      <ul class="cv-list">
        <li>Modeled ~18,000-gene single-cell RNA-seq profiles using Scanpy, random forests, and convolutional neural networks, and applied scGPT embeddings to predict treatment response and infer gene–gene interactions (81% accuracy).</li>
      </ul>
    </div>

    <div class="cv-entry">
      <h3 class="cv-entry-title">LLM based video summarizer</h3>
      <ul class="cv-list">
        <li>Made a fast online video summarizer using the Gemini Pro LLM model and the YouTube video API.</li>
      </ul>
    </div>

    <div class="cv-entry">
      <h3 class="cv-entry-title">Data Driven Plume Simulator</h3>
      <ul class="cv-list">
        <li>A data-driven fast chemical plume simulator was developed to provide a realistic experience for a simulated agent, using gaussian process and Bayesian optimization methods (PyTorch and Python).</li>
      </ul>
    </div>
  </section>

  <section class="cv-section">
    <h2>Relevant Coursework</h2>
    <ul class="cv-list">
      <li><strong>Statistical Analysis:</strong> Applied Regression Analysis, Advanced Probability (Bayesian Networks)</li>
      <li><strong>Machine Learning:</strong> Deep Learning, Reinforcement Learning, Application of Graph Theory</li>
      <li><strong>Data-Driven Dynamic System Modeling:</strong> Control Systems</li>
    </ul>
  </section>

  <section class="cv-section">
    <h2>Presentations</h2>
    <ul class="cv-list">
      <li>Invited for participating and speaking at BISCCIT, Bio-Inspired Sensing, Computing, and Control with International Teams, 2023, London.</li>
      <li>Presented “Outdoor odor localization” and “Data driven plume simulator” at the AI Dynamics Institute workshop, University of Washington, 2023.</li>
      <li>Presented “Mapping outdoor odor plumes using a mobile chemical sensor” at APS 2022, Chicago.</li>
    </ul>
  </section>
</article>
