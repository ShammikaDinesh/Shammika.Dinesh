const fs = require('fs');
const path = require('path');

const replaceInFile = (filePath, replacements) => {
  let content = fs.readFileSync(filePath, 'utf8');
  replacements.forEach(([pattern, replacement]) => {
    content = content.replace(pattern, replacement);
  });
  fs.writeFileSync(filePath, content);
};

const srcDir = path.join(__dirname, 'src', 'components');

// 1. Fix Hero.jsx
replaceInFile(path.join(srcDir, 'Hero.jsx'), [
  [/\bcolor:\s*'#0B0F17'/g, "color: '#ffffff'"]
]);

// 2. Fix Goals.jsx
replaceInFile(path.join(srcDir, 'Goals.jsx'), [
  [/\bcolor:\s*'#0B0F17'/g, "color: '#ffffff'"]
]);

// 3. Fix Footer.jsx
replaceInFile(path.join(srcDir, 'Footer.jsx'), [
  [/background:\s*'#040710'/g, "background: 'var(--color-bg-badge)'"],
  [/color:\s*'#ffffff'/g, "color: 'var(--color-text-main)'"],
  [/background:\s*'#fff'/g, "background: 'var(--color-text-main)'"],
  [/color:\s*'rgba\(255,255,255,0\.6\)'/g, "color: 'var(--color-text-muted)'"],
  [/borderBottom:\s*'1px solid rgba\(255,255,255,0\.08\)'/g, "borderBottom: '1px solid var(--color-border)'"],
  [/color:\s*'#fff'/g, "color: 'var(--color-text-main)'"],
  [/background:\s*'#3B5BDB'/g, "background: 'var(--color-accent)'"],
  [/color:\s*'rgba\(255,255,255,0\.7\)'/g, "color: 'var(--color-text-muted)'"],
  [/color:\s*'rgba\(255,255,255,0\.5\)'/g, "color: 'var(--color-text-muted)'"],
  [/color:\s*'rgba\(255,255,255,0\.9\)'/g, "color: 'var(--color-text-main)'"],
  [/color="#3B5BDB" fill="#3B5BDB"/g, "color=\"var(--color-accent)\" fill=\"var(--color-accent)\""],
  [/background:\s*'rgba\(255,255,255,0\.05\)'/g, "background: 'var(--color-border)'"],
  [/borderColor:\s*'rgba\(255,255,255,0\.4\)'/g, "borderColor: 'var(--color-text-muted)'"],
  [/border:\s*'1px solid rgba\(255,255,255,0\.2\)'/g, "border: '1px solid var(--color-border)'"],
  [/borderTop:\s*'1px solid rgba\(255,255,255,0\.08\)'/g, "borderTop: '1px solid var(--color-border)'"],
  [/background:\s*'#324db8'/g, "background: '#145c53'"],
  [/#3B5BDB/g, "var(--color-accent)"],
  [/#324db8/g, "#145c53"],
  [/#fff/g, "var(--color-bg-card)"],
  [/background:\s*'radial-gradient\(circle at bottom right, rgba\(59,91,219,0\.15\) 0%, transparent 60%\)'/g, "background: 'radial-gradient(circle at bottom right, rgba(26,122,110,0.1) 0%, transparent 60%)'"],
  [/color:\s*'var\(--color-bg-card\)'/g, "color: 'var(--color-text-main)'"]
]);

console.log('Colors fixed.');
