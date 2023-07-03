import NavMenu from "@/components/NavMenu";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="hidden md:block">
          <NavMenu />
        </div>
        <Footer />
      </body>
    </html>
  );
}