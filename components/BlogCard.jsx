import { useRouter } from "next/router";

const BlogCard = (props) => {
  const { coverImg, catergory, title, date } = props;
  const router = useRouter();

  const handleClick = () => {
    router.push("/some");
  };

  return (
    <div
      className="p-4 flex flex-col w-[100%] border-slate-100 items-center border-2 rounded-xl pointer"
      onClick={handleClick}
    >
      <>
        <img className="rounded-md mb-4 w-[100%]" src={coverImg} alt="" />
      </>
      <div className="p-2 ">
        <h1 className="bg-slate-50 flex w-[100px] text-[#4B6BFB]  text-sm  mb-4 rounded-md p-[10px]">
          {catergory}
        </h1>
        <p className="text-black font-semibold text-2xl leading-7 pb-5 ">
          {title}
        </p>
        <p className="text-[#97989F] text-base">{date}</p>
      </div>
    </div>
  );
};
export default BlogCard;
