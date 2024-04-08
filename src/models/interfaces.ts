export const i18n = {
  defaultLocale: "de",
  locales: ["de", "en"],
} as const;

export type Locale = typeof i18n["locales"][number];

export interface IParams {
  lang: Locale;
}

export interface IPageProps {
  params: {
    lang: Locale;
  };
}
export interface IRequest {
  headers: { [key: string]: string };
  nextUrl: {
    pathname: string;
    // Các trường khác của nextUrl nếu có
  };
  // Các trường khác của request nếu có
}
