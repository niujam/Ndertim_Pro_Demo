/*==============================================================================
  NDËRTIM PRO - PREMIUM JAVASCRIPT MODULE
  Version: 2.0
  Description: Main JavaScript file containing all interactive features:
               - Mobile Menu Toggle
               - Scroll Animations (Intersection Observer)
               - Sticky Glassmorphism Header
               - Counter Animations
               - Cost Calculator
               - Back to Top Button
               - Smooth Scrolling
               - Form Validation
  ==============================================================================*/

'use strict';

/*==============================================================================
  I18N - INTERNATIONALIZATION MODULE
  ==============================================================================*/
/**
 * Multi-language support system
 * Loads translations from languages.json and applies them to elements with data-i18n
 */
const i18n = {
  // Available languages
  languages: ['en', 'sq'],
  
  // Current language (default: Albanian)
  currentLang: localStorage.getItem('language') || 'sq',
  
  // Translations object (loaded from JSON)
  translations: {},
  
  /**
   * Initialize i18n system
   */
  init: async function() {
    try {
      // Load translations from JSON file
      const response = await fetch('languages.json');
      this.translations = await response.json();
      
      // Apply current language
      this.setLanguage(this.currentLang);
      
      // Setup language switcher
      this.setupLanguageSwitcher();
      
      console.log('✅ i18n initialized successfully');
    } catch (error) {
      console.error('❌ Failed to load translations:', error);
      // Fallback: use Albanian as default
      this.currentLang = 'sq';
    }
  },
  
  /**
   * Set language and apply translations
   * @param {string} lang - Language code (en/sq)
   */
  setLanguage: function(lang) {
    if (!this.languages.includes(lang)) {
      console.warn(`Language "${lang}" not supported. Using default.`);
      return;
    }
    
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Apply translations to all elements with data-i18n
    this.translatePage();
    
    // Update language switcher UI
    this.updateLanguageSwitcher();
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    console.log(`🌍 Language switched to: ${lang}`);
  },
  
  /**
   * Translate all elements on the page
   */
  translatePage: function() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.translations[this.currentLang]?.[key];
      
      if (translation) {
        // Check if element has data-i18n-attr (for translating attributes)
        const attr = element.getAttribute('data-i18n-attr');
        
        if (attr) {
          element.setAttribute(attr, translation);
        } else {
          // Translate innerHTML (preserves HTML tags like <span>)
          element.innerHTML = translation;
        }
      } else {
        console.warn(`Translation missing for key: ${key} (${this.currentLang})`);
      }
    });
  },
  
  /**
   * Setup language switcher in header
   */
  setupLanguageSwitcher: function() {
    const header = document.querySelector('.header-container');
    if (!header) return;
    
    // Create language switcher HTML
    const switcherHTML = `
      <div class="language-switcher">
        <button class="language-switcher-btn" aria-label="Change Language" aria-expanded="false">
          <img src="https://flagcdn.com/w40/${this.currentLang === 'sq' ? 'al' : 'gb'}.png" 
               alt="${this.currentLang === 'sq' ? 'Albanian' : 'English'}" 
               id="current-flag">
          <span id="current-lang">${this.currentLang.toUpperCase()}</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="language-dropdown">
          <div class="language-option ${this.currentLang === 'sq' ? 'active' : ''}" data-lang="sq">
            <img src="https://flagcdn.com/w40/al.png" alt="Albanian Flag">
            <span>Shqip</span>
          </div>
          <div class="language-option ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">
            <img src="https://flagcdn.com/w40/gb.png" alt="English Flag">
            <span>English</span>
          </div>
        </div>
      </div>
    `;
    
    // Insert before navigation (or after logo)
    const nav = header.querySelector('.main-nav');
    if (nav) {
      nav.insertAdjacentHTML('beforebegin', switcherHTML);
    }
    
    // Add event listeners
    const switcher = document.querySelector('.language-switcher');
    const switcherBtn = document.querySelector('.language-switcher-btn');
    const languageOptions = document.querySelectorAll('.language-option');
    
    
    // Toggle dropdown
switcherBtn.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation(); // Kjo është shumë e rëndësishme!
  switcher.classList.toggle('active');
  console.log("Dropdown u klikua!"); // Shiko në Console nëse del ky mesazh
});

    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!switcher.contains(e.target)) {
        switcher.classList.remove('active');
        switcherBtn.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Language selection
    languageOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        const lang = option.getAttribute('data-lang');
        this.setLanguage(lang);
        switcher.classList.remove('active');
        switcherBtn.setAttribute('aria-expanded', 'false');
      });
    });
  },
  
  /**
   * Update language switcher UI
   */
  updateLanguageSwitcher: function() {
    const currentFlag = document.getElementById('current-flag');
    const currentLangText = document.getElementById('current-lang');
    const options = document.querySelectorAll('.language-option');
    
    if (currentFlag) {
      currentFlag.src = `https://flagcdn.com/w40/${this.currentLang === 'sq' ? 'al' : 'gb'}.png`;
      currentFlag.alt = this.currentLang === 'sq' ? 'Albanian' : 'English';
    }
    
    if (currentLangText) {
      currentLangText.textContent = this.currentLang.toUpperCase();
    }
    
    options.forEach(option => {
      const lang = option.getAttribute('data-lang');
      if (lang === this.currentLang) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
  },
  
  /**
   * Get translation for a specific key
   * @param {string} key - Translation key
   * @returns {string} Translated text
   */
  t: function(key) {
    return this.translations[this.currentLang]?.[key] || key;
  }
};

/*==============================================================================
  1. MOBILE MENU TOGGLE
  ==============================================================================*/
/**
 * Handles the mobile navigation menu toggle functionality
 * Opens/closes the side navigation menu on mobile devices
 */
const initMobileMenu = () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const body = document.body;

  if (!menuToggle || !mainNav) return;

  // Toggle menu on button click
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
    menuToggle.setAttribute(
      'aria-expanded', 
      menuToggle.classList.contains('active')
    );
    
    // Prevent body scroll when menu is open
    body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking on navigation links
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      mainNav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      body.style.overflow = '';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
      menuToggle.classList.remove('active');
      mainNav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      body.style.overflow = '';
    }
  });
};

