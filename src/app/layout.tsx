import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const PoppinsF = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${PoppinsF.variable}`}>
        {children}
      </body>
    </html>
  );
}
