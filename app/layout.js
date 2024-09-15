import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Top_navbar from "@/components/TopNavbar";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sensor Shop",
  description: "Sensor Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <div>
          <Top_navbar/>
          <Navbar/>
        {children}
        <Footer/>
        </div>
        <ToastContainer position="bottom-left" />
      </body>
    </html>
  );
}
