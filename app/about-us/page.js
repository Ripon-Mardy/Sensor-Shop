import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <section>
        <div className="container mx-auto py-10 px-3">
          <h1 className="text-2xl font-bold mb-5">About Us</h1>
          <div className="flex flex-col gap-4 text-para_color">
            <p>
              In 2015, Techsense Bangladesh Ltd established a distinct sensor
              market in Bangladesh, ensuring the delivery of high-quality sensors
              and automation products at the doorstep of the entrepreneurs. We
              are on a mission to equip every industry of Bangladesh with smart,
              innovative, reliable automotive sensors that are easy to use and
              accessible everywhere, even in harsh environmental conditions. We
              partner with renowned German, American, Italian, Chinese, and
              Taiwanese manufacturers like Metalwork, Balluff, Omicron, Micro
              Detector, Microsonic, Titec, Lanbao, CNTD, Variohm, and many more.
            </p>
            <p>
              Techsense Bangladesh Ltd is committed to supplying high-quality
              sensors and all kinds of automation products all over Bangladesh 
              within the shortest time possible and building an ever-lasting 
              business relationship with our customers. Ensuring high quality 
              and brand value is our main concern. It is the result of our 
              remarkable effort that today we are supplying our products to the 
              leading industries in Bangladesh like Walton, ACME, Pran-RFL Group, 
              Abdul Monem Limited, JMI Group, CP Group, Mainetti, Dan Cake, ACI, 
              Akij Group, BSRM, Square, Radiant Pharmaceuticals, Healthcare 
              Pharma, and many more. Techsense Bangladesh Ltd continues to focus 
              on the development and commercialization of automation technology 
              in Bangladesh by providing a wide range of import services from 
              all over the world.
            </p>
            <p>
              Our primary responsibility is always to our customers. We know 
              the right questions to help them decide on their specific needs. 
              We respond promptly to inquiries and actively solicit feedback, 
              comments, and suggestions to help us continually improve our 
              service. We value and acknowledge the contributions of individual 
              team members and strive to accomplish our goals by working as a 
              united team, encouraging performance and accomplishments through 
              mutual support. Our team members work collaboratively across 
              different disciplines and departments within the company. We 
              generate sufficient profit to meet our customers’ needs, compensate 
              our team members by recognizing their contributions, and finance 
              our future growth.
            </p>
            <p>
              We are uncompromising when it comes to integrity and promise to 
              supply the best products by searching from all over the world. 
              Our mission is to become the industry leader in delivering 
              innovative automation products and systems that transform the 
              quality and flexibility of production units and increase the 
              efficiency of industries in Bangladesh.
            </p>
            <p>
              We hope you will enjoy our products as much as we take pride in 
              offering them to you. If you have any questions or comments, 
              please don’t hesitate to contact us. Sincerely,
            </p>
          </div>

          <div className="flex md:items-end flex-col md:flex-row gap-10 mt-14">
            <div className="md:text-end flex flex-col gap-1 text-sm">
              <h2 className="text-xl font-semibold text-green-500">Md. Rezaul Karim Siddique</h2>
              <h3>Managing Director</h3>
              <p>MSc Engineer in Sensor Technology</p>
              <p>(Coburg University of Applied Science and Arts, Germany)</p>
              <p>rezaul@sensor-shopbd.com</p>
              <p>+4917681223408</p>
              <p>Tegernseer Landstraße 81549, Munich, Germany</p>
            </div>
            <div className="md:text-start flex flex-col gap-1 text-sm text-left">
              <h2 className="text-xl font-semibold text-green-500">Md. Rezaul Karim Siddique</h2>
              <h3>Managing Director</h3>
              <p>MSc Engineer in Sensor Technology</p>
              <p>(Coburg University of Applied Science and Arts, Germany)</p>
              <p>rezaul@sensor-shopbd.com</p>
              <p>+4917681223408</p>
              <p>Tegernseer Landstraße 81549, Munich, Germany</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
