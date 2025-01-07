import sushi from "../../../assets/ShushiIcon.png";

const Hero = () => {
  return (
    <div className="grid gap-10  px-3  sm:mx-auto lg:grid-cols-3 lg:gap-5 lg:py-20">
      {heroData.map((item, index) => (
        <div className="flex gap-6" key={index}>
          <img
            src={item.image}
            alt={item.title}
            className="size-10 sm:size-11"
          />
          <div>
            <h2 className="text-heading3 sm:text-heading2 font-notoSerifJp ">
              {item.title}
            </h2>
            <p className="text-neutral-500 sm:text-bodyDefault">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;

const heroData = [
  {
    image: sushi,
    title: "Authentic Taste",
    description:
      "Delivering the original flavors of Japan through traditional recipes and fresh ingredients.",
  },
  {
    image: sushi,
    title: "Multi Cuisine",
    description:
      "Explore a fusion of authentic Japanese flavors, crafted with care to suit every palate.",
  },
  {
    image: sushi,
    title: "Affordable Dining",
    description:
      "Offering a premium dining experience at prices that suit every budget.",
  },
];