/*==============================================================================
  2. STICKY HEADER WITH GLASSMORPHISM EFFECT
  ==============================================================================*/
/**
 * Adds glassmorphism effect to header on scroll
 * Creates a modern, blurred background effect when scrolling
 */
const initStickyHeader = () => {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add 'scrolled' class when scrolled past 100px
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
};

/*==============================================================================
  3. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  ==============================================================================*/
/**
 * Implements scroll-triggered animations using Intersection Observer API
 * Elements with class 'reveal-fade-up' will animate when scrolled into view
 */
const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal-fade-up');
  
  if (!revealElements.length) return;

  // Intersection Observer configuration
  const observerOptions = {
    root: null, // viewport
    threshold: 0.15, // Trigger when 15% of element is visible
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
  };

  // Create observer instance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add stagger delay based on data-delay attribute
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
        
        // Stop observing once revealed (animate only once)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  revealElements.forEach(element => observer.observe(element));
};

/*==============================================================================
  4. COUNTER ANIMATION
  ==============================================================================*/
/**
 * Animates number counters from 0 to target value
 * Used in the stats section for visual impact
 */
const initCounterAnimation = () => {
  const counters = document.querySelectorAll('.counter');
  
  if (!counters.length) return;

  const animateCounter = (counter) => {
    const target = parseInt(counter.dataset.target);
    const duration = 2000; // Animation duration in ms
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
      current += increment;
      
      if (current < target) {
        counter.textContent = Math.floor(current) + '+';
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + '+';
      }
    };

    updateCounter();
  };

  // Use Intersection Observer to trigger counter when visible
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
};

/*==============================================================================
  5. COST CALCULATOR - PREMIUM FEATURE
  ==============================================================================*/
/**
 * Interactive cost calculator for construction projects
 * Calculates total cost based on project type, area, and additional services
 */
