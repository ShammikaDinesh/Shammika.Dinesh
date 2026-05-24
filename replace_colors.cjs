const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace dark blue shadow colors with pure black (or deep charcoal) shadows
  content = content.replace(/rgba\(22,38,96,([\d.]+)\)/g, 'rgba(0,0,0,$1)');
  
  // Replace old accent rgba(59,158,255,...) or rgba(59,91,219,...) with warm amber rgba(200,132,58,...)
  content = content.replace(/rgba\(59,158,255,([\d.]+)\)/g, 'rgba(200,132,58,$1)');
  content = content.replace(/rgba\(59,91,219,([\d.]+)\)/g, 'rgba(200,132,58,$1)');
  
  fs.writeFileSync(filePath, content);
});

console.log('Shadow and rgba colors updated successfully.');
