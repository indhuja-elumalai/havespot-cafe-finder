import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

// Heading font: Sophisticated & Sharp
const headingFont = Cormorant_Garamond({
  weight: ["300", "400"],
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-heading",
});

// Body font: Clean & High-end Minimalist
const bodyFont = Montserrat({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Havespot | Curated Workspace Finder",
  description: "Aesthetic spaces for focused work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased bg-[#F8F9F8] text-[#2D3A3A]`}
      >
        {children}
      </body>
    </html>
  );
}