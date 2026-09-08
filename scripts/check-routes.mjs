import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const appDir = join(root, "app");
const expectedRoutes = ["/", "/about", "/services", "/products", "/portfolio", "/freebies", "/team", "/contact"];

const routeToPage = (route) => route === "/" ? join(appDir, "page.tsx") : join(appDir, route.slice(1), "page.tsx");
const missingRoutes = expectedRoutes.filter((route) => !existsSync(routeToPage(route)));

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const sourceFiles = walk(appDir).filter((path) => /\.(tsx|ts|jsx|js)$/.test(path));
const knownTopLevel = new Set(expectedRoutes.map((route) => route.split("/")[1]).filter(Boolean));
const brokenLinks = [];

for (const file of sourceFiles) {
  const source = readFileSync(file, "utf8");
  const hrefPattern = /href\s*=\s*["'`]([^"'`]+)["'`]/g;
  let match;
  while ((match = hrefPattern.exec(source))) {
    const href = match[1];
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const pathname = href.split("#")[0].split("?")[0] || "/";
    if (pathname === "/") continue;
    const segment = pathname.split("/")[1];
    if (!knownTopLevel.has(segment)) {
      brokenLinks.push(`${relative(root, file)} -> ${href}`);
    }
  }
}

if (missingRoutes.length || brokenLinks.length) {
  if (missingRoutes.length) console.error("Missing expected routes:", missingRoutes.join(", "));
  if (brokenLinks.length) console.error("Suspicious internal links:\n" + brokenLinks.join("\n"));
  process.exit(1);
}

console.log(`Route smoke check passed: ${expectedRoutes.length} routes and ${sourceFiles.length} source files checked.`);
