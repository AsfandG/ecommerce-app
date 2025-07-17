import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/title";
import NewsLetterBox from "../components/newsletter-box";

const About = () => {
  return (
    <div>
      <div className="text-center pt-8 border-t">
        <Title text="ABOUT" subText={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row  gap-16">
        <img src={assets.about_img} alt="" className="w-full max-w-[450px]" />
        <div className="flex flex-col gap-6 md:w-2/4 text-gray-600 text-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            animi repellendus officiis laborum, distinctio dolor mollitia in
            molestias enim perferendis quo, ab cum, qui reiciendis officia earum
            nulla quos quam.illum doloribus natus debitis ratione tenetur est
            repellat voluptate
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            quae ex beatae molestiae, impedit maiores corporis dolorem possimus
            natus cum nisi vel fugiat totam inventore asperiores. Nam ea ipsa
            provident ducimus et in officiis iure dolore, earum, laboriosam
            aperiam pariatur nesciunt!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil amet
            praesentium et ipsam, provident placeat non quibusdam quia
            necessitatibus, adipisci neque sequi error, dolorum similique id
            quisquam facilis nemo unde.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text="WHY" subText={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm gap-4 mb-20">
        <div className="border border-gray-300 rounded px-10 md:px-14 py-8 sm:py-14 flex flex-col gap-5 text-center">
          <p>Quality Assurance</p>
          <p className="text-gray-600">
            Every product we offer undergoes a strict quality check to meet our
            high standards. From sourcing to packaging, we ensure reliability
            and durability at every step. Our goal is to earn your trust by
            consistently delivering items that exceed your expectations.
          </p>
        </div>
        <div className="border border-gray-300 rounded px-10 md:px-14 py-8 sm:py-14 flex flex-col gap-5 text-center">
          <p>Convenience</p>
          <p className="text-gray-600">
            We prioritize your convenience by offering a smooth and intuitive
            shopping experience. Our platform is designed for quick navigation,
            easy checkout, and flexible delivery options — saving you time and
            effort every time you shop with us.
          </p>
        </div>
        <div className="border border-gray-300 rounded px-10 md:px-14 py-8 sm:py-14 flex flex-col gap-5 text-center">
          <p>Exceptional Customer Service</p>
          <p className="text-gray-600">
            Your satisfaction is at the heart of everything we do. Our dedicated
            support team is available to assist with questions, issues, or
            concerns — providing timely, friendly, and solution-oriented service
            to ensure a smooth and enjoyable experience.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
