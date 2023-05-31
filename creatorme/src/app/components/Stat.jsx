import React from "react";

const Stat = () => {
  return (
    <div className="-mt-12 bg-black pb-[220px] min-h-fit rounded-[3.5rem]">
      <h1 className="text-white mb-24 w-[827px] mx-auto text-center pt-[143px] Cabin font-[700] text-3xl">
        Creator landscape is very competitive and below are some of the problems
        faced by <span className="text-[#D540CC]">professionals</span>
      </h1>

      <div className="grid grid-cols-2 mx-auto justify-center w-fit">
        <div className="bg-[#D2F7A1] mx-4 py-[15px] rounded-2xl w-[412px] px-[32px] flex flex-col">
          <p className="Cabin font-[700] my-5 text-2xl">Growing an audience</p>

          <p className="mb-5">
            More than 80% of creators struggle to find and connect with their
            target audience. Getting your content and brand in front of the
            right people can be time-consuming and expensive.
            <br />
            <br />
            <br />
            Growing an audience can be a slow process and requires a consistent
            presence on social media, engaging with followers and understanding
            their needs
          </p>
        </div>

        <div className="bg-[#F6F7EC] mx-4 py-[15px] rounded-2xl w-[412px] px-[32px] flex flex-col">
          <p className="Cabin font-[700] my-5 text-2xl">Competition</p>

          <p className="mb-5">
            The creator economy is highly competitive with a large number of
            content creators vying for the attention of the same audience.
            <br />
            <br />
            <br />
            The increase in content creation has led to a crowded market, making
            it challenging for creators to stand out and attract an audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stat;
