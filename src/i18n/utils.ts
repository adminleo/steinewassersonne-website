import { ui, type TranslationKey } from './ui';
import { type Lang, defaultLang, routeMap } from './languages';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return (ui[lang]?.[key] ?? ui[defaultLang][key] ?? key) as string;
  };
}

export function getAlternateUrl(currentPath: string, targetLang: Lang): string {
  // Check static routes first
  for (const [, routes] of Object.entries(routeMap)) {
    for (const [, path] of Object.entries(routes)) {
      if (currentPath === path || currentPath === path.slice(0, -1)) {
        return routes[targetLang];
      }
    }
  }
  // Fallback for dynamic routes: swap language segment
  return currentPath.replace(/\/(de|en)\//, `/${targetLang}/`);
}

export function getNavItems(lang: Lang) {
  return [
    { key: 'nav.home' as TranslationKey, href: routeMap.home[lang] },
    { key: 'nav.projects' as TranslationKey, href: routeMap.projects[lang] },
    { key: 'nav.about' as TranslationKey, href: routeMap.about[lang] },
    { key: 'nav.contact' as TranslationKey, href: routeMap.contact[lang] },
  ];
}
