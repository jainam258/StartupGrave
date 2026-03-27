const fs = require('fs');

// 1. styles.css
let styles = fs.readFileSync('styles.css', 'utf-8');
const startCss = styles.indexOf('/* ═══════════ HOMEPAGE CAROUSEL ═══════════ */');
const endCss = styles.indexOf('/* ABOUT */');
if(startCss > -1 && endCss > -1) {
    let newCss = `/* ═══════════ HOMEPAGE CAROUSEL ═══════════ */
.home-carousel {
    position: relative;
    width: 100%;
    height: 100vh;
    background: var(--black);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.carousel-header {
    position: absolute;
    top: 100px;
    left: 80px;
    z-index: 10;
    pointer-events: none;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.carousel-header .section-title {
    color: white;
    margin-bottom: 0;
}

.carousel-container {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    max-width: none;
    position: relative;
}

.carousel-viewport {
    height: 100%;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
}

.carousel-viewport::-webkit-scrollbar {
    display: none;
}

.carousel-track {
    display: flex;
    height: 100%;
    width: max-content;
}

.carousel-slide {
    flex: 0 0 100vw;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    overflow: hidden;
}

.carousel-slide-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
}

.carousel-slide-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 6s ease-out;
}

.carousel-slide.is-visible .carousel-slide-bg img {
    transform: scale(1.05);
}

.carousel-slide-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.4) 40%,
        rgba(0, 0, 0, 0.9) 100%
    );
    z-index: 1;
}

.carousel-slide-content {
    position: relative;
    z-index: 2;
    padding: 80px 80px 120px;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

.carousel-slide-logo {
    margin-bottom: 24px;
}

.carousel-slide-logo img {
    max-width: 90px;
    max-height: 60px;
    object-fit: contain;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)) brightness(10);
}

.carousel-slide-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(50px, 7vw, 90px);
    color: white;
    letter-spacing: 0.03em;
    line-height: 0.9;
    margin-bottom: 16px;
    text-shadow: 0 4px 12px rgba(0,0,0,0.4);
}

.carousel-slide-tagline {
    font-family: 'DM Serif Display', serif;
    font-style: italic;
    font-size: clamp(16px, 2vw, 24px);
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.4;
    margin-bottom: 24px;
    max-width: 700px;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
}

.carousel-slide-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 32px;
}

.carousel-meta-lost {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    color: var(--red);
    letter-spacing: 0.05em;
    padding: 4px 12px;
    background: rgba(224, 32, 32, 0.15);
    border: 1px solid rgba(224, 32, 32, 0.3);
    border-radius: 4px;
}

.carousel-meta-dot {
    display: none;
}

.carousel-meta-cause {
    font-size: 13px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
    padding: 6px 12px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    backdrop-filter: blur(4px);
}

.carousel-slide-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 16px 36px;
    background: white;
    color: black;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
}

.carousel-slide-cta:hover {
    background: var(--red);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(224, 32, 32, 0.3);
}

/* Dot Indicators */
.carousel-controls {
    position: absolute;
    bottom: 50px;
    left: 80px;
    right: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 20;
    pointer-events: none;
}

.carousel-dots {
    display: flex;
    align-items: center;
    gap: 12px;
    pointer-events: auto;
}

.carousel-dot {
    width: 40px;
    height: 4px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
}

.carousel-dot:hover {
    background: rgba(255, 255, 255, 0.5);
}

.carousel-dot.active {
    background: var(--red);
    width: 60px;
}

/* Slider arrows */
.carousel-arrows {
    display: flex;
    gap: 12px;
    pointer-events: auto;
}

.carousel-arrow {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: auto;
    color: white;
    transition: all 0.3s;
}

.carousel-arrow:hover {
    background: var(--red);
    border-color: var(--red);
    transform: scale(1.05);
}

.carousel-arrow svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
}

/* Carousel Responsive */
@media (max-width: 1024px) {
    .carousel-header {
        top: 80px;
        left: 40px;
    }
    .carousel-slide-content {
        padding: 60px 40px 100px;
    }
    .carousel-controls {
        bottom: 40px;
        left: 40px;
        right: 40px;
    }
}

@media (max-width: 700px) {
    .carousel-header {
        top: 70px;
        left: 20px;
    }
    .carousel-header .section-title {
        font-size: 32px;
    }
    .carousel-slide-content {
        padding: 40px 20px 80px;
    }
    .carousel-slide-name {
        font-size: 40px;
    }
    .carousel-controls {
        bottom: 20px;
        left: 20px;
        right: 20px;
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: 20px;
    }
}

`;
    styles = styles.substring(0, startCss) + newCss + styles.substring(endCss);
    fs.writeFileSync('styles.css', styles);
    console.log('styles.css updated');
}

