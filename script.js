// Load site data (data/site.json) and populate DOM. Also set copyright year.
async function loadSite() {
  try {
    const res = await fetch('data/site.json');
    if(!res.ok) throw new Error('Failed to load site data');
    const data = await res.json();

    // Header
    const nameEl = document.querySelector('.name');
    const subtitleEl = document.getElementById('subtitle');
    const locationEl = document.getElementById('location');
    const avatarEl = document.getElementById('avatar');
    const projectsBtn = document.getElementById('projectsBtn');
    const contactBtn = document.getElementById('contactBtn');

    if(nameEl) nameEl.textContent = data.name || 'Your Name';
    if(subtitleEl) subtitleEl.textContent = data.subtitle || '';
    if(locationEl) locationEl.textContent = data.location || '';
    if(avatarEl && data.avatar) avatarEl.src = data.avatar;
    if(projectsBtn && data.projects && data.projects.length) projectsBtn.href = '#projects';
    if(contactBtn) contactBtn.href = '#contact';

    // About
    const about = document.getElementById('aboutCopy');
    if(about) about.innerHTML = data.about || '';

    // Projects
    const projectsList = document.getElementById('projectsList');
    if(projectsList && Array.isArray(data.projects)){
      projectsList.innerHTML = '';
      data.projects.forEach(p => {
        const li = document.createElement('li');
        li.className = 'project';
        const h3 = document.createElement('h3');
        h3.textContent = p.title || 'Untitled';
        li.appendChild(h3);
        if(p.link){
          const a = document.createElement('a');
          a.href = p.link;
          a.textContent = p.linkText || 'View';
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          const desc = document.createElement('p');
          desc.textContent = p.description || '';
          li.appendChild(desc);
          li.appendChild(a);
        } else {
          const desc = document.createElement('p');
          desc.textContent = p.description || '';
          li.appendChild(desc);
        }
        projectsList.appendChild(li);
      });
    }

    // Contact
    const emailLink = document.getElementById('emailLink');
    if(emailLink) emailLink.href = `mailto:${data.email || 'hello@example.com'}`;

  } catch (err) {
    console.error('Error loading site data:', err);
  }
}

// small helper: set current year
function setYear(){
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;
}

document.addEventListener('DOMContentLoaded', function(){
  setYear();
  loadSite();
});
