const startups = [
    {
        id: 'wework', name: 'WeWork', letter: 'W', years: '2010 — 2023', founded: 2010, closed: 2023, description: 'Coworking office space company that expanded too fast.', tagline: "Community-adjusted EBITDA couldn't pay the rent.", category: 'Real Estate', categoryLabel: 'Real Estate / Workspace', cause: 'Unsustainable Business Model', fundingLost: '$47 Billion', lifetime: '13 Years',
        hype: `WeWork rebranded office leasing as a tech-enabled community movement. Adam Neumann positioned the company as a platform for human elevation, not just coworking space. Backed by SoftBank, it expanded aggressively across the globe, signing long-term leases while renting short-term flexible desks. Investors bought into the narrative that WeWork was a tech disruptor rather than a real estate company.`,
        mistake: `WeWork's fundamental error was misrepresenting its business model. It took long-term real estate obligations and tried to serve short-term clients — a structural mismatch requiring perpetual capital. When the IPO prospectus was published, analysts saw through the narrative. The valuation collapsed from $47B to near zero in months, and Adam Neumann's unchecked governance destroyed institutional trust entirely.`,
        differently: `"I would have never let one person have unchecked control over billions in capital. Board accountability must exist from day one, regardless of founder charisma."`,
        lessons: ["A real estate business cannot be valued like a tech platform.", "Unit economics must work before hyper-scaling.", "Founder governance must be balanced with accountability."]
    },
    {
        id: 'moviepass', name: 'MoviePass', letter: 'M', years: '2011 — 2019', founded: 2011, closed: 2019, description: 'Subscription service for unlimited cinema tickets.', tagline: "Burning $40M/month, one $9.95 ticket at a time.", category: 'Entertainment', categoryLabel: 'Entertainment', cause: 'Broken Unit Economics', fundingLost: '$400 Million', lifetime: '8 Years',
        hype: `MoviePass offered unlimited movies for $9.95/month — less than a single ticket in most cities. The pitch: get users hooked, then monetize through data and studio partnerships. At its peak it had 3 million subscribers and was hailed as the Netflix of movie theaters.`,
        mistake: `The unit economics were catastrophically broken from day one. MoviePass paid theaters full price per ticket while charging users a fraction of the cost. With no path to profitability, the company burned through cash at $40M/month and resorted to locking users out of accounts — destroying whatever trust remained.`,
        differently: `"I'd validate the partnership economics before launching publicly. A model that loses money on every transaction cannot be fixed by scale."`,
        lessons: ["Subsidizing consumption is not a business model.", "Negotiate supply-side deals before scaling demand.", "Cutting corners on your core promise is irreversible brand damage."]
    },
    {
        id: 'beepi', name: 'Beepi', letter: 'B', years: '2013 — 2017', founded: 2013, closed: 2017, description: 'Online used car marketplace with peer-to-peer model.', tagline: "Disrupting car sales, one lavish expense report at a time.", category: 'Automotive', categoryLabel: 'Automotive Marketplace', cause: 'Operational Costs', fundingLost: '$150 Million', lifetime: '4 Years',
        hype: `Beepi aimed to make buying and selling used cars as easy as ordering from Amazon. Cars were inspected, certified, and delivered to your door with a 10-day return policy. The company raised $150M and was valued at $500M, with plans to disrupt the $1 trillion used car market.`,
        mistake: `Beepi burned cash on unsustainable operational costs — inspectors, logistics, and a culture of executive excess. Every car transaction was expensive to execute, margins were thin, and leadership failed to build supply-side scale needed to reduce per-unit costs. Internal culture issues led to a talent exodus at critical moments.`,
        differently: `"Operational marketplaces require ruthless cost discipline from day one. Unit economics need to be viable at small scale before you think about growth."`,
        lessons: ["Physical-world logistics eat margins fast.", "Executive spending culture signals deeper governance problems.", "Build unit economics at small scale first."]
    },
    {
        id: 'juicero', name: 'Juicero', letter: 'J', years: '2013 — 2017', founded: 2013, closed: 2017, description: 'Smart juicer startup with $400 proprietary hardware.', tagline: "A $400 machine to squeeze a bag you could squeeze by hand.", category: 'Hardware', categoryLabel: 'Consumer Hardware', cause: 'No Genuine Value Proposition', fundingLost: '$120 Million', lifetime: '4 Years',
        hype: `Juicero was Silicon Valley's most infamous hardware startup. It promised a WiFi-connected juicer that would revolutionize home nutrition, backed by $120M from top VCs. The sleek $400 machine pressed proprietary juice packs — positioning itself as the "Keurig of juice."`,
        mistake: `Bloomberg reporters discovered you could squeeze the juice packs with your bare hands just as effectively as the $400 machine. The proprietary lock-in was built on a product nobody needed. When this became public, Juicero became a symbol of Silicon Valley's excess — solving problems that don't exist with unnecessary technology.`,
        differently: `"Ask the hardest question first: does this actually solve a real problem, or does it just look impressive in a demo?"`,
        lessons: ["Technology must solve genuine problems, not create the illusion of innovation.", "Proprietary lock-in fails when the core product has no independent value.", "Talk to real customers before investing in hardware production."]
    },
    {
        id: 'jawbone', name: 'Jawbone', letter: 'J', years: '1999 — 2017', founded: 1999, closed: 2017, description: 'Wearable tech pioneer felled by manufacturing woes and Apple.', tagline: "Raised $900M. Sold assets for cents on the dollar.", category: 'Health', categoryLabel: 'Health / Wearable Tech', cause: 'Manufacturing & Competition', fundingLost: '$900 Million', lifetime: '18 Years',
        hype: `Jawbone was a pioneer in wearable technology — creating iconic Bluetooth speakers and some of the first fitness trackers. At its peak the company was valued at $3.2 billion and raised nearly $1 billion from some of the most prominent investors in Silicon Valley.`,
        mistake: `Persistent manufacturing defects created massive customer dissatisfaction. Jawbone was repeatedly out-executed by Fitbit and then crushed when Apple Watch entered the market. The company couldn't iterate fast enough in hardware, struggled with cash flow, and quietly dissolved — never filing for formal bankruptcy.`,
        differently: `"Hardware is brutally unforgiving. Be fanatical about manufacturing quality and always model the scenario where a $2 trillion company enters your category."`,
        lessons: ["Hardware quality issues compound — they don't forgive second chances.", "Always model the scenario where a tech giant enters your market.", "Consumer loyalty in hardware is extremely fragile."]
    },
    {
        id: 'toysrus', name: 'Toys R Us', letter: 'T', years: '1948 — 2017', founded: 1948, closed: 2017, description: 'Iconic toy retail chain felled by private equity debt.', tagline: "Loaded with debt, outrun by Amazon, forgotten by kids.", category: 'Retail', categoryLabel: 'Retail', cause: 'Private Equity Debt Load', fundingLost: '$5 Billion+', lifetime: '69 Years',
        hype: `Toys R Us was the dominant force in toy retail for generations. With 1,600+ stores globally and iconic branding, it was a childhood institution. At its peak it generated $11 billion in annual revenue and was considered unassailable in the toy category.`,
        mistake: `In 2005, a private equity buyout loaded Toys R Us with $5.3B in debt — leaving no capital to invest in e-commerce when Amazon was eating retail alive. The company also signed a deal with Amazon in 2000 that prohibited selling toys on its own website. By the time leadership attempted a digital turnaround, the debt ceiling made it impossible to execute.`,
        differently: `"Never trade long-term strategic flexibility for short-term financial engineering. Debt is a strategic constraint, not just a financial one."`,
        lessons: ["Private equity leverage can destroy brands that needed reinvestment capital.", "Outsourcing your digital channel to a competitor is an existential mistake.", "Debt ceilings destroy your ability to adapt to market shifts."]
    },
    {
        id: 'quibi', name: 'Quibi', letter: 'Q', years: '2018 — 2020', founded: 2018, closed: 2020, description: 'Short-form mobile streaming platform that raised $1.75B and folded in 6 months.', tagline: "$1.75B to discover nobody wanted 10-minute shows on their phone.", category: 'Entertainment', categoryLabel: 'Entertainment / Streaming', cause: 'Wrong Product-Market Fit', fundingLost: '$1.75 Billion', lifetime: '2 Years',
        hype: `Quibi promised to reinvent media for mobile — high-quality Hollywood productions in 10-minute chapters. Founded by Jeffrey Katzenberg and led by Meg Whitman, it raised $1.75B pre-launch from nearly every major studio.`,
        mistake: `Quibi launched days after COVID lockdowns began — precisely when everyone was home on their TVs, not commuting. Content couldn't be shared on social media, the app didn't work on TV screens, and there was no reason to pay when free content was everywhere.`,
        differently: `"Platform context defines content format. Test the core thesis before spending a billion dollars."`,
        lessons: ["Validate platform behavior before scaling content investment.", "Shareability is a core growth mechanic for media.", "Never discount macro context — timing is product."]
    },
    {
        id: 'theranos', name: 'Theranos', letter: 'T', years: '2003 — 2018', founded: 2003, closed: 2018, description: 'Blood testing startup built on fraud that fooled Silicon Valley.', tagline: "The most audacious fraud in Silicon Valley history.", category: 'Health', categoryLabel: 'Health / Biotech', cause: 'Fraud & Deception', fundingLost: '$900 Million', lifetime: '15 Years',
        hype: `Elizabeth Holmes claimed a revolutionary device could run hundreds of blood tests from a single finger-prick drop. Valued at $9B, the company had partnerships with Walgreens, Safeway, and the US military.`,
        mistake: `The technology never worked. Theranos ran tests on conventional machines while lying to patients and investors for over a decade. Holmes was convicted of fraud in 2022.`,
        differently: `"Science doesn't respond to charisma. The gap between a compelling vision and a working product must be bridged with data, not storytelling."`,
        lessons: ["Never deploy unvalidated medical technology on real patients.", "Charismatic founders require rigorous technical oversight.", "Regulatory compliance is non-negotiable in healthcare."]
    },
    {
        id: 'vine', name: 'Vine', letter: 'V', years: '2012 — 2017', founded: 2012, closed: 2017, description: 'Six-second video platform invented the format — then was abandoned by Twitter.', tagline: "Invented the format. Forgot to build the business.", category: 'Social', categoryLabel: 'Social Media', cause: 'Platform Neglect & Competition', fundingLost: '$30 Million', lifetime: '5 Years',
        hype: `Vine invented short-form looping video before anyone else. Acquired by Twitter for $30M, it grew to 200M users and launched a generation of creators. Its format directly inspired TikTok and Instagram Reels.`,
        mistake: `Twitter starved Vine of resources and failed to build a creator monetization program. When top creators were poached by competitors, the network collapsed. Twitter shut it down rather than invest in what it had neglected.`,
        differently: `"Creator platforms live and die by their top talent. Monetize creators or lose them — and when creators leave, audiences follow."`,
        lessons: ["Creator monetization must be a core feature, not an afterthought.", "Platform neglect from a parent company is a death sentence.", "Inventing a format doesn't guarantee owning the category."]
    },
    {
        id: 'rdio', name: 'Rdio', letter: 'R', years: '2010 — 2015', founded: 2010, closed: 2015, description: 'Music streaming pioneer outrun by Spotify\u2019s aggressive free tier.', tagline: "Beautiful product, fatally wrong business model.", category: 'Entertainment', categoryLabel: 'Entertainment / Music', cause: 'Freemium Model Failure', fundingLost: '$125 Million', lifetime: '5 Years',
        hype: `Rdio was widely considered the most beautifully designed music streaming service — praised by designers and musicians alike. It launched before Spotify in the US and built a loyal subscriber base.`,
        mistake: `Rdio bet on paid-only subscriptions while Spotify entered the US with a massive free tier. Users chose free over beautiful every time. Rdio couldn't compete and filed for bankruptcy in 2015.`,
        differently: `"In commodity content markets, distribution and free trials beat design quality. Match the market's freemium expectations or get priced out."`,
        lessons: ["Free tiers win top-of-funnel in content subscription markets.", "Design excellence alone cannot overcome distribution disadvantage.", "Raise more capital before your competitor locks in network effects."]
    },
    {
        id: 'fab', name: 'Fab.com', letter: 'F', years: '2010 — 2015', founded: 2010, closed: 2015, description: 'Flash-sale design retailer that grew to $1B valuation then imploded.', tagline: "Scaled revenue without scaling margins. Classic.", category: 'Retail', categoryLabel: 'E-Commerce / Retail', cause: 'Growth Without Profitability', fundingLost: '$336 Million', lifetime: '5 Years',
        hype: `Fab.com grew from $0 to $100M in revenue in under 18 months. Backed by $336M, it expanded to Europe and was valued at $1B in 2012, becoming one of the hottest consumer startups in the world.`,
        mistake: `Fab conflated revenue growth with business health. It expanded to Europe at enormous cost, built custom warehousing, and hired hundreds before solving unit economics. Returns were high, margins were thin, and the burn rate was unsustainable.`,
        differently: `"Revenue is vanity. Gross margin is sanity. Never scale a business whose unit economics aren't proven at small scale."`,
        lessons: ["International expansion before domestic profitability is suicidal.", "Don't build fixed-cost infrastructure until variable economics are proven.", "Investor capital is not revenue — it runs out."]
    },
    {
        id: 'munchery', name: 'Munchery', letter: 'M', years: '2010 — 2019', founded: 2010, closed: 2019, description: 'Meal delivery startup that threw away $5M in unsold food.', tagline: "Delivered meals and $5M of food waste to the dumpster.", category: 'Food', categoryLabel: 'Food Tech / Delivery', cause: 'Operational Waste & Unit Economics', fundingLost: '$125 Million', lifetime: '9 Years',
        hype: `Munchery raised $125M promising fresh, chef-prepared meals delivered to your door. It expanded across multiple cities, hiring professional chefs and building commissary kitchens.`,
        mistake: `Munchery threw away an estimated $5M in unsold food due to demand forecasting failures. When DoorDash and Uber Eats flooded the market, Munchery's model became uncompetitive and its economics unworkable.`,
        differently: `"Demand forecasting in food is existential — overproduction is pure waste. Solve for zero-waste operations before you scale."`,
        lessons: ["Food waste is a profit-killer — forecast demand precisely.", "Logistics-heavy businesses require operational excellence before scale.", "Well-funded new entrants can invalidate your entire model overnight."]
    },
    {
        id: 'homejoy', name: 'Homejoy', letter: 'H', years: '2012 — 2015', founded: 2012, closed: 2015, description: 'On-demand cleaning startup killed by worker classification lawsuits.', tagline: "Disrupted cleaning. Got cleaned out by labor law.", category: 'SaaS', categoryLabel: 'Home Services / Marketplace', cause: 'Legal & Labor Classification', fundingLost: '$38 Million', lifetime: '3 Years',
        hype: `Homejoy raised $38M and scaled to 30+ cities, promising professional home cleaning on-demand at $19 for a first clean. Y Combinator praised it as the Uber for home services.`,
        mistake: `Multiple worker misclassification lawsuits forced Homejoy to potentially reclassify cleaners as employees — making the business model economically unviable. Rather than fight or restructure, it shut down.`,
        differently: `"Labor law is a business model constraint. Model your unit economics under employee classification before you scale a gig economy platform."`,
        lessons: ["Gig economy models carry existential legal risk.", "Build labor cost scenarios into financial models from day one.", "Rapid geographic expansion before solving regulatory risk is reckless."]
    },
    {
        id: 'zenefits', name: 'Zenefits', letter: 'Z', years: '2013 — 2017', founded: 2013, closed: 2017, description: 'HR software startup that grew 10x per year until compliance caught up.', tagline: "Grew 10x per year until compliance destroyed it.", category: 'SaaS', categoryLabel: 'SaaS / HR Tech', cause: 'Compliance & Culture Failure', fundingLost: '$584 Million', lifetime: '4 Years',
        hype: `Zenefits grew from $1M to $60M ARR in two years — one of the fastest B2B software companies in history. Its free HR software monetized through insurance commissions, reaching a $4.5B valuation.`,
        mistake: `Zenefits was selling insurance without proper broker licenses in dozens of states and built software to help employees skip mandatory licensing hours. Regulators discovered this and the fallout was catastrophic — CEO resigned, $7M in fines, 45% staff layoffs.`,
        differently: `"Regulatory compliance isn't optional in financial services. Build legal infrastructure as fast as you build product."`,
        lessons: ["In regulated industries, compliance is a product feature.", "Hyper-growth can mask existential legal and ethical problems.", "Culture set by founders becomes company behavior at scale."]
    },
    {
        id: 'solyndra', name: 'Solyndra', letter: 'S', years: '2005 — 2011', founded: 2005, closed: 2011, description: 'Solar startup that received $535M in government loans and still collapsed.', tagline: "Half a billion in taxpayer loans. Gone in five years.", category: 'Hardware', categoryLabel: 'CleanTech / Solar', cause: 'Cost Structure vs. Market Price', fundingLost: '$535 Million', lifetime: '6 Years',
        hype: `Solyndra received $535M in DOE loan guarantees and a presidential visit. Its cylindrical solar panels promised faster installation and became the Obama administration's flagship green energy investment.`,
        mistake: `The price of conventional silicon solar panels dropped 80% — a decline Solyndra's cost structure could not survive. China's manufacturing subsidies flooded the market, structurally undercutting Solyndra on price.`,
        differently: `"Technology advantage disappears when commodity pricing is weaponized. Model the worst-case competitor scenario before spending at scale."`,
        lessons: ["Government backing is not market validation.", "Commodity market dynamics must be stress-tested against your production costs.", "Global supply chain shifts can kill a business model overnight."]
    },
    {
        id: 'zano', name: 'Zano', letter: 'Z', years: '2014 — 2015', founded: 2014, closed: 2015, description: 'Crowdfunded mini-drone that raised £2.3M and delivered almost nothing.', tagline: "Most-funded Kickstarter drone. Barely flew.", category: 'Hardware', categoryLabel: 'Consumer Hardware / Drones', cause: 'Hardware Engineering Failure', fundingLost: '£2.3 Million', lifetime: '1 Year',
        hype: `Zano was the most-funded European Kickstarter project ever — raising £2.3M from 12,000+ backers for a tiny autonomous selfie drone. The concept was compelling and the marketing was brilliant.`,
        mistake: `The hardware never worked reliably. Stability, battery life, and collision avoidance problems couldn't be solved. The company shipped a fraction of units, most defective, and collapsed leaving backers with nothing.`,
        differently: `"Crowdfunding creates legal and ethical obligations. Hardware startups must solve engineering fundamentals before public commitments."`,
        lessons: ["Crowdfunding is not product validation — it's a commitment to deliver.", "Hardware prototypes lie — validate with engineering rigor.", "Small teams cannot solve multi-disciplinary hardware problems without deep expertise."]
    }
];


