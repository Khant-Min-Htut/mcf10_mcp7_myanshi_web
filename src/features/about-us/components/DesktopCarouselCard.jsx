/* eslint-disable react/prop-types */

const DesktopCarouselCard = ({ currentIndex, data }) => {
  return (
    <div className="relative mt-10 ">
      <div className="absolute right-full top-0 h-full w-[200px] bg-background-color z-10"></div>
      <div
        className="flex transition-transform duration-500 "
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative lg:h-[900px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover h-[80%] w-[70%]"
            />
            <div className="p-10 py-14 lg:p-14 lg:left-[550px] absolute top-20 left-80 bg-header-color text-white lg:top-52 ">
              <h3 className="text-heading1 font-notoSerifJp pb-8">
                {item.title}
              </h3>
              {item.content.map((val, idx) => (
                <div className="flex gap-3 pb-3 items-start" key={idx}>
                  <img src={val.icons} alt={"icon"} className="size-5 mt-2" />
                  <p className="text-bodyLarge font-satoshi max-w-xs lg:max-w-md">
                    {val.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopCarouselCard;
