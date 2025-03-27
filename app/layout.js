import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subset: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subset: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Kadiri Eshiomonu",
  description: "Software developer | IT Trainer | System Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${ovo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
