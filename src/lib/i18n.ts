export type Lang = "en" | "zh";

export const LANGS: Lang[] = ["en", "zh"];

export function isLang(v: string): v is Lang {
  return v === "en" || v === "zh";
}
