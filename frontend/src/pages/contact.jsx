import { assets } from "../assets/assets";
import Title from "../components/title";
import NewsLetterBox from "../components/newsletter-box";

const Contact = () => {
  return (
    <div>
      <div className="text-center pt-8 border-t">
        <Title text="CONTACT" subText={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-24">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full md:max-w-[480px]"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            4389 Williams Station <br /> suite 340, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (356) 444-90241 <br /> Email: admin@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-500">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our team and job openings.
          </p>
          <button className="border border-black px-7 py-3 text-sm hover:bg-black hover:text-white transition-all duration-300 rounded cursor-pointer">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
