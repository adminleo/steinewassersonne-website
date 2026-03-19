export const languages = {
  de: { label: 'Deutsch', flag: 'DE' },
  en: { label: 'English', flag: 'EN' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const routeMap: Record<string, Record<Lang, string>> = {
  home:     { de: `${base}/de/`,              en: `${base}/en/` },
  projects: { de: `${base}/de/projekte/`,     en: `${base}/en/projects/` },
  about:    { de: `${base}/de/ueber-mich/`,   en: `${base}/en/about/` },
  contact:  { de: `${base}/de/kontakt/`,      en: `${base}/en/contact/` },
};

export function withBase(path: string): string {
  if (path.startsWith(base)) return path;
  return `${base}${path}`;
}
