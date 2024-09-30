import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-footerColor">
        <div className="container mx-auto px-3 py-10 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-gray-200 font-semibold">Support</h1>
            <p className="text-gray-400 text-sm">House#3, Block#A, Road#5</p>
            <p className="text-gray-400 text-sm">
              Section-6, Mirpur, Dhaka-1216 Beside of Aalok Hospital Mirpur 10
            </p>
            <p className="text-gray-400 text-sm">
              Mobile: 01711-261553 (Whats'App)
            </p>
            <p className="text-gray-400 text-sm">info@sensor-shopbd.com </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-gray-200 font-semibold">
              German Address
            </h1>
            <p className="text-gray-400 text-sm">Md Rezaul Karim Siddique</p>
            <p className="text-gray-400 text-sm">Tegernseer Landstraße</p>
            <p className="text-gray-400 text-sm">Munich, Germany</p>
            <p className="text-gray-400 text-sm">rezaul@sensor-shopbd.com</p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-gray-200 font-semibold">
              Payment Method
            </h1>
            <p className="text-gray-400 text-sm">
              BKash: 01711261553 (personal)
            </p>
            <p className="text-gray-400 text-sm">
              Bank Account No:1555204780015001
            </p>
            <p className="text-gray-400 text-sm">
              Account Name: Techsense Bangladesh Ltd.
            </p>
            <p className="text-gray-400 text-sm">
              Bank Name: BRAC Bank Limited{" "}
            </p>
            <p className="text-gray-400 text-sm">
              Branch of Bank: Banani 11, Dhaka, Bangladesh{" "}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-gray-200 font-semibold">
              Knowledge Base
            </h1>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link href={"/about-us"}>About us</Link>
              <Link href={"/contact-us"}>Contact us</Link>
              <Link href={"#"}>Sensor-Shopbd.com</Link>
            </div>
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-600 "></div>
        <div className="container mx-auto pt-5 flex flex-wrap items-center justify-center text-sm text-gray-400 pb-2">
          <p>All Rights Reserved © Sensor Shop Bangladesh.</p>
          <p className="flex">
            &nbsp;Developed By
            <Link
              className="text-green-600 font-semibold"
              href={"https://mathmozo.com"}
              target="_blank"
            >
              &nbsp; Mathmozo IT
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
