/* eslint-disable react/prop-types */

const DesktopCarouselCard = ({ currentIndex, data }) => {
  return (
    <div className="relative mt-10 overflow-hidden ">
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
              className="object-cover h-[75%] w-[70%]"
            />
            <div className=" p-7 lg:p-10 lg:left-[800px] absolute top-20 left-72 bg-header-color text-white lg:top-52">
              <h3 className="text-heading1 font-notoSerifJp pb-8">
                {item.title}
              </h3>
              {item.content.map((val, idx) => (
                <div className="flex gap-3 pb-3" key={idx}>
                  <img src={val.icons} alt={"icon"} className="size-5" />
                  <p className="text-bodyLarge font-satoshi lg:max-w-sm">
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
