// Fonts
import {fontSans} from "./fonts";
// Global Css
import "./globals.css";
import {Header, Footer} from "@/components";
//
import {cn} from "@/lib/utils";

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
