import "./globals.css";

export const metadata = {
  title: "StellarRise | Event Ticketing & Entertainment Technology",
  description:
    "StellarRise Event Technology Limited — event ticketing and entertainment technology services with international distribution and compliance-first operations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">{children}</body>
    </html>
  );
}
