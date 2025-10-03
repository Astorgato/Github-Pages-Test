// Data Science Portfolio JavaScript

// Portfolio data
const portfolioData = {
  projects: [
    {
      id: 1,
      titulo: "Predicción de Precios de Vivienda",
      categoria: "Machine Learning",
      descripcion: "Modelo de regresión para predecir precios de casas basado en características como ubicación, tamaño y antigüedad. Alcanzó un R² de 0.89.",
      descripcionCompleta: "Este proyecto desarrolla un modelo predictivo avanzado para estimar precios de viviendas utilizando técnicas de machine learning. El modelo analiza múltiples variables incluyendo ubicación geográfica, superficie, número de habitaciones, antigüedad del inmueble y características del barrio. Se implementó un pipeline completo de preprocessing, feature engineering y validación cruzada para asegurar la robustez del modelo.",
      tecnologias: ["Python", "scikit-learn", "pandas", "matplotlib", "seaborn", "numpy"],
      metricas: "R² = 0.89, RMSE = €15,000, MAE = €12,500",
      github: "https://github.com/anagarcia/house-prediction",
      desafios: "Manejo de valores atípicos, feature engineering para variables categóricas, selección de características relevantes",
      resultados: "Modelo implementado en producción con 89% de precisión, reduciendo el tiempo de valoración de propiedades en un 75%"
    },
    {
      id: 2,
      titulo: "Análisis de Sentimientos en Twitter",
      categoria: "NLP",
      descripcion: "Sistema de clasificación de sentimientos en tiempo real para tweets usando técnicas de procesamiento de lenguaje natural.",
      descripcionCompleta: "Desarrollo de un sistema completo de análisis de sentimientos que procesa tweets en tiempo real y clasifica las emociones expresadas. El proyecto incluye preprocesamiento de texto, tokenización, eliminación de stopwords, y aplicación de técnicas avanzadas de NLP como TF-IDF y word embeddings. Se implementó una interfaz web interactiva con Streamlit para visualización en tiempo real.",
      tecnologias: ["Python", "NLTK", "TextBlob", "Streamlit", "Twitter API", "scikit-learn"],
      metricas: "Accuracy = 87%, F1-Score = 0.85, Precision = 0.86, Recall = 0.84",
      github: "https://github.com/anagarcia/sentiment-analysis",
      desafios: "Manejo de texto no estructurado, detección de sarcasmo, clasificación multiclase de emociones",
      resultados: "Sistema desplegado procesando más de 10,000 tweets diarios con alta precisión en la clasificación emocional"
    },
    {
      id: 3,
      titulo: "Segmentación de Clientes",
      categoria: "Clustering",
      descripcion: "Análisis de clustering para identificar grupos de clientes y optimizar estrategias de marketing personalizadas.",
      descripcionCompleta: "Proyecto de segmentación avanzada que utiliza algoritmos de clustering no supervisado para identificar patrones de comportamiento en la base de clientes. Se aplicaron técnicas de reducción de dimensionalidad (PCA) y múltiples algoritmos de clustering (K-means, DBSCAN, Hierarchical Clustering) para encontrar la segmentación óptima. Los resultados se visualizaron con dashboards interactivos.",
      tecnologias: ["Python", "K-means", "DBSCAN", "PCA", "Plotly", "pandas", "scikit-learn"],
      metricas: "5 clusters identificados, Silhouette Score = 0.72, Inertia = 1,234",
      github: "https://github.com/anagarcia/customer-segmentation",
      desafios: "Selección del número óptimo de clusters, interpretación de resultados, validación de segmentos",
      resultados: "Incremento del 23% en la efectividad de campañas de marketing dirigidas basadas en los segmentos identificados"
    },
    {
      id: 4,
      titulo: "Detección de Fraude Bancario",
      categoria: "Clasificación",
      descripcion: "Modelo de detección de transacciones fraudulentas usando técnicas de machine learning y balanceo de clases.",
      descripcionCompleta: "Sistema robusto de detección de fraude que analiza patrones de transacciones bancarias para identificar actividades sospechosas. El proyecto aborda el desafío de datasets altamente desbalanceados utilizando técnicas como SMOTE, ensemble methods y validación especializada. Se implementó un sistema de alertas en tiempo real con baja tasa de falsos positivos.",
      tecnologias: ["Python", "XGBoost", "SMOTE", "scikit-learn", "imbalanced-learn", "pandas"],
      metricas: "Precision = 94%, Recall = 89%, AUC-ROC = 0.96, F1-Score = 0.91",
      github: "https://github.com/anagarcia/fraud-detection",
      desafios: "Datasets desbalanceados, minimización de falsos positivos, detección en tiempo real",
      resultados: "Reducción del 65% en transacciones fraudulentas no detectadas, ahorro estimado de €2M anuales"
    },
    {
      id: 5,
      titulo: "Sistema de Recomendaciones",
      categoria: "ML Avanzado",
      descripcion: "Sistema de recomendación de productos usando filtrado colaborativo y técnicas de deep learning.",
      descripcionCompleta: "Sistema avanzado de recomendaciones que combina filtrado colaborativo, filtrado basado en contenido y deep learning para proporcionar recomendaciones personalizadas. Implementa neural collaborative filtering y factorización matricial profunda para capturar relaciones complejas entre usuarios y productos. El sistema procesa millones de interacciones para generar recomendaciones en tiempo real.",
      tecnologias: ["Python", "TensorFlow", "Neural Collaborative Filtering", "PyTorch", "Apache Spark"],
      metricas: "NDCG@10 = 0.78, Hit Ratio = 0.65, MAP@10 = 0.71",
      github: "https://github.com/anagarcia/recommender-system",
      desafios: "Escalabilidad, cold start problem, diversidad en recomendaciones",
      resultados: "Aumento del 32% en engagement de usuarios y 18% incremento en ventas cruzadas"
    }
  ]
};

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const backToTop = document.getElementById('backToTop');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const skillBars = document.querySelectorAll('.skill-progress');
const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeScrollEffects();
  initializeProjectFilters();
  initializeSkillBars();
  initializeCharts();
  initializeContactForm();
  initializeBackToTop();
});

