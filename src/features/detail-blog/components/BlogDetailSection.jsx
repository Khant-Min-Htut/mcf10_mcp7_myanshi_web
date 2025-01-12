import React from "react";
import blogImg1 from "../../../assets/MyanShi/Blog&Article/blogImg1.jpg";
import ChefProfileCard from "./ChefProfileCard";

const BlogDetailSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col">
        <h1 className="text-bodyLarge text-neutral-800 mb-5">
          What do you need to prepare a gluten-free sushi?
        </h1>
        <p className="mb-4 text-bodySmall text-neutral-600">
          Making sushi at home is fun and rewarding! Here’s what you’ll need to
          get started:
        </p>
        <p className="mb-4 text-bodySmall text-neutral-600">
          1. Sushi Rice: Short-grain or medium-grain rice, seasoned with rice
          vinegar, sugar, and salt.
          <br /> 2. Nori (Seaweed Sheets): Essential for rolling sushi.
          <br /> 3. Fresh Ingredients: Choose your favorite fillings like raw
          fish (salmon, tuna), cooked shrimp, crab sticks, cucumber, avocado, or
          pickled radish.
          <br /> 4. Rolling Mat (Makisu): A bamboo mat to roll your sushi
          tightly.
          <br /> 5. Sharp Knife: For cleanly slicing rolls without squishing
          them. <br />
          6. Wasabi & Pickled Ginger: Traditional condiments for authentic
          flavor.
          <br /> 7. Optional Toppings: Sesame seeds, fish roe, or spicy mayo for
          extra flair.
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-bodyLarge text-neutral-800 mb-5">
          What are the right ingredients to prepare a delicious gluten-free
          sushi?
        </h1>
        <p className="mb-4 text-bodySmall text-neutral-600">
          Cooking sushi at home is an enjoyable process that combines creativity
          and precision. Start by preparing sushi rice, which is the foundation
          of every sushi dish. Rinse short-grain rice thoroughly until the water
          runs clear, then cook it with the right amount of water for a fluffy
          texture. Once cooked, season the rice with a mixture of rice vinegar,
          sugar, and salt to achieve the signature tangy flavor.
        </p>
        <p className="mb-4 text-bodySmall text-neutral-600">
          Next, gather fresh ingredients like fish, vegetables, and seaweed
          sheets (nori). Slice the fish and vegetables into thin, uniform strips
          to make rolling easier. Lay a nori sheet on a bamboo rolling mat,
          spread a layer of seasoned rice evenly, and add your chosen fillings.
          Roll it tightly using the mat, ensuring the roll is firm and secure.
          Finally, slice the roll into bite-sized pieces with a sharp knife, and
          serve it with soy sauce, wasabi, and pickled ginger for a complete
          sushi experience.
        </p>
        <img
          src={blogImg1}
          alt=""
          className="h-full object-cover object-center md:h-[700px]"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-bodyLarge text-neutral-800 mb-5">
          What’s the art behind preparing a delicious gluten-free sushi?
        </h1>
        <p className="mb-4 text-bodySmall text-neutral-600">
          Creating gluten-free sushi is about balance, precision, and quality
          ingredients. Here’s the secret:
        </p>
        <p className="mb-4 text-bodySmall text-neutral-600">
          1. Perfecting the Rice: The heart of sushi lies in perfectly cooked
          sushi rice, seasoned with gluten-free rice vinegar for a delicate
          tang. <br /> 2. Selecting Fresh Ingredients: Use the freshest fish,
          vegetables, and gluten-free condiments to enhance flavor and
          authenticity. <br /> 3. Checking for Gluten-Free Certification: Ensure
          all components—nori, soy sauce (tamari), wasabi, and pickled
          ginger—are certified gluten-free. <br /> 4. Mastering the Roll:
          Rolling sushi is an art; practice makes perfect. Use a bamboo mat to
          achieve tight, even rolls.
          <br /> 5. Presentation Matters: Slice cleanly and arrange beautifully,
          as sushi is as much about visual appeal as taste.
        </p>
      </div>
      <ChefProfileCard />
    </div>
  );
};

export default BlogDetailSection;
