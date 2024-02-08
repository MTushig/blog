import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TrendCard = (props) => {
  const { coverImg, category, title, id } = props;
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: "/blog/" + id,
    });
  };
  return (
    <div
      className="h-[320px] rounded-lg flex items-end justify-start  "
      onClick={handleClick}
      style={{
        backgroundImage: `url(${coverImg})`,
        backgroundSize: "cover",
        height: "320px",
        width: "289px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col p-7 ">
        <h1 className="bg-[#4B6BFB] flex w-[100px] text-white  text-sm  mb-4 rounded-md p-[10px]  ">
          {category}
        </h1>
        <p className="text-white font-semibold text-lg ">{title} </p>
      </div>
    </div>
  );
};

export default TrendCard;
