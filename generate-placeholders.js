import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const imgDir = path.join(publicDir, 'images');
const resumeDir = path.join(publicDir, 'resume');

if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
if (!fs.existsSync(resumeDir)) fs.mkdirSync(resumeDir, { recursive: true });

// Create SVG-based placeholder for profile photo if needed, saved as image/svg or placeholder buffer
const avatarSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none">
  <rect width="400" height="400" fill="#121723"/>
  <circle cx="200" cy="200" r="190" stroke="#06b6d4" stroke-width="4" stroke-dasharray="8 8"/>
  <circle cx="200" cy="150" r="60" fill="#06b6d4" fill-opacity="0.3" stroke="#06b6d4" stroke-width="3"/>
  <path d="M90 320C90 260 140 230 200 230C260 230 310 260 310 320" fill="#3b82f6" fill-opacity="0.3" stroke="#3b82f6" stroke-width="3"/>
  <text x="200" y="360" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-size="16">Hirva Kansara Profile</text>
</svg>`;

fs.writeFileSync(path.join(imgDir, 'hirva-profile.jpg'), avatarSvg);

// Minimal valid PDF binary string for resume placeholder
const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 130 >>
stream
BT
/F1 24 Tf
100 700 Td
(Hirva Kansara - Resume) Tj
0 -30 Td
/F1 14 Tf
(Backend Developer | AI/ML & Computer Vision Enthusiast) Tj
0 -20 Td
(Email: hirvakansara36@gmail.com | Phone: 9904314468) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000425 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
494
%%EOF`;

fs.writeFileSync(path.join(resumeDir, 'Hirva_Kansara_Resume.pdf'), pdfContent);
console.log('Public placeholders generated successfully.');
