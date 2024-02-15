import type { Metadata } from "next";
import { Inter, Ma_Shan_Zheng } from "next/font/google";
import "./globals.css";
import LegendHeader from "@/components/LegendHeader";
import LegendFooter from "@/components/LegendFooter";

const inter = Inter({ subsets: ["latin"] });
const ma_Shan_Zheng = Ma_Shan_Zheng({ weight: '400' ,subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Blast Legend",
  description: "Blast Legend Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ma_Shan_Zheng.className} bg-black`}>
        <LegendHeader />

        {children}
        <LegendFooter />
      </body>
    </html>
  );
}
