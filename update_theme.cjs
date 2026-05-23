const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

cssContent = cssContent.replace(/@theme \{[\s\S]*?\}/, `@theme {
  --color-bg-main: #0B0F17;
  --color-bg-card: #151A23;
  --color-bg-badge: #1E2532;
  --color-text-main: #F8FAFC;
  --color-text-muted: #94A3B8;
  --color-accent: #38BDF8;
  --color-border: #2A3143;
}`);

cssContent = cssContent.replace(/var\(--color-warm-beige\)/g, 'var(--color-bg-main)');
cssContent = cssContent.replace(/var\(--color-white\)/g, 'var(--color-bg-card)');
cssContent = cssContent.replace(/var\(--color-royal-blue\)/g, 'var(--color-text-main)');
cssContent = cssContent.replace(/var\(--color-slate-blue\)/g, 'var(--color-text-muted)');
cssContent = cssContent.replace(/var\(--color-powder-blue\)/g, 'var(--color-bg-badge)');

// Update specific hex colors in index.css if any (e.g., selection)
cssContent = cssContent.replace(/background: var\(--color-powder-blue\);\s*color: var\(--color-royal-blue\);/g, 'background: var(--color-accent);\n  color: #0B0F17;');

fs.writeFileSync(cssPath, cssContent);

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // General mappings
  content = content.replace(/var\(--color-warm-beige\)/g, 'var(--color-bg-main)');
  content = content.replace(/var\(--color-white\)/g, 'var(--color-bg-card)');
  content = content.replace(/var\(--color-slate-blue\)/g, 'var(--color-text-muted)');
  content = content.replace(/var\(--color-powder-blue\)/g, 'var(--color-bg-badge)');
  
  // royal-blue needs careful mapping
  // By default make it text-main
  content = content.replace(/var\(--color-royal-blue\)/g, 'var(--color-text-main)');
  
  // But fix specific accents
  // Hero CTA button
  content = content.replace(/background: 'var\(--color-text-main\)',\s*color: '#fff'/g, "background: 'var(--color-accent)',\n              color: '#0B0F17'");
  // Hero outline button
  content = content.replace(/border: '2px solid var\(--color-text-main\)'/g, "border: '2px solid var(--color-accent)'");
  content = content.replace(/color: 'var\(--color-text-main\)',\s*borderRadius: 12,\s*textDecoration: 'none',\s*fontWeight: 600,\s*fontSize: '0\.95rem',\s*border: '2px solid var\(--color-accent\)'/g, "color: 'var(--color-accent)',\n              borderRadius: 12,\n              textDecoration: 'none',\n              fontWeight: 600,\n              fontSize: '0.95rem',\n              border: '2px solid var(--color-accent)'");
  
  // Hero greeting
  content = content.replace(/color: 'var\(--color-text-main\)',\s*letterSpacing: '0\.12em'/g, "color: 'var(--color-accent)',\n            letterSpacing: '0.12em'");
  
  // Hero brackets
  content = content.replace(/stroke="#162660"/g, 'stroke="var(--color-border)"');
  content = content.replace(/border: '4px solid var\(--color-text-main\)'/g, "border: '4px solid var(--color-accent)'");

  // Hero Typewriter badge
  content = content.replace(/background: 'var\(--color-bg-badge\)',\s*color: 'var\(--color-text-main\)'/g, "background: 'var(--color-bg-badge)',\n            color: 'var(--color-accent)'");

  // Navbar active underline
  content = content.replace(/background: 'var\(--color-text-main\)',\s*borderRadius: 1,/g, "background: 'var(--color-accent)',\n                    borderRadius: 1,");
  
  // Experience timeline line & node
  content = content.replace(/background: 'var\(--color-text-main\)',\s*borderRadius: 2,\s*height: lineHeight/g, "background: 'var(--color-accent)',\n                  borderRadius: 2,\n                  height: lineHeight");
  content = content.replace(/background: 'var\(--color-text-main\)',\s*border: '4px solid var\(--color-bg-badge\)'/g, "background: 'var(--color-accent)',\n                border: '4px solid var(--color-bg-main)'");
  content = content.replace(/borderTop: '4px solid var\(--color-text-main\)'/g, "borderTop: '4px solid var(--color-border)'");
  content = content.replace(/color="var\(--color-text-main\)"/g, 'color="var(--color-accent)"');
  content = content.replace(/background: 'var\(--color-text-main\)',\s*marginTop: 8,/g, "background: 'var(--color-accent)',\n                        marginTop: 8,");

  // About corner brackets
  content = content.replace(/borderTop: '3px solid var\(--color-text-main\)'/g, "borderTop: '3px solid var(--color-accent)'");
  content = content.replace(/borderLeft: '3px solid var\(--color-text-main\)'/g, "borderLeft: '3px solid var(--color-accent)'");
  content = content.replace(/borderBottom: '3px solid var\(--color-text-main\)'/g, "borderBottom: '3px solid var(--color-accent)'");
  content = content.replace(/borderRight: '3px solid var\(--color-text-main\)'/g, "borderRight: '3px solid var(--color-accent)'");
  content = content.replace(/background: 'var\(--color-text-main\)',\s*padding: '0\.85rem 0',/g, "background: 'var(--color-bg-badge)',\n          padding: '0.85rem 0',");

  // Skills cards
  content = content.replace(/borderLeft: '4px solid var\(--color-text-main\)'/g, "borderLeft: '4px solid var(--color-border)'");
  content = content.replace(/e\.currentTarget\.style\.borderLeftColor = '#3b5bdb'/g, "e.currentTarget.style.borderLeftColor = 'var(--color-accent)'");
  content = content.replace(/e\.currentTarget\.style\.borderLeftColor = 'var\(--color-text-main\)'/g, "e.currentTarget.style.borderLeftColor = 'var(--color-border)'");

  // Goals
  content = content.replace(/borderTop: '4px solid var\(--color-bg-badge\)'/g, "borderTop: '4px solid var(--color-border)'");
  content = content.replace(/background: 'var\(--color-text-main\)',\s*color: '#fff',/g, "background: 'var(--color-accent)',\n                        color: '#0B0F17',");

  // Contact
  content = content.replace(/borderTop: '4px solid var\(--color-text-main\)'/g, "borderTop: '4px solid var(--color-border)'");
  content = content.replace(/background: var\(--color-text-main\)/g, "background: var(--color-accent)");
  content = content.replace(/background: submitted \? '#22c55e' : 'var\(--color-text-main\)'/g, "background: submitted ? '#22c55e' : 'var(--color-accent)'");
  content = content.replace(/whileHover={{ y: -4, color: 'var\(--color-text-main\)' }}/g, "whileHover={{ y: -4, color: 'var(--color-accent)' }}");

  // Section titles underline
  content = content.replace(/var\(--color-royal-blue\)/g, "var(--color-accent)"); // Any leftover in CSS

  fs.writeFileSync(filePath, content);
});

console.log('Theme updated successfully.');
