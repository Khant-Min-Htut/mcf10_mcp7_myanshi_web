import React from "react";
import { data } from "../data/prepareMenu";
import MenuCard from "./MenuCard";

const PrepareMenuSection = () => {
  data;
  return (
    <section className="mx-4 md:mx-6 lg:mx-[120px] py-[80px]">
      <MenuCard data={data} />
    </section>
  );
};

export default PrepareMenuSection;
