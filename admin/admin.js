const ADMIN_EMAIL = "Klyrexmedia@gmail.com";
const ADMIN_PASS  = "Klyrex@098";

const DEFAULT_CONFIG = {
  siteName:"Abhishek Editor", accentColor:"#7c3aed", accentLight:"#a78bfa",
  profileImage:"images/LOGO.png",
  aboutBio:"I'm Abhishek Editor, a passionate video editor based in India.\n\nFor the last 2.5 years, I've been creating motion graphics and video edits using After Effects and Premiere Pro.\n\nI create clean visuals, smooth motion, and edits that actually feel good to watch.\n\nNot a fan of overdoing things — just good timing, good rhythm, and visuals that do their job.",
  socialInstagram:"https://www.instagram.com/", socialYoutube:"https://youtube.com/",
  heroBadge:"Abhishek Editor", heroTitle1:"Every Frame", heroTitle2:"Tells a Story",
  heroSubtitle:"High-end cinematic experiences for elite brands.",
  preloaderText:"ABHI",
  whatsappNumber:"919756289688",
  pricingSubtitle:"Select the perfect plan for your real estate reels. All plans include 30 professionally edited reels and are designed to help your content stand out.",
  plans:[
    {
      name:"BASIC", tagline:"Clean. Consistent. Impactful.",
      price:"$1,800", period:"/ 30 Reels",
      features:"30 Short Form Reels\nStandard Speed Ramping\nBasic Color Correction\nClean Cuts and Transitions\nRoyalty-Free Music\nBasic Sound Design\nSocial Media Export (1080x1920)\n2 Revisions\n48-72 Hour Delivery",
      waMessage:"Hi Abhishek! I am interested in the BASIC plan ($1,800 / 30 Reels). Please share more details."
    },
    {
      name:"MEDIUM", tagline:"More Motion. More Engagement.",
      price:"$3,000", period:"/ 30 Reels",
      features:"Everything in Basic, plus:\nAdvanced Cinematic Speed Ramping\nMotion Graphics\nAnimated Text and Captions\nProperty Callouts and Icons\nCinematic Color Grading\nPremium Sound Design\nCustom Transitions\n4 Revisions\nPriority Delivery (24-48 Hours)",
      waMessage:"Hi Abhishek! I am interested in the MEDIUM plan ($3,000 / 30 Reels). Please share more details."
    },
    {
      name:"PRO", tagline:"Cinematic. Premium. Unmatched.",
      price:"$4,000", period:"/ 30 Reels",
      features:"Everything in Medium, plus:\nElite Cinematic Speed Ramping\nHigh-End Motion Graphics\nLuxury Property Animations\n3D Camera Motion Effects\nAdvanced Visual Effects (VFX)\nCustom Branding Package\nThumbnail Design\nUnlimited Revisions\nDedicated Priority Support\nFastest Delivery",
      waMessage:"Hi Abhishek! I am interested in the PRO plan ($4,000 / 30 Reels). Please share more details."
    }
  ],
  videos:[
    {url:"https://res.cloudinary.com/dde6dv1ll/video/upload/v1780307710/kalua_final_1_km90rf.mp4#t=0.001",label:"Reel 1"},
    {url:"https://res.cloudinary.com/dde6dv1ll/video/upload/v1780307490/chris_final_hai_1_eexfmy.mp4#t=0.001",label:"Reel 2"},
    {url:"https://res.cloudinary.com/dde6dv1ll/video/upload/v1780307938/girl_final_hai_1_j71oiq.mp4#t=0.001",label:"Reel 3"},
    {url:"https://res.cloudinary.com/dde6dv1ll/video/upload/v1780307993/siham_final_1_tyvzoa.mp4#t=0.001",label:"Reel 4"},
    {url:"https://res.cloudinary.com/dde6dv1ll/video/upload/v1780308041/mahtab_final_1_azmpkx.mp4#t=0.001",label:"Reel 5"}
  ]
};

let cfg = {};

// ─── Load config ───────────────────────────────────────────
function loadConfig() {
  try {
    const s = localStorage.getItem('siteConfig');
    cfg = s ? {...DEFAULT_CONFIG, ...JSON.parse(s)} : {...DEFAULT_CONFIG};
    const p = s ? JSON.parse(s) : {};
    if (p.videos) cfg.videos = p.videos;
    if (p.plans)  cfg.plans  = p.plans;
  } catch(e) { cfg = {...DEFAULT_CONFIG}; }
}

