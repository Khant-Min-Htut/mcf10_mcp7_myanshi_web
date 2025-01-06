import sushi from "../../../assets/ShushiIcon.png";

const Hero = () => {
  return (
    <div className="border-b-2 border-stroke-1-color px-3">
      {heroData.map((item, index) => (
        <div
          className={`flex gap-6 mb-10 ${
            heroData.length - 1 === index && "mb-28"
          }`}
          key={index}
        >
          <img src={item.image} alt={item.title} className="size-10" />
          <div>
            <h2 className="text-heading3 font-notoSerifJp">{item.title}</h2>
            <p className="text-neutral-500">{item.description}</p>
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
