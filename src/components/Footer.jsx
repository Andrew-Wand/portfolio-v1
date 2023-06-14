import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
function Footer() {
  return (
    <footer>
      <div className="bg-[#ed6a5a] h-[8rem] lg:h-[8rem] text-[#111827] flex flex-col items-center">
        <div className="flex text-3xl lg:text-4xl mt-10">
          <a
            href="https://github.com/Andrew-Wand"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Andrew Wand's git hub page."
          >
            <AiFillGithub className="mr-7" />
          </a>

          <a
            href="mailto:awanddev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to contact Andrew Wand using email."
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
