import "./globals.css";
import { Inter } from "next/font/google";
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
      <body className={`antialiased`}>
        <PosthogPageView />
        {children}
      </body>
    </html>
  );
}