// Navigation functionality
function initializeNavigation() {
  // Mobile menu toggle
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
      
      // Close mobile menu if open
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });

  // Active nav link highlighting
  window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

// Scroll effects
function initializeScrollEffects() {
  window.addEventListener('scroll', function() {
    // Back to top button
    if (window.pageYOffset > 300) {
      backToTop.classList.remove('hidden');
    } else {
      backToTop.classList.add('hidden');
    }
    
    // Animate skill bars when in view
    animateSkillBarsOnScroll();
  });
}

// Project filtering
function initializeProjectFilters() {
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active filter button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter project cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// Skill bars animation
function initializeSkillBars() {
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBar = entry.target.querySelector('.skill-progress');
        const width = skillBar.getAttribute('data-width');
        skillBar.style.width = width + '%';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.skill-item').forEach(item => {
    observer.observe(item);
  });
}

function animateSkillBarsOnScroll() {
  const aboutSection = document.getElementById('acerca');
  const aboutOffset = aboutSection.offsetTop - window.innerHeight + 200;
  
  if (window.pageYOffset > aboutOffset) {
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
    });
  }
}

// Charts initialization
function initializeCharts() {
  // Sales Chart
  const salesCtx = document.getElementById('salesChart');
  if (salesCtx) {
    new Chart(salesCtx, {
      type: 'bar',
      data: {
        labels: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Bilbao'],
        datasets: [{
          label: 'Ventas (Miles €)',
          data: [340, 280, 190, 150, 120],
          backgroundColor: '#1FB8CD',
          borderColor: '#1FB8CD',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  // Sentiment Chart
  const sentimentCtx = document.getElementById('sentimentChart');
  if (sentimentCtx) {
    new Chart(sentimentCtx, {
      type: 'doughnut',
      data: {
        labels: ['Positivo', 'Neutral', 'Negativo'],
        datasets: [{
          data: [65, 25, 10],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  // Correlation Chart
  const correlationCtx = document.getElementById('correlationChart');
  if (correlationCtx) {
    new Chart(correlationCtx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Correlación Precio-Superficie',
          data: [
            {x: 50, y: 150}, {x: 75, y: 220}, {x: 100, y: 290}, 
            {x: 125, y: 350}, {x: 150, y: 420}, {x: 175, y: 480},
            {x: 200, y: 550}, {x: 80, y: 180}, {x: 90, y: 240}
          ],
          backgroundColor: '#1FB8CD',
          borderColor: '#1FB8CD'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Superficie (m²)'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Precio (Miles €)'
            }
          }
        }
      }
    });
  }

  // Time Series Chart
  const timeSeriesCtx = document.getElementById('timeSeriesChart');
  if (timeSeriesCtx) {
    new Chart(timeSeriesCtx, {
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'],
        datasets: [{
          label: 'Precisión del Modelo',
          data: [0.82, 0.85, 0.87, 0.89, 0.91, 0.88, 0.90, 0.92, 0.89, 0.91],
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            min: 0.8,
            max: 1.0,
            title: {
              display: true,
              text: 'Precisión'
            }
          }
        }
      }
    });
  }
}

// Project modal functionality
function openProjectModal(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  modalTitle.textContent = project.titulo;
  modalBody.innerHTML = `
    <div class="project-modal-content">
      <div class="project-category-badge">
        <span class="project-category">${project.categoria}</span>
      </div>
      
      <div class="project-description">
        <h4>Descripción del Proyecto</h4>
        <p>${project.descripcionCompleta}</p>
      </div>
      
      <div class="project-technologies">
        <h4>Tecnologías Utilizadas</h4>
        <div class="project-tech">
          ${project.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
      
      <div class="project-metrics-detailed">
        <h4>Métricas y Resultados</h4>
        <p><strong>Métricas Clave:</strong> ${project.metricas}</p>
        <p><strong>Impacto:</strong> ${project.resultados}</p>
      </div>
      
      <div class="project-challenges">
        <h4>Desafíos Técnicos</h4>
        <p>${project.desafios}</p>
      </div>
      
      <div class="project-actions">
        <a href="${project.github}" target="_blank" class="btn btn--primary">Ver en GitHub</a>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Contact form handling
function initializeContactForm() {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    setTimeout(() => {
      alert('¡Gracias por tu mensaje! Te contactaré pronto.');
      this.reset();
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 1500);
  });
}

// Back to top functionality
function initializeBackToTop() {
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add smooth reveal animations
function addRevealAnimations() {
  const revealElements = document.querySelectorAll('.project-card, .education-item, .article-card');
  
  const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
  });
}

// Initialize reveal animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(addRevealAnimations, 100);
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeProjectModal();
  }
});

// Add loading state management
function showLoading(element) {
  element.classList.add('loading');
}

function hideLoading(element) {
  element.classList.remove('loading');
}

// Performance optimization
const debouncedScroll = debounce(function() {
  updateActiveNavLink();
  animateSkillBarsOnScroll();
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Make functions globally available
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;