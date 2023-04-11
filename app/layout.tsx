import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kaiser",
  description: "This is the Kaiser landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} py-14`}>
        <Header />
        <main className="max-w-[1920px] mx-auto overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
