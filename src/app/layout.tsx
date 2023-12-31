import Header from "@/components/Header";
import "./globals.css";
import Providers from "@/redux/Providers";
import { Vazirmatn } from "next/font/google";
import Footer from "@/components/Footer";
const vazir = Vazirmatn({ subsets: ["arabic"] });

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
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
