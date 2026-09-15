export const EMAIL = "saeeedkhzh@gmail.com";
export const CV_PATH = "/saeed-alzahrani-cv.pdf";

export const MAIL_SUBJECT = "ظپط±طµط© ظˆط¸ظٹظپظٹط© â€” ط³ط¹ظٹط¯ ط®ط¶ط± ط§ظ„ط²ظ‡ط±ط§ظ†ظٹ";
export const MAIL_BODY = `ظ…ط±ط­ط¨ظ‹ط§ ط³ط¹ظٹط¯طŒ

ط§ط·ظ„ط¹طھ ط¹ظ„ظ‰ ظ…ظ„ظپظƒ ظˆط£ط±ط؛ط¨ ظپظٹ ط§ظ„طھظˆط§طµظ„ ظ…ط¹ظƒ ط¨ط®طµظˆطµ ظپط±طµط© ظˆط¸ظٹظپظٹط© ظپظٹ ظ…ط¬ط§ظ„ ط§ظ„طھظ‚ظ†ظٹط©.

ط§ط³ظ… ط§ظ„ط´ط±ظƒط©:
ط§ظ„ظ…ط³ظ…ظ‰ ط§ظ„ظˆط¸ظٹظپظٹ:
ظ†ط¨ط°ط© ط¹ظ† ط§ظ„ظپط±طµط©:
ط·ط±ظٹظ‚ط© ط§ظ„طھظˆط§طµظ„:`;

export function mailto(subject = MAIL_SUBJECT, body = MAIL_BODY) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export type Lang = "ar" | "en";
type T = Record<Lang, string>;

export const nav: { id: string; label: T }[] = [
  { id: "home", label: { ar: "ط§ظ„ط±ط¦ظٹط³ظٹط©", en: "Home" } },
  { id: "about", label: { ar: "ط¹ظ†ظ‘ظٹ", en: "About" } },
  { id: "experience", label: { ar: "ط§ظ„ط®ط¨ط±ط©", en: "Experience" } },
  { id: "skills", label: { ar: "ط§ظ„ظ…ظ‡ط§ط±ط§طھ", en: "Skills" } },
  { id: "project", label: { ar: "ط§ظ„ظ…ط´ط±ظˆط¹", en: "Project" } },
  { id: "certifications", label: { ar: "ط§ظ„ط´ظ‡ط§ط¯ط§طھ", en: "Certifications" } },
  { id: "contact", label: { ar: "طھظˆط§طµظ„", en: "Contact" } },
];