// MARQUEE
const mt = document.getElementById('marqueeTrack');
const items = ['WeWork · $47B Lost', 'MoviePass · Broken Economics', 'Beepi · Operational Collapse', 'Juicero · No Value Prop', 'Jawbone · $900M Gone', 'Toys R Us · PE Debt Trap', 'Theranos · Fraud at Scale', 'Fab.com · Growth Without Profit', 'Rdio · Beaten by Spotify', 'Munchery · Unit Economics Fail', 'Quibi · $1.75B in 6 Months', 'Vine · Strategy Failure'];
mt.innerHTML = [...items, ...items].map(i => `<div class="marquee-item">${i}</div>`).join('');

// CURSOR
const cur = document.getElementById('cursor'), cring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px'; });
(function rl() { rx += (mx - rx) * .12; ry += (my - ry) * .12; cring.style.left = rx + 'px'; cring.style.top = ry + 'px'; requestAnimationFrame(rl); })();
function ah(el) { el.addEventListener('mouseenter', () => { cur.classList.add('hovered'); cring.classList.add('hovered'); }); el.addEventListener('mouseleave', () => { cur.classList.remove('hovered'); cring.classList.remove('hovered'); }); }
document.querySelectorAll('button,a,input,select,.cat-pill,.about-card,.how-step').forEach(ah);

