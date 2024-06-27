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
      <body className={cn("font-sans", fontSans.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
