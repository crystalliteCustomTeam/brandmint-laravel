// Fonts
import {fontSans} from "./fonts";
// Global Css
import "./globals.css";
import {Header, Footer} from "@/components";
import Script from "next/script";
//
import {cn} from "@/lib/utils";

export const metadata = {
  title: "Advanced SEO Services by the #1 SEO Agency - SEO Company",
  description: "Increase your online visibility and drive results with our top-rated SEO agency. We specialize in advanced SEO tactics to help your business grow.",
  }

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="d-8z_pc9G3_puscsl8Ccl-Ex6BfWxdRbfPDeiDlA4vw" />
      <body className={cn("font-sans", fontSans.variable)}>
      <Script id="livechat-init" strategy="afterInteractive">
            {`
            window.__lc = window.__lc || {};
            window.__lc.license = 19220066;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";
            (function(n,t,c){
              function i(n){return e._h ? e._h.apply(null,n) : e._q.push(n)}
              var e = {
                _q: [], _h: null, _v: "2.0",
                on: function(){i(["on", c.call(arguments)])},
                once: function(){i(["once", c.call(arguments)])},
                off: function(){i(["off", c.call(arguments)])},
                get: function(){
                  if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
                  return i(["get", c.call(arguments)])
                },
                call: function(){i(["call", c.call(arguments)])},
                init: function(){
                  var n = t.createElement("script");
                  n.async = true;
                  n.type = "text/javascript";
                  n.src = "https://cdn.livechatinc.com/tracking.js";
                  t.head.appendChild(n);
                }
              };
              !n.__lc.asyncInit && e.init();
              n.LiveChatWidget = n.LiveChatWidget || e;
            })(window, document, [].slice);
          `}
          </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}