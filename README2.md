🧑‍💻 Portfolio Website Prompt — Shammika Dinesh Wijethunga
Royal Blue · Powder Blue · Warm Beige Edition

🎯 Project Vision
Build a single-page professional portfolio for Shammika Dinesh Wijethunga, an IT professional and aspiring tech entrepreneur based in Sri Lanka. The site should feel like a premium architecture or consulting firm website — light, airy, authoritative, and deeply trustworthy. Every interaction should feel considered and calm, not flashy.

🎨 Color Palette
RoleColorHexPrimary / PowerRoyal Blue#162660Soft BackgroundsPowder Blue#D0E6FDWarm SectionsWarm Beige#F1E4D1Cards / Clean SpaceWhite#FFFFFFMuted TextSlate Blue#4A5A82
Section backgrounds alternate in this order: Beige → White → Powder Blue → White → Beige → Powder Blue to create visual rhythm without breaking the palette.

✍️ Typography

Display / Headings: Playfair Display — authoritative, elegant, serif. Used for all section titles and the hero name.
Body / UI / Labels: Plus Jakarta Sans — modern, clean, highly readable.
Both imported from Google Fonts.
Heading sizes are large and confident. The hero name should be viewport-scale large.


🌟 Hero Section — Parallax Featured
The hero is the most important section and should have a multi-layer parallax effect to create depth and immersion.
Layout: Full viewport height, warm beige background, two-column on desktop (text left, visual right), single column stacked on mobile.
Parallax Layers (back to front, each scrolling at different speeds):

Layer 1 (slowest — 0.2x scroll speed): Large faint circular shape in powder blue, positioned behind everything, drifts upward very slowly as user scrolls down
Layer 2 (0.4x scroll speed): Decorative royal blue geometric line-art or corner bracket shapes, subtle, architectural feeling
Layer 3 (0.6x scroll speed): Profile image or avatar inside a warm beige rounded rectangle with a royal blue border ring
Layer 4 (1x — fixed to scroll): The text content itself scrolls at normal speed

Text Reveal Sequence (staggered, triggers on page load):

Small royal blue monospace label fades up first: "Hello, I'm"
Full name "Shammika Dinesh Wijethunga" in massive Playfair Display slides up with a slight overshoot bounce
A powder blue pill badge appears with a typewriter effect cycling through: "IT Professional" → "System Administrator" → "Tech Problem Solver" → "Web & Digital Solutions"
A one-line bio sentence fades in
Two CTA buttons scale up from 0.8 → 1.0 with a spring ease
Scroll indicator arrow pulses gently downward, infinite loop

Parallax Behavior: As the user scrolls down, the background layers move upward at their respective speeds, creating a sense of the hero "peeling away" and revealing the next section beneath it. The text content exits with a gentle fade + upward drift.

👤 About Section
Background: White. Two-column layout.
Left side holds the profile photo inside a warm beige frame with a royal blue decorative corner bracket. The image slides in from the left as the section enters the viewport.
Right side contains the bio text, which reveals paragraph by paragraph from bottom to top as the user scrolls. Below the bio, three animated stat counters count up from zero when they come into view: 5+ Years Experience, 1 Healthcare IT Role, Endless Passion for Tech.
A horizontal auto-scrolling ticker runs below the whole section on a royal blue background in white text, looping continuously: Linux · Windows Server · CCTV Systems · Network Operations · Healthcare IT · Data Protection · Hardware Config · Web Design ·

🛠 Skills Section
Background: Powder Blue. The section title is styled as a code comment in royal blue monospace: // Skills & Expertise
Six skill cards arranged in a 3×2 grid. Each card is white with a royal blue left-border accent stripe and a relevant icon. Cards stagger-animate in from the bottom as the section scrolls into view. On hover, the card lifts slightly and the left border glows.
The six cards:

🖥 IT Support & Troubleshooting
🌐 Network & System Administration
⚙️ Hardware & Software Configuration
🎨 Web Design & Digital Solutions
🧩 Technical Problem Solving
🤝 Team Collaboration & User Support


💼 Experience Section
Background: White. A vertical animated timeline runs down the center or left side. The timeline line draws itself downward as the user scrolls, as if being written in real time. Each node on the line appears with a small pop when the line reaches it.
One entry:

IT Assistant — HEMAS Hospitals
Location badge, date range
Bullet responsibilities animate in one by one after the node appears:

Hardware & software troubleshooting
Network operations & monitoring
Healthcare IT systems management
CCTV infrastructure oversight
Data protection & backup processes



The card for this entry has a warm beige background with a royal blue top border.

🚀 Goals / Vision Section
Background: Warm Beige. Title: "What I'm Building"
Two or three forward-looking cards with a subtle 3D tilt effect on mouse hover (the card physically tilts toward the cursor). Cards are white with powder blue top accents.

Card 1: Healthcare IT Portfolio — summarizing current work at HEMAS
Card 2: Tech Business (Coming Soon) — with a pulsing animated royal blue "In Progress" badge
Card 3: Web & Digital Solutions — his freelance / side interest


📬 Contact Section
Background: Powder Blue. Minimal and clean.
A centered card on white with a royal blue top border. Three input fields — Name, Email, Message — each with a royal blue animated underline that grows from left to right on focus. The Send button is royal blue, fills left-to-right with a darker shade on hover, and morphs into a checkmark confirmation after submission using a smooth swap animation.
Below the form, social icons for LinkedIn, GitHub, and Email appear with a stagger and rise slightly on hover, turning royal blue.

🧭 Navigation
Sticky top navbar. On scroll, the navbar gains a white background with a subtle powder blue bottom border and a soft shadow — it starts fully transparent over the hero. Logo is the initials "SDW" in Playfair Display. Nav links are Plus Jakarta Sans, and the active section link has a royal blue animated underline. Mobile: hamburger menu opens a full-screen drawer that slides in from the right with a warm beige background and stacked nav links that stagger in.

📱 Responsive Behavior

Mobile: Single column throughout, hero text stacks above image, parallax reduced to a single slow-drifting background shape, hamburger nav
Tablet: 2-column skills grid, about section stacks vertically
Desktop: Full layout as described
Accessibility: All animations respect prefers-reduced-motion — layout and content remain intact, only motion is disabled


🌐 Tech Stack (for the developer)

Framework: React with Vite
Animations: Framer Motion (all transitions, parallax via useScroll + useTransform, stagger reveals via whileInView)
Styling: Tailwind CSS + CSS custom properties for the palette
Icons: Phosphor Icons or Lucide React
Fonts: Google Fonts — Playfair Display + Plus Jakarta Sans
