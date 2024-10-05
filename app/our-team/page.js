import React from "react";
import Image from "next/image";

import team1 from '../../public/image/team1.jpg'

const page = () => {
  return (
    <>
      <section className="py-8">
        <div className="container mx-auto px-3">
            <div className="flex justify-center gap-3 mb-3">
                <div className="text-center">
                  <h2 className=" text-xl md:text-3xl font-bold text-header_text">Our Team</h2>
                  <p className="text-para_color text-base font-semibold">
                    We are a group of innovative, experienced, and proficient
                    teams. You will love to collaborate with us.
                  </p>
                  {/* <hr className="w-1/2 mx-auto mb-8 mt-3 xl:mb-12 border-gray-400" /> */}
                </div>
              </div>

              {/* team  */}
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-5 mb-10 gap-5">
                <figure className="shadow-md rounded-md overflow-hidden">
                    <Image src={team1} width={200} height={200} className="w-full h-52 md:h-80 object-cover" />
                   <figcaption className="p-2">
                   <h3 className="text-xl font-semibold">Flora Nyra</h3>
                   <p className="text-para_color font-semibold text-sm">Product Manager</p>
                   </figcaption>
                </figure>
                <figure className="shadow-md rounded-md overflow-hidden">
                    <Image src={team1} width={200} height={200} className="w-full h-52 md:h-80 object-cover" />
                   <figcaption className="p-2">
                   <h3 className="text-xl font-semibold">Flora Nyra</h3>
                   <p className="text-para_color font-semibold text-sm">Product Manager</p>
                   </figcaption>
                </figure>
                <figure className="shadow-md rounded-md overflow-hidden">
                    <Image src={team1} width={200} height={200} className="w-full h-52 md:h-80 object-cover" />
                   <figcaption className="p-2">
                   <h3 className="text-xl font-semibold">Flora Nyra</h3>
                   <p className="text-para_color font-semibold text-sm">Product Manager</p>
                   </figcaption>
                </figure>
                <figure className="shadow-md rounded-md overflow-hidden">
                    <Image src={team1} width={200} height={200} className="w-full h-52 md:h-80 object-cover" />
                   <figcaption className="p-2">
                   <h3 className="text-xl font-semibold">Flora Nyra</h3>
                   <p className="text-para_color font-semibold text-sm">Product Manager</p>
                   </figcaption>
                </figure>
              </div>

        </div>
      </section>
    </>
  );
};

export default page;
