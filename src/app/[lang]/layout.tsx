import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { isLang } from "../../lib/i18n";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = isLang(params.lang) ? params.lang : "en";
  return (
    <>
      <Navbar lang={lang} />
      {children}
      <Footer lang={lang} />
    </>
  );
}
