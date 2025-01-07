import React, { useState, useEffect } from "react";
import JapaneseText from "../typography/JapaneseText";
import PrimaryHeader from "../typography/PrimaryHeader";
import Paragraph from "../typography/Paragraph";
import RoundedBtn from "../../buttons/RoundedBtn";
import SecondaryHeader from "../typography/SecondaryHeader";
import img from "../../assets/MyanShi/Menu/MigiriSushi.jpg";
import Container from "../Container";

const ClientFeedbackSection = () => {
  return (
    <Container>
      <div
        className={`grid grid-flow-col grid-cols-3 max-[843px]:grid-cols-1 max-[843px]:grid-flow-row  h-full gap-4 py-[180px] max-[1200px]:px-2`}
      >
        <div className="flex flex-col gap-6 col-span-1  justify-between">
          <JapaneseText>クライアントは言う</JapaneseText>
          <div className="flex flex-col gap-6 col-span-1 max-[834px]:flex-row  justify-between max-[840px]:items-center">
            <PrimaryHeader>What Our Clients Say</PrimaryHeader>
            <div className=" max-[843px]:hidden">
              <Paragraph>
                Discover what our customers love about MYANSHI through their
                heartfelt reviews. From delicious sushi to an inviting
                atmosphere, their words reflect our dedication to excellence.
              </Paragraph>
            </div>
            <div className="flex gap-2 items-start ">
              <RoundedBtn leftArrow={true} outline={true} />
              <RoundedBtn rightArrow={true} outline={false} />
            </div>
          </div>
        </div>
        <div className=" col-span-2 flex max-[400px]:flex-col gap-2 items-center">
          <img
            src={img}
            alt="Sushi"
            className="object-cover w-1/2 max-[400px]:w-full h-full max-[834px]:col-span-2  "
          />
          <div className="flex flex-col gap-10">
            <SecondaryHeader>“The best sushi rolls ever”</SecondaryHeader>
            <Paragraph>
              MYANSHI has redefined my sushi experience with their fresh
              ingredients and authentic flavors. Every bite was a burst of
              perfection. Highly recommend for all sushi lovers!
            </Paragraph>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClientFeedbackSection;

// import React, { useState, useEffect } from "react";
// import JapaneseText from "../typography/JapaneseText";
// import PrimaryHeader from "../typography/PrimaryHeader";
// import Paragraph from "../typography/Paragraph";
// import RoundedBtn from "../../buttons/RoundedBtn";
// import SecondaryHeader from "../typography/SecondaryHeader";
// import img from "../../assets/MyanShi/Menu/MigiriSushi.jpg";
// import Container from "../Container";

// const ClientFeedbackSection = () => {
//   const [isTablet, setIsTablet] = useState(window.innerWidth <= 834);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

//   useEffect(() => {
//     if (window.innerWidth <= 480) {
//       setIsTablet(false);
//     }
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsTablet(window.innerWidth <= 834);
//       setIsMobile(window.innerWidth <= 480);
//       console.log(
//         "isTablet:",
//         window.innerWidth <= 834,
//         "innerWidth:",
//         window.innerWidth
//       );
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <Container>
//       <div
//         className={`grid ${isTablet ? "grid-cols-2" : "grid-cols-3"} ${
//           isMobile ? "grid-rows-2" : "grid-rows-1"
//         } h-full gap-4 py-[180px] bg-red-300`}
//       >
//         {!isTablet && (
//           <div className="flex flex-col gap-6">
//             <JapaneseText>クライアントは言う</JapaneseText>
//             <PrimaryHeader>What Our Clients Say</PrimaryHeader>
//             <Paragraph>
//               Discover what our customers love about MYANSHI through their
//               heartfelt reviews. From delicious sushi to an inviting atmosphere,
//               their words reflect our dedication to excellence.
//             </Paragraph>
//             <div className="flex gap-2">
//               <RoundedBtn leftArrow={true} outline={true} />
//               <RoundedBtn rightArrow={true} outline={false} />
//             </div>
//           </div>
//         )}
//         <img src={img} alt="Sushi" className="w-full object-cover" />
//         <div className="flex flex-col gap-10">
//           <SecondaryHeader>“The best sushi rolls ever”</SecondaryHeader>
//           <Paragraph>
//             MYANSHI has redefined my sushi experience with their fresh
//             ingredients and authentic flavors. Every bite was a burst of
//             perfection. Highly recommend for all sushi lovers!
//           </Paragraph>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default ClientFeedbackSection;
