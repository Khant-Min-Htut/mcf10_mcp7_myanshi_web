import waves from "../../assets/MyanShi/AboutUs/bg_Img.png";
import checkIcon from "../../assets/MyanShi/AboutUs/check.png";
import imageOne from "../../assets/MyanShi/AboutUs/restaurant-image-1.png";
import imageTwo from "../../assets/MyanShi/AboutUs/restaurant-image-2.png";
import Container from "../Container";
import JapaneseText from "../typography/JapaneseText";
import Paragraph from "../typography/Paragraph";
import PrimaryHeader from "../typography/PrimaryHeader";

const AboutUsSection = () => {
  return (
    <section className=" relative py-[180px] max-[843px]:py-[120px] border-y border-stroke-1-color max-[1200px]:px-2">
      <div className=" z-10">
        <Container>
          <div className="  grid lg:grid-cols-2 ">
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
              <div className="grid place-items-center shadow-md bg-white py-4 ">
                <div className="font-notoSerifJp text-heading2 sm:text-heading1">
                  64+
                </div>
                <div className="font-satoshi ">team members</div>
              </div>

              <img
                src={imageTwo}
                alt="restaurant image"
                className="size-full sm:col-start-3 sm:col-end-5 sm:row-start-2 sm:row-end-6"
              />
            </div>
            <div className="pt-16 lg:w-[80%] lg:mx-auto z-10 ">
              <div className="flex flex-col gap-6">
                <JapaneseText>私たちについて</JapaneseText>
                <PrimaryHeader>About Us</PrimaryHeader>
                <Paragraph>
                  Founded in Yangon, Myanmar, in 2019, MYANSHI has been
                  dedicated to providing exceptional products and services. With
                  a passion for quality and customer satisfaction, we continue
                  to grow and create memorable experiences for everyone who
                  walks through our doors. Join us as we celebrate our journey
                  and look forward to many more years of success!
                </Paragraph>
              </div>
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
        </Container>
      </div>
      <img
        src={waves}
        alt="waves image"
        className="size-60 hidden sm:block absolute bottom-0 z-0 "
      />
    </section>
  );
};

export default AboutUsSection;

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
