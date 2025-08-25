import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import { PHProvider, PostHogPageview } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default:
      "Plannorium | Software Development & Creative Design in Saudi Arabia",
    template: `%s | Plannorium`,
  },
  description:
    "Top-tier software development, web design, and branding services in Riyadh, Saudi Arabia, and the GCC. We build innovative digital solutions for businesses.",
  applicationName: "Plannorium",
  authors: [{ name: "Plannorium", url: "https://plannorium.com" }],
  generator: "Next.js",
  keywords: [
    "software development company riyadh",
    "custom software development saudi arabia",
    "mobile app development riyadh",
    "web development company riyadh",
    "e-commerce website development riyadh",
    "saas app development company saudi",
    "branding agency riyadh",
    "ui ux design riyadh",
    "شركة تطوير برمجيات الرياض",
    "تصميم مواقع الرياض",
    "وكالة براندنج الرياض",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Plannorium",
  publisher: "Plannorium",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Plannorium | Software Development & Creative Design in Saudi Arabia",
    description:
      "Top-tier software development, web design, and branding services in Riyadh, Saudi Arabia, and the GCC. We build innovative digital solutions for businesses.",
    url: "https://plannorium.com",
    siteName: "Plannorium",
    images: [
      {
        url: "https://res.cloudinary.com/dnkynww4m/image/upload/v1755970105/plannorium_logo_png_lpc0p5.png",
        width: 1200,
        height: 630,
        alt: "Plannorium - Software Development & Creative Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Plannorium | Software Development & Creative Design in Saudi Arabia",
    description:
      "Top-tier software development, web design, and branding services in Riyadh, Saudi Arabia, and the GCC. We build innovative digital solutions for businesses.",
    images: [
      "https://res.cloudinary.com/dnkynww4m/image/upload/v1755970105/plannorium_logo_png_lpc0p5.png",
    ],
    creator: "@plannorium",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://plannorium.com",
    languages: {
      "en-US": "https://plannorium.com",
      "ar-SA": "https://plannorium.com/ar",
    },
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Plannorium",
              url: "https://plannorium.com",
              logo: "https://res.cloudinary.com/dnkynww4m/image/upload/v1755970105/plannorium_logo_png_lpc0p5.png",
              sameAs: ["https://twitter.com/plannorium"],
            }),
          }}
        />
        <Script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"></Script>
        <Script
          src="https://files.bpcontent.cloud/2025/08/18/12/20250818125118-RTXGWAFW.js"
          defer
        ></Script>
      </head>
      <body className={`antialiased font-inter`}>
        <PHProvider>
          <Suspense>
            <PostHogPageview />
          </Suspense>
          {children}
        </PHProvider>
      </body>
    </html>
  );
}