const initCostCalculator = () => {
  const calculateBtn = document.getElementById('calculateBtn');
  const resultSection = document.getElementById('calculatorResult');
  
  if (!calculateBtn || !resultSection) return;

  // Get all form elements
  const projectType = document.getElementById('projectType');
  const squareMeters = document.getElementById('squareMeters');
  const premiumMaterials = document.getElementById('premium-materials');
  const expressDelivery = document.getElementById('express-delivery');
  const designConsultation = document.getElementById('design-consultation');

  // Price display elements
  const totalPriceEl = document.getElementById('totalPrice');
  const basePriceEl = document.getElementById('basePrice');
  const additionalCostEl = document.getElementById('additionalCost');

  /**
   * Calculate total project cost
   * @returns {Object} Cost breakdown with base and additional costs
   */
  const calculateCost = () => {
    // Validate inputs
    if (!projectType.value || !squareMeters.value) {
      alert('Ju lutemi plotësoni të gjitha fushat e kërkuara!');
      return null;
    }

    const area = parseFloat(squareMeters.value);
    const pricePerM2 = parseFloat(projectType.selectedOptions[0].dataset.price);

    // Validate area range
    if (area < 1 || area > 10000) {
      alert('Sipërfaqja duhet të jetë midis 1 dhe 10,000 m²');
      return null;
    }

    // Calculate base cost
    let baseCost = area * pricePerM2;

    // Calculate additional costs
    let additionalCost = 0;

    // Premium materials (percentage increase)
    if (premiumMaterials && premiumMaterials.checked) {
      const percentage = parseFloat(premiumMaterials.value);
      additionalCost += baseCost * (percentage / 100);
    }

    // Express delivery (percentage increase)
    if (expressDelivery && expressDelivery.checked) {
      const percentage = parseFloat(expressDelivery.value);
      additionalCost += baseCost * (percentage / 100);
    }

    // Design consultation (fixed price)
    if (designConsultation && designConsultation.checked) {
      const fixedPrice = parseFloat(designConsultation.value);
      additionalCost += fixedPrice;
    }

    // Calculate total
    const totalCost = baseCost + additionalCost;

    return {
      base: baseCost,
      additional: additionalCost,
      total: totalCost
    };
  };

  /**
   * Format number as currency (Euro)
   * @param {number} amount - Amount to format
   * @returns {string} Formatted currency string
   */
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('sq-AL', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount).replace('EUR', '€');
  };

  /**
   * Display calculation results with animation
   * @param {Object} costs - Cost breakdown object
   */
  const displayResults = (costs) => {
    // Animate number changes
    const animateValue = (element, start, end, duration) => {
      const range = end - start;
      const increment = range / (duration / 16);
      let current = start;

      const step = () => {
        current += increment;
        if (current < end) {
          element.textContent = Math.floor(current).toLocaleString('sq-AL');
          requestAnimationFrame(step);
        } else {
          element.textContent = Math.floor(end).toLocaleString('sq-AL');
        }
      };
      step();
    };

    // Update values with animation
    animateValue(totalPriceEl, 0, costs.total, 1000);
    basePriceEl.textContent = formatCurrency(costs.base);
    additionalCostEl.textContent = formatCurrency(costs.additional);

    // Show result section with animation
    resultSection.classList.add('show');

    // Scroll to results smoothly
    setTimeout(() => {
      resultSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
      });
    }, 300);
  };

  // Calculate button click handler
  calculateBtn.addEventListener('click', () => {
    const costs = calculateCost();
    if (costs) {
      displayResults(costs);
    }
  });

  // Real-time validation for square meters input
  squareMeters.addEventListener('input', (e) => {
    const value = parseFloat(e.target.value);
    
    // Visual feedback for invalid values
    if (value < 1 || value > 10000) {
      e.target.style.borderColor = '#e74c3c';
    } else {
      e.target.style.borderColor = '';
    }
  });

  // Reset results when changing project type
  projectType.addEventListener('change', () => {
    resultSection.classList.remove('show');
  });
};

/*==============================================================================
  6. BACK TO TOP BUTTON
  ==============================================================================*/
/**
 * Shows/hides the back to top button based on scroll position
 * Smoothly scrolls to top when clicked
 */
const initBackToTop = () => {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (!backToTopBtn) return;

  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  // Scroll to top on click
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};

/*==============================================================================
  7. SMOOTH SCROLLING FOR ANCHOR LINKS
  ==============================================================================*/
