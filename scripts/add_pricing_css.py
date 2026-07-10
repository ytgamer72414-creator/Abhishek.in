import re

PRICING_CSS = """
        /* ═══════════════════════════════════════════
           PRICING PLANS — complete self-contained CSS
           ═══════════════════════════════════════════ */
        .pricing-section{padding:7rem 0 5rem;background:#ffffff;}
        .pricing-container{max-width:1180px;margin:0 auto;padding:0 2rem;}
        .pricing-header{text-align:center;margin-bottom:3.5rem;}
        .pricing-title{font-family:'Clash Display','General Sans',sans-serif;font-size:clamp(1.8rem,4vw,3.2rem);font-weight:700;color:#0f0f11;letter-spacing:-.03rem;margin-bottom:.9rem;}
        .pricing-subtitle{font-size:.95rem;color:#6b7280;max-width:560px;margin:0 auto;line-height:1.75;}
        .pricing-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.4rem;align-items:start;margin-bottom:3rem;}
        @media(max-width:860px){.pricing-grid{grid-template-columns:1fr;max-width:400px;margin-left:auto;margin-right:auto;}}
        .pricing-card{background:#fff;border:1.5px solid #e5e7eb;border-radius:20px;padding:2.2rem 1.8rem 1.8rem;display:flex;flex-direction:column;position:relative;transition:transform .3s ease,box-shadow .3s ease;}
        .pricing-card:hover{transform:translateY(-6px);box-shadow:0 20px 60px rgba(0,0,0,.10);}
        .pricing-card.popular{border:2px solid #7c3aed;padding-top:3rem;}
        .pricing-card.pro{background:#0f0f11;border:none;}
        .popular-badge{position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:#7c3aed;color:#fff;font-size:.6rem;font-weight:700;letter-spacing:.14rem;padding:4px 14px;border-radius:50px;white-space:nowrap;}
        .plan-icon{width:52px;height:52px;border:1.5px solid #e5e7eb;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;margin-bottom:1rem;color:#6b7280;}
        .popular-icon{border-color:#7c3aed;color:#7c3aed;}
        .pro-icon{border-color:rgba(255,255,255,.15);color:rgba(255,255,255,.7);}
        .plan-name{font-family:'Clash Display','General Sans',sans-serif;font-size:1.4rem;font-weight:700;letter-spacing:.04rem;color:#0f0f11;margin:0 0 .25rem;}
        .pricing-card.pro .plan-name{color:#fff;}
        .plan-tagline{font-size:.82rem;color:#9ca3af;margin-bottom:1.3rem;}
        .pricing-card.pro .plan-tagline{color:rgba(255,255,255,.5);}
        .plan-price-wrap{display:flex;align-items:baseline;gap:.4rem;margin-bottom:1.5rem;}
        .plan-price{font-family:'Clash Display','General Sans',sans-serif;font-size:2.6rem;font-weight:700;color:#0f0f11;letter-spacing:-.06rem;line-height:1;}
        .pricing-card.pro .plan-price{color:#fff;}
        .plan-period{font-size:.82rem;color:#9ca3af;}
        .pricing-card.pro .plan-period{color:rgba(255,255,255,.5);}
        .plan-features{list-style:none;padding:1.2rem 0 0;margin:0 0 1.8rem;border-top:1.5px solid #f3f4f6;display:flex;flex-direction:column;gap:.6rem;flex:1;}
        .pricing-card.pro .plan-features{border-top-color:rgba(255,255,255,.08);}
        .plan-features li{font-size:.86rem;color:#374151;display:flex;align-items:flex-start;gap:.5rem;line-height:1.45;}
        .pricing-card.pro .plan-features li{color:rgba(255,255,255,.65);}
        .feat-check{width:18px;height:18px;border-radius:50%;background:#f3f4f6;color:#6b7280;font-size:.65rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;}
        .popular-check{background:rgba(124,58,237,.12);color:#7c3aed;}
        .pro-check{background:rgba(167,139,250,.15);color:#a78bfa;}
        .feat-highlight{font-size:.8rem;font-weight:600;color:#7c3aed !important;list-style:none;}
        .pro-highlight{color:#a78bfa !important;}
        .wa-btn{display:flex;align-items:center;justify-content:center;gap:.55rem;background:#7c3aed;color:#fff;text-decoration:none;padding:.9rem 1.4rem;border-radius:100px;font-size:.8rem;font-weight:700;letter-spacing:.07rem;transition:all .28s ease;margin-top:auto;}
        .wa-btn:hover{background:#6d28d9;transform:translateY(-2px);box-shadow:0 8px 25px rgba(124,58,237,.38);color:#fff;}
        .pro-btn{background:#fff !important;color:#0f0f11 !important;}
        .pro-btn:hover{background:#f0f0f0 !important;box-shadow:0 8px 25px rgba(0,0,0,.2) !important;color:#0f0f11 !important;}
        .pricing-tags-bar{display:flex;flex-wrap:wrap;gap:1.2rem 2rem;justify-content:center;padding-top:2.5rem;border-top:1.5px solid #f3f4f6;}
        .pricing-tags-bar span{font-size:.78rem;color:#9ca3af;display:flex;align-items:center;gap:.35rem;white-space:nowrap;}
"""

with open(r'd:\Downloads\lucky website_in_webxray\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Insert pricing CSS before </style>
html = html.replace('    </style>', PRICING_CSS + '    </style>', 1)

with open(r'd:\Downloads\lucky website_in_webxray\index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Pricing CSS injected into index.html')
