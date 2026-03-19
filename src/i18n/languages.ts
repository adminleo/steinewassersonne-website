export const languages = {
  de: { label: 'Deutsch', flag: 'DE' },
  en: { label: 'English', flag: 'EN' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

export const routeMap: Record<string, Record<Lang, string>> = {
  home:     { de: '/de/',              en: '/en/' },
  projects: { de: '/de/projekte/',     en: '/en/projects/' },
  about:    { de: '/de/ueber-mich/',   en: '/en/about/' },
  contact:  { de: '/de/kontakt/',      en: '/en/contact/' },
};
