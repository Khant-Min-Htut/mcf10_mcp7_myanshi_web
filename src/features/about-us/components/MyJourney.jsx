import imageTwo from "../../../assets/MyanShi/AboutUs/MyanshiJourney-1.jpg";
import imageOne from "../../../assets/MyanShi/AboutUs/MyanshiJourney-2.jpg";
import Container from "../../../components/Container";
import SectionContainer from "../../../components/SectionContainer";
import JapaneseText from "../../../components/typography/JapaneseText";
import Paragraph from "../../../components/typography/Paragraph";
import PrimaryHeader from "../../../components/typography/PrimaryHeader";

const MyJourney = () => {
  return (
    <SectionContainer>
      <Container>
        <div className=" flex flex-col lg:flex-row gap-20 ">
          <div className="lg:max-w-[39%]">
            <JapaneseText>伝統から食卓へ</JapaneseText>
            <PrimaryHeader>The MYANSHI Journey</PrimaryHeader>
            <Paragraph>
              At MYANSHI, every sushi roll tells a story—a tale of tradition,
              craftsmanship, and passion. Rooted in the rich heritage of
              Japanese culinary artistry and inspired by the vibrant culture of
              Myanmar, we bring you a dining experience like no other. From the
              precise hands of our chefs to the carefully selected ingredients,
              MYANSHI is where the past meets the present, creating
              unforgettable moments one bite at a time.
            </Paragraph>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-9 lg:flex-1 ">
            <img
              src={imageOne}
              alt="chief image"
              className="size-full sm:row-start-1 sm:row-end-9"
            />
            <img
              src={imageTwo}
              alt="sushi image"
              className="size-full sm:row-start-2 sm:row-end-10"
            />
          </div>
        </div>
      </Container>
    </SectionContainer>
  );
};

export default MyJourney;
