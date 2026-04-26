import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ReactNode } from "react";

interface BuyerLayoutProps {
  children: ReactNode;
}

export function BuyerLayout({ children }: BuyerLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fff7ed]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
