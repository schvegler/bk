// ── PARTICLES ──
const container = document.getElementById('particles');
for (let i = 0; i < 12; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 2.5 + 1;
  p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;bottom:${Math.random()*20}%;animation-duration:${10+Math.random()*15}s;animation-delay:${Math.random()*12}s;`;
  p.style.background = i % 3 === 0 ? '#4bbfcf' : '#f5a623';
  container.appendChild(p);
}

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .char-card, .gal-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s';
  observer.observe(el);
});

// ── GALLERY TABS ──
function showTab(name, btn) {
  document.querySelectorAll('.gallery-grid').forEach(g => g.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  btn.classList.add('active');
}

// ── LIGHTBOX ──
function openLightbox(el) {
  const src = el.querySelector('img').src;
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// ── NEWSLETTER (Google Form) ──
var gformSubmitted = false;
function handleGFormSubmit() {
  gformSubmitted = true;
  setTimeout(function() {
    if (gformSubmitted) {
      document.getElementById('newsletter-form-wrap').style.display = 'none';
      document.getElementById('newsletter-success').style.display = 'block';
    }
  }, 800);
}

// ── BETA MODAL ──
function openBetaModal() {
  document.getElementById('betaModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeBetaModal() {
  document.getElementById('betaModal').classList.remove('open');
  document.body.style.overflow = '';
}
function closeBetaOnOverlay(e) {
  if (e.target === document.getElementById('betaModal')) closeBetaModal();
}
function submitBeta() {
  const name   = document.getElementById('beta-name').value.trim();
  const email  = document.getElementById('beta-email').value.trim();
  const device = document.getElementById('beta-device').value;
  const why    = document.getElementById('beta-why').value.trim();
  if (!name || !email) { alert('Please fill in your name and email.'); return; }
  const subject = encodeURIComponent('Broken Kingdom Beta Request — ' + name);
  const body    = encodeURIComponent(
    'Name: ' + name + '\n' +
    'Email: ' + email + '\n' +
    'Device: ' + (device || 'Not specified') + '\n' +
    'Message: ' + (why || '—')
  );
  window.location.href = 'mailto:thomas@zomigames.com?subject=' + subject + '&body=' + body;
  document.getElementById('modal-form-content').style.display = 'none';
  document.getElementById('modal-success-content').style.display = 'block';
}

// ── KEYBOARD SHORTCUTS ──
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeBetaModal(); closeLightbox(); }
});
