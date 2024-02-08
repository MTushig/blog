import FbIcon from "./icons/Fb";
import InIcon from "./icons/In";
import InstaIcon from "./icons/Insta";
import MetaIcon from "./icons/MetaIcon";
import TwitterIcon from "./icons/Twitter";

export function Footer() {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between">
        <div className="flex  w-[289px] flex-col gap-6">
          <h1 className="text-bold">About</h1>
          <p className="text-[#696A75]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="text-[#181A2A]">
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <ul className="flex text-[#3B3C4A] flex-col justify-start gap-6 items-start">
          <button>Home</button>
          <button>Blog</button>
          <button>Contact</button>
        </ul>
        <ul className="gap-5 flex items-start pr-40 ">
          <button>
            <FbIcon />
          </button>
          <button>
            <TwitterIcon />
          </button>
          <button>
            <InstaIcon />
          </button>
          <button>
            <InIcon />
          </button>
        </ul>
      </div>
      <div className="flex pt-14 gap-1 justify-between">
        <div className="flex gap-1">
          <i className="flex pr-1">
            <MetaIcon />
          </i>
          <div className="flex flex-col ">
            <h1 className="text-[20px]">MetaBlog</h1>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <ul className="flex text-[#3B3C4A] gap-4">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>

      <div></div>
    </div>
  );
}
