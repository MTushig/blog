import Link from "next/link";
import BackIcon from "./icons/BackIcon";
import ForwardIcon from "./icons/Forward";

export function Slider() {
  return (
    <Link href="{article.link}">
      <div
        className="flex items-end rounded-xl justify-start  "
        style={{
          backgroundImage: "url(/image/Slider.png)",
          backgroundSize: "cover",
          height: "600px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white rounded-xl h-[252px] w-[598px] gap-4 p-10 justify-start items-end m-3   ">
          <p className="bg-[#4B6BFB] flex w-[100px] text-white sm:text-xs text-sm  mb-4 rounded-md p-[10px]  ">
            Technology
          </p>
          <h1 className="text-4xl w-[400px] font-semibold  leading-10 h-20 text-wrap mb-6 flex">
            Grid system for better Design User Interface
          </h1>
          <p className="text-[#97989F] text-base">August 20, 2022</p>
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-2">
        <button>
          <BackIcon />
        </button>
        <button>
          <ForwardIcon />
        </button>
      </div>
    </Link>
  );
}
