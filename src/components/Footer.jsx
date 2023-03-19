import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
function Footer() {
  return (
    <footer>
      <div className="bg-[#ed6a5a] h-[5rem] text-[#111827] flex flex-col items-center">
        <div className="flex text-3xl mt-2">
          <AiFillGithub className="mr-7" />
          <AiOutlineMail />
        </div>
        <div className="mt-2">
          <span>Designed & Coded by Andrew Wand</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
