import * as cheerio from "cheerio";

export interface CrawledPage {
  url: string;
  title: string;
  content: string;
}

/**
 * Common pages jo har business website pe hoti hain — inhe priority se crawl karte hain.
 * Har page crawl nahi karte (bohot slow ho jayega), sirf ye important patterns.
 */
const PRIORITY_PATHS = ["", "/about", "/about-us", "/services", "/contact", "/faq", "/pricing"];

/**
 * Ek page ka HTML fetch karke usay clean, readable text mein badalta hai.
 * Scripts, styles, nav, footer hata dete hain — sirf asal content rehta hai.
 */
async function fetchAndExtract(url: string): Promise<CrawledPage | null> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; RepixmBot/1.0)" },
      signal: AbortSignal.timeout(10000), // 10 second timeout, hang na ho
    });

    if (!res.ok) return null;

    const html = await res.text();
    const $ = cheerio.load(html);

    // Noise hata do — sirf asal content bachta hai
    $("script, style, nav, footer, header, svg, noscript").remove();

    const title = $("title").first().text().trim() || $("h1").first().text().trim();

    const textParts: string[] = [];
    $("h1, h2, h3, p, li").each((_, el) => {
      const text = $(el).text().trim().replace(/\s+/g, " ");
      if (text.length > 20) textParts.push(text); // chhote/junk fragments skip karo
    });

    const content = textParts.join("\n").slice(0, 8000); // ek page se zyada se zyada 8000 chars

    if (content.length < 50) return null; // bilkul khali page skip karo

    return { url, title, content };
  } catch {
    return null; // page fail ho, poora crawl na ruke
  }
}

/**
 * Business ki website ke priority pages crawl karta hai, parallel mein
 * (ek dusre ka intezar nahi karte, sab sath fetch hote hain).
 */
export async function crawlWebsite(baseUrl: string): Promise<CrawledPage[]> {
  const base = new URL(baseUrl);

  const pagePromises = PRIORITY_PATHS.map((path) => {
    const url = new URL(path, base).toString();
    return fetchAndExtract(url);
  });

  const results = await Promise.all(pagePromises);

  return results.filter((page): page is CrawledPage => page !== null);
}