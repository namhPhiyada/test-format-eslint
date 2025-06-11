import fs from 'fs';

const content = fs.readFileSync('changelog.md', 'utf8');

// แบ่งเป็น subtopics ด้วยหัวข้อที่ขึ้นต้นด้วย "## "
const subtopics = content.split(/^##\s+/m).slice(1);

let allValid = true;

subtopics.forEach(sub => {
    const title = sub.split('\n')[0].trim();

    // หาเฉพาะบรรทัดที่เป็น bullet point เท่านั้น
    const lines = sub.split('\n').filter(line => line.trim().startsWith('-'));

    lines.forEach(line => {
        const trimmed = line.trim();

        // ตรวจว่ามี pattern XXX-000 หรือคำที่อนุญาตไหม
        const valid = /[A-Z]{3}-\d{3}/.test(trimmed) || /(remove|update|add-hoc|fix)/i.test(trimmed);

        if (!valid) {
            console.error(`❌ Invalid line in "${title}": ${trimmed}`);
            allValid = false;
        }
    });
});

// eslint-disable-next-line no-undef
if (!allValid) process.exit(1);

console.log('✅ All bullet lines contain required pattern (XXX-000) or valid exceptions.');
