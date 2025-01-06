import waves from "../../../assets/MyanShi/AboutUs/bg_Img.png";
import checkIcon from "../../../assets/MyanShi/AboutUs/check.png";
import imageOne from "../../../assets/MyanShi/AboutUs/restaurant-image-1.png";
import imageTwo from "../../../assets/MyanShi/AboutUs/restaurant-image-2.png";

const AboutUs = () => {
  return (
    <div className="px-3 border-b-2 border-stroke-1-color pb-28 grid lg:grid-cols-2 lg:pt-20 lg:pb-36">
      <div className="grid gap-4 sm:grid-rows-5 sm:grid-cols-4 sm:h-[670px] lg:h-[600px] relative">
        <img
          src={imageOne}
          alt="restaurant image"
          className="size-full sm:col-span-2 sm:row-start-1 sm:row-end-5 sm:z-10"
        />

        <div className="grid place-items-center bg-primary-color text-white py-4 ">
          <div className="font-notoSerifJp text-heading2 sm:text-heading1">
            2019
          </div>
          <div className="font-satoshi ">founded</div>
        </div>
        <div className="grid place-items-center border border-stroke-2-color shadow-md bg-white py-4 ">
          <div className="font-notoSerifJp text-heading2 sm:text-heading1">
            64+
          </div>
          <div className="font-satoshi ">team members</div>
        </div>
        <img
          src={waves}
          alt="waves image"
          className="size-60 hidden sm:block absolute bottom-0 "
        />
        <img
          src={imageTwo}
          alt="restaurant image"
          className="size-full sm:col-start-3 sm:col-end-5 sm:row-start-2 sm:row-end-6"
        />
      </div>
      <div className="pt-16 lg:w-[80%] lg:mx-auto">
        <h2 className="font-satoshi text-bodyDefault text-primary-color sm:text-bodyLarge font-medium">
          私たちについて
        </h2>
        <h2 className="font-notoSerifJp text-heading2 pb-3 sm:pb-4 sm:text-display4 lg:text-display2">
          About Us
        </h2>
        <p className="font-satoshi text-bodySmall text-neutral-500 sm:text-bodyDefault lg:pb-3">
          Founded in Yangon, Myanmar, in 2019, MYANSHI has been dedicated to
          providing exceptional products and services. With a passion for
          quality and customer satisfaction, we continue to grow and create
          memorable experiences for everyone who walks through our doors. Join
          us as we celebrate our journey and look forward to many more years of
          success!
        </p>
        <div className="pt-10">
          {aboutUsData.map((item, index) => (
            <div className="flex gap-3 mb-3" key={index}>
              <img
                src={item.icon}
                alt="Check Icon"
                className="size-5 sm:size-6"
              />
              <p className="sm:text-bodyDefault">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

const aboutUsData = [
  {
    icon: checkIcon,
    content: "Experience the rich traditions of Japanese culinary art.",
  },
  {
    icon: checkIcon,
    content: "Sourced daily for the finest quality and taste.",
  },
  {
    icon: checkIcon,
    content: "Dine in comfort with our warm and inviting setup..",
  },
];
