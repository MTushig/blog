import MetaLogo from "./icons/MetaLogo";
import SearchIcon from "./icons/Search";

export function Header() {
  return (
    <div className="flex w-full justify-center ">
      <div className="flex justify-between w-full items-center  gap-[118px] py-8">
        <i>
          <MetaLogo />
        </i>
        <ul className="flex  h-6 justify-center gap-10 p">
          <button>Home</button>
          <button>Blog</button>
          <button>Contract</button>
        </ul>
        <div className="bg-[#F4F4F5] text-sm rounded-lg flex  py-2 px-2 w-[166px] mr-20 ">
          <input
            className="bg-[#F4F4F5] ml-2 w-[122px] "
            placeholder="Search"
            type=""
          />
          <button className="">
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
