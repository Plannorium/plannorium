import "./globals.css";
import { Inter } from "next/font/google";
import { PostHogProvider } from "./providers/ph-provider";
import { PostHogPageview } from "./providers/ph-provider";
import { Suspense } from "react";

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
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PostHogProvider>
        <body className={`antialiased`}>{children}</body>
      </PostHogProvider>
    </html>
  );
}
