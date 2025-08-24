import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import PosthogPageView from "../components/PosthogPageView";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Plannorium",
  description:
    "We design and develop modern websites, digital platforms, and interactive experiences for visionary brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js" />
        <Script
          src="https://files.bpcontent.cloud/2025/08/18/12/20250818125118-RTXGWAFW.js"
          defer
        />
      </head>
      <body className={`antialiased`}>
        <PosthogPageView />
        {children}
      </body>
    </html>
  );
}
