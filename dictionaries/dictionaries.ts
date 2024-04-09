// We enumerate all dictionaries here for better linting and typescript support

import { Locale } from '../i18n.config';

// We also get the default import for cleaner types
const dictionaries = {
  de: () =>
    import('../dictionaries/locales/de/de.json').then(module => module.default),
  en: () =>
    import('../dictionaries/locales/en/en.json').then(module => module.default)
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.de();
