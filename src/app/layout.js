import "./globals.css";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({
  variable: "--font-geist-mono",
  sizes: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "SatSet Agency",
  description: "Speed meets creativity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${outfit.className} antialiased`}
      >
        <ThemeProvider defaultTheme="light" attribute={'class'}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
