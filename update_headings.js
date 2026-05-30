const fs = require('fs');
const filePath = 'd:/Antigravity/GasFlowmeter/website/src/app/products/thermal-mass-flow-meter/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/<h[1-6][^>]*>/g, (match) => {
    return match.replace(/font-medium|font-semibold/g, 'font-light');
});

fs.writeFileSync(filePath, content);
console.log('Headings updated.');