function saveConfig() {
  localStorage.setItem('siteConfig', JSON.stringify(cfg));
  showToast("✅ Changes saved!");
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ─── Login ─────────────────────────────────────────────────
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value;
  if (email === ADMIN_EMAIL && pass === ADMIN_PASS) {
    sessionStorage.setItem('adminAuth', '1');
    showDashboard();
  } else {
    document.getElementById('loginErr').style.display = 'block';
    document.getElementById('loginErr').textContent = '❌ Wrong email or password';
  }
});

function showDashboard() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('dashboard').style.display = 'grid';
  loadConfig();
  populateForms();
  switchTab('videos');
}

document.getElementById('logoutBtn').addEventListener('click', () => {
  sessionStorage.removeItem('adminAuth');
  location.reload();
});

// ─── Tab Switching ──────────────────────────────────────────
function switchTab(id) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  document.querySelector(`[data-tab="${id}"]`).classList.add('active');
}
document.querySelectorAll('.nav-item[data-tab]').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// ─── Populate all forms ─────────────────────────────────────
function populateForms() {
  // Content
  document.getElementById('f-siteName').value    = cfg.siteName;
  document.getElementById('f-heroBadge').value   = cfg.heroBadge;
  document.getElementById('f-heroTitle1').value  = cfg.heroTitle1;
  document.getElementById('f-heroTitle2').value  = cfg.heroTitle2;
  document.getElementById('f-heroSub').value     = cfg.heroSubtitle;
  document.getElementById('f-aboutBio').value    = cfg.aboutBio;
  document.getElementById('f-instagram').value   = cfg.socialInstagram;
  document.getElementById('f-youtube').value     = cfg.socialYoutube;
  document.getElementById('f-waNumber').value    = cfg.whatsappNumber || '';

  // Colors
  document.getElementById('f-accent').value      = cfg.accentColor;
  document.getElementById('f-accentHex').value   = cfg.accentColor;
  document.getElementById('f-accentL').value     = cfg.accentLight;
  document.getElementById('f-accentLHex').value  = cfg.accentLight;
  updateSwatch();

  // Image
  document.getElementById('f-profileImg').value  = cfg.profileImage;
  updateImgPreview();

  // Loader
  document.getElementById('f-preloader').value   = cfg.preloaderText;

  // Pricing
  populatePricing();

  // Videos
  renderVideos();
}

// ─── Populate pricing forms ──────────────────────────────────
function populatePricing() {
  const plans = cfg.plans || DEFAULT_CONFIG.plans;
  document.getElementById('f-pricingSubtitle').value = cfg.pricingSubtitle || '';
  plans.forEach(function(plan, i) {
    const n = i + 1;
    const get = id => document.getElementById(id);
    if (get('f-p'+n+'Name'))     get('f-p'+n+'Name').value     = plan.name     || '';
    if (get('f-p'+n+'Tagline'))  get('f-p'+n+'Tagline').value  = plan.tagline  || '';
    if (get('f-p'+n+'Price'))    get('f-p'+n+'Price').value    = plan.price    || '';
    if (get('f-p'+n+'Period'))   get('f-p'+n+'Period').value   = plan.period   || '';
    if (get('f-p'+n+'Features')) get('f-p'+n+'Features').value = plan.features || '';
    if (get('f-p'+n+'WaMsg'))    get('f-p'+n+'WaMsg').value    = plan.waMessage || '';
  });
}

// ─── GOOGLE DRIVE URL CONVERTER ─────────────────────────────
function parseDriveId(url) {
  const m1 = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  const m2 = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  return (m1 && m1[1]) || (m2 && m2[1]) || null;
}

function convertDriveUrl(url) {
  const id = parseDriveId(url.trim());
  if (!id) return null;
  // Direct streaming URL for video tag
  return `https://drive.google.com/uc?export=download&id=${id}`;
}

