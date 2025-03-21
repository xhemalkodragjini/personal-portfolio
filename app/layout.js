import { Raleway, Inter } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Xhemal Kodragjini - Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