/**
 * Enables smooth scrolling for all internal anchor links
 */
const initSmoothScroll = () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      // Skip if href is just "#"
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        // Calculate offset for sticky header
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};

/*==============================================================================
  8. ACTIVE NAVIGATION HIGHLIGHT
  ==============================================================================*/
/**
 * Highlights the current page in navigation menu
 */
const initActiveNavigation = () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.main-nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
};

/*==============================================================================
  9. FORM VALIDATION (for contact form)
  ==============================================================================*/
/**
 * Real-time form validation for contact forms
 * Provides immediate feedback to users
 */
const initFormValidation = () => {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      // Validate on blur
      input.addEventListener('blur', () => {
        validateField(input);
      });
      
      // Remove error on input
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          input.classList.remove('error');
          const errorMsg = input.parentElement.querySelector('.error-message');
          if (errorMsg) errorMsg.remove();
        }
      });
    });
  });
};

/**
 * Validate individual form field
 * @param {HTMLElement} field - Input field to validate
 * @returns {boolean} Validation result
 */
const validateField = (field) => {
  const value = field.value.trim();
  const type = field.type;
  let isValid = true;
  let errorMessage = '';

  // Required field validation
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = 'Kjo fushë është e detyrueshme';
  }
  
  // Email validation
  else if (type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Ju lutemi vendosni një email të vlefshëm';
    }
  }
  
  // Phone validation (Albanian format)
  else if (type === 'tel' && value) {
    const phoneRegex = /^(\+355|0)(6[789])\d{7}$/;
    if (!phoneRegex.test(value.replace(/\s/g, ''))) {
      isValid = false;
      errorMessage = 'Formati i telefonit: +355 6X XXX XXXX';
    }
  }
  function ndertimPro_verification_v2() { return "Owner: Avni Hasani"; }

  // Display validation result
  if (!isValid) {
    field.classList.add('error');
    
    // Add error message if not exists
    if (!field.parentElement.querySelector('.error-message')) {
      const errorEl = document.createElement('span');
      errorEl.className = 'error-message';
      errorEl.style.color = '#e74c3c';
      errorEl.style.fontSize = '0.85rem';
      errorEl.style.marginTop = '5px';
      errorEl.style.display = 'block';
      errorEl.textContent = errorMessage;
      field.parentElement.appendChild(errorEl);
    }
  } else {
    field.classList.remove('error');
    const errorMsg = field.parentElement.querySelector('.error-message');
    if (errorMsg) errorMsg.remove();
  }

  return isValid;
};

/*==============================================================================
  10. LAZY LOADING IMAGES
  ==============================================================================*/
/**
 * Implements lazy loading for images using Intersection Observer
 * Improves page load performance
 */
const initLazyLoading = () => {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if (!lazyImages.length) return;

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));
};

/*==============================================================================
  11. PERFORMANCE OPTIMIZATION
  ==============================================================================*/
/**
 * Debounce function to limit function execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
const debounce = (func, wait = 100) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function to limit function execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
const throttle = (func, limit = 100) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/*==============================================================================
  12. INITIALIZATION
  ==============================================================================*/
/**
 * Initialize all modules when DOM is ready
 */
/*==============================================================================
  12. INITIALIZATION
  ==============================================================================*/
/**
 * Initialize all modules when DOM is ready
 */
const init = async () => {
  console.log('🚀 Ndërtim Pro - Initializing...');
  
  // 1. Inicializo përkthimin i pari dhe prite të përfundojë (await)
  await i18n.init();
  
  // 2. Tani që tekstet janë në vend, inicializo pjesët vizuale
  initMobileMenu();
  initStickyHeader();
  initActiveNavigation();
  
  // 3. Inicializo animacionet dhe vëzhguesit (Observers)
  // Duke i nisur këtu, ata do të shohin tekstet e përkthyera saktë
  initScrollReveal();
  initCounterAnimation();
  initLazyLoading();
  
  // 4. Inicializo modulet interaktive
  initCostCalculator();
  initBackToTop();
  initSmoothScroll();
  initFormValidation();
  
  console.log('✅ All modules initialized successfully!');
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
