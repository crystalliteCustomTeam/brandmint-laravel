// Fonts
import {fontSans} from "./fonts";
// Global Css
import "./globals.css";
import {Header, Footer} from "@/components";
//
import {cn} from "../lib/utils";

export const metadata = {
  title: "Advanced SEO Services by the #1 SEO Agency - SEO Company",
  description: "Increase your online visibility and drive results with our top-rated SEO agency. We specialize in advanced SEO tactics to help your business grow.",
  }

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="d-8z_pc9G3_puscsl8Ccl-Ex6BfWxdRbfPDeiDlA4vw" />
      <body className={cn("font-sans", fontSans.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}