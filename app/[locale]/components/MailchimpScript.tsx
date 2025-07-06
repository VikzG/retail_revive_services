// app/components/MailchimpScripts.tsx
"use client";
import Script from "next/script";

export default function MailchimpScripts() {
  return (
    <Script
      id="mailchimp-connected-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `!function(c,h,i,m,p){
          m=c.createElement(h),
          p=c.getElementsByTagName(h)[0],
          m.async=1,
          m.src=i,
          p.parentNode.insertBefore(m,p)
        }(document,"script","https://chimpstatic.com/mcjs-connected/js/users/75624e4f8f30772874a4b2c9e/48c15a6e2092e3d207b8c5bf9.js");`,
      }}
    />
  );
}
