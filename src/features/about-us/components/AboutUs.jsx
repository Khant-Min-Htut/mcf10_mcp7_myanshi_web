import checkIcon from "../../../assets/MyanShi/AboutUs/check.png";
import imageOne from "../../../assets/MyanShi/AboutUs/restaurant-image-1.png";
import imageTwo from "../../../assets/MyanShi/AboutUs/restaurant-image-2.png";

const AboutUs = () => {
  return (
    <div className="px-3 border-b-2 border-stroke-1-color pb-28 space-y-4">
      <>
        <img src={imageOne} alt="restaurant image" className="size-full" />
        <div className="grid place-items-center bg-primary-color text-white py-4">
          <div className="font-notoSerifJp text-heading2">2019</div>
          <div className="font-satoshi ">founded</div>
        </div>
        <div className="grid place-items-center border border-primary-color bg-white py-4">
          <div className="font-notoSerifJp text-heading2">64+</div>
          <div className="font-satoshi ">team members</div>
        </div>
        <img src={imageTwo} alt="restaurant image" className="size-full" />
      </>
      <div className="pt-16">
        <h2 className="font-satoshi text-bodyDefault text-primary-color font-medium">
          私たちについて
        </h2>
        <h2 className="font-notoSerifJp text-heading2 pb-3">About Us</h2>
        <p className="font-satoshi text-bodySmall text-neutral-500">
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
              <img src={item.icon} alt="Check Icon" className="size-5" />
              <p>{item.content}</p>
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
