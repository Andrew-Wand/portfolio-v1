import { useEffect } from "react";
import { FaCogs } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { BiUniversalAccess } from "react-icons/bi";
import { HiCode } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

function SkillsSection() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section id="skills">
      <div
        className="h-[1400px] lg:h-[1000px] bg-[#111827] flex justify-center"
        data-aos="fade-up"
      >
        <div className="w-[20rem] lg:w-6/12 mt-14">
          <h3 className="text-2xl mt-14 text-left text-white mb-20 ml-5 lg:text-2xl lg:text-left">
            Skills
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-[10rem] lg:justify-center gap-16 mt-10 text-center">
            <div>
              <i class="devicon-html5-plain text-[5rem] text-[#e54d26]"></i>
              <p className="text-xl mt-5">HTML5</p>
            </div>
            <div>
              <i class="devicon-css3-plain text-[5rem] text-[#3d8fc6]"></i>
              <p className="text-xl mt-5">CSS3</p>
            </div>
            <div>
              <i class="devicon-javascript-plain colored text-[5rem] text-[#f0db4f]"></i>
              <p className="text-xl mt-5">JavaScript</p>
            </div>
            <div>
              <i class="devicon-react-original colored text-[5rem] text-[#61dafb]"></i>
              <p className="text-xl mt-5">React</p>
            </div>

            <div>
              <i class="devicon-git-plain colored text-[5rem] text-[#f05033]"></i>
              <p className="text-xl mt-5">Git</p>
            </div>
            <div>
              <i class="devicon-typescript-plain colored text-[5rem] text-[#f05033]"></i>
              <p className="text-xl mt-5">TypeScript</p>
            </div>

            <div>
              <i class="devicon-github-original text-[5rem] text-white"></i>
              <p className="text-xl mt-5">GitHub</p>
            </div>

            <div>
              <i class="devicon-firebase-plain text-[5rem] text-[#ffcc30]"></i>
              <p className="text-xl mt-5">Firebase</p>
            </div>

            <div>
              <div className="ml-5 lg:ml-0">
                <i class="text-[5rem] text-[#f7e7ce]">
                  <FaCogs />
                </i>
              </div>
              <p className="text-xl mt-5">RESTful APIs</p>
            </div>

            <div>
              <div className="ml-7 lg:ml-2">
                <i class="text-[5rem] text-[#f5f5dc]">
                  <ImMobile />
                </i>
              </div>
              <p className="text-xl mt-5 ">Responsive Websites</p>
            </div>
           
          </div>
          <div className="flex flex-col items-center mt-12">
              <div className="">
                <i class="text-[5rem] text-white">
                  <BiUniversalAccess />
                </i>
              </div>
              <p className="text-xl mt-5">Accessibility</p>
            </div>
        </div>
      </div>
      <div className="divider m-0 px-6 bg-[#111827] text-[4rem] lg:px-[30rem]">
        <HiCode />
      </div>
    </section>
  );
}

export default SkillsSection;
