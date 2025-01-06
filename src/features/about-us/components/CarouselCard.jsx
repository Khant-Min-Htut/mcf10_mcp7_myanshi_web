/* eslint-disable react/prop-types */

const CarouselCard = ({ currentIndex, data }) => {
  return (
    <div className="relative mt-10 overflow-hidden border border-stroke-1-color">
      <div
        className="flex transition-transform duration-500 "
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {data.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 ">
            <img
              src={item.image}
              alt={item.title}
              className="w-full object-cover h-80"
            />
            <div className="px-3 py-6">
              <h3 className="text-heading3 font-notoSerifJp pb-8">
                {item.title}
              </h3>
              {item.content.map((val, idx) => (
                <div className="flex gap-3 pb-3" key={idx}>
                  <img src={val.icons} alt={"icon"} className="size-5" />
                  <p className="text-bodySmall font-satoshi text-neutral-700">
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

export default CarouselCard;
