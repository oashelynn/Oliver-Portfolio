import { footer } from "@/data/global";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      {/* <div className="w-full max-w-4xl m-auto grid grid-cols-2 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div className="grid grid-cols-2">
                
              </div>
            </div>
          );
        })}
      </div> */}
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark flex justify-between">
        <div className="mt-2 text-xs ">
          Made by{" "}
          <a
            href="mailto:cawsonoliver33@gmail.com"
            className="text-fun-gray-light font-medium"
          >
            oliver
          </a>
          . All rights reserved.
        </div>
        <div className="flex items-center justify-center gap-2">
          {footer.columns[1].links.map((item, index) => {
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                className="flex items-center justify-center"
              >
                {item.icon && (
                  <Image src={item.icon} width={20} height={20} />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
