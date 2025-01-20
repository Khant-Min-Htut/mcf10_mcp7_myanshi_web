import emily from "../../../assets/MyanShi/AboutUs/Emily.png";
import facebook from "../../../assets/MyanShi/AboutUs/facebook-logo.svg";
import johnCarter from "../../../assets/MyanShi/AboutUs/johnCarter.png";
import sophieMoore from "../../../assets/MyanShi/AboutUs/sophieMoore.png";
import tiktok from "../../../assets/MyanShi/AboutUs/tiktok-logo.svg";
import youtube from "../../../assets/MyanShi/AboutUs/youtube-logo.svg";
import Container from "../../../components/Container";
import SectionContainer from "../../../components/SectionContainer";
import JapaneseText from "../../../components/typography/JapaneseText";
import Paragraph from "../../../components/typography/Paragraph";
import PrimaryHeader from "../../../components/typography/PrimaryHeader";

const OurTeam = () => {
  return (
    <SectionContainer>
      <Container>
        <div className="text-center">
          <JapaneseText>チーム</JapaneseText>
          <PrimaryHeader> Our Amazing Team</PrimaryHeader>
          <Paragraph>
            Our team at MYANSHI blends skill and passion to craft unforgettable
            dining experiences.
          </Paragraph>
        </div>
        <div className="px-10 grid gap-6 sm:grid-cols-3 pt-16 ">
          {ourTeamData.map((item, index) => (
            <div
              className={`group ${
                (index === 0 || index === 2) && "pt-10 lg:pt-20"
              }`}
              key={index}
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                <div className="group-hover:bg-black/60">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-full object-cover rounded-md "
                  />
                </div>

                <div className="absolute -bottom-28 left-0 w-full p-4 text-center text-white transition-all duration-300 ease-in-out group-hover:bottom-5 ">
                  <div className="flex gap-5 items-center justify-center">
                    <img
                      src={facebook}
                      alt={"facebook"}
                      className="size-6 sm:size-7 lg:size-8 object-cover rounded-full"
                    />
                    <img
                      src={tiktok}
                      alt={"facebook"}
                      className="size-6 sm:size-7 lg:size-8 object-cover rounded-full"
                    />
                    <img
                      src={youtube}
                      alt={"facebook"}
                      className="size-6 sm:size-7 lg:size-8 object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center mt-4 group-hover:bottom-5">
                <div className="text-heading3 font-notoSerifJp pb-1 lg:text-heading2">
                  {item.name}
                </div>
                <div className="font-satoshi text-primary-color text-sm lg:text-bodyDefault">
                  {item.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionContainer>
  );
};

export default OurTeam;

const ourTeamData = [
  { image: emily, name: "John Carter", position: "SOUS CHEF" },
  { image: sophieMoore, name: "Sophie Moore", position: "HEAD CHEF" },
  { image: johnCarter, name: "Emily Werber", position: "GENERAL MANAGER" },
];
