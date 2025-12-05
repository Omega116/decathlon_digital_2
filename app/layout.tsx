import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/i18n-context";
import { CartProvider } from "@/components/cart-context";
import SiteShell from "@/components/SiteShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Muscle Selector - Build Your Perfect Workout",
  description:
    "Select muscles and equipment to create your personalized workout plan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <I18nProvider>
          <CartProvider>
            <SiteShell>{children}</SiteShell>
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
