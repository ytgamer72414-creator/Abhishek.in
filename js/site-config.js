(function () {
  var DEFAULT = {
    siteName: "Abhishek Editor",
    accentColor: "#7c3aed",
    accentLight: "#a78bfa",
    profileImage: "images/LOGO.png",
    aboutBio: "I'm Abhishek Editor, a passionate video editor based in India.\n\nFor the last 2.5 years, I've been creating motion graphics and video edits using After Effects and Premiere Pro.\n\nI create clean visuals, smooth motion, and edits that actually feel good to watch.",
    socialInstagram: "https://www.instagram.com/",
    socialYoutube: "https://youtube.com/",
    heroBadge: "Abhishek Editor",
    heroTitle1: "Every Frame",
    heroTitle2: "Tells a Story",
    heroSubtitle: "High-end cinematic experiences for elite brands.",
    preloaderText: "ABHISHEK",
    whatsappNumber: "919756289688",
    pricingSubtitle: "Select the perfect plan for your real estate reels. All plans include 30 professionally edited reels and are designed to help your content stand out.",
    plans: [
      {
        name: "BASIC",
        tagline: "Clean. Consistent. Impactful.",
        price: "$1,800",
        period: "/ 30 Reels",
        features: "30 Short Form Reels\nStandard Speed Ramping\nBasic Color Correction\nClean Cuts and Transitions\nRoyalty-Free Music\nBasic Sound Design\nSocial Media Export (1080x1920)\n2 Revisions\n48-72 Hour Delivery",
        waMessage: "Hi Abhishek! I am interested in the BASIC plan ($1,800 / 30 Reels). Please share more details."
      },
      {
        name: "MEDIUM",
        tagline: "More Motion. More Engagement.",
        price: "$3,000",
        period: "/ 30 Reels",
        features: "Everything in Basic, plus:\nAdvanced Cinematic Speed Ramping\nMotion Graphics\nAnimated Text and Captions\nProperty Callouts and Icons\nCinematic Color Grading\nPremium Sound Design\nCustom Transitions\n4 Revisions\nPriority Delivery (24-48 Hours)",
        waMessage: "Hi Abhishek! I am interested in the MEDIUM plan ($3,000 / 30 Reels). Please share more details."
      },
      {
        name: "PRO",
        tagline: "Cinematic. Premium. Unmatched.",
        price: "$4,000",
        period: "/ 30 Reels",
        features: "Everything in Medium, plus:\nElite Cinematic Speed Ramping\nHigh-End Motion Graphics\nLuxury Property Animations\n3D Camera Motion Effects\nAdvanced Visual Effects (VFX)\nCustom Branding Package\nThumbnail Design\nUnlimited Revisions\nDedicated Priority Support\nFastest Delivery",
        waMessage: "Hi Abhishek! I am interested in the PRO plan ($4,000 / 30 Reels). Please share more details."
      }
    ],
    videos: [
      { url: "https://res.cloudinary.com/dde6dv1ll/video/upload/v1780307710/kalua_final_1_km90rf.mp4#t=0.001", label: "Reel 1" },
      { url: "https://res.cloudinary.com/dde6dv1ll/video/upload/v1780307490/chris_final_hai_1_eexfmy.mp4#t=0.001", label: "Reel 2" },
      { url: "https://res.cloudinary.com/dde6dv1ll/video/upload/v1780307938/girl_final_hai_1_j71oiq.mp4#t=0.001", label: "Reel 3" },
      { url: "https://res.cloudinary.com/dde6dv1ll/video/upload/v1780307993/siham_final_1_tyvzoa.mp4#t=0.001", label: "Reel 4" },
      { url: "https://res.cloudinary.com/dde6dv1ll/video/upload/v1780308041/mahtab_final_1_azmpkx.mp4#t=0.001", label: "Reel 5" }
    ]
  };

  function hexToRgb(hex) {
    var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return r ? parseInt(r[1], 16) + ", " + parseInt(r[2], 16) + ", " + parseInt(r[3], 16) : "124,58,237";
  }

  function buildWaUrl(number, message) {
    return "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
  }

  function applyConfig(cfg) {
    document.documentElement.style.setProperty("--accent", cfg.accentColor);
    document.documentElement.style.setProperty("--accent-light", cfg.accentLight);
    document.documentElement.style.setProperty("--accent-rgb", hexToRgb(cfg.accentColor));

    function run() {
      var q = function (s) { return document.querySelector(s); };
      var qa = function (s) { return document.querySelectorAll(s); };
      var el = function (id) { return document.getElementById(id); };

      document.title = cfg.siteName + " | Premium Cinematic Video Editing";

      var badge = q(".badge-text");
      if (badge) badge.textContent = cfg.heroBadge || cfg.siteName;

      var title = q(".minimal-title");
      if (title) title.innerHTML = cfg.heroTitle1 + "<br><span class=\"text-italic\">" + cfg.heroTitle2 + "</span>";

      var sub = q(".minimal-subtitle");
      if (sub) sub.textContent = cfg.heroSubtitle;

      var aName = q(".about-profile-name");
      if (aName) aName.textContent = cfg.siteName;

      var aBio = q(".about-profile-quote p");
      if (aBio) aBio.textContent = cfg.aboutBio;

      var aImg = q(".about-profile-image img");
      if (aImg) { aImg.src = cfg.profileImage; aImg.alt = cfg.siteName; }

      var fLogo = q(".footer-brand .logo-text");
      if (fLogo) fLogo.textContent = cfg.siteName;

      var copy = q(".copyright");
      if (copy) copy.innerHTML = "\u00a9 " + new Date().getFullYear() + " " + cfg.siteName + ". All rights reserved.";

      qa(".footer-links-col a").forEach(function (a) {
        if (a.href.indexOf("instagram") > -1) a.href = cfg.socialInstagram;
        if (a.href.indexOf("youtube") > -1) a.href = cfg.socialYoutube;
      });

      /* ── Pricing Section ── */
      var pSub = el("pricingSubtitle");
      if (pSub && cfg.pricingSubtitle) pSub.textContent = cfg.pricingSubtitle;

      var waNum = cfg.whatsappNumber || DEFAULT.whatsappNumber;
      var plans = cfg.plans || DEFAULT.plans;

      plans.forEach(function (plan, i) {
        var n = i + 1;
        if (el("plan" + n + "Name")) el("plan" + n + "Name").textContent = plan.name;
        if (el("plan" + n + "Tagline")) el("plan" + n + "Tagline").textContent = plan.tagline;
        if (el("plan" + n + "Price")) el("plan" + n + "Price").textContent = plan.price;
        if (el("plan" + n + "Period")) el("plan" + n + "Period").textContent = plan.period;

        var featEl = el("plan" + n + "Features");
        if (featEl && plan.features) {
          var lines = plan.features.split("\n").filter(function (l) { return l.trim(); });
          var ck = n === 2 ? "popular-check" : n === 3 ? "pro-check" : "";
          var hl = n === 3 ? " pro-highlight" : "";
          featEl.innerHTML = lines.map(function (line, li) {
            if (li === 0 && line.toLowerCase().indexOf("everything") > -1) {
              return "<li class=\"feat-highlight" + hl + "\">" + line + "</li>";
            }
            return "<li><span class=\"feat-check " + ck + "\">\u2713</span> " + line + "</li>";
          }).join("");
        }

        var waBtn = el("plan" + n + "WaBtn");
        if (waBtn) {
          var msg = plan.waMessage || "Hi! I am interested in the " + plan.name + " plan.";
          waBtn.href = buildWaUrl(waNum, msg);
        }
      });

      /* ── Videos ── */
      var container = el("p3dContainer");
      if (container && cfg.videos && cfg.videos.length) {
        container.querySelectorAll(".stacked-card").forEach(function (c) { c.remove(); });
        var positions = ["active", "right-1", "right-2", "left-2", "left-1"];
        cfg.videos.forEach(function (v, i) {
          var div = document.createElement("div");
          div.className = "stacked-card " + (positions[i] || "right-2");
          div.dataset.index = i;
          div.innerHTML = "<video src=\"" + v.url + "\" preload=\"metadata\" loop playsinline aria-label=\"" + v.label + "\" title=\"" + cfg.siteName + " Reel\"></video><div class=\"p3d-play\"></div>";
          container.appendChild(div);
        });
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", run);
    } else {
      run();
    }
  }

  try {
    var stored = localStorage.getItem("siteConfig");
    var parsed = stored ? JSON.parse(stored) : {};
    var cfg = Object.assign({}, DEFAULT, parsed);
    if (parsed.videos) cfg.videos = parsed.videos;
    if (parsed.plans) cfg.plans = parsed.plans;
    applyConfig(cfg);
  } catch (e) {
    applyConfig(DEFAULT);
  }
})();
