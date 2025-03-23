import "./globals.css";
import { Raleway, Inter } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-raleway',
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: '--font-inter',
});

export const metadata = {
  title: "Xhemal Kodragjini - Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <body className={"antialiased"}>
      {children}
      </body>
    </html>
  );
}