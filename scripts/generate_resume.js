import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4',
});

// A4 dimensions: 210 x 297 mm
const marginX = 15;
let y = 16;

// Helper function to draw section header
function drawSectionHeader(title) {
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text(title, marginX, y);
  y += 2;
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.line(marginX, y, 210 - marginX, y);
  y += 5;
}

// Name
doc.setFont('Helvetica', 'bold');
doc.setFontSize(20);
doc.setTextColor(15, 23, 42);
doc.text('PRAJWAL G N', marginX, y);
y += 6;

// Contact info line
doc.setFont('Helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(51, 65, 85);
doc.text('Srinagar, Bengaluru, Karnataka - 560050', marginX, y);
doc.text('prajwalmohan01@gmail.com | +91 7676759149 | LinkedIn | Portfolio', 210 - marginX, y, { align: 'right' });
y += 8;

// CAREER OBJECTIVE
drawSectionHeader('CAREER OBJECTIVE');
doc.setFont('Helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(51, 65, 85);
const objText = 'To obtain a challenging position in a progressive organization where I can apply my technical knowledge, analytical skills, and creative abilities. I aim to contribute to the organization\'s success while continuously enhancing my professional competencies and overall growth.';
const splitObj = doc.splitTextToSize(objText, 180);
doc.text(splitObj, marginX, y);
y += (splitObj.length * 4) + 4;

// EDUCATION
drawSectionHeader('EDUCATION');

// MCA
doc.setFont('Helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(15, 23, 42);
doc.text('Master of Computer Applications (MCA)', marginX, y);
doc.setFont('Helvetica', 'italic');
doc.setFontSize(8.5);
doc.text('2024 - 2025', 210 - marginX, y, { align: 'right' });
y += 4;

doc.setFont('Helvetica', 'italic');
doc.setFontSize(8.5);
doc.setTextColor(51, 65, 85);
doc.text('St Philomena\'s college Mysore', marginX, y);
doc.text('CGPA - 6.14', 210 - marginX, y, { align: 'right' });
y += 6;

// BCA
doc.setFont('Helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(15, 23, 42);
doc.text('Bachelor of Computer Applications (BCA)', marginX, y);
doc.setFont('Helvetica', 'italic');
doc.setFontSize(8.5);
doc.text('2020 - 2023', 210 - marginX, y, { align: 'right' });
y += 4;

doc.setFont('Helvetica', 'italic');
doc.setFontSize(8.5);
doc.setTextColor(51, 65, 85);
doc.text('JSS College of Arts, Commerce and Science Mysore', marginX, y);
doc.text('CGPA - 7.02', 210 - marginX, y, { align: 'right' });
y += 6;

// PUC
doc.setFont('Helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(15, 23, 42);
doc.text('PUC - EBAC', marginX, y);
doc.setFont('Helvetica', 'italic');
doc.setFontSize(8.5);
doc.text('2018 - 2020', 210 - marginX, y, { align: 'right' });
y += 4;

doc.setFont('Helvetica', 'italic');
doc.setFontSize(8.5);
doc.setTextColor(51, 65, 85);
doc.text('BGS PU College, Balagangadharanathanagar, Nagmangala', marginX, y);
doc.text('73.1%', 210 - marginX, y, { align: 'right' });
y += 8;

// INTERNSHIP & PROJECTS
drawSectionHeader('INTERNSHIP & PROJECTS');

doc.setFont('Helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(15, 23, 42);
doc.text('Machine Learning Intern - Electricity Theft Detection (3 Month)', marginX, y);
doc.setFont('Helvetica', 'italic');
doc.setFontSize(8.5);
doc.text('July 2025 - September 2025', 210 - marginX, y, { align: 'right' });
y += 4.5;

const internBullets = [
  'Developed a machine learning-based system to detect electricity theft using consumption data.',
  'Performed data preprocessing and feature extraction for model training.',
  'Applied Agglomerative Clustering and ANN for classification and anomaly detection.',
  'Utilized Python and Flask for implementation and deployment.'
];

doc.setFont('Helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(51, 65, 85);
internBullets.forEach(b => {
  doc.text('•  ' + b, marginX + 3, y);
  y += 4;
});

doc.setFont('Helvetica', 'italic');
doc.setFontSize(8.5);
doc.text('Technologies: Python, Flask, Machine Learning, ANN, Data Analysis.', marginX + 3, y);
y += 6;

// MINI & MAJOR PROJECTS
doc.setFont('Helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(15, 23, 42);
doc.text('MINI & MAJOR PROJECTS', marginX, y);
y += 4;

const miniProjects = [
  { title: 'AI-Powered Financial Management Application (Python)', desc: 'Developed a finance tracker with AI-based budgeting, expense tracking, and financial insights.' },
  { title: 'Organ Donation Management System (Python)', desc: 'Built a web application for donor registration, hospital management, and donation request tracking.' },
  { title: 'W-Cart', desc: 'Developed a responsive e-commerce web application with product catalog, shopping cart, coupon system, search, category filtering, and WhatsApp checkout.' },
  { title: 'Gym Website', desc: 'Created a responsive website for membership registration, trainer information, and class scheduling.' }
];

miniProjects.forEach(p => {
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text(p.title, marginX + 3, y);
  y += 4;
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text('•  ' + p.desc, marginX + 6, y);
  y += 4.5;
});
y += 2;

// TECHNICAL SKILLS
drawSectionHeader('TECHNICAL SKILLS');
const techSkills = [
  { cat: 'Programming & Web Technologies:', val: 'Python, JavaScript, HTML, CSS.' },
  { cat: 'Database & Testing:', val: 'MySQL, SQL, DBMS, Manual Testing, Functional Testing, Bug Reporting, Basic Automation Testing.' },
  { cat: 'Tools & Concepts:', val: 'Git, GitHub, MS Excel, MS Word, MS PowerPoint, Debugging, Troubleshooting.' }
];

techSkills.forEach(s => {
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('•  ' + s.cat, marginX + 3, y);
  const offset = doc.getTextWidth('•  ' + s.cat) + 2;
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text(s.val, marginX + 3 + offset, y);
  y += 4.5;
});
y += 2;

// PROFESSIONAL SKILLS
drawSectionHeader('PROFESSIONAL SKILLS');
const profSkills = [
  'Strong problem-solving and analytical skills',
  'Good communication and teamwork abilities',
  'Quick learner with adaptability to new technologies',
  'Strong time management and attention to detail'
];

doc.setFont('Helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(51, 65, 85);
profSkills.forEach(s => {
  doc.text('•  ' + s, marginX + 3, y);
  y += 4;
});
y += 2;

// EXTRA-CURRICULAR ACTIVITIES
drawSectionHeader('EXTRA-CURRICULAR ACTIVITIES');
doc.setFont('Helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(51, 65, 85);
const extraText = 'Engaged in organizing and coordinating various events at school and college levels. Participated actively in management activities and college management fests. Involved in sports competitions at the college level, promoting teamwork and leadership qualities.';
const splitExtra = doc.splitTextToSize(extraText, 180);
doc.text(splitExtra, marginX, y);
y += (splitExtra.length * 4) + 2;

// HOBBIES & INTERESTS
drawSectionHeader('HOBBIES & INTERESTS');
doc.setFont('Helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(51, 65, 85);

doc.text('•  Exploring new technologies', marginX + 3, y);
doc.text('•  Internet Research', marginX + 70, y);
y += 4;
doc.text('•  Software Testing', marginX + 3, y);
doc.text('•  Problem Solving', marginX + 70, y);
y += 4;
doc.text('•  Web Development', marginX + 3, y);
doc.text('•  Continuous Learning', marginX + 70, y);
y += 6;

// LANGUAGES
drawSectionHeader('LANGUAGES');
doc.setFont('Helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(51, 65, 85);
doc.text('English  |  Kannada', marginX, y);

const outputDir = path.resolve('public');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'Prajwal_GN_Resume.pdf');
const pdfBuffer = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfBuffer));
console.log('Successfully generated resume PDF at:', outputPath);