// 2. index.html
let html = fs.readFileSync('index.html', 'utf-8');
if (!html.includes('id="carouselViewport"')) {
    html = html.replace('<div class="carousel-viewport">', '<div class="carousel-viewport" id="carouselViewport">');
}
const dotsStart = html.indexOf('<!-- Dot Indicators -->');
const dotsEnd = html.indexOf('</section>', dotsStart);
if (dotsStart > -1 && dotsEnd > -1) {
    const dotsHtml = `<!-- Controls -->
        <div class="carousel-controls">
          <div class="carousel-dots" id="carouselDots">
            <button class="carousel-dot active" data-index="0" aria-label="Slide 1"></button>
            <button class="carousel-dot" data-index="1" aria-label="Slide 2"></button>
            <button class="carousel-dot" data-index="2" aria-label="Slide 3"></button>
            <button class="carousel-dot" data-index="3" aria-label="Slide 4"></button>
            <button class="carousel-dot" data-index="4" aria-label="Slide 5"></button>
            <button class="carousel-dot" data-index="5" aria-label="Slide 6"></button>
            <button class="carousel-dot" data-index="6" aria-label="Slide 7"></button>
          </div>
          <div class="carousel-arrows">
            <button class="carousel-arrow" id="carouselPrev" aria-label="Previous Slide">
              <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button class="carousel-arrow" id="carouselNext" aria-label="Next Slide">
              <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    `;
    html = html.substring(0, dotsStart) + dotsHtml + html.substring(dotsEnd);
    fs.writeFileSync('index.html', html);
    console.log('index.html updated');
}

// 3. script.js
let script = fs.readFileSync('script.js', 'utf-8');
const scriptStart = script.indexOf('// ═══════════ HOMEPAGE CAROUSEL ═══════════');
if (scriptStart > -1) {
    const newScript = `// ═══════════ HOMEPAGE CAROUSEL ═══════════
(function() {
    const viewport = document.getElementById('carouselViewport');
    const track = document.getElementById('carouselTrack');
    const dotsContainer = document.getElementById('carouselDots');
    const carousel = document.getElementById('homeCarousel');
    const btnPrev = document.getElementById('carouselPrev');
    const btnNext = document.getElementById('carouselNext');

    if (!viewport || !track || !dotsContainer) return;

    const slides = track.querySelectorAll('.carousel-slide');
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let autoPlayInterval = null;

    function updateActiveState() {
        slides.forEach((slide, i) => {
            if (i === currentIndex) {
                slide.classList.add('is-visible');
            } else {
                slide.classList.remove('is-visible');
            }
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        currentIndex = index;
        
        viewport.scrollTo({
            left: currentIndex * viewport.clientWidth,
            behavior: 'smooth'
        });
        updateActiveState();
    }

    let scrollTimeout;
    viewport.addEventListener('scroll', () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const width = viewport.clientWidth;
            if(width === 0) return;
            const index = Math.round(viewport.scrollLeft / width);
            if (index !== currentIndex && index >= 0 && index < totalSlides) {
                currentIndex = index;
                updateActiveState();
                resetAutoPlay();
            }
        }, 50);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            const idx = parseInt(dot.getAttribute('data-index'));
            goToSlide(idx);
            resetAutoPlay();
        });
    });

    if (btnPrev) {
        btnPrev.addEventListener('click', () => { goToSlide(currentIndex - 1); resetAutoPlay(); });
    }
    if (btnNext) {
        btnNext.addEventListener('click', () => { goToSlide(currentIndex + 1); resetAutoPlay(); });
    }

    slides.forEach(slide => {
        slide.addEventListener('click', (e) => {
            if (e.target.closest('.carousel-slide-cta')) return;
            const id = slide.getAttribute('data-startup-id');
            if (id) {
                if (typeof showDetail === 'function') {
                    showDetail(id);
                }
            }
        });
    });

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000);
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }

    document.addEventListener('keydown', (e) => {
        const homePage = document.getElementById('home-page');
        if (!homePage || !homePage.classList.contains('active')) return;
        
        if (e.key === 'ArrowLeft') {
            goToSlide(currentIndex - 1);
            resetAutoPlay();
        } else if (e.key === 'ArrowRight') {
            goToSlide(currentIndex + 1);
            resetAutoPlay();
        }
    });

    if (typeof ah === 'function') {
        [...dots].forEach(el => ah(el));
        if (btnPrev) ah(btnPrev);
        if (btnNext) ah(btnNext);
    }

    updateActiveState();
    startAutoPlay();
})();
`;
    script = script.substring(0, scriptStart) + newScript;
    fs.writeFileSync('script.js', script);
    console.log('script.js updated');
}
