// Testimonials page rendering

function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;

  grid.innerHTML = testimonials.map((t) => `
    <div class="testimonial-card">
      <img src="${t.image}" alt="${t.name}" class="testimonial-img" onerror="this.style.display='none'">
      <div class="testimonial-content">
        <div class="testimonial-user">${t.name}</div>
        <div class="testimonial-country">${t.country}</div>
        <div class="testimonial-artwork">"${t.artwork}"</div>
        <div class="testimonial-text">${t.text}</div>
      </div>
    </div>
  `).join('');
}

function renderCollaborations() {
  const grid = document.getElementById('collaborations-grid');
  if (!grid) return;

  const collabHtml = collaborations.map((c) => `
    <div class="collaboration-card">
      <div class="collab-video">
        <iframe src="${c.videoUrl}" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <div class="collab-content">
        <div class="collab-artist">${c.artist}</div>
        <div class="collab-type">${c.type}</div>
        <div class="collab-desc">${c.description}</div>
      </div>
    </div>
  `).join('');

  // Repeat collaborations 50 times for infinite scroll
  grid.innerHTML = collabHtml.repeat(50);

  startCollaborationsAutoScroll();
}

// Store interval IDs for each carousel
let reelsScrollInterval = null;
let collabScrollInterval = null;

function startCollaborationsAutoScroll() {
  const grid = document.getElementById('collaborations-grid');
  if (!grid) return;

  // Clear existing interval
  if (collabScrollInterval) clearInterval(collabScrollInterval);

  const scrollStep = 0.5;
  const scrollInterval = 30;
  const cardWidth = 280 + 24;
  const oneSetWidth = cardWidth * collaborations.length;

  collabScrollInterval = setInterval(() => {
    grid.scrollLeft += scrollStep;

    // When we've scrolled through 25 sets, add more content
    if (grid.scrollLeft >= oneSetWidth * 25) {
      const newCollabHtml = collaborations.map((c) => `
        <div class="collaboration-card">
          <div class="collab-video">
            <iframe src="${c.videoUrl}" allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div class="collab-content">
            <div class="collab-artist">${c.artist}</div>
            <div class="collab-type">${c.type}</div>
            <div class="collab-desc">${c.description}</div>
          </div>
        </div>
      `).join('');

      grid.innerHTML += newCollabHtml.repeat(50);
    }
  }, scrollInterval);

  // Remove old listeners
  grid.removeEventListener('mouseenter', stopCollabAutoScroll);
  grid.removeEventListener('mouseleave', resumeCollabAutoScroll);

  // Add event listeners
  grid.addEventListener('mouseenter', stopCollabAutoScroll);
  grid.addEventListener('mouseleave', resumeCollabAutoScroll);
}

const stopCollabAutoScroll = () => {
  if (collabScrollInterval) clearInterval(collabScrollInterval);
};

const resumeCollabAutoScroll = () => {
  startCollaborationsAutoScroll();
};

function renderSponsors() {
  const grid = document.getElementById('sponsors-grid');
  if (!grid) return;

  grid.innerHTML = sponsors.map((s) => `
    <div class="sponsor-card">
      <div class="sponsor-logo">
        <img src="${s.logo}" alt="${s.name}" onerror="this.parentElement.classList.add('no-logo')">
      </div>
      <div class="sponsor-name">${s.name}</div>
      <div class="sponsor-value">${s.value}</div>
      <div class="sponsor-type">${s.type}</div>
      <div class="sponsor-desc">${s.description}</div>
    </div>
  `).join('');
}

function renderReels() {
  const container = document.getElementById('reels-container');
  if (!container) return;

  // Create reels HTML
  const reelsHtml = reels.map((r) => `
    <div class="reel-card">
      <div class="reel-video">
        <video src="${r.videoUrl}" controls playsinline></video>
      </div>
      <div class="reel-content">
        <div class="reel-title">${r.title}</div>
        <div class="reel-desc">${r.description}</div>
        <div class="reel-stats">
          <span>👁 ${r.views}</span>
          <span>❤ ${r.likes}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Start with many repetitions for infinite feel
  container.innerHTML = reelsHtml.repeat(50);

  startReelsAutoScroll();
}

function startReelsAutoScroll() {
  const container = document.getElementById('reels-container');
  if (!container) return;

  // Clear existing interval
  if (reelsScrollInterval) clearInterval(reelsScrollInterval);

  const scrollStep = 0.5;
  const scrollInterval = 30;
  const cardWidth = 280 + 24;
  const oneSetWidth = cardWidth * reels.length;

  reelsScrollInterval = setInterval(() => {
    container.scrollLeft += scrollStep;

    // When we've scrolled through 25 sets, add more content
    if (container.scrollLeft >= oneSetWidth * 25) {
      // Add 50 more repetitions
      const newReelsHtml = reels.map((r) => `
        <div class="reel-card">
          <div class="reel-video">
            <video src="${r.videoUrl}" controls playsinline></video>
          </div>
          <div class="reel-content">
            <div class="reel-title">${r.title}</div>
            <div class="reel-desc">${r.description}</div>
            <div class="reel-stats">
              <span>👁 ${r.views}</span>
              <span>❤ ${r.likes}</span>
            </div>
          </div>
        </div>
      `).join('');

      container.innerHTML += newReelsHtml.repeat(50);
    }
  }, scrollInterval);

  // Remove old listeners
  container.removeEventListener('mouseenter', stopReelsAutoScroll);
  container.removeEventListener('mouseleave', resumeReelsAutoScroll);

  // Add event listeners
  container.addEventListener('mouseenter', stopReelsAutoScroll);
  container.addEventListener('mouseleave', resumeReelsAutoScroll);
}

const stopReelsAutoScroll = () => {
  if (reelsScrollInterval) clearInterval(reelsScrollInterval);
};

const resumeReelsAutoScroll = () => {
  startReelsAutoScroll();
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  renderTestimonials();
  renderCollaborations();
  renderReels();
  renderSponsors();
});
