import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
function Footer() {
  return (
    <footer>
      <div className="bg-[#ed6a5a] h-[6rem] lg:h-[8rem] text-[#111827] flex flex-col items-center">
        <div className="flex text-3xl lg:text-4xl mt-10">
          <a
            href="https://github.com/Andrew-Wand"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="mr-7" />
          </a>

          <a
            href="mailto:awanddev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail />
          </a>
        </div>
        <div className="mt-2">
          <span>Designed & Coded by Andrew Wand</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
