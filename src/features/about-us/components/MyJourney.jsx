import imageTwo from "../../../assets/MyanShi/AboutUs/MyanshiJourney-1.jpg";
import imageOne from "../../../assets/MyanShi/AboutUs/MyanshiJourney-2.jpg";

const MyJourney = () => {
  return (
    <div className="border-b-2 border-stroke-1-color pb-28 px-3 flex flex-col lg:flex-row gap-20 lg:gap-12 lg:pt-20 lg:pb-36">
      <div className="lg:max-w-[39%]">
        <h2 className="font-satoshi text-bodyDefault text-primary-color sm:text-bodyLarge ">
          伝統から食卓へ
        </h2>
        <h2 className="font-notoSerifJp text-heading2 mt-2 mb-4  sm:text-display4 lg:text-display2 lg:max-w-10">
          The MYANSHI Journey
        </h2>
        <p className="text-bodySmall font-satoshi text-neutral-500 sm:text-bodyDefault lg:text-justify">
          At MYANSHI, every sushi roll tells a story—a tale of tradition,
          craftsmanship, and passion. Rooted in the rich heritage of Japanese
          culinary artistry and inspired by the vibrant culture of Myanmar, we
          bring you a dining experience like no other. From the precise hands of
          our chefs to the carefully selected ingredients, MYANSHI is where the
          past meets the present, creating unforgettable moments one bite at a
          time.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-9 lg:flex-1 ">
        <img
          src={imageOne}
          alt="chief image"
          className="size-full row-start-1 row-end-9"
        />
        <img
          src={imageTwo}
          alt="sushi image"
          className="size-full row-start-2 row-end-10"
        />
      </div>
    </div>
  );
};

export default MyJourney;
