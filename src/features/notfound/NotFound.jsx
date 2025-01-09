import React from "react";

const NotFound = () => {
  return (
    <div class="text-center">
      <h1 class="font-notoSerifJp text-primary-color text-[240px]">404</h1>
      <p class=" font-satoshi text-[20px] text-gray-700">
        Eek! We've lost this page. Sorry about that.
      </p>
      <a href="/" class="font-satoshi text-[20px] inline-block underline">
        Click here to return home.
      </a>
    </div>
  );
};

export default NotFound;
