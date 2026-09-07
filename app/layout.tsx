import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Rb Jay Salamanes - Software Engineer",
  description:
    "Software engineer specializing in Java / Spring Boot backends and distributed systems, with production SaaS experience across Australia and the U.S.",
  authors: [{ name: "Rb Jay Salamanes" }],
  openGraph: {
    title: "Rb Jay Salamanes - Software Engineer",
    description:
      "Software engineer specializing in Java / Spring Boot backends and distributed systems, with production SaaS experience across Australia and the U.S.",
    type: "website",
    images: ["/assets/profile-photo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/profile-photo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
