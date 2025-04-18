import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  preload: false,
});

const ovo = Ovo({
  weight: ["400"],
  preload: false,
});

export const metadata = {
  title: "Portfolio - Kadiri Eshiomonu",
  description: "Software developer | IT Trainer | System Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.className} ${ovo.className} antialiased overflow-x-hidden leading-8 dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