// ─── VIDEOS ────────────────────────────────────────────────
function renderVideos() {
  const list = document.getElementById('videoList');
  list.innerHTML = '';
  cfg.videos.forEach((v, i) => {
    const div = document.createElement('div');
    div.className = 'video-card';
    div.id = `vcard-${i}`;
    div.innerHTML = `
      <div class="video-card-header">
        <span class="video-num">${i+1}</span>
        <input class="video-label-input" type="text" placeholder="Label (e.g. Reel 1)" value="${escHtml(v.label)}" oninput="cfg.videos[${i}].label=this.value">
        <button class="del-btn" onclick="removeVideo(${i})" title="Delete">🗑</button>
      </div>
      <div class="video-source-tabs">
        <button class="vsrc-tab ${v.sourceType!=='drive'&&v.sourceType!=='file'?'active':''}" onclick="setSourceTab(${i},'url')">🔗 URL</button>
        <button class="vsrc-tab ${v.sourceType==='drive'?'active':''}" onclick="setSourceTab(${i},'drive')">☁️ Google Drive</button>
        <button class="vsrc-tab ${v.sourceType==='file'?'active':''}" onclick="setSourceTab(${i},'file')">📁 Local File</button>
      </div>
      <div id="vsrc-url-${i}" class="vsrc-panel ${v.sourceType!=='drive'&&v.sourceType!=='file'?'active':''}">  
        <input type="url" placeholder="Paste video URL (mp4, cloudinary, etc.)" value="${escHtml(v.url)}" oninput="cfg.videos[${i}].url=this.value;cfg.videos[${i}].sourceType='url'">
      </div>
      <div id="vsrc-drive-${i}" class="vsrc-panel ${v.sourceType==='drive'?'active':''}">
        <div class="drive-row">
          <input type="text" id="driveInput-${i}" placeholder="Paste Google Drive share link..." value="${escHtml(v.driveUrl||'')}">
          <button class="convert-btn" onclick="applyDriveLink(${i})">Convert ✓</button>
        </div>
        <p class="vsrc-hint">📌 Make sure the Drive file is set to <b>"Anyone with the link"</b></p>
        ${v.sourceType==='drive'&&v.url?`<p class="vsrc-converted">✅ Converted: <span>${v.url.substring(0,60)}...</span></p>`:''}
      </div>
      <div id="vsrc-file-${i}" class="vsrc-panel ${v.sourceType==='file'?'active':''}">
        <label class="file-drop-zone" for="fileInput-${i}">
          <span>📁 Click to select video file</span>
          <span class="file-sub">.mp4, .mov, .webm supported</span>
          ${v.fileName?`<span class="file-chosen">✅ ${v.fileName}</span>`:''}
        </label>
        <input type="file" id="fileInput-${i}" accept="video/*" style="display:none" onchange="handleFileSelect(${i},this)">
        <p class="vsrc-hint">📌 File will be copied to <code>videos/</code> folder in your project. Place the file there for it to work after browser restart.</p>
      </div>`;
    list.appendChild(div);
  });
}