export const content = {
  name: { ar: "ط³ط¹ظٹط¯ ط®ط¶ط± ط§ظ„ط²ظ‡ط±ط§ظ†ظٹ", en: "Saeed Khader Alzahrani" },
  shortName: { ar: "ط³ط¹ظٹط¯ ط®ط¶ط±", en: "Saeed K." },
  role: {
    ar: "طھظ‚ظ†ظٹط© ظ…ط¹ظ„ظˆظ…ط§طھ â€¢ ط´ط¨ظƒط§طھ â€¢ ط¯ط¹ظ… ظپظ†ظٹ",
    en: "Information Technology â€¢ Networking â€¢ IT Support",
  },
  location: { ar: "ط¬ط¯ط© / ط±ط§ط¨ط؛ â€” ط§ظ„ظ…ظ…ظ„ظƒط© ط§ظ„ط¹ط±ط¨ظٹط© ط§ظ„ط³ط¹ظˆط¯ظٹط©", en: "Jeddah / Rabigh â€” Saudi Arabia" },
  ui: {
    availability: { ar: "ظ…طھط§ط­ ظ„ظپط±طµ طھظ‚ظ†ظٹط© ظ†ظˆط¹ظٹط©", en: "Open to meaningful IT opportunities" },
    contactCta: { ar: "طھظˆط§طµظ„ ظ…ط¹ظٹ", en: "Get in touch" },
    exploreCta: { ar: "ط§ط³طھظƒط´ظپ ط£ط¹ظ…ط§ظ„ظٹ", en: "Explore my work" },
    cvCta: { ar: "طھط­ظ…ظٹظ„ ط§ظ„ط³ظٹط±ط© ط§ظ„ط°ط§طھظٹط©", en: "Download CV" },
    cvCtaPdf: { ar: "طھط­ظ…ظٹظ„ ط§ظ„ط³ظٹط±ط© ط§ظ„ط°ط§طھظٹط© PDF", en: "Download CV (PDF)" },
    copyEmail: { ar: "ظ†ط³ط® ط§ظ„ط¨ط±ظٹط¯", en: "Copy email" },
    copied: { ar: "طھظ… ظ†ط³ط® ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ", en: "Email address copied" },
    sendOpportunity: { ar: "ط£ط±ط³ظ„ ظپط±طµط© ظˆط¸ظٹظپظٹط©", en: "Send an opportunity" },
    sendMeOne: { ar: "ط£ط±ط³ظ„ ظ„ظٹ ظپط±طµط©", en: "Send me an opportunity" },
    navCta: { ar: "ظپط±طµط© ظˆط¸ظٹظپظٹط©طں", en: "Have a role?" },
    menu: { ar: "ط§ظ„ظ‚ط§ط¦ظ…ط©", en: "Menu" },
    close: { ar: "ط¥ط؛ظ„ط§ظ‚", en: "Close" },
  },
  hero: {
    kicker: { ar: "PROFILE / IT-01", en: "PROFILE / IT-01" },
    headline: {
      ar: "طھظ‚ظ†ظٹط© ظ…ط¹ظ„ظˆظ…ط§طھطŒ ط´ط¨ظƒط§طھطŒ ظˆط¯ط¹ظ… طھظ‚ظ†ظٹ â€” ط¨ط¹ظ‚ظ„ظٹط© طھط­ظ„ ط§ظ„ظ…ط´ظƒظ„ط© ظ‚ط¨ظ„ ط£ظ† طھظƒط¨ط±.",
      en: "IT, networking and technical support â€” with a mindset that solves problems before they grow.",
    },
    sub: {
      ar: "ظ…طھط®طµطµ طھظ‚ظ†ظٹط© ظ…ط¹ظ„ظˆظ…ط§طھ ط¨ط®ظ„ظپظٹط© ط£ظƒط§ط¯ظٹظ…ظٹط© ظپظٹ ط¥ط¯ط§ط±ط© ط§ظ„ط´ط¨ظƒط§طھ ظˆط£ظ…ظ†ظ‡ط§طŒ ظˆط®ط¨ط±ط© ط¹ظ…ظ„ظٹط© ظپظٹ ط§ظ„ط¯ط¹ظ… ط§ظ„ظپظ†ظٹ ظˆطھط´ط®ظٹطµ ط§ظ„ظ…ط´ظƒظ„ط§طھ ط§ظ„طھظ‚ظ†ظٹط©طŒ ظ…ط¹ ط§ظ‡طھظ…ط§ظ… ط¨ط¨ظ†ط§ط، طھط¬ط§ط±ط¨ طھظ‚ظ†ظٹط© ظ…ظˆط«ظˆظ‚ط© ظˆط³ظ‡ظ„ط© ط§ظ„ط§ط³طھط®ط¯ط§ظ….",
      en: "IT professional with an academic background in network administration and security, hands-on experience in technical support and diagnostics, and a focus on reliable, easy-to-use digital experiences.",
    },
  },
  about: {
    title: { ar: "ظ…ظ† ط£ظ†ط§طں", en: "Who am I?" },
    label: { ar: "SYSTEM / 001", en: "SYSTEM / 001" },
    philosophy: {
      ar: "ط§ظ„طھظ‚ظ†ظٹط© ظ„ظٹط³طھ ط£ظ†ط¸ظ…ط© ظپظ‚ط·. ط§ظ„طھظ‚ظ†ظٹط© ط£ظ† ظٹط¨ظ‚ظ‰ ط§ظ„ظ†ط§ط³ ظ‚ط§ط¯ط±ظٹظ† ط¹ظ„ظ‰ ط§ظ„ط¹ظ…ظ„.",
      en: "Technology is not only about systems. It is about keeping people productive.",
    },
    body: [
      {
        ar: "ط¯ط±ط³طھ طھظ‚ظ†ظٹط© ط§ظ„ظ…ط¹ظ„ظˆظ…ط§طھ ظپظٹ ط¬ط§ظ…ط¹ط© ط§ظ„ظ…ظ„ظƒ ط¹ط¨ط¯ط§ظ„ط¹ط²ظٹط² ط¨طھط®طµطµ ط¥ط¯ط§ط±ط© ط§ظ„ط´ط¨ظƒط§طھ ظˆط£ظ…ظ†ظ‡ط§طŒ ظˆطھط®ط±ط¬طھ ط¨ظ…ط¹ط¯ظ„ 4.52 ظ…ظ† 5.00 ط¨طھظ‚ط¯ظٹط± ظ…ظ…طھط§ط² ظ…ط¹ ظ…ط±طھط¨ط© ط§ظ„ط´ط±ظپ. ط§ظ„ط¬ط§ظ†ط¨ ط§ظ„ط£ظƒط§ط¯ظٹظ…ظٹ ظ…ظ†ط­ظ†ظٹ ظپظ‡ظ…ظ‹ط§ ظ„ظ„ط¨ظ†ظٹط© ط§ظ„طھط­طھظٹط© ظˆظƒظٹظپ طھظڈط¨ظ†ظ‰ ط§ظ„ط£ظ†ط¸ظ…ط© ظˆطھظڈط­ظ…ظ‰.",
        en: "I studied Information Technology at King Abdulaziz University, specializing in Network Administration & Security, graduating with a 4.52 / 5.00 GPA â€” Excellent with Honors. The academic side gave me a structural understanding of infrastructure: how systems are built and protected.",
      },
      {
        ar: "ط§ظ„ط¬ط§ظ†ط¨ ط§ظ„ط¹ظ…ظ„ظٹ ط¬ط§ط، ظ…ظ† ط§ظ„ط¯ط¹ظ… ط§ظ„ظپظ†ظٹ: ط§ظ„طھط¹ط§ظ…ظ„ ط§ظ„ظ…ط¨ط§ط´ط± ظ…ط¹ ط§ظ„ظ…ط³طھط®ط¯ظ…ظٹظ†طŒ طھط´ط®ظٹطµ ط§ظ„ط£ط¹ط·ط§ظ„ ظپظٹ ط§ظ„ط£ط¬ظ‡ط²ط© ظˆط§ظ„ط´ط¨ظƒط§طھطŒ ظˆط¥ط¹ط¯ط§ط¯ ط§ظ„ط£ظ†ط¸ظ…ط© ظˆط§ظ„طھط·ط¨ظٹظ‚ط§طھ ظˆط§ظ„ظ…ظ„ط­ظ‚ط§طھ. ظ‡ظ†ط§ظƒ طھط¹ظ„ظ…طھ ط£ظ† ظ†طµظپ ط§ظ„ط­ظ„ ظ‡ظˆ ط£ظ† طھظپظ‡ظ… ط§ظ„ظ…ط³طھط®ط¯ظ…طŒ ظˆط§ظ„ظ†طµظپ ط§ظ„ط¢ط®ط± ط£ظ† طھطµظ„ ط¥ظ„ظ‰ ط§ظ„ط³ط¨ط¨ ط§ظ„ط­ظ‚ظٹظ‚ظٹ ظ„ط§ ط§ظ„ط¹ط±ط¶ ط§ظ„ط¸ط§ظ‡ط±.",
        en: "The practical side came from IT support: working directly with users, diagnosing hardware and network faults, and configuring systems, applications and peripherals. There I learned that half the solution is understanding the user, and the other half is reaching the real cause rather than the visible symptom.",
      },
      {
        ar: "ظ…ط§ ط£ط¨ط­ط« ط¹ظ†ظ‡ ط§ظ„ظٹظˆظ… ظ‡ظˆ ظپط±ظٹظ‚ طھظ‚ظ†ظٹ طھظڈظ‚ط§ط³ ظپظٹظ‡ ط§ظ„ط¬ظˆط¯ط© ط¨ط«ط¨ط§طھ ط§ظ„ط®ط¯ظ…ط© ظˆظˆط¶ظˆط­ ط§ظ„طھظˆط§طµظ„ â€” ظ„ط§ ط¨ط¹ط¯ط¯ ط§ظ„طھط°ط§ظƒط± ط§ظ„ظ…ط؛ظ„ظ‚ط©.",
        en: "What I look for today is a technical team where quality is measured by service stability and clarity of communication â€” not by the number of closed tickets.",
      },
    ],
  },
  education: {
    label: { ar: "EDUCATION / KAU", en: "EDUCATION / KAU" },
    gpa: "4.52",
    gpaMax: "5.00",
    honors: { ar: "ظ…ظ…طھط§ط² ظ…ط¹ ظ…ط±طھط¨ط© ط§ظ„ط´ط±ظپ", en: "Excellent with Honors" },
    degree: { ar: "ط¨ظƒط§ظ„ظˆط±ظٹظˆط³ طھظ‚ظ†ظٹط© ط§ظ„ظ…ط¹ظ„ظˆظ…ط§طھ", en: "Bachelor of Information Technology" },
    track: { ar: "ط¥ط¯ط§ط±ط© ط§ظ„ط´ط¨ظƒط§طھ ظˆط£ظ…ظ†ظ‡ط§", en: "Network Administration & Security" },
    university: { ar: "ط¬ط§ظ…ط¹ط© ط§ظ„ظ…ظ„ظƒ ط¹ط¨ط¯ط§ظ„ط¹ط²ظٹط²", en: "King Abdulaziz University" },
    year: "2026",
  },
  experience: {
    title: { ar: "ظ„ظ…ط­ط© ظ…ظ‡ظ†ظٹط©", en: "Career snapshot" },
    label: { ar: "TIMELINE / 002", en: "TIMELINE / 002" },
    items: [
      {
        period: { ar: "2026", en: "2026" },
        title: { ar: "ط¨ظƒط§ظ„ظˆط±ظٹظˆط³ طھظ‚ظ†ظٹط© ط§ظ„ظ…ط¹ظ„ظˆظ…ط§طھ", en: "Bachelor of Information Technology" },
        org: { ar: "ط¬ط§ظ…ط¹ط© ط§ظ„ظ…ظ„ظƒ ط¹ط¨ط¯ط§ظ„ط¹ط²ظٹط²", en: "King Abdulaziz University" },
        meta: { ar: "ط¥ط¯ط§ط±ط© ط§ظ„ط´ط¨ظƒط§طھ ظˆط£ظ…ظ†ظ‡ط§ آ· 4.52 / 5.00 آ· ظ…ظ…طھط§ط² ظ…ط¹ ظ…ط±طھط¨ط© ط§ظ„ط´ط±ظپ", en: "Network Administration & Security آ· 4.52 / 5.00 آ· Excellent with Honors" },
        points: [] as { ar: string; en: string }[],
      },
      {
        period: { ar: "ظ†ظˆظپظ…ط¨ط± 2025 â€” ظ…ط§ظٹظˆ 2026", en: "November 2025 â€” May 2026" },
        title: { ar: "ط£ط®طµط§ط¦ظٹ ط¯ط¹ظ… طھظ‚ظ†ظٹ", en: "IT Support Specialist" },
        org: { ar: "ط´ط±ظƒط© ظ†ظ‡ط¬ ط§ظ„ط¥ظ†طµط§ظپ", en: "Nahj Al-Insaf Company" },
        meta: { ar: "ط®ط¨ط±ط© ط¹ظ…ظ„ظٹط© ظپظٹ ط§ظ„ط¯ط¹ظ… ط§ظ„ظپظ†ظٹ", en: "Hands-on technical support experience" },
        points: [
          { ar: "ط¯ط¹ظ… ظپظ†ظٹ ظ…ظ† ط§ظ„ط®ط· ط§ظ„ط£ظˆظ„ ظ„ظ„ظ…ط³طھط®ط¯ظ…ظٹظ†", en: "First-line technical support for users" },
          { ar: "طھط´ط®ظٹطµ ظˆط¥طµظ„ط§ط­ ط£ط¹ط·ط§ظ„ ط§ظ„ط£ط¬ظ‡ط²ط©", en: "Hardware troubleshooting" },
          { ar: "طھط´ط®ظٹطµ ظ…ط´ظƒظ„ط§طھ ط§ظ„ط´ط¨ظƒط©", en: "Network troubleshooting" },
          { ar: "ط¥ط¹ط¯ط§ط¯ ظˆطھظ‡ظٹط¦ط© ط§ظ„ط£ظ†ط¸ظ…ط© ظˆط§ظ„طھط·ط¨ظٹظ‚ط§طھ", en: "System and application configuration" },
          { ar: "طھط¬ظ‡ظٹط² ط§ظ„ط·ط§ط¨ط¹ط§طھ ظˆط§ظ„ظ…ظ„ط­ظ‚ط§طھ", en: "Printer and peripheral setup" },
          { ar: "طھط­ظ„ظٹظ„ ط§ظ„ظ…ط´ظƒظ„ط§طھ ط§ظ„ظ…طھظƒط±ط±ط©", en: "Diagnosing recurring issues" },
          { ar: "ط§ظ„طھظˆط§طµظ„ ظ…ط¹ ط§ظ„ظ…ط³طھط®ط¯ظ…ظٹظ† ط¨ظˆط¶ظˆط­", en: "Clear user communication" },
          { ar: "ط§ظ„ط¹ظ…ظ„ ط¶ظ…ظ† ط§ظ„ظپط±ظٹظ‚ ط§ظ„طھظ‚ظ†ظٹ", en: "Collaboration within the technical team" },
        ],
      },
    ],
  },
  skills: {
    title: { ar: "ظ…ظ†ط¸ظˆظ…ط© ط§ظ„ظ‚ط¯ط±ط§طھ", en: "Capability system" },
    label: { ar: "CAPABILITIES / 003", en: "CAPABILITIES / 003" },
    groups: [
      {
        name: { ar: "ط§ظ„ط¯ط¹ظ… ط§ظ„طھظ‚ظ†ظٹ", en: "IT Support" },
        items: [
          { n: { ar: "طھط´ط®ظٹطµ ط§ظ„ظ…ط´ظƒظ„ط§طھ ط§ظ„طھظ‚ظ†ظٹط©", en: "Technical troubleshooting" }, d: { ar: "ط§ظ„ظˆطµظˆظ„ ط¥ظ„ظ‰ ط§ظ„ط³ط¨ط¨ ط§ظ„ط¬ط°ط±ظٹ ط¨ط®ط·ظˆط§طھ ظ…ط±طھط¨ط© ظˆظ‚ط§ط¨ظ„ط© ظ„ظ„طھظƒط±ط§ط±.", en: "Reaching root cause through ordered, repeatable steps." } },
          { n: { ar: "ط¯ط¹ظ… ط§ظ„ط£ط¬ظ‡ط²ط©", en: "Hardware support" }, d: { ar: "ظپط­طµ ظˆطµظٹط§ظ†ط© ط£ط¬ظ‡ط²ط© ط§ظ„ظ…ط³طھط®ط¯ظ…ظٹظ† ظˆط§ظ„ظ…ظ„ط­ظ‚ط§طھ ط§ظ„ظ…ط±طھط¨ط·ط© ط¨ظ‡ط§.", en: "Checking and maintaining user machines and attached devices." } },
          { n: { ar: "طھط±ظƒظٹط¨ ظˆطھظ‡ظٹط¦ط© ط§ظ„ط¨ط±ظ…ط¬ظٹط§طھ", en: "Software installation & configuration" }, d: { ar: "طھط¬ظ‡ظٹط² ط§ظ„ط£ظ†ط¸ظ…ط© ظˆط§ظ„طھط·ط¨ظٹظ‚ط§طھ ظ„طھط¹ظ…ظ„ ظƒظ…ط§ ظٹطھظˆظ‚ط¹ظ‡ط§ ط§ظ„ظ…ط³طھط®ط¯ظ….", en: "Preparing systems and applications to behave as users expect." } },
          { n: { ar: "ط¯ط¹ظ… ط§ظ„ظ…ظ„ط­ظ‚ط§طھ", en: "Peripheral support" }, d: { ar: "ط§ظ„ط·ط§ط¨ط¹ط§طھ ظˆط§ظ„ط£ط¬ظ‡ط²ط© ط§ظ„ط·ط±ظپظٹط© ظˆط¥ط¹ط¯ط§ط¯ط§طھ ط§ظ„ط·ط¨ط§ط¹ط© ظˆط§ظ„ط§طھطµط§ظ„.", en: "Printers and peripherals, print and connectivity settings." } },
          { n: { ar: "ط¯ط¹ظ… ط§ظ„ظ…ط³طھط®ط¯ظ… ط§ظ„ظ†ظ‡ط§ط¦ظٹ", en: "End-user support" }, d: { ar: "ط´ط±ط­ ط§ظ„ط­ظ„ ط¨ظ„ط؛ط© ظ…ظپظ‡ظˆظ…ط© ظˆطھط±ظƒ ط§ظ„ظ…ط³طھط®ط¯ظ… ظ‚ط§ط¯ط±ظ‹ط§ ط¹ظ„ظ‰ ط§ظ„ظ…طھط§ط¨ط¹ط©.", en: "Explaining the fix in plain language so the user can move on." } },
        ],
      },
      {
        name: { ar: "ط§ظ„ط´ط¨ظƒط§طھ", en: "Networking" },
        items: [
          { n: { ar: "ط¥ط¯ط§ط±ط© ط§ظ„ط´ط¨ظƒط§طھ", en: "Network administration" }, d: { ar: "ط£ط³ط§ط³ ط£ظƒط§ط¯ظٹظ…ظٹ ظپظٹ ط¥ط¯ط§ط±ط© ط§ظ„ط´ط¨ظƒط§طھ ظˆطھط´ط؛ظٹظ„ظ‡ط§.", en: "Academic grounding in administering and operating networks." } },
          { n: { ar: "طھط´ط®ظٹطµ ظ…ط´ظƒظ„ط§طھ ط§ظ„ط´ط¨ظƒط©", en: "Network troubleshooting" }, d: { ar: "ط¹ط²ظ„ ظ…ط´ظƒظ„ط© ط§ظ„ط§طھطµط§ظ„ ط¨ظٹظ† ط§ظ„ط¬ظ‡ط§ط² ظˆط§ظ„ط´ط¨ظƒط© ظˆط§ظ„ط®ط¯ظ…ط©.", en: "Isolating connectivity issues across device, network and service." } },
          { n: { ar: "ط£ط³ط§ط³ظٹط§طھ ط§ظ„ط´ط¨ظƒط§طھ", en: "Network fundamentals" }, d: { ar: "ظپظ‡ظ… ط§ظ„ط·ط¨ظ‚ط§طھ ظˆط§ظ„ط¹ظ†ط§ظˆظٹظ† ظˆظ…ط³ط§ط±ط§طھ ط§ظ„ط¨ظٹط§ظ†ط§طھ.", en: "Understanding layers, addressing and data paths." } },
          { n: { ar: "ط§ظ„ظˆط¹ظٹ ط¨ط§ظ„ط¨ظ†ظٹط© ط§ظ„طھظ‚ظ†ظٹط©", en: "Infrastructure awareness" }, d: { ar: "ظ‚ط±ط§ط،ط© ط§ظ„طµظˆط±ط© ط§ظ„ظƒط§ظ…ظ„ط© ظ‚ط¨ظ„ طھط؛ظٹظٹط± ط£ظٹ ط¥ط¹ط¯ط§ط¯.", en: "Reading the whole picture before changing any setting." } },
        ],
      },
      {
        name: { ar: "ط§ظ„ط£ظ…ظ†", en: "Security" },
        items: [
          { n: { ar: "ط£ط³ط§ط³ظٹط§طھ ط§ظ„ط£ظ…ظ† ط§ظ„ط³ظٹط¨ط±ط§ظ†ظٹ", en: "Cybersecurity fundamentals" }, d: { ar: "ظ…ظپط§ظ‡ظٹظ… ط§ظ„ط­ظ…ط§ظٹط© ظˆط§ظ„ظ…ط®ط§ط·ط± ط¶ظ…ظ† ظ…ط³ط§ط± ط¥ط¯ط§ط±ط© ط§ظ„ط´ط¨ظƒط§طھ ظˆط£ظ…ظ†ظ‡ط§.", en: "Protection and risk concepts from the network security track." } },
          { n: { ar: "ط§ظ„ظˆط¹ظٹ ط¨ط£ظ…ظ† ط§ظ„ظ…ط¹ظ„ظˆظ…ط§طھ", en: "Information security awareness" }, d: { ar: "ط§ظ„طھط¹ط§ظ…ظ„ ظ…ط¹ ط§ظ„ط¨ظٹط§ظ†ط§طھ ظˆط§ظ„طµظ„ط§ط­ظٹط§طھ ط¨ط­ط°ط± ظ…ظ‡ظ†ظٹ.", en: "Handling data and permissions with professional care." } },
          { n: { ar: "ظ…ظ…ط§ط±ط³ط§طھ طھظ‚ظ†ظٹط© ط¢ظ…ظ†ط©", en: "Secure IT practices" }, d: { ar: "طھط·ط¨ظٹظ‚ ط§ظ„ط­ظ„ ط¯ظˆظ† ظپطھط­ ط¨ط§ط¨ ط¬ط¯ظٹط¯ ظ„ظ„ظ…ط®ط§ط·ط±.", en: "Applying fixes without opening a new risk surface." } },
        ],
      },
      {
        name: { ar: "ظ…ظ‡ظ†ظٹ", en: "Professional" },
        items: [
          { n: { ar: "ط§ظ„طھظˆط§طµظ„ ظ…ط¹ ط§ظ„ط¹ظ…ظ„ط§ط،", en: "Customer communication" }, d: { ar: "ظ„ط؛ط© ظˆط§ط¶ط­ط© ظˆظ‡ط§ط¯ط¦ط© ط­طھظ‰ ظپظٹ ظˆظ‚طھ ط§ظ„ط¹ط·ظ„.", en: "Clear, calm language even during outages." } },
          { n: { ar: "ط­ظ„ ط§ظ„ظ…ط´ظƒظ„ط§طھ", en: "Problem solving" }, d: { ar: "ظ…ظ†ظ‡ط¬ ظ…ط±طھط¨ ط¨ط¯ظ„ ط§ظ„ظ…ط­ط§ظˆظ„ط§طھ ط§ظ„ط¹ط´ظˆط§ط¦ظٹط©.", en: "A structured method instead of random attempts." } },
          { n: { ar: "ط§ظ„ط¹ظ…ظ„ ط§ظ„ط¬ظ…ط§ط¹ظٹ", en: "Team collaboration" }, d: { ar: "طھط³ظ„ظٹظ… ظˆط§ط¶ط­ ظ„ظ„ظ…ط¹ظ„ظˆظ…ط© ط¯ط§ط®ظ„ ط§ظ„ظپط±ظٹظ‚.", en: "Clean handover of information inside the team." } },
          { n: { ar: "ط¥ط¯ط§ط±ط© ط§ظ„ظˆظ‚طھ", en: "Time management" }, d: { ar: "طھط±طھظٹط¨ ط§ظ„ط£ظˆظ„ظˆظٹط§طھ ط­ط³ط¨ ط£ط«ط± ط§ظ„ظ…ط´ظƒظ„ط©.", en: "Prioritising by the impact of the issue." } },
          { n: { ar: "ط§ظ„ط§ظ†طھط¨ط§ظ‡ ظ„ظ„طھظپط§طµظٹظ„", en: "Attention to detail" }, d: { ar: "ط§ظ„طھظپطµظٹظ„ ط§ظ„طµط؛ظٹط± ظ‡ظˆ ط؛ط§ظ„ط¨ظ‹ط§ ط³ط¨ط¨ ط§ظ„ط¹ط·ظ„.", en: "The small detail is usually the cause." } },
          { n: { ar: "ط§ظ„طھط¹ظ„ظ… ظˆط§ظ„طھظƒظٹظ‘ظپ ط§ظ„ط³ط±ظٹط¹", en: "Fast learning & adaptability" }, d: { ar: "ط¨ظٹط¦ط§طھ ظˆط£ظ†ط¸ظ…ط© ط¬ط¯ظٹط¯ط© ط¨ظˆظ‚طھ ظ‚طµظٹط±.", en: "New environments and systems in short time." } },
        ],
      },
    ],
  },
  process: {
    title: { ar: "ظƒظٹظپ ط£طھط¹ط§ظ…ظ„ ظ…ط¹ ط§ظ„ظ…ط´ظƒظ„ط©طں", en: "How I approach a problem" },
    label: { ar: "METHOD / 004", en: "METHOD / 004" },
    steps: [
      { n: "01", t: { ar: "ط£ظپظ‡ظ…", en: "Understand" }, d: { ar: "ط£ظپظ‡ظ… ط§ظ„ظ…ط´ظƒظ„ط© ظˆط³ظٹط§ظ‚ظ‡ط§ ظ‚ط¨ظ„ ط£ظ† ط£ط¨ط¯ط£ ط¨ط§ظ„ط­ظ„.", en: "I understand the problem and its context before solving." } },
      { n: "02", t: { ar: "ط£ط´ط®ظ‘طµ", en: "Diagnose" }, d: { ar: "ط£ظپطµظ„ ط§ظ„ط£ط¹ط±ط§ط¶ ط¹ظ† ط§ظ„ط³ط¨ط¨ ط§ظ„ط­ظ‚ظٹظ‚ظٹ ظ„ظ„ظ…ط´ظƒظ„ط©.", en: "I separate symptoms from the real cause." } },
      { n: "03", t: { ar: "ط£ط­ظ„", en: "Resolve" }, d: { ar: "ط£ط·ط¨ظ‚ ط§ظ„ط­ظ„ ط§ظ„ظ…ظ†ط§ط³ط¨ ط¨ط£ظ‚ظ„ طھط¹ظ‚ظٹط¯ ظ…ظ…ظƒظ†.", en: "I apply the right fix with the least complexity." } },
      { n: "04", t: { ar: "ط£طھط­ظ‚ظ‚", en: "Verify" }, d: { ar: "ط£طھط£ظƒط¯ ط£ظ† ط§ظ„ظ…ط´ظƒظ„ط© ط¹ظˆظ„ط¬طھ ظˆط£ظ† ط§ظ„ط®ط¯ظ…ط© ط¹ط§ط¯طھ ظ„ظ„ط¹ظ…ظ„ ط¨طµظˆط±ط© ظ…ط³طھظ‚ط±ط©.", en: "I confirm the issue is resolved and the service is stable again." } },
    ],
    flow: [
      { ar: "ط§ظ„ظ…ط³طھط®ط¯ظ…", en: "User" },
      { ar: "ط§ظ„ظ…ط´ظƒظ„ط©", en: "Issue" },
      { ar: "ط§ظ„طھط´ط®ظٹطµ", en: "Diagnosis" },
      { ar: "ط§ظ„ظ…ط¹ط§ظ„ط¬ط©", en: "Resolution" },
      { ar: "ط®ط¯ظ…ط© ظ…ط³طھظ‚ط±ط©", en: "Stable service" },
    ],
  },
  project: {
    label: { ar: "PROJECT / MYFCITR", en: "PROJECT / MYFCITR" },
    name: "MyFCITR",
    title: { ar: "ظ…ظ†طµط© ط±ظ‚ظ…ظٹط© ظ„ط®ط¯ظ…ط§طھ ط§ظ„ط·ظ„ط§ط¨ ط§ظ„ط£ظƒط§ط¯ظٹظ…ظٹط©", en: "A digital platform for student academic services" },
    context: {
      ar: "ظ…ط´ط±ظˆط¹ ط§ظ„طھط®ط±ط¬ â€” ظƒظ„ظٹط© ط§ظ„ط­ط§ط³ط¨ط§طھ ظˆطھظ‚ظ†ظٹط© ط§ظ„ظ…ط¹ظ„ظˆظ…ط§طھطŒ ط¬ط§ظ…ط¹ط© ط§ظ„ظ…ظ„ظƒ ط¹ط¨ط¯ط§ظ„ط¹ط²ظٹط². ط­طµظ„ ط§ظ„ظ…ط´ط±ظˆط¹ ط¹ظ„ظ‰ ط¯ط¹ظ… ظ…ط¨ط§ط´ط± ظ…ظ† ط§ظ„ط¬ط§ظ…ط¹ط©.",
      en: "Graduation project â€” Faculty of Computing and Information Technology, King Abdulaziz University. The project received direct university support.",
    },
    blocks: [
      {
        k: { ar: "ط§ظ„ظ…ط´ظƒظ„ط©", en: "The problem" },
        v: { ar: "ظٹط­طھط§ط¬ ط§ظ„ط·ظ„ط§ط¨ ط¥ظ„ظ‰ ظˆطµظˆظ„ ط£ط³ظ‡ظ„ ظ„ظ„ط¥ط¬ط±ط§ط،ط§طھ ط§ظ„ط£ظƒط§ط¯ظٹظ…ظٹط©طŒ ظˆط¥ظ„ظ‰ ظ‚ظ†ط§ط© ط£ظˆط¶ط­ ظ„ظ„طھظˆط§طµظ„ ظ…ط¹ ط¥ط¯ط§ط±ط© ط§ظ„ظƒظ„ظٹط©.", en: "Students need easier access to academic processes and a clearer channel for communicating with college administration." },
      },
      {
        k: { ar: "ط§ظ„ظ…ظ‚ط§ط±ط¨ط©", en: "The approach" },
        v: { ar: "ظ…ظ†طµط© ط±ظ‚ظ…ظٹط© ظ…ط¨ظ†ظٹط© ط­ظˆظ„ ط§ظ„ط®ط¯ظ…ط§طھ ط§ظ„ط£ظƒط§ط¯ظٹظ…ظٹط© ط§ظ„طھظٹ طھظ…ط³ ط§ظ„ط·ط§ظ„ط¨ ظ…ط¨ط§ط´ط±ط©.", en: "A digital platform designed around student-facing academic services." },
      },
      {
        k: { ar: "ط§ظ„ط­ظ„", en: "The solution" },
        v: { ar: "طھظ†ظ‚ظ„ MyFCITR ط§ظ„طھظپط§ط¹ظ„ط§طھ ط§ظ„ظ…ظ‡ظ…ط© ظ„ظ„ط·ط§ظ„ط¨ ط¥ظ„ظ‰ طھط¬ط±ط¨ط© ط±ظ‚ظ…ظٹط© ط£ظƒط«ط± طھظ†ط¸ظٹظ…ظ‹ط§ ظˆظˆط¶ظˆط­ظ‹ط§.", en: "MyFCITR brings important student interactions into a more structured digital experience." },
      },
      {
        k: { ar: "ط§ظ„ط£ط«ط±", en: "Impact" },
        v: { ar: "طھط­ط³ظٹظ† ط³ظ‡ظˆظ„ط© ط§ظ„ظˆطµظˆظ„ ظˆطھظ†ط¸ظٹظ… ط§ظ„طھظپط§ط¹ظ„ط§طھ ط§ظ„ط£ظƒط§ط¯ظٹظ…ظٹط© ط§ظ„ظ…ظˆط¬ظ‡ط© ظ„ظ„ط·ظ„ط§ط¨.", en: "Improved accessibility and organisation of student-facing academic interactions." },
      },
    ],
    modules: [
      {
        t: { ar: "طھط³ط¬ظٹظ„ ط§ظ„ظ…ظ‚ط±ط±ط§طھ", en: "Course registration" },
        d: { ar: "ظٹظ…ظƒظ‘ظ† ط§ظ„ط·ظ„ط§ط¨ ظ…ظ† ط¥ط¯ط§ط±ط© ظ…ظ‚ط±ط±ط§طھظ‡ظ… ط¥ظ„ظƒطھط±ظˆظ†ظٹظ‹ط§ ط¨ط³ط±ط¹ط© ظˆط³ظ‡ظˆظ„ط©.", en: "Enables students to manage their coursework electronically with speed and ease." },
      },
      {
        t: { ar: "ظ…ظ‚طھط±ط­ط§طھ ط§ظ„ط·ظ„ط§ط¨", en: "Student suggestions" },
        d: { ar: "ظٹط¨ظ†ظٹ ط¬ط³ط±ظ‹ط§ ظ…ط¨ط§ط´ط±ظ‹ط§ ط¨ظٹظ† ط§ظ„ط·ظ„ط§ط¨ ظˆط¥ط¯ط§ط±ط© ط§ظ„ظƒظ„ظٹط©.", en: "Creates a bridge between students and college administration." },
      },
    ],
    previewLabel: { ar: "Project Interface Preview", en: "Project Interface Preview" },
    previewNote: {
      ar: "طھظ…ط«ظٹظ„ طھط¬ط±ظٹط¯ظٹ ظ„ظˆط§ط¬ظ‡ط© ط§ظ„ظ…ظ†طµط© â€” ط§ظ„طµظˆط± ط§ظ„ظپط¹ظ„ظٹط© طھظڈط¶ط§ظپ ط¹ظ†ط¯ طھظˆظپط±ظ‡ط§.",
      en: "Abstract representation of the platform interface â€” actual screens to be added when available.",
    },
  },
  certifications: {
    title: { ar: "ط§ظ„ط´ظ‡ط§ط¯ط§طھ", en: "Certifications" },
    label: { ar: "CREDENTIALS / 005", en: "CREDENTIALS / 005" },
    items: [
      { t: { ar: "ط´ظ‡ط§ط¯ط© ظ…ط³ط§ط± ط¥ط¯ط§ط±ط© ط§ظ„ط´ط¨ظƒط§طھ ظˆط£ظ…ظ†ظ‡ط§", en: "Network Administration & Security Track Certificate" }, i: { ar: "ط¬ط§ظ…ط¹ط© ط§ظ„ظ…ظ„ظƒ ط¹ط¨ط¯ط§ظ„ط¹ط²ظٹط²", en: "King Abdulaziz University" } },
      { t: { ar: "ط£ط³ط§ط³ظٹط§طھ ط§ظ„ط°ظƒط§ط، ط§ظ„ط§طµط·ظ†ط§ط¹ظٹ", en: "Fundamentals of Artificial Intelligence" }, i: { ar: "ط³ط¯ط§ظٹط§", en: "SDAIA" } },
      { t: { ar: "ظ…ظپط§ظ‡ظٹظ… ط§ظ„ط°ظƒط§ط، ط§ظ„ط§طµط·ظ†ط§ط¹ظٹ ظˆطھط·ط¨ظٹظ‚ط§طھظ‡ ط§ظ„ظ…طھظ‚ط¯ظ…ط©", en: "AI Concepts and Advanced Applications" }, i: { ar: "ط³ط¯ط§ظٹط§", en: "SDAIA" } },
      { t: { ar: "ط¥ط¯ط§ط±ط© ظ…ط´ط§ط±ظٹط¹ طھظ‚ظ†ظٹط© ط§ظ„ظ…ط¹ظ„ظˆظ…ط§طھ", en: "IT Project Management" }, i: { ar: "ط¯ط±ظˆط¨", en: "Doroob" } },
      { t: { ar: "ط§ط³طھط®ط¯ط§ظ… ط§ظ„ط°ظƒط§ط، ط§ظ„ط§طµط·ظ†ط§ط¹ظٹ ظپظٹ ط¥ط¯ط§ط±ط© ط§ظ„ظ…ظˆط§ط±ط¯ ط§ظ„ط¨ط´ط±ظٹط©", en: "Using AI in Human Resources Management" }, i: { ar: "ط¯ط±ظˆط¨", en: "Doroob" } },
      { t: { ar: "ط§ظ„ط°ظƒط§ط، ط§ظ„ط§طµط·ظ†ط§ط¹ظٹ ظˆطھط­ظ„ظٹظ„ ط§ظ„ط¨ظٹط§ظ†ط§طھ ظپظٹ ط³ظˆظ‚ ط§ظ„ط¹ظ…ظ„ ط§ظ„ظ…ط³طھظ‚ط¨ظ„ظٹ", en: "AI and Data Analysis in the Future Labor Market" }, i: { ar: "ط¯ط±ظˆط¨", en: "Doroob" } },
      { t: { ar: "ط§ظ„ط§ط­طھظپط§ط¸ ط¨ط§ظ„ط¹ظ…ظ„ط§ط، ط¨ط§ط­طھط±ط§ظپظٹط©", en: "Professional Customer Retention" }, i: { ar: "ط¯ط±ظˆط¨", en: "Doroob" } },
    ],
  },
  ai: {
    label: { ar: "SIGNAL / 006", en: "SIGNAL / 006" },
    title: { ar: "طھظˆط³ظٹط¹ ط§ظ„ظپظ‡ظ… ط§ظ„طھظ‚ظ†ظٹ", en: "Expanding the technical picture" },
    body: {
      ar: "ط£ظˆط³ظ‘ط¹ ظپظ‡ظ…ظٹ ظ„ظ„طھظ‚ظ†ظٹط© ظ…ظ† ط§ظ„ط¨ظ†ظٹط© ط§ظ„طھط­طھظٹط© ظˆط§ظ„ط¯ط¹ظ… ط¥ظ„ظ‰ طھط·ط¨ظٹظ‚ط§طھ ط§ظ„ط°ظƒط§ط، ط§ظ„ط§طµط·ظ†ط§ط¹ظٹ ط§ظ„ط­ط¯ظٹط«ط©.",
      en: "I am expanding my understanding of technology from infrastructure and support toward modern AI applications.",
    },
    note: {
      ar: "طھط¯ط±ظٹط¨ ظ…ظˆط«ظ‘ظ‚ ظ…ظ† ط³ط¯ط§ظٹط§ ظˆط¯ط±ظˆط¨ ظپظٹ ط£ط³ط§ط³ظٹط§طھ ط§ظ„ط°ظƒط§ط، ط§ظ„ط§طµط·ظ†ط§ط¹ظٹ ظˆطھط·ط¨ظٹظ‚ط§طھظ‡طŒ ظˆط§ط³طھط®ط¯ط§ظ…ظ‡ ظپظٹ ط§ظ„ظ…ظˆط§ط±ط¯ ط§ظ„ط¨ط´ط±ظٹط© ظˆطھط­ظ„ظٹظ„ ط§ظ„ط¨ظٹط§ظ†ط§طھ ظپظٹ ط³ظˆظ‚ ط§ظ„ط¹ظ…ظ„.",
      en: "Documented training from SDAIA and Doroob covering AI fundamentals and applications, AI in HR, and AI & data analysis in the labour market.",
    },
    tags: [
      { ar: "ط£ط³ط§ط³ظٹط§طھ ط§ظ„ط°ظƒط§ط، ط§ظ„ط§طµط·ظ†ط§ط¹ظٹ", en: "AI fundamentals" },
      { ar: "ظ…ظپط§ظ‡ظٹظ… ظˆطھط·ط¨ظٹظ‚ط§طھ ظ…طھظ‚ط¯ظ…ط©", en: "Advanced concepts & applications" },
      { ar: "ط§ظ„ط°ظƒط§ط، ط§ظ„ط§طµط·ظ†ط§ط¹ظٹ ظپظٹ ط§ظ„ظ…ظˆط§ط±ط¯ ط§ظ„ط¨ط´ط±ظٹط©", en: "AI in HR management" },
      { ar: "ط§ظ„ط°ظƒط§ط، ط§ظ„ط§طµط·ظ†ط§ط¹ظٹ ظˆطھط­ظ„ظٹظ„ ط§ظ„ط¨ظٹط§ظ†ط§طھ", en: "AI & data analysis" },
    ],
  },
  hire: {
    title: { ar: "ظ‡ظ„ طھط¨ط­ط« ط¹ظ† ط´ط®طµ ظٹط­ظ„ ط§ظ„ظ…ط´ظƒظ„ط©طں", en: "Looking for someone who solves the problem?" },
    label: { ar: "MATCH / 007", en: "MATCH / 007" },
    cardTitle: { ar: "ظ„ط¯ظٹظƒ ط§ط­طھظٹط§ط¬ طھظ‚ظ†ظٹطں", en: "Do you have a technical need?" },
    cardHint: { ar: "ط§ط®طھط± ظ…ط§ ظٹظ‚ط±ط¨ ظ…ظ† ط­ط§ظ„طھظƒطŒ ظˆط³ط£ط®ط¨ط±ظƒ ط¨ظ…ط§ ط£ط³طھط·ظٹط¹ طھظ‚ط¯ظٹظ…ظ‡.", en: "Pick what's closest to your case and I'll tell you what I can offer." },
    options: [
      {
        k: "support",
        label: { ar: "ط£ط­طھط§ط¬ ط¯ط¹ظ…ظ‹ط§ ظپظ†ظٹظ‹ط§", en: "I need technical support" },
        answer: {
          ar: "ط¥ط°ط§ ظƒط§ظ†طھ ط§ظ„ط£ظˆظ„ظˆظٹط© ظ„ط¯ظٹظƒ ظ‡ظٹ طھظ‚ظ„ظٹظ„ ط§ظ„ط£ط¹ط·ط§ظ„طŒ ظ…ط³ط§ط¹ط¯ط© ط§ظ„ظ…ط³طھط®ط¯ظ…ظٹظ†طŒ ظˆطھط´ط®ظٹطµ ط§ظ„ظ…ط´ظƒظ„ط§طھ ط¨ط³ط±ط¹ط© ظˆظˆط¶ظˆط­طŒ ط¯ط¹ظ†ط§ ظ†طھط­ط¯ط«.",
          en: "If your priority is fewer outages, supported users, and fast, clear diagnostics â€” let's talk.",
        },
        subject: { ar: "ظپط±طµط© ط¯ط¹ظ… ظپظ†ظٹ â€” ط³ط¹ظٹط¯ ط®ط¶ط± ط§ظ„ط²ظ‡ط±ط§ظ†ظٹ", en: "IT support opportunity â€” Saeed Khader Alzahrani" },
      },
      {
        k: "network",
        label: { ar: "ط£ط­طھط§ط¬ ط´ط®طµظ‹ط§ ظ„ظ„ط´ط¨ظƒط§طھ ظˆط§ظ„ط¨ظ†ظٹط© ط§ظ„طھظ‚ظ†ظٹط©", en: "I need someone for networking & infrastructure" },
        answer: {
          ar: "ط®ظ„ظپظٹطھظٹ ط§ظ„ط£ظƒط§ط¯ظٹظ…ظٹط© ظپظٹ ط¥ط¯ط§ط±ط© ط§ظ„ط´ط¨ظƒط§طھ ظˆط£ظ…ظ†ظ‡ط§طŒ ظˆط£طھط¹ط§ظ…ظ„ ظ…ط¹ ط§ظ„ط´ط¨ظƒط© ظƒظ†ط¸ط§ظ… ظ…طھط±ط§ط¨ط· ظ„ط§ ظƒط£ط¬ظ‡ط²ط© ظ…ظ†ظپطµظ„ط©.",
          en: "My academic background is network administration and security, and I treat the network as one connected system, not separate devices.",
        },
        subject: { ar: "ظپط±طµط© ط´ط¨ظƒط§طھ ظˆط¨ظ†ظٹط© طھظ‚ظ†ظٹط© â€” ط³ط¹ظٹط¯ ط®ط¶ط± ط§ظ„ط²ظ‡ط±ط§ظ†ظٹ", en: "Networking & infrastructure opportunity â€” Saeed Khader Alzahrani" },
      },
      {
        k: "talent",
        label: { ar: "ط£ط¨ط­ط« ط¹ظ† ظ…ظˆظ‡ط¨ط© طھظ‚ظ†ظٹط© ظ„ظ„ط§ظ†ط¶ظ…ط§ظ… ط¥ظ„ظ‰ ط§ظ„ظپط±ظٹظ‚", en: "I'm looking for IT talent to join the team" },
        answer: {
          ar: "ط®ط±ظٹط¬ طھظ‚ظ†ظٹط© ظ…ط¹ظ„ظˆظ…ط§طھ ط¨طھظ‚ط¯ظٹط± ظ…ظ…طھط§ط² ظ…ط¹ ظ…ط±طھط¨ط© ط§ظ„ط´ط±ظپطŒ ط¨ط®ط¨ط±ط© ط¯ط¹ظ… ظپظ†ظٹ ط¹ظ…ظ„ظٹط© ظˆط§ط³طھط¹ط¯ط§ط¯ ظ„ظ„طھط¹ظ„ظ… ط§ظ„ط³ط±ظٹط¹ ط¯ط§ط®ظ„ ط§ظ„ظپط±ظٹظ‚.",
          en: "An IT graduate with Excellent-with-Honors standing, real support experience, and a readiness to learn fast inside a team.",
        },
        subject: { ar: "ط§ظ†ط¶ظ…ط§ظ… ط¥ظ„ظ‰ ط§ظ„ظپط±ظٹظ‚ ط§ظ„طھظ‚ظ†ظٹ â€” ط³ط¹ظٹط¯ ط®ط¶ط± ط§ظ„ط²ظ‡ط±ط§ظ†ظٹ", en: "Joining your technical team â€” Saeed Khader Alzahrani" },
      },
    ],
  },
  modal: {
    title: { ar: "ظ„ظ†ط®طھطµط± ط§ظ„ط·ط±ظٹظ‚.", en: "Let's keep it short." },
    hint: {
      ar: "ظ„ط§ ظٹظˆط¬ط¯ ظ†ط¸ط§ظ… ط¨ط±ظٹط¯ ظپظٹ ط§ظ„ط®ظ„ظپ â€” ط³ظٹظڈظپطھط­ طھط·ط¨ظٹظ‚ ط§ظ„ط¨ط±ظٹط¯ ظ„ط¯ظٹظƒ ط¨ط±ط³ط§ظ„ط© ظ…ظƒطھظˆط¨ط© ظ…ط³ط¨ظ‚ظ‹ط§.",
      en: "There is no backend mail service here â€” your email client opens with a pre-written message.",
    },
    fields: {
      name: { ar: "ط§ط³ظ…ظƒ", en: "Your name" },
      company: { ar: "ط§ظ„ط´ط±ظƒط©", en: "Company" },
      role: { ar: "ط§ظ„ظ…ط³ظ…ظ‰ ط§ظ„ظˆط¸ظٹظپظٹ", en: "Role title" },
      type: { ar: "ظ†ظˆط¹ ط§ظ„ظپط±طµط©", en: "Opportunity type" },
      email: { ar: "ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ", en: "Email address" },
      message: { ar: "ط±ط³ط§ظ„طھظƒ", en: "Your message" },
    },
    submit: { ar: "ط¥ط±ط³ط§ظ„ ظپط±طµط© ط¥ظ„ظ‰ ط³ط¹ظٹط¯", en: "Send opportunity to Saeed" },
  },
  cta: {
    afterExperience: { ar: "ظ‡ظ„ ظ„ط¯ظٹظƒ ط§ط­طھظٹط§ط¬ طھظ‚ظ†ظٹ ظˆط§ط¶ط­طں", en: "Have a clear technical need?" },
    afterProject: { ar: "ظ…ظ‡طھظ… ط¨ط§ظ„ظ…ط´ط±ظˆط¹ ط£ظˆ ط®ط¨ط±طھظٹطں", en: "Interested in the project or my experience?" },
    beforeFooter: { ar: "ظ„ظ†طھط­ط¯ط«.", en: "Let's talk." },
    heroInline: { ar: "ظ„ط¯ظٹظƒ ظپط±طµط©طں", en: "Have an opportunity?" },
  },
  contact: {
    label: { ar: "CONTACT / 008", en: "CONTACT / 008" },
    statement: {
      ar: "ط¥ط°ط§ ظƒط§ظ†طھ ظ„ط¯ظٹظƒ ظ…ط´ظƒظ„ط© طھظ‚ظ†ظٹط©طŒ ظپط±طµط© ظˆط¸ظٹظپظٹط©طŒ ط£ظˆ ظپط±ظٹظ‚ ظٹط­طھط§ط¬ ط´ط®طµظ‹ط§ ظٹط¹طھظ…ط¯ ط¹ظ„ظٹظ‡ â€” ظ„ظ†طھط­ط¯ط«.",
      en: "If your team needs someone who can understand the problem, solve it, and keep people moving â€” let's talk.",
    },
    cta: { ar: "طھظˆط§طµظ„ ظ…ط¹ ط³ط¹ظٹط¯", en: "Contact Saeed" },
  },
  footer: {
    tagline: { ar: "ط¨ظڈظ†ظٹ ط¨ط´ط؛ظپ ط§ظ„ظپظ‡ظ…. طµظڈظ…ظ… ظ…ظ† ط£ط¬ظ„ ط§ظ„ظ…ظˆط«ظˆظ‚ظٹط©.", en: "Built with curiosity. Designed for reliability." },
    copyright: { ar: "آ© 2026 ط³ط¹ظٹط¯ ط®ط¶ط± ط§ظ„ط²ظ‡ط±ط§ظ†ظٹ", en: "آ© 2026 Saeed Khader Alzahrani" },
  },
};

