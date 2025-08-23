import "./globals.css";
import { Inter } from "next/font/google";
import PosthogPageView from "../components/PosthogPageView";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
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
  themeColor: "#000000",
  colorScheme: "dark",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
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
        url: "https://plannorium.com/og-image.png",
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
    images: ["https://plannorium.com/og-image.png"],
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
