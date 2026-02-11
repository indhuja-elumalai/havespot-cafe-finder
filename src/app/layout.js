import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

// Replacing Italiana with Cormorant Garamond for that sharp, Alstoria-like serif
const headingFont = Cormorant_Garamond({
  weight: ["300", "400"],
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-heading",
});

// Replacing Outfit with Montserrat for a cleaner, high-end minimalist body font
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
      {/* We apply the font variables here so they are 
          available throughout your entire CSS/Project 
      */}
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
}
}