// COUNTERS
function cnt(el, to, dur, pre = '', suf = '') { let s = 0, step = to / (dur / 16); let t = setInterval(() => { s += step; if (s >= to) { s = to; clearInterval(t); } el.textContent = pre + Math.floor(s) + suf; }, 16); }
setTimeout(() => { cnt(document.getElementById('c1'), 247, 1800); cnt(document.getElementById('c2'), 340, 2000, '$', 'B'); cnt(document.getElementById('c3'), 891, 1600); cnt(document.getElementById('c4'), 14, 1200); }, 600);

// ─── RICH BRANDED CANVAS IMAGE GENERATOR ───
// Each company gets a unique, visually striking card image
// drawn entirely on canvas with brand colors, shapes, and identity

const BRAND_CFG = {
    wework: {
        bg: ['#1C1C3A', '#2D1B69'],
        accent: '#00D4AA', accent2: '#7C3AED',
        style: 'grid_glow',
        name: 'WEWORK', tagline: 'COWORKING · 2010–2023',
        shape: 'hexagon', iconColor: '#00D4AA'
    },
    moviepass: {
        bg: ['#1A0000', '#3D0000'],
        accent: '#FF2D2D', accent2: '#FF8C00',
        style: 'cinema',
        name: 'MOVIEPASS', tagline: 'CINEMA PASS · 2011–2019',
        shape: 'film', iconColor: '#FF2D2D'
    },
    beepi: {
        bg: ['#003366', '#0055AA'],
        accent: '#4DA6FF', accent2: '#00CFFF',
        style: 'diagonal',
        name: 'BEEPI', tagline: 'AUTO MARKET · 2013–2017',
        shape: 'circle', iconColor: '#4DA6FF'
    },
    juicero: {
        bg: ['#1B4332', '#2D6A4F'],
        accent: '#95D5B2', accent2: '#FFD60A',
        style: 'organic',
        name: 'JUICERO', tagline: 'HARDWARE · 2013–2017',
        shape: 'drop', iconColor: '#95D5B2'
    },
    jawbone: {
        bg: ['#1C1C1C', '#2C2C2C'],
        accent: '#90CAF9', accent2: '#E0E0E0',
        style: 'waves',
        name: 'JAWBONE', tagline: 'WEARABLES · 1999–2017',
        shape: 'wave', iconColor: '#90CAF9'
    },
    toysrus: {
        bg: ['#001F5B', '#003399'],
        accent: '#FFD700', accent2: '#FF4444',
        style: 'stars',
        name: 'TOYS R US', tagline: 'RETAIL · 1948–2017',
        shape: 'star', iconColor: '#FFD700'
    },
    quibi: {
        bg: ['#FF4500', '#CC3700'],
        accent: '#FFD700', accent2: '#FF8C00',
        style: 'diagonal',
        name: 'QUIBI', tagline: 'STREAMING · 2018–2020',
        shape: 'play', iconColor: '#FFD700'
    },
    theranos: {
        bg: ['#0A0A2E', '#1A0A3E'],
        accent: '#3D9BE9', accent2: '#00BFFF',
        style: 'grid_glow',
        name: 'THERANOS', tagline: 'BIOTECH · 2003–2018',
        shape: 'circle', iconColor: '#3D9BE9'
    },
    vine: {
        bg: ['#00A86B', '#006B44'],
        accent: '#00FF9F', accent2: '#AAFFDD',
        style: 'loops',
        name: 'VINE', tagline: 'SOCIAL VIDEO · 2012–2017',
        shape: 'loop', iconColor: '#00FF9F'
    },
    rdio: {
        bg: ['#1A3A5C', '#0D2137'],
        accent: '#1DB954', accent2: '#4DFFAA',
        style: 'waves',
        name: 'RDIO', tagline: 'MUSIC · 2010–2015',
        shape: 'music', iconColor: '#1DB954'
    },
    fab: {
        bg: ['#CC0044', '#990033'],
        accent: '#FF69B4', accent2: '#FFB6C1',
        style: 'dots',
        name: 'FAB.COM', tagline: 'E-COMMERCE · 2010–2015',
        shape: 'heart', iconColor: '#FF69B4'
    },
    munchery: {
        bg: ['#4A1500', '#7B2D00'],
        accent: '#FF7043', accent2: '#FFAB40',
        style: 'organic',
        name: 'MUNCHERY', tagline: 'FOOD DELIVERY · 2010–2019',
        shape: 'fork', iconColor: '#FF7043'
    },
    homejoy: {
        bg: ['#003366', '#004080'],
        accent: '#64B5F6', accent2: '#B3E5FC',
        style: 'grid_glow',
        name: 'HOMEJOY', tagline: 'HOME SERVICES · 2012–2015',
        shape: 'home', iconColor: '#64B5F6'
    },
    zenefits: {
        bg: ['#003322', '#005533'],
        accent: '#00E676', accent2: '#69F0AE',
        style: 'diagonal',
        name: 'ZENEFITS', tagline: 'HR TECH · 2013–2017',
        shape: 'check', iconColor: '#00E676'
    },
    solyndra: {
        bg: ['#1A1200', '#332200'],
        accent: '#FFC107', accent2: '#FF8F00',
        style: 'solar',
        name: 'SOLYNDRA', tagline: 'CLEAN TECH · 2005–2011',
        shape: 'sun', iconColor: '#FFC107'
    },
    zano: {
        bg: ['#050510', '#0A0A20'],
        accent: '#00D4FF', accent2: '#7B2FFF',
        style: 'grid_glow',
        name: 'ZANO', tagline: 'DRONE TECH · 2014–2015',
        shape: 'drone', iconColor: '#00D4FF'
    },
};

