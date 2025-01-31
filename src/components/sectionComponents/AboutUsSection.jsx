import waves from "../../assets/MyanShi/AboutUs/bg_Img.png";
import checkIcon from "../../assets/MyanShi/AboutUs/check.png";
import imageOne from "../../assets/MyanShi/AboutUs/restaurant-image-1.png";
import imageTwo from "../../assets/MyanShi/AboutUs/restaurant-image-2.png";
import SolidBtn from "../../buttons/SolidBtn";
import Container from "../Container";
import SectionContainer from "../SectionContainer";
import Content1 from "../typography/Content1";
import JapaneseText from "../typography/JapaneseText";
import Paragraph from "../typography/Paragraph";
import PrimaryHeader from "../typography/PrimaryHeader";

const AboutUsSection = ({isHomePage}) => {
  return (
    <SectionContainer>
      <div className=" z-10">
        <Container>
          <div className="grid lg:grid-cols-2 h-auto">
            <div className="grid gap-6 sm:grid-rows-5 sm:grid-cols-4 sm:h-[670px] lg:h-[600px] max-sm:h-auto relative">
              {/* First Image */}
              <img
                src={imageOne}
                alt="restaurant image"
                className="size-full sm:col-span-2 sm:row-start-1 sm:row-end-5 sm:z-10 object-cover"
              />

              <div className="grid place-items-center bg-primary-color text-white py-4 h-full max-h-[112px]">
                <div className="font-notoSerifJp text-heading2 sm:text-heading1">
                  2019
                </div>
                <div className="font-satoshi">founded</div>
              </div>

              <div className="grid place-items-center shadow-md bg-white py-4 h-full max-h-[112px]">
                <div className="font-notoSerifJp text-heading2 sm:text-heading1">
                  64+
                </div>
                <div className="font-satoshi">team members</div>
              </div>

              {/* Second Image */}
              <img
                src={imageTwo}
                alt="restaurant image"
                className=" w-[479.71px] sm:col-start-3 sm:col-end-5 sm:row-start-2 sm:row-end-6 object-cover z-10"
              />
            </div>

            <div className=" flex gap-12  flex-col lg:w-[80%] lg:mx-auto z-10">
              <Content1
                title={"About Us"}
                japanesText={"私たちについて"}
                text={
                  "Founded in Yangon, Myanmar, in 2019, MYANSHI has been dedicated to providing exceptional products and services.With a passion for quality and customer satisfaction, we continue to grow and create memorable experiences for everyone who walks through our doors. Join us as we celebrate our journey and look forward to many more years of success!"
                }
              />

              <div className="">
                {aboutUsData.map((item, index) => (
                  <div className="flex gap-3" key={index}>
                    <img
                      src={item.icon}
                      alt="Check Icon"
                      className="size-5 sm:size-6"
                    />
                    <p className="sm:text-bodyDefault">{item.content}</p>
                  </div>
                ))}
              </div>
              {isHomePage && <SolidBtn text={"SEE MORE"} />}
            </div>
          </div>
        </Container>
      </div>
      <img
        src={waves}
        alt="waves image"
        className="size-[300px] sm:block absolute bottom-8 max-[843px]:bottom-[500px] max-sm:hidden z-0 "
      />
    </SectionContainer>
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
