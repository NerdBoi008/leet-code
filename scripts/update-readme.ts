import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const LEVELS = ["easy", "medium", "hard"];

function generateReadme(level: string) {
  const dirPath = path.join(ROOT, level);
  if (!fs.existsSync(dirPath)) return;

  const files = fs
    .readdirSync(dirPath)
    .filter(
      (f) =>
        f.endsWith(".ts") &&
        /^\d{4}-/.test(f)
    )
    .sort();

  const rows = files.map((file) => {
    const [num, ...rest] = file.replace(".ts", "").split("-");
    const title = rest
      .join(" ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    return `| ${parseInt(num)} | ${title} | [${file}](./${file}) |`;
  });

  const content = `# ${level[0].toUpperCase() + level.slice(1)} Problems

| # | Title | Solution |
|---|------|---------|
${rows.join("\n")}
`;

  fs.writeFileSync(path.join(dirPath, "README.md"), content);
  console.log(`✅ Updated ${level}/README.md`);
}

LEVELS.forEach(generateReadme);

