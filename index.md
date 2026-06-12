---
layout: default
title: Arunava Nag
body_class: page-home
---
<section class="band band-hero">
  <canvas id="hero-graph" class="hero-graph" aria-hidden="true"></canvas>
  <div class="band-inner hero">
    <div class="hero-text">
      <span class="eyebrow">Postdoctoral Scholar · University of Chicago</span>
      <h1 class="hero-title">Computational spatial biology, multiplex imaging, and quantitative tissue modeling.</h1>
      <p class="hero-lead">
        I am a postdoctoral scholar at the University of Chicago specializing in spatial omics and high-dimensional multiplex imaging data. My work focuses on quantitative modeling of tissue architecture, cell neighborhoods, and immune microenvironment organization.
      </p>
      <p class="hero-lead">
        I build scalable analysis pipelines for cell segmentation, phenotyping, spatial network modeling, and inflammation trajectory analysis to uncover spatial biomarkers and disease-associated tissue states.
      </p>
      <p class="hero-lead">
        I am particularly interested in translating spatial data into mechanistic insights and therapeutic hypotheses in immunology and inflammatory disease. My Ph.D. research leveraged large noisy real-world datasets to develop predictive models using statistical analysis, machine learning, and deep learning methods.
      </p>
      <div class="hero-actions">
        <a class="button-link" href="{{ site.baseurl }}/publications/">View Publications</a>
        <a class="button-link" href="{{ site.baseurl }}/resume/">CV</a>
      </div>
    </div>
    <aside class="hero-aside">
      <img class="portrait" src="{{ '/assets/img/4S0A1047-2.jpg' | relative_url }}" alt="Arunava Nag" />
      <div class="badges">
        <span>CODEX</span>
        <span>Spatial Omics</span>
        <span>Immunology</span>
      </div>
    </aside>
  </div>
</section>

<section class="band band-alt">
  <div class="band-decor decor-microscope" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  </div>
  <div class="band-inner" data-reveal>
    <div class="section-heading">
      <h2>Experience</h2>
      <p>A short path through the research and engineering work that shaped this site.</p>
    </div>
    <div class="experience-list" data-timeline>
      <article class="experience-item">
        <span class="timeline-label">Now</span>
        <h3>Postdoctoral Scholar, University of Chicago</h3>
        <p>Computational spatial biology focused on multiplex imaging, tissue architecture, cell neighborhoods, and immune microenvironment modeling.</p>
      </article>
      <article class="experience-item">
        <span class="timeline-label">Ph.D.</span>
        <h3>Computer Science, University of Nevada, Reno</h3>
        <p>Developed predictive models from large noisy real-world datasets using statistical analysis, machine learning, deep learning, and physically grounded simulation.</p>
      </article>
      <article class="experience-item">
        <span class="timeline-label">Industry</span>
        <h3>Senior Research Engineer, ROS-Industrial Asia Pacific</h3>
        <p>Built industrial robotics applications spanning computer vision, autonomous navigation, machine learning, and virtual reality-enabled training systems.</p>
      </article>
      <article class="experience-item">
        <span class="timeline-label">M.S.</span>
        <h3>Electrical Engineering, North Carolina State University</h3>
        <p>Worked on vision-guided collaborative robotics and motion planning for manufacturing systems using point cloud processing and computer vision.</p>
      </article>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-decor decor-dna" aria-hidden="true">{% include dna-helix.svg %}</div>
  <div class="band-inner" data-reveal>
    <div class="section-heading">
      <h2>Selected projects</h2>
      <p>Current spatial-biology research, earlier modeling work, and open-source tooling.</p>
    </div>
    <div class="feature-grid">
      <article class="section-card is-featured">
        <span class="meta-pill">Publication · Open source</span>
        <h3>COSMOS simulator</h3>
        <p>A data-driven probabilistic simulator for chemical plumes across spatial scales, designed as a test bed for plume tracing algorithms and embodied sensing research.</p>
        <figure class="card-figure">
          <img src="{{ '/assets/img/algorithm.jpg' | relative_url }}" alt="COSMOS modeling overview: a data-driven spatial prior feeds whiff duration, concentration, standard deviation, and intermittency models that generate a simulated odor time series.">
          <figcaption>Spatial priors drive whiff duration, concentration, and intermittency models to generate realistic odor time series.</figcaption>
        </figure>
        <div class="card-links">
          <a href="https://ieeexplore.ieee.org/abstract/document/11223626" class="project-link">IEEE publication</a>
          <a href="https://github.com/arunavanag591/COSMOS" class="project-link">Open repository</a>
        </div>
      </article>
      <article class="section-card is-featured card-with-media">
        <img class="card-media" src="{{ '/assets/img/me.png' | relative_url }}" alt="Field deployment of odor sensors on a desert playa for large-scale outdoor plume data collection.">
        <div class="card-body">
          <span class="meta-pill">Publication</span>
          <h3>Prediction from real-world odor statistics</h3>
          <p>Statistical models and Kalman filtering on 15 million rows of sensor data, reaching 82% prediction accuracy from noisy real-world plume measurements.</p>
          <a href="https://royalsocietypublishing.org/doi/full/10.1098/rsif.2024.0169" class="project-link">Journal of the Royal Society Interface</a>
        </div>
      </article>
      <article class="section-card">
        <span class="meta-pill">Simulation</span>
        <h3>UAV plume tracking in Gazebo</h3>
        <p>COSMOS was integrated with a physics-enabled robotics simulator to test odor tracking behavior under wind, gravity, and motion-control constraints.</p>
      </article>
      <article class="section-card">
        <span class="meta-pill">Open source</span>
        <h3>Single-cell CAR T response modeling</h3>
        <p>Patient response modeling with Scanpy workflows, random forests, and convolutional neural networks.</p>
        <a href="https://github.com/arunavanag591/single-cell-car-t-response-modeling.git" class="project-link">Open repository</a>
      </article>
      <article class="section-card">
        <span class="meta-pill">Open source</span>
        <h3>GPTalkTerminal</h3>
        <p>A command-line assistant interface built around the ChatGPT API.</p>
        <a href="https://github.com/arunavanag591/GPTalkTerminal.git" class="project-link">Open repository</a>
      </article>
      <article class="section-card">
        <span class="meta-pill">Open source</span>
        <h3>Gemini YouTube Summarizer</h3>
        <p>A YouTube summarization tool powered by Google Gemini models.</p>
        <a href="https://github.com/arunavanag591/GeminiYoutubeSummarizer.git" class="project-link">Open repository</a>
      </article>
    </div>
  </div>
</section>
