import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "2026 임원진 회의",
  description: "날짜별 임원진 회의록",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body
        className={`${pretendard.className} min-h-full bg-[#0B1020] text-[#F4F1EA]`}
        style={{ wordBreak: "keep-all" }}
      >
        {children}
      </body>
    </html>
  );
}
