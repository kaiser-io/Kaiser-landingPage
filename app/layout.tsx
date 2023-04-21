import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header";
import HeaderMobile from './components/header-mobile';
import Footer from "./components/footer";

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
    <html className='overflow-x-hidden' lang="en">
      <body
        className={`${inter.className} pt-14 max-w-[1920px] mx-auto overflow-x-hidden`}
      >
        <Header />
        <HeaderMobile />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