function makeBrandedCanvas(id) {
    const s = startups.find(x => x.id === id);
    const cfg = BRAND_CFG[id];
    if (!cfg) return null;

    const W = 900, H = 600;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');

    // ── Rich gradient background ──
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, cfg.bg[0]);
    bg.addColorStop(1, cfg.bg[1]);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // ── Style-specific background pattern ──
    ctx.save();
    if (cfg.style === 'grid_glow') {
        // Fine grid
        ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1;
        for (let x = 0; x <= W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
        for (let y = 0; y <= H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
        // Accent grid lines
        ctx.strokeStyle = cfg.accent + '22'; ctx.lineWidth = 1.5;
        for (let x = 0; x <= W; x += 160) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
        for (let y = 0; y <= H; y += 120) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
        // Corner glow
        const g1 = ctx.createRadialGradient(0, 0, 0, 0, 0, 350);
        g1.addColorStop(0, cfg.accent + '30'); g1.addColorStop(1, 'transparent');
        ctx.fillStyle = g1; ctx.fillRect(0, 0, W, H);
    } else if (cfg.style === 'cinema') {
        // Film strip sides
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(0, 0, 60, H); ctx.fillRect(W - 60, 0, 60, H);
        ctx.fillStyle = cfg.accent + '33';
        for (let y = 20; y < H; y += 60) {
            ctx.fillRect(10, y, 40, 36); ctx.fillRect(W - 50, y, 40, 36);
        }
        // Center circles
        for (let i = 0; i < 4; i++) {
            const r = 60 + i * 70;
            ctx.beginPath(); ctx.arc(W / 2, H / 2, r, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(255,45,45,${0.15 - i * 0.03})`; ctx.lineWidth = 1; ctx.stroke();
        }
    } else if (cfg.style === 'diagonal') {
        // Bold diagonal stripes
        ctx.strokeStyle = 'rgba(255,255,255,0.05)'; ctx.lineWidth = 1;
        for (let i = -H; i < W + H; i += 50) {
            ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + H, H); ctx.stroke();
        }
        ctx.strokeStyle = cfg.accent + '20'; ctx.lineWidth = 2;
        for (let i = -H; i < W + H; i += 150) {
            ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + H, H); ctx.stroke();
        }
    } else if (cfg.style === 'waves') {
        ctx.strokeStyle = 'rgba(255,255,255,0.05)'; ctx.lineWidth = 1;
        for (let y = 0; y < H; y += 24) {
            ctx.beginPath();
            for (let x = 0; x <= W; x += 3) {
                const wy = y + Math.sin((x * 0.012) + (y * 0.02)) * 14;
                x === 0 ? ctx.moveTo(x, wy) : ctx.lineTo(x, wy);
            }
            ctx.stroke();
        }
        ctx.strokeStyle = cfg.accent + '30'; ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 3) {
            const wy = H / 2 + Math.sin(x * 0.01) * 50 + Math.sin(x * 0.025) * 25;
            x === 0 ? ctx.moveTo(x, wy) : ctx.lineTo(x, wy);
        }
        ctx.stroke();
    } else if (cfg.style === 'dots') {
        for (let x = 24; x < W; x += 48) {
            for (let y = 24; y < H; y += 48) {
                const dist = Math.hypot(x - W / 2, y - H / 2);
                const alpha = Math.max(0.04, 0.18 - dist / 1200);
                ctx.beginPath(); ctx.arc(x, y, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${alpha})`; ctx.fill();
            }
        }
    } else if (cfg.style === 'organic') {
        // Organic blobs
        for (let i = 0; i < 3; i++) {
            const bx = [160, W / 2, W - 160][i], by = [H * 0.35, H * 0.65, H * 0.3][i];
            const gr = ctx.createRadialGradient(bx, by, 0, bx, by, [200, 250, 180][i]);
            gr.addColorStop(0, cfg.accent + '18'); gr.addColorStop(1, 'transparent');
            ctx.fillStyle = gr; ctx.fillRect(0, 0, W, H);
        }
    } else if (cfg.style === 'stars') {
        // Starfield
        const seed = [0.1, 0.7, 0.3, 0.9, 0.5, 0.2, 0.8, 0.4, 0.6, 0.15, 0.85, 0.45, 0.65, 0.25, 0.95, 0.35, 0.75, 0.55, 0.05, 0.6];
        for (let i = 0; i < 80; i++) {
            const sx = (seed[(i * 3) % 20] * seed[(i * 7 + 1) % 20] * W * 3) % W;
            const sy = (seed[(i * 5 + 2) % 20] * seed[(i * 11 + 3) % 20] * H * 3) % H;
            const sr = (seed[(i * 13 + 4) % 20]) * 2 + 0.5;
            const al = seed[(i * 17 + 5) % 20] * 0.5 + 0.1;
            ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${al})`; ctx.fill();
        }
    } else if (cfg.style === 'loops') {
        // Vine-like loops
        ctx.strokeStyle = cfg.accent + '22'; ctx.lineWidth = 2;
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            const cx = W / 2 + (i - 2) * 120, cy = H / 2;
            ctx.arc(cx, cy, 80 + i * 20, 0, Math.PI * 2);
            ctx.stroke();
        }
    } else if (cfg.style === 'solar') {
        // Solar rays
        ctx.save(); ctx.translate(W / 2, H / 2);
        for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
            ctx.beginPath(); ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(a) * 600, Math.sin(a) * 600);
            ctx.strokeStyle = cfg.accent + '15'; ctx.lineWidth = 1; ctx.stroke();
        }
        ctx.restore();
        // Concentric sun rings
        for (let i = 1; i < 5; i++) {
            ctx.beginPath(); ctx.arc(W / 2, H / 2, i * 80, 0, Math.PI * 2);
            ctx.strokeStyle = cfg.accent + (i < 3 ? '30' : '15'); ctx.lineWidth = 1; ctx.stroke();
        }
    }
    ctx.restore();

    // ── Big accent glow in center-bottom ──
    const glow = ctx.createRadialGradient(W / 2, H * 0.75, 0, W / 2, H * 0.75, 400);
    glow.addColorStop(0, cfg.accent + '28');
    glow.addColorStop(0.5, cfg.accent + '10');
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow; ctx.fillRect(0, 0, W, H);

    // ── Corner accent blob ──
    const c2 = ctx.createRadialGradient(W, 0, 0, W, 0, 280);
    c2.addColorStop(0, cfg.accent2 + '25'); c2.addColorStop(1, 'transparent');
    ctx.fillStyle = c2; ctx.fillRect(0, 0, W, H);

    // ── Vignette ──
    const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.15, W / 2, H / 2, H * 0.85);
    vig.addColorStop(0, 'rgba(0,0,0,0)');
    vig.addColorStop(1, 'rgba(0,0,0,0.72)');
    ctx.fillStyle = vig; ctx.fillRect(0, 0, W, H);

    // ── Large ghost company name behind ──
    ctx.save();
    ctx.font = `bold ${cfg.name.length > 6 ? 110 : 150}px "Bebas Neue",sans-serif`;
    ctx.fillStyle = 'rgba(255,255,255,0.07)';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(cfg.name, W / 2, H / 2 + 20);
    ctx.restore();

    // ── Accent bar left side ──
    const barGrad = ctx.createLinearGradient(0, 0, 0, H);
    barGrad.addColorStop(0, cfg.accent);
    barGrad.addColorStop(1, cfg.accent2);
    ctx.fillStyle = barGrad;
    ctx.fillRect(0, 0, 5, H);

    // ── Bottom info strip ──
    const strip = ctx.createLinearGradient(0, H - 90, 0, H);
    strip.addColorStop(0, 'rgba(0,0,0,0)');
    strip.addColorStop(1, 'rgba(0,0,0,0.88)');
    ctx.fillStyle = strip; ctx.fillRect(0, H - 90, W, 90);

    // ── Company Name (visible text at bottom-left) ──
    ctx.font = `bold 38px "Bebas Neue",sans-serif`;
    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
    ctx.fillText(cfg.name, 22, H - 34);

    // ── Tagline ──
    ctx.font = `500 11px "DM Sans",sans-serif`;
    ctx.fillStyle = cfg.accent;
    ctx.fillText(cfg.tagline, 22, H - 14);

    // ── Failure label (top right) ──
    ctx.fillStyle = '#E02020';
    ctx.fillRect(W - 120, 16, 104, 26);
    ctx.font = `700 10px "DM Sans",sans-serif`;
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('DECEASED', W - 68, 29);

    // ── Large logo icon (center) ──
    const iconX = W / 2, iconY = H * 0.42, iconR = 52;
    // Circle background
    const iconBg = ctx.createRadialGradient(iconX, iconY, 0, iconX, iconY, iconR);
    iconBg.addColorStop(0, cfg.accent + 'AA');
    iconBg.addColorStop(1, cfg.accent + '44');
    ctx.beginPath(); ctx.arc(iconX, iconY, iconR, 0, Math.PI * 2);
    ctx.fillStyle = iconBg; ctx.fill();
    ctx.strokeStyle = cfg.accent; ctx.lineWidth = 2; ctx.stroke();

    // Letter in circle
    const letter = s ? s.name.charAt(0) : cfg.name.charAt(0);
    ctx.font = `bold 56px "Bebas Neue",sans-serif`;
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(letter, iconX, iconY + 2);

    return canvas.toDataURL('image/jpeg', 0.92);
}

// Default image for unknown companies — still rich and branded
function makeDefaultImage(letter, name) {
    const W = 900, H = 600;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');

    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, '#1A1A2E'); bg.addColorStop(1, '#0D0D1A');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = 'rgba(255,255,255,0.05)'; ctx.lineWidth = 1;
    for (let x = 0; x <= W; x += 50) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y <= H; y += 50) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // Glow
    const glow = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, 350);
    glow.addColorStop(0, 'rgba(224,32,32,0.18)'); glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow; ctx.fillRect(0, 0, W, H);

    // Vignette
    const vig = ctx.createRadialGradient(W / 2, H / 2, 80, W / 2, H / 2, 520);
    vig.addColorStop(0, 'rgba(0,0,0,0)'); vig.addColorStop(1, 'rgba(0,0,0,0.75)');
    ctx.fillStyle = vig; ctx.fillRect(0, 0, W, H);

    // Ghost letter
    ctx.font = 'bold 280px "Bebas Neue", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(letter, W / 2, H / 2 + 20);

    // Icon circle
    ctx.beginPath(); ctx.arc(W / 2, H * 0.42, 50, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(224,32,32,0.7)'; ctx.fill();
    ctx.strokeStyle = '#E02020'; ctx.lineWidth = 2; ctx.stroke();
    ctx.font = 'bold 52px "Bebas Neue",sans-serif';
    ctx.fillStyle = 'white'; ctx.fillText(letter, W / 2, H * 0.42 + 2);

    // Accent bar
    ctx.fillStyle = '#E02020'; ctx.fillRect(0, 0, 5, H);

    // Bottom strip
    const strip = ctx.createLinearGradient(0, H - 90, 0, H);
    strip.addColorStop(0, 'rgba(0,0,0,0)'); strip.addColorStop(1, 'rgba(0,0,0,0.9)');
    ctx.fillStyle = strip; ctx.fillRect(0, H - 90, W, 90);

    ctx.font = 'bold 38px "Bebas Neue",sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
    ctx.fillText(name.toUpperCase(), 22, H - 34);

    ctx.font = '500 11px "DM Sans",sans-serif';
    ctx.fillStyle = '#E02020';
    ctx.fillText('CLASSIFIED · STARTUP GRAVE', 22, H - 14);

    ctx.fillStyle = '#E02020'; ctx.fillRect(W - 120, 16, 104, 26);
    ctx.font = '700 10px "DM Sans",sans-serif';
    ctx.fillStyle = 'white'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('DECEASED', W - 68, 29);

    return canvas.toDataURL('image/jpeg', 0.88);
}

// Build image cache on load
const IMG_CACHE = {};
function preloadImages() {
    startups.forEach(s => {
        IMG_CACHE[s.id] = makeBrandedCanvas(s.id) || makeDefaultImage(s.letter, s.name);
    });
}
preloadImages();

// ── POPULATE NAV OVERLAY STARTUP LIST ──
(function () {
    const el = document.getElementById('navOverlayStartupList');
    if (!el) return;
    const featured = startups.slice(0, 7);
    el.innerHTML = featured.map((s, i) => {
        const cfg = BRAND_CFG[s.id] || {};
        const bgColor = cfg.bg ? cfg.bg[0] : '#1a1a1a';
        const accent = cfg.accent || '#E02020';
        return `<div class="nav-startup-item" style="animation:fadeUp .4s ${i * 0.06}s both" onclick="showDetail('${s.id}');toggleMenu()">
      <div class="nav-startup-logo" style="background:${bgColor};color:${accent}">
        ${s.letter}
      </div>
      <div class="nav-startup-info">
        <div class="nav-startup-name">${s.name}</div>
        <div class="nav-startup-meta">${s.cause} · ${s.years}</div>
      </div>
      <div class="nav-startup-lost" style="color:${accent}">${s.fundingLost}</div>
    </div>`;
    }).join('');
    el.querySelectorAll('.nav-startup-item').forEach(el => ah(el));
})();

// RENDER LIST VIEW
function renderCards(data) {
    const outer = document.getElementById('graveyardListOuter');
    outer.innerHTML = '';
    document.getElementById('resultCount').textContent = `Showing ${data.length} entr${data.length === 1 ? 'y' : 'ies'}`;
    if (!data.length) {
        outer.innerHTML = `<div style="padding:80px;text-align:center;color:var(--gray);font-family:'DM Serif Display',serif;font-style:italic;font-size:22px;grid-column:1/-1">No entries match your search.</div>`;
        return;
    }

    const half = Math.ceil(data.length / 2);
    const leftData = data.slice(0, half);
    const rightData = data.slice(half);

    // LEFT column
    const leftCol = document.createElement('div');
    leftCol.className = 'gy-list-col';
    leftCol.innerHTML = `<div class="gy-col-header">Recent Failures</div>`;
    leftData.forEach((s, i) => leftCol.appendChild(buildListEntry(s, i)));

    // RIGHT column
    const rightCol = document.createElement('div');
    rightCol.className = 'gy-list-col';
    rightCol.innerHTML = `<div class="gy-col-header">More Collapses</div>`;
    rightData.forEach((s, i) => rightCol.appendChild(buildListEntry(s, i + half)));

    outer.appendChild(leftCol);
    outer.appendChild(rightCol);

    // Hook cursor hover
    outer.querySelectorAll('.gy-entry').forEach(el => ah(el));
}

function buildListEntry(s, delay) {
    const imgUrl = IMG_CACHE[s.id] || makeDefaultImage(s.letter, s.name);

    const entry = document.createElement('div');
    entry.className = 'gy-entry';
    entry.style.animation = `fadeUp .5s ${delay * .05}s both`;

    entry.innerHTML = `
    <div class="gy-entry-thumb">
      <img src="${imgUrl}" alt="${s.name}" />
      <div class="gy-entry-thumb-letter">${s.letter}</div>
    </div>
    <div class="gy-entry-content">
      <div class="gy-entry-meta">${s.categoryLabel}<span class="gy-entry-meta-sep">•</span>${s.years}</div>
      <div class="gy-entry-name">${s.name}</div>
      <div class="gy-entry-desc">${s.description}</div>
      <div class="gy-entry-footer">
        <div class="gy-entry-cause">
          <div class="gy-cause-dot"></div>
          <div class="gy-cause-label">${s.cause}</div>
        </div>
        <div class="gy-entry-amount">${s.fundingLost} lost</div>
      </div>
    </div>
    <div class="gy-bookmark">
      <svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
    </div>`;

    entry.addEventListener('click', () => showDetail(s.id));
    return entry;
}

function filterCards() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    const cat = document.getElementById('categoryFilter').value;
    renderCards(startups.filter(s =>
        (s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.cause.toLowerCase().includes(q))
        && (!cat || s.category.includes(cat))
    ));
}

renderCards(startups);


// HAMBURGER MENU
let menuOpen = false;
function toggleMenu() {
    menuOpen = !menuOpen;
    const overlay = document.getElementById('navOverlay');
    const hamburger = document.getElementById('navHamburger');
    overlay.classList.toggle('open', menuOpen);
    hamburger.classList.toggle('open', menuOpen);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
}

// NAV SCROLL EFFECT
window.addEventListener('scroll', () => {
    document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 20);
});

// NAVIGATION
let cur_page = 'home';
const PAGE_IDS = { home: 'home-page', graveyard: 'graveyard-page', detail: 'detail-page', about: 'about-page' };
function navigate(to, catFilter = '') {
    if (to === cur_page && !catFilter) return;
    const fromEl = document.getElementById(PAGE_IDS[cur_page]);
    fromEl.classList.add('page-exit');
    setTimeout(() => {
        fromEl.classList.remove('active', 'page-exit');
        fromEl.style.display = 'none';
        const toEl = document.getElementById(PAGE_IDS[to]);
        toEl.style.display = 'block';
        toEl.classList.add('active', 'page-enter');
        setTimeout(() => toEl.classList.remove('page-enter'), 600);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        cur_page = to;
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active-nav'));
        document.querySelectorAll('.nav-overlay-link').forEach(l => l.classList.remove('active-overlay'));
        if (to === 'home') { document.getElementById('navHome').classList.add('active-nav'); document.getElementById('navOverlayHome').classList.add('active-overlay'); }
        if (to === 'graveyard') { document.getElementById('navGraveyard').classList.add('active-nav'); document.getElementById('navOverlayGraveyard').classList.add('active-overlay'); }
        if (to === 'about') { document.getElementById('navAbout').classList.add('active-nav'); document.getElementById('navOverlayAbout').classList.add('active-overlay'); initAboutPage(); }
        if (to === 'graveyard' && catFilter) {
            document.getElementById('categoryFilter').value = catFilter;
            filterCards();
        }
    }, 280);
}

// Per-company detail data (verdict scores, key people, key facts, timeline)
const DETAIL_DATA = {
    wework: {
        score: 9.3, scoreLabel: 'CATASTROPHIC',
        tags: ['Governance', 'Unit Economics', 'Fraud Adjacent', 'Overfunding'],
        keyFacts: [['Peak Valuation', '$47 Billion'], ['Total Raised', '$22.9 Billion'], ['Countries at Peak', '38 Countries'], ['Locations at Peak', '528 Locations']],
        people: [['AN', 'Adam Neumann', 'Co-Founder & Former CEO'], ['MM', 'Miguel McKelvey', 'Co-Founder & Chief Culture Officer'], ['MS', 'Masayoshi Son', 'SoftBank CEO / Lead Investor']],
        pullQuote: { text: '"We are here to elevate the world\'s consciousness."', cite: '— Adam Neumann, WeWork CEO, 2019' },
        warning: '<strong>Critical governance failure:</strong> Adam Neumann held 20-to-1 super-voting shares, giving him near-total control. The board could not act against him without his approval.',
        timeline: [
            ['2010', 'Founded', 'Adam Neumann and Miguel McKelvey open first WeWork in SoHo, NYC.'],
            ['2014–17', 'Hypergrowth', 'Multiple funding rounds push valuation to $20B. Expansion into 15+ countries.'],
            ['Jan 2019', 'SoftBank invests $2B', 'Valuation reaches <strong>$47 billion</strong>. IPO plans announced.'],
            ['Aug 2019', 'S-1 disaster', 'IPO prospectus reveals $1.9B losses, self-dealing, and governance failures. IPO withdrawn.'],
            ['Oct 2019', 'Neumann ousted', 'Board removes CEO with a $1.7B exit package. 4,000 jobs cut.'],
            ['2021', 'SPAC listing', 'WeWork goes public via SPAC at $9B valuation.'],
            ['Oct 2023', 'Bankruptcy filed', 'Chapter 11 filed. Shares worth <strong>less than 1 cent</strong>.']
        ]
    },
    moviepass: {
        score: 8.1, scoreLabel: 'SEVERE',
        tags: ['Unit Economics', 'Pricing Failure', 'Cash Burn'],
        keyFacts: [['Peak Subscribers', '3 Million'], ['Monthly Burn', '$40 Million'], ['Price Per Month', '$9.95'], ['Avg Ticket Cost', '$12+']],
        people: [['MC', 'Mitch Lowe', 'CEO'], ['TH', 'Ted Farnsworth', 'Chairman, Helios & Matheson']],
        pullQuote: { text: '"MoviePass is the most disruptive company in the history of the movie industry."', cite: '— Mitch Lowe, CEO, 2018' },
        warning: '<strong>Fatal math:</strong> MoviePass paid full ticket price to theaters while charging users $9.95/month. The model was structurally loss-making at every single transaction.',
        timeline: [
            ['2011', 'Founded', 'MoviePass launches as a traditional subscription movie ticketing service.'],
            ['Aug 2017', '$9.95 pivot', 'Price slashed to $9.95/month unlimited — below the cost of a single ticket.'],
            ['2018', '3M subscribers', 'Explosive growth but hemorrhaging $40M/month in cash.'],
            ['Jul 2018', 'Service outage', 'MoviePass locks users out of accounts, unable to cover costs.'],
            ['Sep 2019', 'Shutdown', 'Service discontinued. Company assets sold for pennies.']
        ]
    },
    default: {
        score: 7.5, scoreLabel: 'MAJOR',
        tags: ['Strategic Failure', 'Capital Misuse'],
        keyFacts: [],
        people: [],
        pullQuote: null,
        warning: null,
        timeline: []
    }
};

function getDetailData(id) {
    return DETAIL_DATA[id] || DETAIL_DATA.default;
}

function buildHeroCanvas(wrap, s) {
    const canvas = document.createElement('canvas');
    wrap.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    const cfg = BRAND_CFG[s.id];
    const bg1 = cfg ? cfg.bg[0] : '#1a1a2e';
    const bg2 = cfg ? cfg.bg[1] : '#0d0d1a';
    const accent = cfg ? cfg.accent : '#e02020';

    function resize() {
        canvas.width = wrap.offsetWidth;
        canvas.height = wrap.offsetHeight;
        draw();
    }
    function draw() {
        const W = canvas.width, H = canvas.height;
        const bg = ctx.createLinearGradient(0, 0, W, H);
        bg.addColorStop(0, bg1); bg.addColorStop(1, bg2);
        ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

        // Grid
        ctx.strokeStyle = 'rgba(255,255,255,0.04)'; ctx.lineWidth = 1;
        for (let x = 0; x < W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
        for (let y = 0; y < H; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
        // Accent grid
        ctx.strokeStyle = accent + '22'; ctx.lineWidth = 1.5;
        for (let x = 0; x < W; x += 180) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }

        // Large glow bottom-left
        const orb = ctx.createRadialGradient(80, H - 60, 0, 80, H - 60, 380);
        orb.addColorStop(0, accent + '30'); orb.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = orb; ctx.fillRect(0, 0, W, H);

        // Top-right accent
        const orb2 = ctx.createRadialGradient(W - 100, 80, 0, W - 100, 80, 220);
        orb2.addColorStop(0, (cfg && cfg.accent2 || accent) + '20'); orb2.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = orb2; ctx.fillRect(0, 0, W, H);

        // Ghost letter
        ctx.font = 'bold 38vw "Bebas Neue",sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.04)';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(s.letter, W / 2, H * .52);

        // Vignette
        const vig = ctx.createRadialGradient(W / 2, H / 2, H * .1, W / 2, H / 2, H * .9);
        vig.addColorStop(0, 'rgba(0,0,0,0)'); vig.addColorStop(1, 'rgba(0,0,0,0.6)');
        ctx.fillStyle = vig; ctx.fillRect(0, 0, W, H);

        // Accent bar left
        const bar = ctx.createLinearGradient(0, 0, 0, H);
        bar.addColorStop(0, accent); bar.addColorStop(1, cfg && cfg.accent2 || accent);
        ctx.fillStyle = bar; ctx.fillRect(0, 0, 4, H);
    }
    resize();
    window._dhResizeFn = resize;
    window.addEventListener('resize', resize);
}

function showDetail(id) {
    // Remove previous canvas resize listener
    if (window._dhResizeFn) { window.removeEventListener('resize', window._dhResizeFn); window._dhResizeFn = null; }

    const s = startups.find(x => x.id === id);
    if (!s) return;
    const dd = getDetailData(id);

    // ── HERO ──
    const heroEl = document.getElementById('detailHero');
    heroEl.innerHTML = '';
    const hero = document.createElement('section');
    hero.className = 'dh-hero';
    hero.innerHTML = `
    <div class="dh-canvas" id="dhCanvas"></div>
    <div class="dh-overlay"></div>
    <div class="dh-noise"></div>
    <button class="dh-back-btn" id="dhBackBtn">
      <svg viewBox="0 0 24 24" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
      Back to Graveyard
    </button>
    <div class="dh-content">
      <div class="dh-badge-row">
        <div class="dh-badge">${s.categoryLabel}</div>
        <div class="dh-badge-outline">${s.founded} — ${s.closed}</div>
        <div class="dh-deceased-pill">Deceased</div>
      </div>
      <div class="dh-name-row">
        <div class="dh-logo-box" style="${BRAND_CFG[id] ? `background:${BRAND_CFG[id].bg[0]};border-color:${BRAND_CFG[id].accent}55` : ''}">
          <span style="${BRAND_CFG[id] ? `color:${BRAND_CFG[id].accent};font-family:'Bebas Neue',sans-serif;font-size:38px` : ''}">${s.letter}</span>
        </div>
        <h1 class="dh-company-name">${s.name.toUpperCase()}</h1>
      </div>
      <div class="dh-tagline">${s.tagline}</div>
      <div class="dh-stats">
        <div class="dh-stat">
          <div class="dh-stat-lbl">Funding Lost</div>
          <div class="dh-stat-val red">${s.fundingLost}</div>
          <div class="dh-stat-sub">Total capital destroyed</div>
        </div>
        <div class="dh-stat">
          <div class="dh-stat-lbl">Lifetime</div>
          <div class="dh-stat-val">${s.lifetime}</div>
          <div class="dh-stat-sub">${s.founded} to ${s.closed}</div>
        </div>
        <div class="dh-stat">
          <div class="dh-stat-lbl">Cause of Death</div>
          <div class="dh-stat-val" style="font-size:17px;line-height:1.2">${s.cause.toUpperCase()}</div>
        </div>
        <div class="dh-stat">
          <div class="dh-stat-lbl">Status</div>
          <div class="dh-stat-val red">DECEASED</div>
          <div class="dh-stat-sub">Ceased operations</div>
        </div>
      </div>
    </div>
    <div class="dh-scroll-hint">
      <div class="dh-scroll-line"></div>
      <span>Scroll</span>
    </div>`;
    heroEl.appendChild(hero);
    buildHeroCanvas(document.getElementById('dhCanvas'), s);
    document.getElementById('dhBackBtn').addEventListener('click', () => navigate('graveyard'));

    // ── BODY ──
    const bodyEl = document.getElementById('detailBody');
    bodyEl.className = 'dh-body';

    const hasTimeline = dd.timeline && dd.timeline.length > 0;
    const hasKeyFacts = dd.keyFacts && dd.keyFacts.length > 0;

    const timelineHTML = hasTimeline ? `
    <div class="dh-block" id="dhb-3">
      <div class="dh-eyebrow">The Collapse Chronicle</div>
      <div class="dh-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
        Timeline of Collapse
      </div>
      <div class="dh-timeline">
        ${dd.timeline.map((t, i) => `
          <div class="dh-tl-item" id="dhtl-${i}">
            <div class="dh-tl-dot">${String(i + 1).padStart(2, '0')}</div>
            <div>
              <div class="dh-tl-year">${t[0]}</div>
              <div class="dh-tl-text"><strong>${t[1]}</strong> — ${t[2]}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>` : '';

    const warningHTML = dd.warning ? `
    <div class="dh-warning">
      <div class="dh-warning-icon"><svg viewBox="0 0 24 24" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
      <div class="dh-warning-text">${dd.warning}</div>
    </div>` : '';

    const keyFactsHTML = hasKeyFacts ? `
    <div class="dh-key-facts">
      ${dd.keyFacts.map(f => `<div class="dh-key-fact"><div class="dh-key-fact-label">${f[0]}</div><div class="dh-key-fact-value">${f[1]}</div></div>`).join('')}
    </div>` : '';

    const pullQuoteHTML = dd.pullQuote ? `
    <div class="dh-pull-quote">
      <p>${dd.pullQuote.text}</p>
      <cite>${dd.pullQuote.cite}</cite>
    </div>` : '';

    const peopleHTML = dd.people && dd.people.length ? `
    <div class="dh-people" id="dhsp-3">
      <div class="dh-people-title">Key People</div>
      ${dd.people.map(p => `
        <div class="dh-person-item">
          <div class="dh-person-avatar">${p[0]}</div>
          <div><div class="dh-person-name">${p[1]}</div><div class="dh-person-role">${p[2]}</div></div>
        </div>`).join('')}
    </div>` : '';

    bodyEl.innerHTML = `
    <article>
      <div class="dh-block" id="dhb-1">
        <div class="dh-eyebrow">The Origin Story</div>
        <div class="dh-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
          The Hype
        </div>
        <div class="dh-text"><p>${s.hype}</p></div>
        ${pullQuoteHTML}
        ${keyFactsHTML}
      </div>

      <div class="dh-block" id="dhb-2">
        <div class="dh-eyebrow">Root Cause Analysis</div>
        <div class="dh-title red-accent">
          <svg viewBox="0 0 24 24" fill="none" stroke="#D42B2B" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          The Mistake
        </div>
        <div class="dh-text"><p>${s.mistake}</p></div>
        ${warningHTML}
      </div>

      ${timelineHTML}

      <div class="dh-block" id="dhb-4">
        <div class="dh-eyebrow">Founder Reflection</div>
        <div class="dh-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          What I'd Do Differently
        </div>
        <div class="dh-pull-quote"><p>${s.differently}</p><cite>— Anonymous submission to StartupGrave</cite></div>
        <div class="dh-text"><p>The core lesson is structural: <strong>discipline must precede scale</strong>. No amount of visionary energy replaces sound fundamentals. For future founders: if your model requires a specific narrative to survive scrutiny, the narrative is the warning sign.</p></div>
      </div>
    </article>

    <aside class="dh-sidebar">
      <div class="dh-lessons" id="dhsp-1">
        <div class="dh-lessons-hdr">
          <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          Lessons for Founders
        </div>
        ${s.lessons.map((l, i) => `
          <div class="dh-lesson-item">
            <div class="dh-lesson-num">${i + 1}</div>
            <div class="dh-lesson-text">"${l}"</div>
          </div>`).join('')}
      </div>

      <div class="dh-verdict" id="dhsp-2">
        <div class="dh-verdict-title">Failure Severity Score</div>
        <div class="dh-verdict-score-row">
          <div class="dh-verdict-score" id="dhVerdictScore">0</div>
          <div class="dh-verdict-score-label">out of 10<br><span style="color:var(--red);font-size:11px;font-weight:600;">${dd.scoreLabel}</span></div>
        </div>
        <div class="dh-verdict-meter"><div class="dh-verdict-fill" id="dhVerdictFill"></div></div>
        <div class="dh-verdict-tags">${dd.tags.map(t => `<div class="dh-verdict-tag">${t}</div>`).join('')}</div>
      </div>

      ${peopleHTML}

      <div class="dh-source">
        <div class="dh-source-title">Source</div>
        <div class="dh-source-text">Compiled from public records, investor statements, press coverage, and anonymous founder submissions to StartupGrave.</div>
      </div>
    </aside>`;

    // ── RELATED ──
    const related = startups.filter(x => x.id !== id).sort(() => Math.random() - .5).slice(0, 3);
    const relEl = document.getElementById('detailRelated');
    relEl.style.display = 'block';
    relEl.innerHTML = `
    <div class="dh-related-inner">
      <div class="dh-related-eyebrow">Read More</div>
      <div class="dh-related-title">Similar Collapses</div>
      <div class="dh-related-grid">
        ${related.map(r => `
          <div class="dh-related-card" onclick="showDetail('${r.id}');window.scrollTo({top:0,behavior:'smooth'})">
            <div class="dh-related-letter">${r.letter}</div>
            <div class="dh-related-cat">${r.categoryLabel}</div>
            <div class="dh-related-name">${r.name}</div>
            <div class="dh-related-tagline">${r.description}</div>
            <div class="dh-related-lost">${r.fundingLost} Lost</div>
          </div>`).join('')}
      </div>
    </div>`;
    relEl.querySelectorAll('.dh-related-card').forEach(c => ah(c));

    // Navigate
    const fromEl = document.getElementById(PAGE_IDS[cur_page]);
    fromEl.classList.add('page-exit');
    setTimeout(() => {
        fromEl.classList.remove('active', 'page-exit'); fromEl.style.display = 'none';
        const toEl = document.getElementById('detail-page');
        toEl.style.display = 'block'; toEl.classList.add('active', 'page-enter');
        setTimeout(() => toEl.classList.remove('page-enter'), 600);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        cur_page = 'detail';
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active-nav'));

        // Reading progress
        const progEl = document.getElementById('detail-progress');
        const onScroll = () => {
            const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            progEl.style.width = Math.min(pct, 100) + '%';
        };
        window.removeEventListener('scroll', window._dhScrollFn);
        window._dhScrollFn = onScroll;
        window.addEventListener('scroll', onScroll);

        // Intersection observers for scroll reveals
        const io = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (!e.isIntersecting) return;
                e.target.classList.add('visible');
                if (e.target.id === 'dhsp-2') {
                    setTimeout(() => {
                        document.getElementById('dhVerdictFill').style.width = (dd.score / 10 * 100) + '%';
                        const scoreEl = document.getElementById('dhVerdictScore');
                        const target = dd.score; let cur2 = 0;
                        const step = setInterval(() => { cur2 += .1; scoreEl.textContent = Math.min(cur2, target).toFixed(1); if (cur2 >= target) clearInterval(step); }, 40);
                    }, 300);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.dh-block,.dh-lessons,.dh-verdict,.dh-people').forEach(el => io.observe(el));

        // Timeline stagger
        const tlIo = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (!e.isIntersecting) return;
                const idx = parseInt(e.target.id.replace('dhtl-', '')) || 0;
                setTimeout(() => e.target.classList.add('visible'), idx * 80);
            });
        }, { threshold: 0.15 });
        document.querySelectorAll('.dh-tl-item').forEach(el => tlIo.observe(el));

    }, 280);
}

// ═══════════ ABOUT PAGE ANIMATIONS ═══════════
function initAboutPage() {
    // Count-up numbers
    function abCount(el, target, duration, decimals = 0) {
        if (!el) return;
        const start = performance.now();
        function step(now) {
            const p = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            el.textContent = (target * ease).toFixed(decimals);
            if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    // Intersection observer for scroll reveals
    const abIo = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            e.target.classList.add('visible');
            // Trigger number counters
            if (e.target.id === 'abnum-1') abCount(document.getElementById('abN1'), 247, 1800);
            if (e.target.id === 'abnum-2') abCount(document.getElementById('abN2'), 340, 2000);
            if (e.target.id === 'abnum-3') abCount(document.getElementById('abN3'), 891, 1600);
            if (e.target.id === 'abnum-4') abCount(document.getElementById('abN4'), 14, 1200);
        });
    }, { threshold: 0.15 });

    // Staggered mission cards
    document.querySelectorAll('.ab-mission-card').forEach((el, i) => {
        el.style.transitionDelay = (i * 0.12) + 's';
        abIo.observe(el);
    });

    // Number cards stagger
    document.querySelectorAll('.ab-num-card').forEach((el, i) => {
        el.style.transitionDelay = (i * 0.1) + 's';
        abIo.observe(el);
    });

    // How steps stagger
    document.querySelectorAll('.ab-how-step').forEach((el, i) => {
        el.style.transitionDelay = (i * 0.12) + 's';
        abIo.observe(el);
    });

    // Value items stagger
    document.querySelectorAll('.ab-value-item').forEach((el, i) => {
        el.style.transitionDelay = (i * 0.1) + 's';
        abIo.observe(el);
    });

    // Manifesto
    ['abManifesto1', 'abManifesto2', 'abCta'].forEach(id => {
        const el = document.getElementById(id);
        if (el) abIo.observe(el);
    });

    // Cursor hover on interactive elements
    document.querySelectorAll('#about-page button, #about-page .ab-mission-card, #about-page .ab-how-step, #about-page .ab-value-item, #about-page .ab-num-card').forEach(el => ah(el));
}

// MODAL
function openModal() { document.getElementById('modalOverlay').classList.add('open'); }
function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); }
function closeModalOut(e) { if (e.target === document.getElementById('modalOverlay')) closeModal(); }
function submitForm() {
    closeModal();
    const t = document.createElement('div'); t.className = 'toast'; t.textContent = '✓ Submitted — thank you for contributing to the graveyard.';
    document.body.appendChild(t); setTimeout(() => t.remove(), 4000);
}