function escHtml(s) {
  return (s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
}

function setSourceTab(i, type) {
  ['url','drive','file'].forEach(t => {
    const panel = document.getElementById(`vsrc-${t}-${i}`);
    const card  = document.getElementById(`vcard-${i}`);
    if (panel) panel.classList.toggle('active', t===type);
    if (card) card.querySelectorAll('.vsrc-tab').forEach((btn,bi) => {
      btn.classList.toggle('active', ['url','drive','file'][bi]===type);
    });
  });
  cfg.videos[i].sourceType = type;
}

function applyDriveLink(i) {
  const inp = document.getElementById(`driveInput-${i}`);
  const raw = inp ? inp.value.trim() : '';
  const converted = convertDriveUrl(raw);
  if (!converted) { showToast('❌ Invalid Drive link — copy the share URL from Drive'); return; }
  cfg.videos[i].url = converted;
  cfg.videos[i].driveUrl = raw;
  cfg.videos[i].sourceType = 'drive';
  showToast('✅ Drive link converted!');
  renderVideos();
}

function handleFileSelect(i, input) {
  const file = input.files[0];
  if (!file) return;
  // Create blob URL for immediate playback
  const blobUrl = URL.createObjectURL(file);
  cfg.videos[i].url = blobUrl;
  cfg.videos[i].fileName = file.name;
  cfg.videos[i].sourceType = 'file';
  cfg.videos[i].localPath = `../videos/${file.name}`;
  showToast(`✅ File selected: ${file.name} — Copy it to the videos/ folder in your project!`);
  renderVideos();
}

function removeVideo(i) {
  cfg.videos.splice(i, 1);
  renderVideos();
}

document.getElementById('addVideoBtn').addEventListener('click', () => {
  cfg.videos.push({url:'', label:`Reel ${cfg.videos.length+1}`, sourceType:'url'});
  renderVideos();
});

document.getElementById('saveVideos').addEventListener('click', saveConfig);

// ─── COLORS ────────────────────────────────────────────────
function updateSwatch() {
  document.getElementById('colorSwatch').style.background =
    `linear-gradient(135deg, ${cfg.accentColor}, ${cfg.accentLight})`;
}

document.getElementById('f-accent').addEventListener('input', function() {
  cfg.accentColor = this.value;
  document.getElementById('f-accentHex').value = this.value;
  updateSwatch();
});
document.getElementById('f-accentHex').addEventListener('input', function() {
  if (/^#[0-9a-f]{6}$/i.test(this.value)) {
    cfg.accentColor = this.value;
    document.getElementById('f-accent').value = this.value;
    updateSwatch();
  }
});
document.getElementById('f-accentL').addEventListener('input', function() {
  cfg.accentLight = this.value;
  document.getElementById('f-accentLHex').value = this.value;
  updateSwatch();
});
document.getElementById('f-accentLHex').addEventListener('input', function() {
  if (/^#[0-9a-f]{6}$/i.test(this.value)) {
    cfg.accentLight = this.value;
    document.getElementById('f-accentL').value = this.value;
    updateSwatch();
  }
});
document.getElementById('saveColors').addEventListener('click', saveConfig);

// ─── CONTENT ───────────────────────────────────────────────
document.getElementById('saveContent').addEventListener('click', () => {
  cfg.siteName        = document.getElementById('f-siteName').value;
  cfg.heroBadge       = document.getElementById('f-heroBadge').value;
  cfg.heroTitle1      = document.getElementById('f-heroTitle1').value;
  cfg.heroTitle2      = document.getElementById('f-heroTitle2').value;
  cfg.heroSubtitle    = document.getElementById('f-heroSub').value;
  cfg.aboutBio        = document.getElementById('f-aboutBio').value;
  cfg.socialInstagram = document.getElementById('f-instagram').value;
  cfg.socialYoutube   = document.getElementById('f-youtube').value;
  cfg.whatsappNumber  = document.getElementById('f-waNumber').value.trim();
  saveConfig();
});

// ─── PRICING ───────────────────────────────────────────────
document.getElementById('savePricing').addEventListener('click', () => {
  cfg.pricingSubtitle = document.getElementById('f-pricingSubtitle').value;
  const plans = [];
  for (let n = 1; n <= 3; n++) {
    const get = id => { const el = document.getElementById(id); return el ? el.value : ''; };
    plans.push({
      name:      get('f-p'+n+'Name'),
      tagline:   get('f-p'+n+'Tagline'),
      price:     get('f-p'+n+'Price'),
      period:    get('f-p'+n+'Period'),
      features:  get('f-p'+n+'Features'),
      waMessage: get('f-p'+n+'WaMsg')
    });
  }
  cfg.plans = plans;
  saveConfig();
});

// ─── IMAGE ─────────────────────────────────────────────────
function updateImgPreview() {
  const img = document.getElementById('imgPreview');
  img.src = cfg.profileImage || '';
  img.style.display = cfg.profileImage ? 'block' : 'none';
}
document.getElementById('f-profileImg').addEventListener('input', function() {
  cfg.profileImage = this.value;
  updateImgPreview();
});
document.getElementById('saveImage').addEventListener('click', saveConfig);

// ─── LOADER ────────────────────────────────────────────────
document.getElementById('f-preloader').addEventListener('input', function() {
  cfg.preloaderText = this.value.toUpperCase();
  document.getElementById('loaderPreview').textContent = cfg.preloaderText || '—';
});
document.getElementById('saveLoader').addEventListener('click', saveConfig);

// ─── Auto login check ──────────────────────────────────────
if (sessionStorage.getItem('adminAuth') === '1') showDashboard();
